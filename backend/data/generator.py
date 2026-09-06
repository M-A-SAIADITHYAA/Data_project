"""
Realistic Food Delivery Data Generator
Simulates 25,000+ orders across 90 days with realistic operational mechanics:
- Kitchen queuing during peak dinner & lunch rushes
- Weather slowdowns (monsoons/rain)
- Rider shortages and dispatch latency
- Realistic ETA estimation errors
- A/B test assignment for ETA algorithms
"""

import sqlite3
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
import random
import os

SEED = 42
np.random.seed(SEED)
random.seed(SEED)

CITIES_DATA = [
    {"city_id": "BLR", "name": "Bengaluru", "state": "Karnataka", "tier": "Tier-1", "base_traffic_index": 1.25, "avg_speed_kmh": 18.0},
    {"city_id": "BOM", "name": "Mumbai", "state": "Maharashtra", "tier": "Tier-1", "base_traffic_index": 1.35, "avg_speed_kmh": 16.5},
    {"city_id": "DEL", "name": "Delhi-NCR", "state": "Delhi", "tier": "Tier-1", "base_traffic_index": 1.30, "avg_speed_kmh": 22.0},
    {"city_id": "HYD", "name": "Hyderabad", "state": "Telangana", "tier": "Tier-1", "base_traffic_index": 1.15, "avg_speed_kmh": 21.0},
    {"city_id": "PNQ", "name": "Pune", "state": "Maharashtra", "tier": "Tier-2", "base_traffic_index": 1.10, "avg_speed_kmh": 20.0},
]

CUISINES = [
    {"name": "Biryani & Kebabs", "base_prep": 24.0, "prep_std": 5.5},
    {"name": "North Indian", "base_prep": 22.0, "prep_std": 4.5},
    {"name": "South Indian", "base_prep": 15.0, "prep_std": 3.0},
    {"name": "Burgers & Fast Food", "base_prep": 14.0, "prep_std": 3.2},
    {"name": "Pizza & Italian", "base_prep": 25.0, "prep_std": 5.0},
    {"name": "Asian & Chinese", "base_prep": 18.0, "prep_std": 3.8},
    {"name": "Healthy & Bowls", "base_prep": 13.0, "prep_std": 2.5},
    {"name": "Desserts & Cafe", "base_prep": 11.0, "prep_std": 2.0},
]

RESTAURANT_NAMES_PREFIX = [
    "Royal", "The Spice", "Flavors of", "Urban", "Curry", "Biryani", "Coastal", "Tandoori",
    "Green Leaf", "Baking", "Wok", "Saffron", "Golden", "Midnight", "Olive", "Signature"
]
RESTAURANT_NAMES_SUFFIX = [
    "Kitchen", "Express", "House", "Bistro", "Club", "Junction", "Co.", "Point",
    "Bowl", "Trattoria", "Grill", "Court", "Central", "Corner", "Boutique"
]

PARTNER_FIRST_NAMES = ["Ramesh", "Suresh", "Amit", "Vikram", "Pradeep", "Sunil", "Manoj", "Rahul", "Dinesh", "Karan", "Sachin", "Deepak", "Ajay", "Vijay", "Anil"]
PARTNER_LAST_NAMES = ["Kumar", "Sharma", "Singh", "Patil", "Yadav", "Verma", "Rao", "Reddy", "Nair", "Das", "Gupta", "Mishra", "Joshi", "Gowda", "Pawar"]

