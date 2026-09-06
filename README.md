# Delivery Intelligence System

A production-grade internal analytics and decision-support web application for a food-delivery platform (Zomato-scale), built to demonstrate **data analytics, advanced SQL, machine learning, experimentation, and operational decision-support**.

---

## Core Product Problem

Food delivery operations face non-linear delays caused by kitchen queuing during dinner rushes, driver supply deficits, adverse weather shocks, and static ETA inaccuracies. This system analyzes:

1. **Which orders are likely to be delayed?** (XGBoost classifier predicting >10 min delay with ROC-AUC 0.987, PR-AUC 0.964)
2. **Why are they likely to be delayed?** (SHAP TreeExplainer decomposing risk into kitchen prep, traffic, partner shortage, and routing)
3. **What operational action should be taken?** (Decision engine generating actionable interventions such as kitchen intake throttling, zone surge dispatch, or dynamic ETA adjustments)

---

## Key Features & Pages

| Page | Description | Key Techniques & Analytics |
|---|---|---|
| **1. Overview** | Top-level executive operations view | 4 KPIs with period-over-period deltas, 7d/30d/90d performance line trend, horizontal delay driver breakdown, prioritized high-risk order interventions |
| **2. Delivery Performance** | Multi-dimensional deep dive | Filterable by City, Time of Day, Cuisine; daily trends for delivery time, ETA error, late rate, cancellation rate; hourly demand spike analysis; SLA buckets; dynamically generated key observations |
| **3. Delay Risk (ML Core)** | Machine learning evaluation & explainability | Honest evaluation (XGBoost vs Logistic Regression baseline, ROC-AUC, PR-AUC, Precision, Recall, Confusion Matrix); Risk distribution (Low, Medium, High); Global feature importance; Interactive order inspector with local SHAP waterfall feature attribution |
| **4. Restaurants** | Restaurant kitchen benchmarking | Ranking table with orders, prep time, late %, cancellation %, risk score; Slide-over detail drawer with hourly throughput curves, delay driver breakdown, and data-derived operational diagnosis |
| **5. Cities** | Metropolitan operational comparison | Multi-city benchmarking (Bengaluru, Mumbai, Delhi-NCR, Hyderabad, Pune) across speed, distance, prep time, and late delivery rates |
| **6. Counterfactual Analysis** | What-if operational simulator | Single-order simulator with sliders for kitchen prep reduction, rider pre-dispatch lead, and traffic bypass; delay attribution decomposition; network-wide aggregate policy impact analysis |
| **7. Experiments** | A/B testing framework | Statistical evaluation of "ML-Adjusted ETA vs Standard ETA": sample sizes, Welch's two-sample t-test (continuous metrics), two-proportion z-test (rates), 95% Confidence Intervals, p-values, and automated statistical conclusion |
| **View Production SQL** | Full SQL transparency | Available across views to inspect production SQL queries utilizing CTEs, window functions (`DENSE_RANK()`, `AVG(...) OVER (...)`), and percentile-based SLA buckets |

---

## Technology Stack

- **Backend**: Python 3.12, FastAPI, Uvicorn, Pydantic
- **Analytics & ML**: Pandas, NumPy, Scikit-learn, XGBoost, SHAP (`TreeExplainer`), SciPy (`stats`)
- **Database**: SQLite (SQL-92 compliant CTEs, window functions, indexed schema)
- **Frontend**: React 18, TypeScript, Tailwind CSS, Recharts, Lucide-react
- **Design System**: Minimal, restrained Linear / Stripe internal tooling visual language (`#fcfcfd` canvas, thin borders, tabular figures, zero gradients, no oversized cards)

---

## Running the Application

### 1. Start Backend & Serve Frontend
The backend serves both the REST API and the compiled React frontend:

```bash
# Activate virtual environment
source .venv/bin/activate

# Run Uvicorn server on port 8000
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000
```

Open your browser at **http://127.0.0.1:8000/**.

### 2. Frontend Development Server (Optional)
If modifying frontend code with hot module replacement:

```bash
cd frontend
npm run dev
```
Frontend dev server runs at **http://localhost:5173** and automatically proxies `/api` requests to the FastAPI backend.

---

## Project Structure

```text
data_project/
├── backend/
│   ├── analytics/
│   │   └── queries.py            # SQL analytical queries, CTEs, SLA buckets, dynamic narrative
│   ├── counterfactual/
│   │   └── engine.py             # Single-order what-if simulator & aggregate policy engine
│   ├── data/
│   │   ├── generator.py          # Realistic 25,000 order simulation with peak rushes & weather shocks
│   │   └── schema.sql            # Relational database schema with indexes
│   ├── experimentation/
│   │   └── ab_engine.py          # Two-sample t-test, two-proportion z-test, 95% CI calculation
│   ├── ml/
│   │   ├── artifacts/            # Serialized XGBoost model, scaler, metrics, SHAP explanations
│   │   └── pipeline.py           # Temporal split training, ROC-AUC, PR-AUC, SHAP TreeExplainer
│   ├── recommendations/
│   │   └── engine.py             # Rule + model decision-support operational recommendations
│   ├── delivery_intelligence.db  # Seeded SQLite warehouse
│   └── main.py                   # FastAPI REST application & static SPA mount
├── frontend/
│   ├── src/
│   │   ├── components/           # Sidebar, Header, MetricCard, FilterBar, SqlModal
│   │   ├── pages/                # Overview, Performance, DelayRisk, Restaurants, Cities, Counterfactual, Experiments
│   │   ├── services/api.ts       # Typed API client
│   │   ├── types.ts              # TypeScript interfaces
│   │   ├── App.tsx               # Main layout and router
│   │   └── main.tsx              # Entry point
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
└── README.md
```
