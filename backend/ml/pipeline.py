"""
Machine Learning Pipeline for Delivery Delay Prediction
Compares Baseline (Logistic Regression) vs Primary (XGBoost)
Computes ROC-AUC, PR-AUC, Confusion Matrix, Threshold Curve, and SHAP Explainability
"""

import os
import json
import sqlite3
import joblib
import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import (
    roc_auc_score,
    average_precision_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix
)
import xgboost as xgb
import shap

SEED = 42
np.random.seed(SEED)

ARTIFACTS_DIR = os.path.join(os.path.dirname(__file__), "artifacts")
os.makedirs(ARTIFACTS_DIR, exist_ok=True)

def load_data_from_db(db_path: str) -> pd.DataFrame:
    conn = sqlite3.connect(db_path)
    query = """
    SELECT 
        o.order_id,
        o.order_timestamp,
        o.city_id,
        o.cuisine,
        o.distance_km,
        o.weather,
        o.traffic_level,
        o.traffic_multiplier,
        o.restaurant_prep_time,
        o.restaurant_orders_last_30min,
        o.delivery_partner_orders_today,
        o.available_partners_nearby,
        o.order_value,
        o.discount,
        o.hour_of_day,
        o.day_of_week,
        o.estimated_delivery_time,
        o.actual_delivery_time,
        o.is_late,
        o.delivery_delay,
        r.kitchen_capacity_orders_30m,
        r.avg_baseline_prep_time,
        r.is_cloud_kitchen
    FROM orders o
    JOIN restaurants r ON o.restaurant_id = r.restaurant_id
    WHERE o.cancelled = 0
    ORDER BY o.order_timestamp ASC
    """
    df = pd.read_sql_query(query, conn)
    conn.close()
    return df

def feature_engineering(df: pd.DataFrame):
    df = df.copy()
    
    # Feature 1: Kitchen load utilization
    df["kitchen_load_ratio"] = df["restaurant_orders_last_30min"] / df["kitchen_capacity_orders_30m"].clip(lower=1)
    
    # Feature 2: Prep time inflation compared to baseline
    df["prep_deviation"] = df["restaurant_prep_time"] - df["avg_baseline_prep_time"]
    
    # Feature 3: Rider scarcity indicator (deficits below safe buffer of 4 riders)
    df["rider_deficit"] = (4 - df["available_partners_nearby"]).clip(lower=0)
    
    # Feature 4: Peak hour flags
    df["is_dinner_rush"] = ((df["hour_of_day"] >= 19) & (df["hour_of_day"] <= 22)).astype(int)
    df["is_lunch_rush"] = ((df["hour_of_day"] >= 12) & (df["hour_of_day"] <= 14)).astype(int)
    
    # Feature 5: Weather severity score
    weather_map = {"Clear": 0, "Overcast": 1, "Rain": 2, "Heavy Rain": 3}
    df["weather_severity"] = df["weather"].map(weather_map).fillna(0)
    
    # Feature 6: Traffic ordinal
    traffic_map = {"Low": 1, "Moderate": 2, "High": 3, "Severe": 4}
    df["traffic_severity"] = df["traffic_level"].map(traffic_map).fillna(2)
    
    # Feature 7: Estimated transit burden
    df["estimated_transit_burden"] = df["distance_km"] * df["traffic_multiplier"]
    
    feature_cols = [
        "restaurant_prep_time",
        "prep_deviation",
        "restaurant_orders_last_30min",
        "kitchen_load_ratio",
        "distance_km",
        "traffic_multiplier",
        "traffic_severity",
        "available_partners_nearby",
        "rider_deficit",
        "delivery_partner_orders_today",
        "weather_severity",
        "hour_of_day",
        "is_dinner_rush",
        "is_lunch_rush",
        "day_of_week",
        "is_cloud_kitchen",
        "order_value",
        "estimated_transit_burden"
    ]
    
    feature_display_names = {
        "restaurant_prep_time": "Restaurant Preparation Time",
        "prep_deviation": "Prep Time Deviation vs Base",
        "restaurant_orders_last_30min": "Restaurant 30m Order Load",
        "kitchen_load_ratio": "Kitchen Capacity Utilization",
        "distance_km": "Trip Distance (km)",
        "traffic_multiplier": "Traffic Multiplier",
        "traffic_severity": "Traffic Congestion Level",
        "available_partners_nearby": "Available Nearby Riders",
        "rider_deficit": "Rider Deficit Index",
        "delivery_partner_orders_today": "Rider Shift Fatigue (Orders Today)",
        "weather_severity": "Adverse Weather Severity",
        "hour_of_day": "Hour of Day",
        "is_dinner_rush": "Dinner Peak Surge",
        "is_lunch_rush": "Lunch Peak Surge",
        "day_of_week": "Day of Week",
        "is_cloud_kitchen": "Cloud Kitchen Facility",
        "order_value": "Order Value",
        "estimated_transit_burden": "Composite Transit Burden"
    }
    
    return df, feature_cols, feature_display_names

