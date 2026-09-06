-- Schema for Delivery Intelligence System

CREATE TABLE IF NOT EXISTS cities (
    city_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    state TEXT NOT NULL,
    tier TEXT NOT NULL,
    base_traffic_index REAL NOT NULL,
    avg_speed_kmh REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS restaurants (
    restaurant_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    city_id TEXT NOT NULL,
    cuisine TEXT NOT NULL,
    rating REAL NOT NULL,
    avg_baseline_prep_time REAL NOT NULL,
    kitchen_capacity_orders_30m INTEGER NOT NULL,
    is_cloud_kitchen BOOLEAN NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

CREATE TABLE IF NOT EXISTS delivery_partners (
    partner_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    city_id TEXT NOT NULL,
    vehicle_type TEXT NOT NULL,
    rating REAL NOT NULL,
    historical_trips INTEGER NOT NULL,
    on_time_pct REAL NOT NULL,
    FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

CREATE TABLE IF NOT EXISTS orders (
    order_id TEXT PRIMARY KEY,
    customer_id TEXT NOT NULL,
    restaurant_id TEXT NOT NULL,
    delivery_partner_id TEXT,
    city_id TEXT NOT NULL,
    cuisine TEXT NOT NULL,
    order_timestamp TIMESTAMP NOT NULL,
    day_of_week INTEGER NOT NULL, -- 0=Monday, 6=Sunday
    hour_of_day INTEGER NOT NULL, -- 0 to 23
    time_of_day TEXT NOT NULL,    -- Breakfast, Lunch, Snack, Dinner, Late Night
    distance_km REAL NOT NULL,
    weather TEXT NOT NULL,        -- Clear, Overcast, Rain, Heavy Rain
    traffic_level TEXT NOT NULL,  -- Low, Moderate, High, Severe
    traffic_multiplier REAL NOT NULL,
    restaurant_prep_time REAL NOT NULL,
    restaurant_orders_last_30min INTEGER NOT NULL,
    delivery_partner_orders_today INTEGER NOT NULL,
    available_partners_nearby INTEGER NOT NULL,
    order_value REAL NOT NULL,
    discount REAL NOT NULL,
    estimated_delivery_time REAL NOT NULL,
    actual_delivery_time REAL NOT NULL,
    delivery_delay REAL NOT NULL,
    is_late BOOLEAN NOT NULL,     -- delivery_delay > 10.0 mins
    delay_driver TEXT,            -- Kitchen, Traffic, Distance, Rider_Shortage, On_Time
    cancelled BOOLEAN NOT NULL DEFAULT 0,
    cancellation_stage TEXT,      -- None, Prep, Dispatch, In_Transit
    customer_rating REAL,
    FOREIGN KEY(restaurant_id) REFERENCES restaurants(restaurant_id),
    FOREIGN KEY(delivery_partner_id) REFERENCES delivery_partners(partner_id),
    FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

CREATE TABLE IF NOT EXISTS experiments (
    experiment_id TEXT NOT NULL,
    order_id TEXT NOT NULL,
    variant TEXT NOT NULL,        -- 'control' or 'treatment'
    model_predicted_eta REAL,
    standard_eta REAL,
    actual_delivery_time REAL NOT NULL,
    eta_error REAL NOT NULL,
    is_late BOOLEAN NOT NULL,
    cancelled BOOLEAN NOT NULL DEFAULT 0,
    customer_rating REAL,
    PRIMARY KEY(experiment_id, order_id),
    FOREIGN KEY(order_id) REFERENCES orders(order_id)
);

CREATE INDEX IF NOT EXISTS idx_orders_timestamp ON orders(order_timestamp);
CREATE INDEX IF NOT EXISTS idx_orders_city ON orders(city_id);
CREATE INDEX IF NOT EXISTS idx_orders_restaurant ON orders(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_orders_is_late ON orders(is_late);
CREATE INDEX IF NOT EXISTS idx_orders_time_of_day ON orders(time_of_day);