def generate_dataset(db_path: str, total_orders: int = 25000):
    os.makedirs(os.path.dirname(db_path), exist_ok=True)
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()

    # Read and execute schema
    schema_path = os.path.join(os.path.dirname(__file__), "schema.sql")
    with open(schema_path, "r") as f:
        cur.executescript(f.read())

    # 1. Insert Cities
    cities_df = pd.DataFrame(CITIES_DATA)
    cities_df.to_sql("cities", conn, if_exists="replace", index=False)
    print(f"[DataGen] Loaded {len(cities_df)} cities.")

    # 2. Generate Restaurants (~160 restaurants)
    restaurants = []
    rest_id_counter = 1001
    for city in CITIES_DATA:
        # 30-35 restaurants per city
        num_rests = random.randint(30, 35)
        for _ in range(num_rests):
            cuisine_obj = random.choice(CUISINES)
            pfx = random.choice(RESTAURANT_NAMES_PREFIX)
            sfx = random.choice(RESTAURANT_NAMES_SUFFIX)
            name = f"{pfx} {cuisine_obj['name'].split()[0]} {sfx}"
            is_cloud = bool(random.random() < 0.35)
            # Baseline efficiency multiplier (some kitchens run faster, some chronically slow)
            eff_multiplier = np.random.uniform(0.85, 1.30)
            baseline_prep = round(cuisine_obj["base_prep"] * eff_multiplier, 1)
            capacity = random.choice([10, 12, 14, 16, 18, 20])
            rating = round(np.clip(np.random.normal(4.15, 0.35), 3.2, 4.9), 1)

            created_date = datetime.now() - timedelta(days=random.randint(120, 600))
            restaurants.append({
                "restaurant_id": f"REST_{rest_id_counter}",
                "name": name,
                "city_id": city["city_id"],
                "cuisine": cuisine_obj["name"],
                "rating": rating,
                "avg_baseline_prep_time": baseline_prep,
                "kitchen_capacity_orders_30m": capacity,
                "is_cloud_kitchen": 1 if is_cloud else 0,
                "created_at": created_date.strftime("%Y-%m-%d %H:%M:%S")
            })
            rest_id_counter += 1

    rest_df = pd.DataFrame(restaurants)
    rest_df.to_sql("restaurants", conn, if_exists="replace", index=False)
    print(f"[DataGen] Loaded {len(rest_df)} restaurants.")

    # 3. Generate Delivery Partners (~350 partners)
    partners = []
    partner_id_counter = 5001
    vehicle_types = ["Motorcycle", "Motorcycle", "Electric Scooter", "Electric Scooter", "Bicycle"]
    for city in CITIES_DATA:
        for _ in range(70):
            fn = random.choice(PARTNER_FIRST_NAMES)
            ln = random.choice(PARTNER_LAST_NAMES)
            vtype = random.choice(vehicle_types)
            rating = round(np.clip(np.random.normal(4.65, 0.25), 3.8, 5.0), 2)
            trips = random.randint(150, 3200)
            on_time = round(np.clip(np.random.normal(0.88, 0.06), 0.65, 0.98), 3)

            partners.append({
                "partner_id": f"RIDER_{partner_id_counter}",
                "name": f"{fn} {ln}",
                "city_id": city["city_id"],
                "vehicle_type": vtype,
                "rating": rating,
                "historical_trips": trips,
                "on_time_pct": on_time
            })
            partner_id_counter += 1

    partner_df = pd.DataFrame(partners)
    partner_df.to_sql("delivery_partners", conn, if_exists="replace", index=False)
    print(f"[DataGen] Loaded {len(partner_df)} delivery partners.")

    # 4. Generate Orders (25,000 orders spanning past 90 days)
    end_date = datetime.now().replace(microsecond=0)
    start_date = end_date - timedelta(days=90)
    total_seconds = int((end_date - start_date).total_seconds())

    # Pre-index for lookup
    rest_dict = {r["restaurant_id"]: r for r in restaurants}
    city_dict = {c["city_id"]: c for c in CITIES_DATA}
    partners_by_city = {}
    for p in partners:
        partners_by_city.setdefault(p["city_id"], []).append(p)

    orders = []
    experiments_data = []

    # Hourly volume distribution weights (0 to 23)
    # Peak at 13 (lunch) and 20-21 (dinner)
    hourly_weights = np.array([
        0.015, 0.008, 0.004, 0.002, 0.002, 0.005, 0.010, 0.020, # 0-7
        0.040, 0.055, 0.045, 0.065, 0.090, 0.100, 0.075, 0.040, # 8-15
        0.035, 0.045, 0.065, 0.095, 0.110, 0.090, 0.050, 0.030  # 16-23
    ])
    hourly_weights = hourly_weights / hourly_weights.sum()

    print(f"[DataGen] Generating {total_orders} realistic delivery orders...")

    order_ids = [f"ORD_{100000 + i}" for i in range(total_orders)]

    for idx, order_id in enumerate(order_ids):
        # Pick timestamp based on realistic distribution
        day_offset_days = random.randint(0, 89)
        order_day = start_date + timedelta(days=day_offset_days)
        hour = np.random.choice(24, p=hourly_weights)
        minute = random.randint(0, 59)
        second = random.randint(0, 59)
        timestamp = order_day.replace(hour=hour, minute=minute, second=second)

        day_of_week = timestamp.weekday() # 0 = Monday, 6 = Sunday
        is_weekend = day_of_week in [4, 5, 6] # Fri, Sat, Sun

        # Time of day category
        if 6 <= hour < 11:
            time_of_day = "Breakfast"
        elif 11 <= hour < 15:
            time_of_day = "Lunch"
        elif 15 <= hour < 18:
            time_of_day = "Snack"
        elif 18 <= hour < 23:
            time_of_day = "Dinner"
        else:
            time_of_day = "Late Night"

        # Select restaurant and city
        restaurant = random.choice(restaurants)
        city_id = restaurant["city_id"]
        city_info = city_dict[city_id]
        cuisine = restaurant["cuisine"]

        # Weather simulation (Rain occurs ~12% of time, Heavy Rain ~4% especially in BOM/BLR)
        weather_p = [0.70, 0.14, 0.12, 0.04]
        if city_id in ["BOM", "BLR"]:
            weather_p = [0.60, 0.16, 0.17, 0.07]
        weather = np.random.choice(["Clear", "Overcast", "Rain", "Heavy Rain"], p=weather_p)

        weather_slowdown = 1.0
        if weather == "Rain":
            weather_slowdown = 1.25
        elif weather == "Heavy Rain":
            weather_slowdown = 1.55

        # Peak factor
        is_peak = (12 <= hour <= 14) or (19 <= hour <= 22)
        surge_mult = 1.35 if (is_peak and is_weekend) else (1.2 if is_peak else 1.0)

        # Restaurant order load in last 30 mins
        capacity = restaurant["kitchen_capacity_orders_30m"]
        base_load = capacity * (0.85 if is_peak else 0.40)
        restaurant_orders_30m = int(max(1, np.random.poisson(base_load * surge_mult)))

        # Restaurant prep time
        # Non-linear queue buildup if load exceeds kitchen capacity
        base_prep = restaurant["avg_baseline_prep_time"]
        prep_noise = np.random.normal(0, 2.5)
        overload = max(0, restaurant_orders_30m - capacity)
        kitchen_queue_delay = overload * np.random.uniform(1.8, 2.6)
        # Dine-in restaurants experience worse kitchen delays during dinner peak
        dine_in_penalty = 4.5 if (not restaurant["is_cloud_kitchen"] and time_of_day == "Dinner" and is_peak) else 0.0

        actual_prep_time = max(8.0, round(base_prep + kitchen_queue_delay + dine_in_penalty + prep_noise, 1))

        # Distance: Gamma distribution (mode around 3.5 - 5 km)
        distance_km = round(float(np.clip(np.random.gamma(shape=3.2, scale=1.4), 0.8, 14.5)), 1)

        # Traffic Level & Multiplier
        if is_peak:
            traffic_level = np.random.choice(["Moderate", "High", "Severe"], p=[0.25, 0.55, 0.20])
            traffic_mult = np.random.uniform(1.35, 1.85) * city_info["base_traffic_index"]
        elif 16 <= hour <= 18:
            traffic_level = np.random.choice(["Moderate", "High"], p=[0.60, 0.40])
            traffic_mult = np.random.uniform(1.15, 1.45) * city_info["base_traffic_index"]
        elif 0 <= hour <= 5:
            traffic_level = "Low"
            traffic_mult = 0.85
        else:
            traffic_level = np.random.choice(["Low", "Moderate"], p=[0.65, 0.35])
            traffic_mult = np.random.uniform(0.95, 1.20)

        traffic_multiplier = round(float(traffic_mult), 2)

        # Delivery Partner Availability
        # During heavy rain and peak dinners, riders are scarce
        if weather in ["Rain", "Heavy Rain"] and is_peak:
            available_partners = int(np.clip(np.random.poisson(2), 0, 7))
        elif is_peak:
            available_partners = int(np.clip(np.random.poisson(4), 1, 10))
        else:
            available_partners = int(np.clip(np.random.poisson(8), 2, 18))

        # Dispatch latency (time to assign partner and partner arriving at restaurant)
        if available_partners <= 1:
            dispatch_latency = np.random.uniform(8.0, 16.0)
        elif available_partners <= 3:
            dispatch_latency = np.random.uniform(4.5, 8.5)
        else:
            dispatch_latency = np.random.uniform(2.0, 5.0)

        # Assign a partner from this city
        avail_pool = partners_by_city.get(city_id, partners)
        assigned_partner = random.choice(avail_pool)
        partner_orders_today = random.randint(1, 16) if hour >= 12 else random.randint(0, 5)

        # Transit time calculation: (distance / speed) * 60 * traffic_multiplier * weather_slowdown
        effective_speed = city_info["avg_speed_kmh"]
        if assigned_partner["vehicle_type"] == "Bicycle" and distance_km <= 3.0:
            effective_speed = 13.0
        elif assigned_partner["vehicle_type"] == "Electric Scooter":
            effective_speed = effective_speed * 1.05

        transit_time = (distance_km / max(8.0, effective_speed)) * 60.0 * (traffic_multiplier / city_info["base_traffic_index"]) * weather_slowdown
        transit_time = round(float(transit_time + np.random.normal(0, 1.5)), 1)
        transit_time = max(4.0, transit_time)

        # Actual Delivery Time:
        # Partner rides to restaurant (dispatch_latency) while restaurant preps.
        # Pick-up occurs at max(dispatch_latency, actual_prep_time) + handoff buffer (~2 min) + transit_time
        handoff_time = np.random.uniform(1.5, 3.0)
        total_actual_delivery_time = round(max(dispatch_latency, actual_prep_time) + handoff_time + transit_time, 1)

        # Platform's Initial Estimated Delivery Time (Standard heuristic estimate)
        # Standard system underestimates queues and sudden rain surges!
        est_prep = base_prep + (3.0 if is_peak else 0.0)
        est_transit = (distance_km / city_info["avg_speed_kmh"]) * 60.0 * 1.15
        est_dispatch = 4.0
        estimated_delivery_time = round(est_prep + est_dispatch + est_transit, 1)

        delivery_delay = round(total_actual_delivery_time - estimated_delivery_time, 1)
        is_late = bool(delivery_delay > 10.0)

        # Identify Primary Root Cause Delay Driver
        prep_excess = actual_prep_time - base_prep
        transit_excess = transit_time - (distance_km / city_info["avg_speed_kmh"] * 60.0)
        rider_excess = dispatch_latency - 3.5

        if not is_late:
            delay_driver = "On_Time"
        else:
            # Which component contributed most to the delay?
            drivers = [
                ("Kitchen", prep_excess),
                ("Traffic", transit_excess * 0.7 if weather != "Heavy Rain" else transit_excess * 0.4),
                ("Rider_Shortage", rider_excess),
                ("Distance", 4.0 if distance_km > 7.5 else 0.0)
            ]
            if weather in ["Rain", "Heavy Rain"]:
                drivers.append(("Weather_Shock", transit_excess * 0.6))
            delay_driver = max(drivers, key=lambda x: x[1])[0]
            if delay_driver == "Weather_Shock":
                delay_driver = "Traffic" # Fold into traffic/environmental

        # Order financials
        order_value = round(float(np.random.choice([
            np.random.normal(320, 80),
            np.random.normal(650, 140),
            np.random.normal(1200, 250)
        ], p=[0.55, 0.35, 0.10])), 2)
        order_value = max(120.0, order_value)
        discount = round(float(random.choice([0, 0, 30, 50, 75, 100])), 2)

        # Cancellations: Rare (~1.8%), but spikes when actual prep time > 45 mins
        cancelled = False
        cancellation_stage = "None"
        if actual_prep_time > 48.0 and random.random() < 0.22:
            cancelled = True
            cancellation_stage = "Prep"
        elif total_actual_delivery_time > 75.0 and random.random() < 0.15:
            cancelled = True
            cancellation_stage = "In_Transit"
        elif random.random() < 0.008:
            cancelled = True
            cancellation_stage = "Dispatch"

        # Customer rating: High on-time ratings, low when delayed
        if cancelled:
            customer_rating = 1.0
        elif is_late:
            customer_rating = round(float(np.clip(np.random.normal(2.6, 0.7), 1.0, 4.0)), 1)
        elif delivery_delay > 4.0:
            customer_rating = round(float(np.clip(np.random.normal(3.8, 0.5), 2.0, 5.0)), 1)
        else:
            customer_rating = round(float(np.clip(np.random.normal(4.6, 0.4), 3.0, 5.0)), 1)

        orders.append({
            "order_id": order_id,
            "customer_id": f"CUST_{random.randint(10000, 99999)}",
            "restaurant_id": restaurant["restaurant_id"],
            "delivery_partner_id": assigned_partner["partner_id"],
            "city_id": city_id,
            "cuisine": cuisine,
            "order_timestamp": timestamp.strftime("%Y-%m-%d %H:%M:%S"),
            "day_of_week": day_of_week,
            "hour_of_day": hour,
            "time_of_day": time_of_day,
            "distance_km": distance_km,
            "weather": weather,
            "traffic_level": traffic_level,
            "traffic_multiplier": traffic_multiplier,
            "restaurant_prep_time": actual_prep_time,
            "restaurant_orders_last_30min": restaurant_orders_30m,
            "delivery_partner_orders_today": partner_orders_today,
            "available_partners_nearby": available_partners,
            "order_value": order_value,
            "discount": discount,
            "estimated_delivery_time": estimated_delivery_time,
            "actual_delivery_time": total_actual_delivery_time,
            "delivery_delay": delivery_delay,
            "is_late": 1 if is_late else 0,
            "delay_driver": delay_driver,
            "cancelled": 1 if cancelled else 0,
            "cancellation_stage": cancellation_stage,
            "customer_rating": customer_rating
        })

        # 5. A/B Test Experiment: Assign a portion (~6,000 orders in the last 30 days) to "ML-adjusted ETA vs Standard ETA"
        if day_offset_days >= 60 and idx % 4 == 0:
            variant = "treatment" if (idx % 8 == 0) else "control"
            # Control: Standard heuristic ETA
            # Treatment: ML-based dynamic ETA that accounts for kitchen overload and rain
            treatment_predicted_eta = round(
                actual_prep_time * 0.90 + transit_time * 0.95 + dispatch_latency * 0.92 + np.random.normal(0, 2.5), 1
            )
            # Ensure treatment ETA is realistic and closer to actual
            if variant == "treatment":
                effective_eta = treatment_predicted_eta
                # When customer gets accurate expectations, late rate perceived is lower
                exp_late = bool((total_actual_delivery_time - effective_eta) > 10.0)
                exp_csat = customer_rating + (0.35 if is_late else 0.15)
                exp_csat = round(float(np.clip(exp_csat, 1.0, 5.0)), 1)
            else:
                effective_eta = estimated_delivery_time
                exp_late = is_late
                exp_csat = customer_rating

            eta_err = round(abs(total_actual_delivery_time - effective_eta), 1)

            experiments_data.append({
                "experiment_id": "EXP_ETA_V2",
                "order_id": order_id,
                "variant": variant,
                "model_predicted_eta": treatment_predicted_eta,
                "standard_eta": estimated_delivery_time,
                "actual_delivery_time": total_actual_delivery_time,
                "eta_error": eta_err,
                "is_late": 1 if exp_late else 0,
                "cancelled": 1 if cancelled else 0,
                "customer_rating": exp_csat
            })

    orders_df = pd.DataFrame(orders)
    # Sort orders by timestamp
    orders_df.sort_values(by="order_timestamp", inplace=True)
    orders_df.to_sql("orders", conn, if_exists="replace", index=False)
    print(f"[DataGen] Loaded {len(orders_df)} orders into database.")

    exp_df = pd.DataFrame(experiments_data)
    exp_df.to_sql("experiments", conn, if_exists="replace", index=False)
    print(f"[DataGen] Loaded {len(exp_df)} A/B experiment records into database.")

    # Re-apply indexes on SQLite
    cur.execute("CREATE INDEX IF NOT EXISTS idx_orders_timestamp ON orders(order_timestamp);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_orders_city ON orders(city_id);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_orders_restaurant ON orders(restaurant_id);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_orders_is_late ON orders(is_late);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_orders_time_of_day ON orders(time_of_day);")
    conn.commit()
    conn.close()

    late_pct = orders_df["is_late"].mean() * 100
    avg_del = orders_df["actual_delivery_time"].mean()
    print(f"[DataGen] Finished! Overall late delivery rate: {late_pct:.1f}%, Avg delivery time: {avg_del:.1f} mins.")

if __name__ == "__main__":
    db_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), "delivery_intelligence.db")
    generate_dataset(db_file, total_orders=25000)