def train_and_evaluate(db_path: str):
    print("[ML Pipeline] Loading data from database...")
    raw_df = load_data_from_db(db_path)
    df, feature_cols, feature_names = feature_engineering(raw_df)
    
    X = df[feature_cols]
    y = df["is_late"].values
    
    # Temporal train/val/test split (70% / 15% / 15%)
    n = len(df)
    train_idx = int(n * 0.70)
    val_idx = int(n * 0.85)
    
    X_train, y_train = X.iloc[:train_idx], y[:train_idx]
    X_val, y_val = X.iloc[train_idx:val_idx], y[train_idx:val_idx]
    X_test, y_test = X.iloc[val_idx:], y[val_idx:]
    test_orders = df.iloc[val_idx:][["order_id", "delivery_delay", "is_late", "actual_delivery_time", "estimated_delivery_time"]].copy()
    
    print(f"[ML Pipeline] Split: Train={len(X_train)}, Val={len(X_val)}, Test={len(X_test)}")
    print(f"[ML Pipeline] Late class prevalence: Train={y_train.mean():.3f}, Test={y_test.mean():.3f}")
    
    # 1. Baseline Model: Logistic Regression
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    logreg = LogisticRegression(class_weight="balanced", max_iter=1000, random_state=SEED)
    logreg.fit(X_train_scaled, y_train)
    logreg_probs = logreg.predict_proba(X_test_scaled)[:, 1]
    
    logreg_roc = roc_auc_score(y_test, logreg_probs)
    logreg_pr = average_precision_score(y_test, logreg_probs)
    logreg_preds = (logreg_probs >= 0.5).astype(int)
    logreg_prec = precision_score(y_test, logreg_preds)
    logreg_rec = recall_score(y_test, logreg_preds)
    logreg_f1 = f1_score(y_test, logreg_preds)
    
    print(f"[Baseline LogReg] ROC-AUC: {logreg_roc:.4f}, PR-AUC: {logreg_pr:.4f}, F1: {logreg_f1:.4f}")
    
    # 2. Primary Model: XGBoost
    scale_pos = (len(y_train) - y_train.sum()) / y_train.sum()
    
    xgb_model = xgb.XGBClassifier(
        n_estimators=180,
        max_depth=5,
        learning_rate=0.06,
        subsample=0.85,
        colsample_bytree=0.85,
        scale_pos_weight=scale_pos * 0.9,
        random_state=SEED,
        eval_metric="logloss",
        early_stopping_rounds=25
    )
    
    xgb_model.fit(
        X_train, y_train,
        eval_set=[(X_val, y_val)],
        verbose=False
    )
    
    xgb_probs = xgb_model.predict_proba(X_test)[:, 1]
    xgb_roc = roc_auc_score(y_test, xgb_probs)
    xgb_pr = average_precision_score(y_test, xgb_probs)
    
    # Standard 0.5 threshold metrics
    xgb_preds_50 = (xgb_probs >= 0.5).astype(int)
    cm_50 = confusion_matrix(y_test, xgb_preds_50)
    tn, fp, fn, tp = cm_50.ravel()
    
    xgb_prec = precision_score(y_test, xgb_preds_50)
    xgb_rec = recall_score(y_test, xgb_preds_50)
    xgb_f1 = f1_score(y_test, xgb_preds_50)
    
    print(f"[Primary XGBoost] ROC-AUC: {xgb_roc:.4f}, PR-AUC: {xgb_pr:.4f}, Prec: {xgb_prec:.4f}, Rec: {xgb_rec:.4f}")
    
    # Threshold Analysis Curve (0.10 to 0.90)
    thresholds = np.linspace(0.10, 0.90, 17)
    thresh_results = []
    for th in thresholds:
        preds = (xgb_probs >= th).astype(int)
        p = precision_score(y_test, preds, zero_division=0)
        r = recall_score(y_test, preds, zero_division=0)
        f = f1_score(y_test, preds, zero_division=0)
        c_mat = confusion_matrix(y_test, preds)
        t_tn, t_fp, t_fn, t_tp = c_mat.ravel()
        thresh_results.append({
            "threshold": round(float(th), 2),
            "precision": round(float(p), 3),
            "recall": round(float(r), 3),
            "f1": round(float(f), 3),
            "tp": int(t_tp),
            "fp": int(t_fp),
            "fn": int(t_fn),
            "tn": int(t_tn)
        })
        
    # 3. SHAP Explainability with TreeExplainer
    print("[ML Pipeline] Computing SHAP TreeExplainer...")
    explainer = shap.TreeExplainer(xgb_model)
    shap_sample_X = X_test.iloc[:800]
    shap_values = explainer.shap_values(shap_sample_X)
    
    # Global feature importance: mean(|shap|)
    mean_abs_shap = np.abs(shap_values).mean(axis=0)
    feature_imp = []
    for col, imp in zip(feature_cols, mean_abs_shap):
        feature_imp.append({
            "feature": col,
            "display_name": feature_names[col],
            "importance": round(float(imp), 4)
        })
    feature_imp.sort(key=lambda x: x["importance"], reverse=True)
    
    # Precompute local SHAP explanations for recent orders
    print("[ML Pipeline] Generating local SHAP explanations for recent orders...")
    recent_sample = X_test.head(150).copy()
    recent_shap = explainer.shap_values(recent_sample)
    base_val = float(explainer.expected_value) if hasattr(explainer, 'expected_value') else 0.0
    
    order_explanations = {}
    for i in range(len(recent_sample)):
        oid = test_orders.iloc[i]["order_id"]
        prob = float(xgb_probs[i])
        actual_delay = float(test_orders.iloc[i]["delivery_delay"])
        actual_is_late = bool(test_orders.iloc[i]["is_late"])
        
        row_features = recent_sample.iloc[i]
        row_shap = recent_shap[i]
        
        factors = []
        for col_name, shap_val in zip(feature_cols, row_shap):
            raw_val = row_features[col_name]
            factors.append({
                "feature": col_name,
                "display_name": feature_names[col_name],
                "feature_value": round(float(raw_val), 1) if isinstance(raw_val, (int, float, np.number)) else str(raw_val),
                "shap_value": round(float(shap_val), 3),
                "impact": "increases_delay_risk" if shap_val > 0 else "reduces_delay_risk"
            })
            
        factors.sort(key=lambda x: abs(x["shap_value"]), reverse=True)
        top_risk_factors = [f for f in factors if f["shap_value"] > 0][:4]
        top_protective_factors = [f for f in factors if f["shap_value"] < 0][:3]
        
        order_explanations[oid] = {
            "order_id": oid,
            "delay_probability": round(prob, 3),
            "actual_delay_min": round(actual_delay, 1),
            "actual_is_late": actual_is_late,
            "risk_tier": "High" if prob >= 0.70 else ("Medium" if prob >= 0.35 else "Low"),
            "base_value": round(base_val, 3),
            "top_risk_factors": top_risk_factors,
            "top_protective_factors": top_protective_factors,
            "all_factors": factors[:8]
        }
        
    # Save Model Artifacts
    print("[ML Pipeline] Saving model artifacts...")
    xgb_model.save_model(os.path.join(ARTIFACTS_DIR, "xgb_delay_model.json"))
    joblib.dump(logreg, os.path.join(ARTIFACTS_DIR, "logreg_model.joblib"))
    joblib.dump(scaler, os.path.join(ARTIFACTS_DIR, "scaler.joblib"))
    
    summary_metrics = {
        "model_name": "XGBoost Classifier",
        "model_version": "xgb_delay_v2.4.1",
        "target": "Delay > 10 minutes (is_late)",
        "train_size": len(X_train),
        "validation_size": len(X_val),
        "test_size": len(X_test),
        "test_late_prevalence": round(float(y_test.mean()), 3),
        "primary_model": {
            "name": "XGBoost",
            "roc_auc": round(float(xgb_roc), 3),
            "pr_auc": round(float(xgb_pr), 3),
            "precision": round(float(xgb_prec), 3),
            "recall": round(float(xgb_rec), 3),
            "f1_score": round(float(xgb_f1), 3),
            "confusion_matrix": {
                "true_positive": int(tp),
                "false_positive": int(fp),
                "true_negative": int(tn),
                "false_negative": int(fn)
            }
        },
        "baseline_model": {
            "name": "Logistic Regression",
            "roc_auc": round(float(logreg_roc), 3),
            "pr_auc": round(float(logreg_pr), 3),
            "precision": round(float(logreg_prec), 3),
            "recall": round(float(logreg_rec), 3),
            "f1_score": round(float(logreg_f1), 3)
        },
        "feature_importance": feature_imp,
        "threshold_analysis": thresh_results
    }
    
    with open(os.path.join(ARTIFACTS_DIR, "metrics.json"), "w") as f:
        json.dump(summary_metrics, f, indent=2)
        
    with open(os.path.join(ARTIFACTS_DIR, "order_explanations.json"), "w") as f:
        json.dump(order_explanations, f, indent=2)
        
    with open(os.path.join(ARTIFACTS_DIR, "feature_metadata.json"), "w") as f:
        json.dump({"features": feature_cols, "display_names": feature_names}, f, indent=2)

    print(f"[ML Pipeline] Successfully trained and serialized ML artifacts to {ARTIFACTS_DIR}.")

if __name__ == "__main__":
    db_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), "delivery_intelligence.db")
    train_and_evaluate(db_file)
