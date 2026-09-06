export const EMBEDDED_DATA = {
  "metadata": {
    "system_name": "Delivery Intelligence System",
    "data_source": "Replica DB: prod-read-replica-02 \u00b7 25,000 orders",
    "model_version": "xgb_delay_v2.4.1",
    "primary_model": "XGBoost Classifier",
    "last_updated": "Live Sync (Past 90 Days)",
    "status": "Operational"
  },
  "filters": {
    "cities": [
      {
        "city_id": "BLR",
        "name": "Bengaluru"
      },
      {
        "city_id": "DEL",
        "name": "Delhi-NCR"
      },
      {
        "city_id": "HYD",
        "name": "Hyderabad"
      },
      {
        "city_id": "BOM",
        "name": "Mumbai"
      },
      {
        "city_id": "PNQ",
        "name": "Pune"
      }
    ],
    "cuisines": [
      "Asian & Chinese",
      "Biryani & Kebabs",
      "Burgers & Fast Food",
      "Desserts & Cafe",
      "Healthy & Bowls",
      "North Indian",
      "Pizza & Italian",
      "South Indian"
    ],
    "times_of_day": [
      "Breakfast",
      "Lunch",
      "Snack",
      "Dinner",
      "Late Night"
    ]
  },
  "overview": {
    "30d": {
      "kpis": {
        "total_orders": 8191,
        "orders_change_pct": 1.2,
        "late_delivery_rate": 22.9,
        "late_rate_change": 0.5,
        "avg_delivery_time": 43.9,
        "avg_time_change": 0.3,
        "high_risk_orders": 1070,
        "high_risk_change_pct": 0.9
      },
      "trend": [
        {
          "date": "08-07",
          "orders": 253,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 26.9
        },
        {
          "date": "08-08",
          "orders": 258,
          "avg_delivery_time": 46.1,
          "late_delivery_rate": 29.5
        },
        {
          "date": "08-09",
          "orders": 311,
          "avg_delivery_time": 44.8,
          "late_delivery_rate": 26.7
        },
        {
          "date": "08-10",
          "orders": 253,
          "avg_delivery_time": 43.1,
          "late_delivery_rate": 17.4
        },
        {
          "date": "08-11",
          "orders": 274,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 18.6
        },
        {
          "date": "08-12",
          "orders": 282,
          "avg_delivery_time": 44.3,
          "late_delivery_rate": 21.6
        },
        {
          "date": "08-13",
          "orders": 262,
          "avg_delivery_time": 42.6,
          "late_delivery_rate": 17.6
        },
        {
          "date": "08-14",
          "orders": 264,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 23.1
        },
        {
          "date": "08-15",
          "orders": 272,
          "avg_delivery_time": 44.1,
          "late_delivery_rate": 27.2
        },
        {
          "date": "08-16",
          "orders": 277,
          "avg_delivery_time": 44.8,
          "late_delivery_rate": 24.9
        },
        {
          "date": "08-17",
          "orders": 251,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 17.1
        },
        {
          "date": "08-18",
          "orders": 300,
          "avg_delivery_time": 43.6,
          "late_delivery_rate": 19.7
        },
        {
          "date": "08-19",
          "orders": 279,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 18.3
        },
        {
          "date": "08-20",
          "orders": 280,
          "avg_delivery_time": 43.1,
          "late_delivery_rate": 20.7
        },
        {
          "date": "08-21",
          "orders": 285,
          "avg_delivery_time": 43.7,
          "late_delivery_rate": 26.7
        },
        {
          "date": "08-22",
          "orders": 266,
          "avg_delivery_time": 45.0,
          "late_delivery_rate": 31.2
        },
        {
          "date": "08-23",
          "orders": 251,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 26.3
        },
        {
          "date": "08-24",
          "orders": 289,
          "avg_delivery_time": 44.5,
          "late_delivery_rate": 23.9
        },
        {
          "date": "08-25",
          "orders": 293,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 18.1
        },
        {
          "date": "08-26",
          "orders": 289,
          "avg_delivery_time": 41.8,
          "late_delivery_rate": 17.6
        },
        {
          "date": "08-27",
          "orders": 276,
          "avg_delivery_time": 44.6,
          "late_delivery_rate": 22.8
        },
        {
          "date": "08-28",
          "orders": 256,
          "avg_delivery_time": 43.1,
          "late_delivery_rate": 22.7
        },
        {
          "date": "08-29",
          "orders": 296,
          "avg_delivery_time": 46.2,
          "late_delivery_rate": 28.4
        },
        {
          "date": "08-30",
          "orders": 275,
          "avg_delivery_time": 45.0,
          "late_delivery_rate": 28.7
        },
        {
          "date": "08-31",
          "orders": 269,
          "avg_delivery_time": 42.0,
          "late_delivery_rate": 16.7
        },
        {
          "date": "09-01",
          "orders": 270,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 18.1
        },
        {
          "date": "09-02",
          "orders": 284,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 19.7
        },
        {
          "date": "09-03",
          "orders": 227,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 19.4
        },
        {
          "date": "09-04",
          "orders": 299,
          "avg_delivery_time": 44.5,
          "late_delivery_rate": 28.8
        },
        {
          "date": "09-05",
          "orders": 250,
          "avg_delivery_time": 45.1,
          "late_delivery_rate": 28.4
        }
      ],
      "delay_breakdown": [
        {
          "driver": "Restaurant preparation",
          "count": 1130,
          "percentage": 60.2
        },
        {
          "driver": "Traffic",
          "count": 715,
          "percentage": 38.1
        },
        {
          "driver": "Delivery-partner availability",
          "count": 32,
          "percentage": 1.7
        }
      ],
      "high_risk_orders": [
        {
          "order_id": "ORD_109370",
          "city": "Bengaluru",
          "restaurant": "Green Leaf North Central",
          "eta": "83.0 min",
          "delay_min": 83.1,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_107212",
          "city": "Mumbai",
          "restaurant": "Flavors of Biryani Co.",
          "eta": "71.0 min",
          "delay_min": 79.3,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_107261",
          "city": "Bengaluru",
          "restaurant": "Green Leaf Desserts Bowl",
          "eta": "57.0 min",
          "delay_min": 63.7,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_101876",
          "city": "Mumbai",
          "restaurant": "Green Leaf Healthy Kitchen",
          "eta": "75.0 min",
          "delay_min": 62.3,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_110004",
          "city": "Mumbai",
          "restaurant": "Baking Desserts Co.",
          "eta": "52.0 min",
          "delay_min": 61.8,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_119423",
          "city": "Pune",
          "restaurant": "Tandoori Biryani Court",
          "eta": "80.0 min",
          "delay_min": 61.5,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_102768",
          "city": "Delhi-NCR",
          "restaurant": "Green Leaf Burgers Kitchen",
          "eta": "53.0 min",
          "delay_min": 61.2,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_109065",
          "city": "Bengaluru",
          "restaurant": "Green Leaf Healthy Boutique",
          "eta": "33.0 min",
          "delay_min": 58.4,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_124785",
          "city": "Mumbai",
          "restaurant": "The Spice North Grill",
          "eta": "87.0 min",
          "delay_min": 55.9,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_113609",
          "city": "Bengaluru",
          "restaurant": "Tandoori Pizza Kitchen",
          "eta": "82.0 min",
          "delay_min": 54.9,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        }
      ]
    },
    "7d": {
      "kpis": {
        "total_orders": 1874,
        "orders_change_pct": -3.9,
        "late_delivery_rate": 22.9,
        "late_rate_change": 0.2,
        "avg_delivery_time": 43.7,
        "avg_time_change": -0.2,
        "high_risk_orders": 238,
        "high_risk_change_pct": -1.2
      },
      "trend": [
        {
          "date": "08-30",
          "orders": 275,
          "avg_delivery_time": 45.0,
          "late_delivery_rate": 28.7
        },
        {
          "date": "08-31",
          "orders": 269,
          "avg_delivery_time": 42.0,
          "late_delivery_rate": 16.7
        },
        {
          "date": "09-01",
          "orders": 270,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 18.1
        },
        {
          "date": "09-02",
          "orders": 284,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 19.7
        },
        {
          "date": "09-03",
          "orders": 227,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 19.4
        },
        {
          "date": "09-04",
          "orders": 299,
          "avg_delivery_time": 44.5,
          "late_delivery_rate": 28.8
        },
        {
          "date": "09-05",
          "orders": 250,
          "avg_delivery_time": 45.1,
          "late_delivery_rate": 28.4
        }
      ],
      "delay_breakdown": [
        {
          "driver": "Restaurant preparation",
          "count": 270,
          "percentage": 62.8
        },
        {
          "driver": "Traffic",
          "count": 157,
          "percentage": 36.5
        },
        {
          "driver": "Delivery-partner availability",
          "count": 3,
          "percentage": 0.7
        }
      ],
      "high_risk_orders": [
        {
          "order_id": "ORD_109370",
          "city": "Bengaluru",
          "restaurant": "Green Leaf North Central",
          "eta": "83.0 min",
          "delay_min": 83.1,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_107212",
          "city": "Mumbai",
          "restaurant": "Flavors of Biryani Co.",
          "eta": "71.0 min",
          "delay_min": 79.3,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_107261",
          "city": "Bengaluru",
          "restaurant": "Green Leaf Desserts Bowl",
          "eta": "57.0 min",
          "delay_min": 63.7,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_101876",
          "city": "Mumbai",
          "restaurant": "Green Leaf Healthy Kitchen",
          "eta": "75.0 min",
          "delay_min": 62.3,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_110004",
          "city": "Mumbai",
          "restaurant": "Baking Desserts Co.",
          "eta": "52.0 min",
          "delay_min": 61.8,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_119423",
          "city": "Pune",
          "restaurant": "Tandoori Biryani Court",
          "eta": "80.0 min",
          "delay_min": 61.5,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_102768",
          "city": "Delhi-NCR",
          "restaurant": "Green Leaf Burgers Kitchen",
          "eta": "53.0 min",
          "delay_min": 61.2,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_109065",
          "city": "Bengaluru",
          "restaurant": "Green Leaf Healthy Boutique",
          "eta": "33.0 min",
          "delay_min": 58.4,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_124785",
          "city": "Mumbai",
          "restaurant": "The Spice North Grill",
          "eta": "87.0 min",
          "delay_min": 55.9,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_113609",
          "city": "Bengaluru",
          "restaurant": "Tandoori Pizza Kitchen",
          "eta": "82.0 min",
          "delay_min": 54.9,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        }
      ]
    },
    "90d": {
      "kpis": {
        "total_orders": 24579,
        "orders_change_pct": 0.0,
        "late_delivery_rate": 22.7,
        "late_rate_change": null,
        "avg_delivery_time": 43.7,
        "avg_time_change": null,
        "high_risk_orders": 3173,
        "high_risk_change_pct": 0.0
      },
      "trend": [
        {
          "date": "06-08",
          "orders": 286,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 22.7
        },
        {
          "date": "06-09",
          "orders": 258,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 17.8
        },
        {
          "date": "06-10",
          "orders": 283,
          "avg_delivery_time": 41.8,
          "late_delivery_rate": 18.7
        },
        {
          "date": "06-11",
          "orders": 305,
          "avg_delivery_time": 44.8,
          "late_delivery_rate": 22.0
        },
        {
          "date": "06-12",
          "orders": 276,
          "avg_delivery_time": 45.3,
          "late_delivery_rate": 26.8
        },
        {
          "date": "06-13",
          "orders": 284,
          "avg_delivery_time": 44.5,
          "late_delivery_rate": 27.1
        },
        {
          "date": "06-14",
          "orders": 288,
          "avg_delivery_time": 44.5,
          "late_delivery_rate": 29.5
        },
        {
          "date": "06-15",
          "orders": 246,
          "avg_delivery_time": 43.1,
          "late_delivery_rate": 18.7
        },
        {
          "date": "06-16",
          "orders": 283,
          "avg_delivery_time": 43.7,
          "late_delivery_rate": 21.6
        },
        {
          "date": "06-17",
          "orders": 281,
          "avg_delivery_time": 42.8,
          "late_delivery_rate": 21.7
        },
        {
          "date": "06-18",
          "orders": 292,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 19.2
        },
        {
          "date": "06-19",
          "orders": 259,
          "avg_delivery_time": 44.5,
          "late_delivery_rate": 26.3
        },
        {
          "date": "06-20",
          "orders": 293,
          "avg_delivery_time": 44.0,
          "late_delivery_rate": 23.5
        },
        {
          "date": "06-21",
          "orders": 275,
          "avg_delivery_time": 44.2,
          "late_delivery_rate": 30.2
        },
        {
          "date": "06-22",
          "orders": 275,
          "avg_delivery_time": 43.5,
          "late_delivery_rate": 21.8
        },
        {
          "date": "06-23",
          "orders": 272,
          "avg_delivery_time": 42.3,
          "late_delivery_rate": 18.0
        },
        {
          "date": "06-24",
          "orders": 302,
          "avg_delivery_time": 43.7,
          "late_delivery_rate": 19.5
        },
        {
          "date": "06-25",
          "orders": 266,
          "avg_delivery_time": 43.0,
          "late_delivery_rate": 19.5
        },
        {
          "date": "06-26",
          "orders": 249,
          "avg_delivery_time": 45.2,
          "late_delivery_rate": 26.5
        },
        {
          "date": "06-27",
          "orders": 277,
          "avg_delivery_time": 43.9,
          "late_delivery_rate": 27.8
        },
        {
          "date": "06-28",
          "orders": 273,
          "avg_delivery_time": 45.3,
          "late_delivery_rate": 27.8
        },
        {
          "date": "06-29",
          "orders": 286,
          "avg_delivery_time": 44.1,
          "late_delivery_rate": 18.2
        },
        {
          "date": "06-30",
          "orders": 303,
          "avg_delivery_time": 43.4,
          "late_delivery_rate": 20.8
        },
        {
          "date": "07-01",
          "orders": 260,
          "avg_delivery_time": 43.3,
          "late_delivery_rate": 18.8
        },
        {
          "date": "07-02",
          "orders": 284,
          "avg_delivery_time": 42.2,
          "late_delivery_rate": 20.1
        },
        {
          "date": "07-03",
          "orders": 263,
          "avg_delivery_time": 44.2,
          "late_delivery_rate": 25.9
        },
        {
          "date": "07-04",
          "orders": 273,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 23.8
        },
        {
          "date": "07-05",
          "orders": 287,
          "avg_delivery_time": 44.6,
          "late_delivery_rate": 26.8
        },
        {
          "date": "07-06",
          "orders": 233,
          "avg_delivery_time": 42.8,
          "late_delivery_rate": 17.6
        },
        {
          "date": "07-07",
          "orders": 279,
          "avg_delivery_time": 43.9,
          "late_delivery_rate": 20.1
        },
        {
          "date": "07-08",
          "orders": 264,
          "avg_delivery_time": 43.3,
          "late_delivery_rate": 21.6
        },
        {
          "date": "07-09",
          "orders": 276,
          "avg_delivery_time": 42.8,
          "late_delivery_rate": 18.1
        },
        {
          "date": "07-10",
          "orders": 245,
          "avg_delivery_time": 45.2,
          "late_delivery_rate": 27.3
        },
        {
          "date": "07-11",
          "orders": 279,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 26.2
        },
        {
          "date": "07-12",
          "orders": 287,
          "avg_delivery_time": 45.0,
          "late_delivery_rate": 30.3
        },
        {
          "date": "07-13",
          "orders": 262,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 18.7
        },
        {
          "date": "07-14",
          "orders": 252,
          "avg_delivery_time": 42.7,
          "late_delivery_rate": 24.2
        },
        {
          "date": "07-15",
          "orders": 246,
          "avg_delivery_time": 42.3,
          "late_delivery_rate": 19.9
        },
        {
          "date": "07-16",
          "orders": 294,
          "avg_delivery_time": 41.9,
          "late_delivery_rate": 16.3
        },
        {
          "date": "07-17",
          "orders": 283,
          "avg_delivery_time": 45.6,
          "late_delivery_rate": 24.4
        },
        {
          "date": "07-18",
          "orders": 264,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 30.3
        },
        {
          "date": "07-19",
          "orders": 269,
          "avg_delivery_time": 44.9,
          "late_delivery_rate": 24.9
        },
        {
          "date": "07-20",
          "orders": 275,
          "avg_delivery_time": 42.7,
          "late_delivery_rate": 21.5
        },
        {
          "date": "07-21",
          "orders": 303,
          "avg_delivery_time": 43.3,
          "late_delivery_rate": 21.1
        },
        {
          "date": "07-22",
          "orders": 254,
          "avg_delivery_time": 44.3,
          "late_delivery_rate": 21.7
        },
        {
          "date": "07-23",
          "orders": 247,
          "avg_delivery_time": 42.5,
          "late_delivery_rate": 18.2
        },
        {
          "date": "07-24",
          "orders": 292,
          "avg_delivery_time": 44.7,
          "late_delivery_rate": 26.7
        },
        {
          "date": "07-25",
          "orders": 284,
          "avg_delivery_time": 44.7,
          "late_delivery_rate": 25.0
        },
        {
          "date": "07-26",
          "orders": 268,
          "avg_delivery_time": 43.6,
          "late_delivery_rate": 28.0
        },
        {
          "date": "07-27",
          "orders": 274,
          "avg_delivery_time": 42.1,
          "late_delivery_rate": 17.9
        },
        {
          "date": "07-28",
          "orders": 263,
          "avg_delivery_time": 43.3,
          "late_delivery_rate": 18.6
        },
        {
          "date": "07-29",
          "orders": 273,
          "avg_delivery_time": 43.3,
          "late_delivery_rate": 20.1
        },
        {
          "date": "07-30",
          "orders": 269,
          "avg_delivery_time": 45.1,
          "late_delivery_rate": 21.2
        },
        {
          "date": "07-31",
          "orders": 262,
          "avg_delivery_time": 46.2,
          "late_delivery_rate": 26.7
        },
        {
          "date": "08-01",
          "orders": 284,
          "avg_delivery_time": 43.7,
          "late_delivery_rate": 22.5
        },
        {
          "date": "08-02",
          "orders": 264,
          "avg_delivery_time": 45.2,
          "late_delivery_rate": 26.1
        },
        {
          "date": "08-03",
          "orders": 264,
          "avg_delivery_time": 43.3,
          "late_delivery_rate": 19.3
        },
        {
          "date": "08-04",
          "orders": 251,
          "avg_delivery_time": 40.9,
          "late_delivery_rate": 16.3
        },
        {
          "date": "08-05",
          "orders": 260,
          "avg_delivery_time": 42.5,
          "late_delivery_rate": 23.5
        },
        {
          "date": "08-06",
          "orders": 289,
          "avg_delivery_time": 41.1,
          "late_delivery_rate": 16.3
        },
        {
          "date": "08-07",
          "orders": 253,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 26.9
        },
        {
          "date": "08-08",
          "orders": 258,
          "avg_delivery_time": 46.1,
          "late_delivery_rate": 29.5
        },
        {
          "date": "08-09",
          "orders": 311,
          "avg_delivery_time": 44.8,
          "late_delivery_rate": 26.7
        },
        {
          "date": "08-10",
          "orders": 253,
          "avg_delivery_time": 43.1,
          "late_delivery_rate": 17.4
        },
        {
          "date": "08-11",
          "orders": 274,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 18.6
        },
        {
          "date": "08-12",
          "orders": 282,
          "avg_delivery_time": 44.3,
          "late_delivery_rate": 21.6
        },
        {
          "date": "08-13",
          "orders": 262,
          "avg_delivery_time": 42.6,
          "late_delivery_rate": 17.6
        },
        {
          "date": "08-14",
          "orders": 264,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 23.1
        },
        {
          "date": "08-15",
          "orders": 272,
          "avg_delivery_time": 44.1,
          "late_delivery_rate": 27.2
        },
        {
          "date": "08-16",
          "orders": 277,
          "avg_delivery_time": 44.8,
          "late_delivery_rate": 24.9
        },
        {
          "date": "08-17",
          "orders": 251,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 17.1
        },
        {
          "date": "08-18",
          "orders": 300,
          "avg_delivery_time": 43.6,
          "late_delivery_rate": 19.7
        },
        {
          "date": "08-19",
          "orders": 279,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 18.3
        },
        {
          "date": "08-20",
          "orders": 280,
          "avg_delivery_time": 43.1,
          "late_delivery_rate": 20.7
        },
        {
          "date": "08-21",
          "orders": 285,
          "avg_delivery_time": 43.7,
          "late_delivery_rate": 26.7
        },
        {
          "date": "08-22",
          "orders": 266,
          "avg_delivery_time": 45.0,
          "late_delivery_rate": 31.2
        },
        {
          "date": "08-23",
          "orders": 251,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 26.3
        },
        {
          "date": "08-24",
          "orders": 289,
          "avg_delivery_time": 44.5,
          "late_delivery_rate": 23.9
        },
        {
          "date": "08-25",
          "orders": 293,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 18.1
        },
        {
          "date": "08-26",
          "orders": 289,
          "avg_delivery_time": 41.8,
          "late_delivery_rate": 17.6
        },
        {
          "date": "08-27",
          "orders": 276,
          "avg_delivery_time": 44.6,
          "late_delivery_rate": 22.8
        },
        {
          "date": "08-28",
          "orders": 256,
          "avg_delivery_time": 43.1,
          "late_delivery_rate": 22.7
        },
        {
          "date": "08-29",
          "orders": 296,
          "avg_delivery_time": 46.2,
          "late_delivery_rate": 28.4
        },
        {
          "date": "08-30",
          "orders": 275,
          "avg_delivery_time": 45.0,
          "late_delivery_rate": 28.7
        },
        {
          "date": "08-31",
          "orders": 269,
          "avg_delivery_time": 42.0,
          "late_delivery_rate": 16.7
        },
        {
          "date": "09-01",
          "orders": 270,
          "avg_delivery_time": 42.4,
          "late_delivery_rate": 18.1
        },
        {
          "date": "09-02",
          "orders": 284,
          "avg_delivery_time": 42.9,
          "late_delivery_rate": 19.7
        },
        {
          "date": "09-03",
          "orders": 227,
          "avg_delivery_time": 44.4,
          "late_delivery_rate": 19.4
        },
        {
          "date": "09-04",
          "orders": 299,
          "avg_delivery_time": 44.5,
          "late_delivery_rate": 28.8
        },
        {
          "date": "09-05",
          "orders": 250,
          "avg_delivery_time": 45.1,
          "late_delivery_rate": 28.4
        }
      ],
      "delay_breakdown": [
        {
          "driver": "Restaurant preparation",
          "count": 3314,
          "percentage": 59.5
        },
        {
          "driver": "Traffic",
          "count": 2151,
          "percentage": 38.6
        },
        {
          "driver": "Delivery-partner availability",
          "count": 107,
          "percentage": 1.9
        }
      ],
      "high_risk_orders": [
        {
          "order_id": "ORD_109370",
          "city": "Bengaluru",
          "restaurant": "Green Leaf North Central",
          "eta": "83.0 min",
          "delay_min": 83.1,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_107212",
          "city": "Mumbai",
          "restaurant": "Flavors of Biryani Co.",
          "eta": "71.0 min",
          "delay_min": 79.3,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_107261",
          "city": "Bengaluru",
          "restaurant": "Green Leaf Desserts Bowl",
          "eta": "57.0 min",
          "delay_min": 63.7,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_101876",
          "city": "Mumbai",
          "restaurant": "Green Leaf Healthy Kitchen",
          "eta": "75.0 min",
          "delay_min": 62.3,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_110004",
          "city": "Mumbai",
          "restaurant": "Baking Desserts Co.",
          "eta": "52.0 min",
          "delay_min": 61.8,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_119423",
          "city": "Pune",
          "restaurant": "Tandoori Biryani Court",
          "eta": "80.0 min",
          "delay_min": 61.5,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_102768",
          "city": "Delhi-NCR",
          "restaurant": "Green Leaf Burgers Kitchen",
          "eta": "53.0 min",
          "delay_min": 61.2,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_109065",
          "city": "Bengaluru",
          "restaurant": "Green Leaf Healthy Boutique",
          "eta": "33.0 min",
          "delay_min": 58.4,
          "risk_tier": "Severe",
          "main_driver": "Kitchen queuing overload",
          "recommended_action": "Throttle restaurant batch intake"
        },
        {
          "order_id": "ORD_124785",
          "city": "Mumbai",
          "restaurant": "The Spice North Grill",
          "eta": "87.0 min",
          "delay_min": 55.9,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        },
        {
          "order_id": "ORD_113609",
          "city": "Bengaluru",
          "restaurant": "Tandoori Pizza Kitchen",
          "eta": "82.0 min",
          "delay_min": 54.9,
          "risk_tier": "Severe",
          "main_driver": "Heavy road congestion",
          "recommended_action": "Adjust live ETA by +10 min"
        }
      ]
    }
  },
  "performance": {
    "trend": [
      {
        "date": "06-08",
        "orders": 286,
        "avg_delivery_time": 42.9,
        "avg_eta_error": 7.5,
        "late_delivery_rate": 22.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-09",
        "orders": 258,
        "avg_delivery_time": 42.4,
        "avg_eta_error": 7.3,
        "late_delivery_rate": 17.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-10",
        "orders": 283,
        "avg_delivery_time": 41.8,
        "avg_eta_error": 7.0,
        "late_delivery_rate": 18.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-11",
        "orders": 305,
        "avg_delivery_time": 44.8,
        "avg_eta_error": 7.3,
        "late_delivery_rate": 22.0,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-12",
        "orders": 276,
        "avg_delivery_time": 45.3,
        "avg_eta_error": 8.3,
        "late_delivery_rate": 26.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-13",
        "orders": 284,
        "avg_delivery_time": 44.5,
        "avg_eta_error": 8.5,
        "late_delivery_rate": 27.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-14",
        "orders": 288,
        "avg_delivery_time": 44.5,
        "avg_eta_error": 8.5,
        "late_delivery_rate": 29.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-15",
        "orders": 246,
        "avg_delivery_time": 43.1,
        "avg_eta_error": 6.9,
        "late_delivery_rate": 18.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-16",
        "orders": 283,
        "avg_delivery_time": 43.7,
        "avg_eta_error": 7.5,
        "late_delivery_rate": 21.6,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-17",
        "orders": 281,
        "avg_delivery_time": 42.8,
        "avg_eta_error": 7.4,
        "late_delivery_rate": 21.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-18",
        "orders": 292,
        "avg_delivery_time": 42.4,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 19.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-19",
        "orders": 259,
        "avg_delivery_time": 44.5,
        "avg_eta_error": 8.3,
        "late_delivery_rate": 26.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-20",
        "orders": 293,
        "avg_delivery_time": 44.0,
        "avg_eta_error": 8.1,
        "late_delivery_rate": 23.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-21",
        "orders": 275,
        "avg_delivery_time": 44.2,
        "avg_eta_error": 8.9,
        "late_delivery_rate": 30.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-22",
        "orders": 275,
        "avg_delivery_time": 43.5,
        "avg_eta_error": 7.8,
        "late_delivery_rate": 21.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-23",
        "orders": 272,
        "avg_delivery_time": 42.3,
        "avg_eta_error": 6.6,
        "late_delivery_rate": 18.0,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-24",
        "orders": 302,
        "avg_delivery_time": 43.7,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 19.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-25",
        "orders": 266,
        "avg_delivery_time": 43.0,
        "avg_eta_error": 7.6,
        "late_delivery_rate": 19.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-26",
        "orders": 249,
        "avg_delivery_time": 45.2,
        "avg_eta_error": 8.3,
        "late_delivery_rate": 26.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-27",
        "orders": 277,
        "avg_delivery_time": 43.9,
        "avg_eta_error": 8.2,
        "late_delivery_rate": 27.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-28",
        "orders": 273,
        "avg_delivery_time": 45.3,
        "avg_eta_error": 8.3,
        "late_delivery_rate": 27.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-29",
        "orders": 286,
        "avg_delivery_time": 44.1,
        "avg_eta_error": 7.1,
        "late_delivery_rate": 18.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "06-30",
        "orders": 303,
        "avg_delivery_time": 43.4,
        "avg_eta_error": 7.3,
        "late_delivery_rate": 20.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-01",
        "orders": 260,
        "avg_delivery_time": 43.3,
        "avg_eta_error": 7.3,
        "late_delivery_rate": 18.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-02",
        "orders": 284,
        "avg_delivery_time": 42.2,
        "avg_eta_error": 6.9,
        "late_delivery_rate": 20.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-03",
        "orders": 263,
        "avg_delivery_time": 44.2,
        "avg_eta_error": 7.8,
        "late_delivery_rate": 25.9,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-04",
        "orders": 273,
        "avg_delivery_time": 44.4,
        "avg_eta_error": 8.3,
        "late_delivery_rate": 23.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-05",
        "orders": 287,
        "avg_delivery_time": 44.6,
        "avg_eta_error": 8.4,
        "late_delivery_rate": 26.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-06",
        "orders": 233,
        "avg_delivery_time": 42.8,
        "avg_eta_error": 6.6,
        "late_delivery_rate": 17.6,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-07",
        "orders": 279,
        "avg_delivery_time": 43.9,
        "avg_eta_error": 7.3,
        "late_delivery_rate": 20.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-08",
        "orders": 264,
        "avg_delivery_time": 43.3,
        "avg_eta_error": 7.4,
        "late_delivery_rate": 21.6,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-09",
        "orders": 276,
        "avg_delivery_time": 42.8,
        "avg_eta_error": 6.9,
        "late_delivery_rate": 18.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-10",
        "orders": 245,
        "avg_delivery_time": 45.2,
        "avg_eta_error": 9.1,
        "late_delivery_rate": 27.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-11",
        "orders": 279,
        "avg_delivery_time": 44.4,
        "avg_eta_error": 8.7,
        "late_delivery_rate": 26.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-12",
        "orders": 287,
        "avg_delivery_time": 45.0,
        "avg_eta_error": 9.3,
        "late_delivery_rate": 30.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-13",
        "orders": 262,
        "avg_delivery_time": 42.9,
        "avg_eta_error": 6.7,
        "late_delivery_rate": 18.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-14",
        "orders": 252,
        "avg_delivery_time": 42.7,
        "avg_eta_error": 7.8,
        "late_delivery_rate": 24.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-15",
        "orders": 246,
        "avg_delivery_time": 42.3,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 19.9,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-16",
        "orders": 294,
        "avg_delivery_time": 41.9,
        "avg_eta_error": 6.7,
        "late_delivery_rate": 16.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-17",
        "orders": 283,
        "avg_delivery_time": 45.6,
        "avg_eta_error": 8.8,
        "late_delivery_rate": 24.4,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-18",
        "orders": 264,
        "avg_delivery_time": 44.4,
        "avg_eta_error": 9.2,
        "late_delivery_rate": 30.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-19",
        "orders": 269,
        "avg_delivery_time": 44.9,
        "avg_eta_error": 7.9,
        "late_delivery_rate": 24.9,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-20",
        "orders": 275,
        "avg_delivery_time": 42.7,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 21.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-21",
        "orders": 303,
        "avg_delivery_time": 43.3,
        "avg_eta_error": 7.0,
        "late_delivery_rate": 21.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-22",
        "orders": 254,
        "avg_delivery_time": 44.3,
        "avg_eta_error": 7.6,
        "late_delivery_rate": 21.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-23",
        "orders": 247,
        "avg_delivery_time": 42.5,
        "avg_eta_error": 6.7,
        "late_delivery_rate": 18.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-24",
        "orders": 292,
        "avg_delivery_time": 44.7,
        "avg_eta_error": 8.7,
        "late_delivery_rate": 26.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-25",
        "orders": 284,
        "avg_delivery_time": 44.7,
        "avg_eta_error": 8.4,
        "late_delivery_rate": 25.0,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-26",
        "orders": 268,
        "avg_delivery_time": 43.6,
        "avg_eta_error": 8.6,
        "late_delivery_rate": 28.0,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-27",
        "orders": 274,
        "avg_delivery_time": 42.1,
        "avg_eta_error": 6.3,
        "late_delivery_rate": 17.9,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-28",
        "orders": 263,
        "avg_delivery_time": 43.3,
        "avg_eta_error": 7.3,
        "late_delivery_rate": 18.6,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-29",
        "orders": 273,
        "avg_delivery_time": 43.3,
        "avg_eta_error": 7.5,
        "late_delivery_rate": 20.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-30",
        "orders": 269,
        "avg_delivery_time": 45.1,
        "avg_eta_error": 7.4,
        "late_delivery_rate": 21.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "07-31",
        "orders": 262,
        "avg_delivery_time": 46.2,
        "avg_eta_error": 9.2,
        "late_delivery_rate": 26.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-01",
        "orders": 284,
        "avg_delivery_time": 43.7,
        "avg_eta_error": 7.9,
        "late_delivery_rate": 22.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-02",
        "orders": 264,
        "avg_delivery_time": 45.2,
        "avg_eta_error": 9.4,
        "late_delivery_rate": 26.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-03",
        "orders": 264,
        "avg_delivery_time": 43.3,
        "avg_eta_error": 6.6,
        "late_delivery_rate": 19.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-04",
        "orders": 251,
        "avg_delivery_time": 40.9,
        "avg_eta_error": 6.6,
        "late_delivery_rate": 16.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-05",
        "orders": 260,
        "avg_delivery_time": 42.5,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 23.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-06",
        "orders": 289,
        "avg_delivery_time": 41.1,
        "avg_eta_error": 6.6,
        "late_delivery_rate": 16.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-07",
        "orders": 253,
        "avg_delivery_time": 44.4,
        "avg_eta_error": 8.1,
        "late_delivery_rate": 26.9,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-08",
        "orders": 258,
        "avg_delivery_time": 46.1,
        "avg_eta_error": 8.7,
        "late_delivery_rate": 29.5,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-09",
        "orders": 311,
        "avg_delivery_time": 44.8,
        "avg_eta_error": 7.8,
        "late_delivery_rate": 26.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-10",
        "orders": 253,
        "avg_delivery_time": 43.1,
        "avg_eta_error": 7.1,
        "late_delivery_rate": 17.4,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-11",
        "orders": 274,
        "avg_delivery_time": 42.9,
        "avg_eta_error": 6.6,
        "late_delivery_rate": 18.6,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-12",
        "orders": 282,
        "avg_delivery_time": 44.3,
        "avg_eta_error": 7.5,
        "late_delivery_rate": 21.6,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-13",
        "orders": 262,
        "avg_delivery_time": 42.6,
        "avg_eta_error": 6.8,
        "late_delivery_rate": 17.6,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-14",
        "orders": 264,
        "avg_delivery_time": 44.4,
        "avg_eta_error": 8.4,
        "late_delivery_rate": 23.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-15",
        "orders": 272,
        "avg_delivery_time": 44.1,
        "avg_eta_error": 8.9,
        "late_delivery_rate": 27.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-16",
        "orders": 277,
        "avg_delivery_time": 44.8,
        "avg_eta_error": 8.6,
        "late_delivery_rate": 24.9,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-17",
        "orders": 251,
        "avg_delivery_time": 42.4,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 17.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-18",
        "orders": 300,
        "avg_delivery_time": 43.6,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 19.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-19",
        "orders": 279,
        "avg_delivery_time": 42.4,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 18.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-20",
        "orders": 280,
        "avg_delivery_time": 43.1,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 20.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-21",
        "orders": 285,
        "avg_delivery_time": 43.7,
        "avg_eta_error": 8.2,
        "late_delivery_rate": 26.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-22",
        "orders": 266,
        "avg_delivery_time": 45.0,
        "avg_eta_error": 9.0,
        "late_delivery_rate": 31.2,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-23",
        "orders": 251,
        "avg_delivery_time": 44.4,
        "avg_eta_error": 8.9,
        "late_delivery_rate": 26.3,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-24",
        "orders": 289,
        "avg_delivery_time": 44.5,
        "avg_eta_error": 7.8,
        "late_delivery_rate": 23.9,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-25",
        "orders": 293,
        "avg_delivery_time": 42.9,
        "avg_eta_error": 6.7,
        "late_delivery_rate": 18.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-26",
        "orders": 289,
        "avg_delivery_time": 41.8,
        "avg_eta_error": 7.4,
        "late_delivery_rate": 17.6,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-27",
        "orders": 276,
        "avg_delivery_time": 44.6,
        "avg_eta_error": 7.9,
        "late_delivery_rate": 22.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-28",
        "orders": 256,
        "avg_delivery_time": 43.1,
        "avg_eta_error": 7.6,
        "late_delivery_rate": 22.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-29",
        "orders": 296,
        "avg_delivery_time": 46.2,
        "avg_eta_error": 8.5,
        "late_delivery_rate": 28.4,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-30",
        "orders": 275,
        "avg_delivery_time": 45.0,
        "avg_eta_error": 8.2,
        "late_delivery_rate": 28.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "08-31",
        "orders": 269,
        "avg_delivery_time": 42.0,
        "avg_eta_error": 6.6,
        "late_delivery_rate": 16.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "09-01",
        "orders": 270,
        "avg_delivery_time": 42.4,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 18.1,
        "cancellation_rate": 0.0
      },
      {
        "date": "09-02",
        "orders": 284,
        "avg_delivery_time": 42.9,
        "avg_eta_error": 6.9,
        "late_delivery_rate": 19.7,
        "cancellation_rate": 0.0
      },
      {
        "date": "09-03",
        "orders": 227,
        "avg_delivery_time": 44.4,
        "avg_eta_error": 7.2,
        "late_delivery_rate": 19.4,
        "cancellation_rate": 0.0
      },
      {
        "date": "09-04",
        "orders": 299,
        "avg_delivery_time": 44.5,
        "avg_eta_error": 8.7,
        "late_delivery_rate": 28.8,
        "cancellation_rate": 0.0
      },
      {
        "date": "09-05",
        "orders": 250,
        "avg_delivery_time": 45.1,
        "avg_eta_error": 8.7,
        "late_delivery_rate": 28.4,
        "cancellation_rate": 0.0
      }
    ],
    "hourly": [
      {
        "hour_of_day": 0,
        "order_volume": 350,
        "avg_delivery_time": 29.9,
        "avg_prep_time": 17.8,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 1,
        "order_volume": 176,
        "avg_delivery_time": 30.8,
        "avg_prep_time": 18.5,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 2,
        "order_volume": 85,
        "avg_delivery_time": 31.9,
        "avg_prep_time": 19.2,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 3,
        "order_volume": 48,
        "avg_delivery_time": 28.3,
        "avg_prep_time": 17.1,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 4,
        "order_volume": 59,
        "avg_delivery_time": 30.6,
        "avg_prep_time": 17.4,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 5,
        "order_volume": 115,
        "avg_delivery_time": 30.8,
        "avg_prep_time": 18.5,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 6,
        "order_volume": 181,
        "avg_delivery_time": 33.5,
        "avg_prep_time": 18.3,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 7,
        "order_volume": 472,
        "avg_delivery_time": 34.8,
        "avg_prep_time": 19.1,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 8,
        "order_volume": 903,
        "avg_delivery_time": 34.0,
        "avg_prep_time": 18.4,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 9,
        "order_volume": 1203,
        "avg_delivery_time": 33.3,
        "avg_prep_time": 18.4,
        "late_rate": 0.1
      },
      {
        "hour_of_day": 10,
        "order_volume": 1047,
        "avg_delivery_time": 33.4,
        "avg_prep_time": 18.5,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 11,
        "order_volume": 1458,
        "avg_delivery_time": 34.0,
        "avg_prep_time": 18.6,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 12,
        "order_volume": 2042,
        "avg_delivery_time": 48.9,
        "avg_prep_time": 23.4,
        "late_rate": 32.9
      },
      {
        "hour_of_day": 13,
        "order_volume": 2168,
        "avg_delivery_time": 48.7,
        "avg_prep_time": 23.4,
        "late_rate": 32.8
      },
      {
        "hour_of_day": 14,
        "order_volume": 1684,
        "avg_delivery_time": 48.1,
        "avg_prep_time": 23.1,
        "late_rate": 32.6
      },
      {
        "hour_of_day": 15,
        "order_volume": 920,
        "avg_delivery_time": 33.9,
        "avg_prep_time": 18.6,
        "late_rate": 0.0
      },
      {
        "hour_of_day": 16,
        "order_volume": 794,
        "avg_delivery_time": 40.0,
        "avg_prep_time": 18.5,
        "late_rate": 5.8
      },
      {
        "hour_of_day": 17,
        "order_volume": 972,
        "avg_delivery_time": 40.9,
        "avg_prep_time": 18.7,
        "late_rate": 4.4
      },
      {
        "hour_of_day": 18,
        "order_volume": 1488,
        "avg_delivery_time": 40.3,
        "avg_prep_time": 18.9,
        "late_rate": 4.6
      },
      {
        "hour_of_day": 19,
        "order_volume": 2156,
        "avg_delivery_time": 51.2,
        "avg_prep_time": 26.2,
        "late_rate": 44.2
      },
      {
        "hour_of_day": 20,
        "order_volume": 2467,
        "avg_delivery_time": 51.8,
        "avg_prep_time": 26.3,
        "late_rate": 45.0
      },
      {
        "hour_of_day": 21,
        "order_volume": 1999,
        "avg_delivery_time": 51.7,
        "avg_prep_time": 26.2,
        "late_rate": 46.5
      },
      {
        "hour_of_day": 22,
        "order_volume": 1082,
        "avg_delivery_time": 52.1,
        "avg_prep_time": 26.1,
        "late_rate": 45.1
      },
      {
        "hour_of_day": 23,
        "order_volume": 710,
        "avg_delivery_time": 34.1,
        "avg_prep_time": 18.8,
        "late_rate": 0.0
      }
    ],
    "sla": {
      "total_orders": 24579,
      "within_eta_pct": 41.3,
      "late_5m_pct": 37.0,
      "late_10m_pct": 22.7,
      "late_20m_pct": 6.7
    },
    "key_observations": "Late-delivery rate peaks at 46.5% around 21:00\u201322:00, closely coinciding with elevated restaurant preparation times (26.2 min average) and localized kitchen prep queuing."
  },
  "restaurants": [
    {
      "restaurant_id": "REST_1046",
      "restaurant": "Baking Desserts Co.",
      "city": "Mumbai",
      "cuisine": "Desserts & Cafe",
      "orders": 146,
      "avg_prep_time": 19.0,
      "avg_delivery_time": 43.7,
      "late_pct": 37.0,
      "cancellation_pct": 0.7,
      "risk_score": 51.0
    },
    {
      "restaurant_id": "REST_1057",
      "restaurant": "Royal Pizza Grill",
      "city": "Mumbai",
      "cuisine": "Pizza & Italian",
      "orders": 152,
      "avg_prep_time": 28.1,
      "avg_delivery_time": 54.5,
      "late_pct": 36.8,
      "cancellation_pct": 3.9,
      "risk_score": 49.0
    },
    {
      "restaurant_id": "REST_1008",
      "restaurant": "Golden North Express",
      "city": "Bengaluru",
      "cuisine": "North Indian",
      "orders": 170,
      "avg_prep_time": 27.4,
      "avg_delivery_time": 51.6,
      "late_pct": 36.5,
      "cancellation_pct": 4.1,
      "risk_score": 50.0
    },
    {
      "restaurant_id": "REST_1062",
      "restaurant": "Biryani Pizza Court",
      "city": "Mumbai",
      "cuisine": "Pizza & Italian",
      "orders": 121,
      "avg_prep_time": 30.2,
      "avg_delivery_time": 55.1,
      "late_pct": 34.7,
      "cancellation_pct": 0.8,
      "risk_score": 48.0
    },
    {
      "restaurant_id": "REST_1013",
      "restaurant": "Biryani North Bowl",
      "city": "Bengaluru",
      "cuisine": "North Indian",
      "orders": 151,
      "avg_prep_time": 28.7,
      "avg_delivery_time": 54.0,
      "late_pct": 34.4,
      "cancellation_pct": 0.7,
      "risk_score": 41.0
    },
    {
      "restaurant_id": "REST_1054",
      "restaurant": "Flavors of Asian Kitchen",
      "city": "Mumbai",
      "cuisine": "Asian & Chinese",
      "orders": 170,
      "avg_prep_time": 23.2,
      "avg_delivery_time": 49.2,
      "late_pct": 34.1,
      "cancellation_pct": 2.4,
      "risk_score": 42.0
    },
    {
      "restaurant_id": "REST_1141",
      "restaurant": "Curry Biryani House",
      "city": "Pune",
      "cuisine": "Biryani & Kebabs",
      "orders": 153,
      "avg_prep_time": 32.6,
      "avg_delivery_time": 55.5,
      "late_pct": 33.3,
      "cancellation_pct": 2.6,
      "risk_score": 45.0
    },
    {
      "restaurant_id": "REST_1037",
      "restaurant": "Tandoori Desserts Central",
      "city": "Mumbai",
      "cuisine": "Desserts & Cafe",
      "orders": 169,
      "avg_prep_time": 17.7,
      "avg_delivery_time": 44.6,
      "late_pct": 32.5,
      "cancellation_pct": 2.4,
      "risk_score": 39.0
    },
    {
      "restaurant_id": "REST_1039",
      "restaurant": "The Spice Desserts Grill",
      "city": "Mumbai",
      "cuisine": "Desserts & Cafe",
      "orders": 167,
      "avg_prep_time": 18.5,
      "avg_delivery_time": 43.3,
      "late_pct": 32.3,
      "cancellation_pct": 1.2,
      "risk_score": 45.0
    },
    {
      "restaurant_id": "REST_1159",
      "restaurant": "Biryani North Junction",
      "city": "Pune",
      "cuisine": "North Indian",
      "orders": 161,
      "avg_prep_time": 32.6,
      "avg_delivery_time": 55.0,
      "late_pct": 31.7,
      "cancellation_pct": 2.5,
      "risk_score": 40.0
    },
    {
      "restaurant_id": "REST_1038",
      "restaurant": "Urban North Grill",
      "city": "Mumbai",
      "cuisine": "North Indian",
      "orders": 156,
      "avg_prep_time": 30.2,
      "avg_delivery_time": 55.0,
      "late_pct": 30.8,
      "cancellation_pct": 1.9,
      "risk_score": 40.0
    },
    {
      "restaurant_id": "REST_1113",
      "restaurant": "Curry Burgers Point",
      "city": "Hyderabad",
      "cuisine": "Burgers & Fast Food",
      "orders": 135,
      "avg_prep_time": 20.3,
      "avg_delivery_time": 41.5,
      "late_pct": 30.4,
      "cancellation_pct": 2.2,
      "risk_score": 40.0
    },
    {
      "restaurant_id": "REST_1059",
      "restaurant": "Green Leaf South Club",
      "city": "Mumbai",
      "cuisine": "South Indian",
      "orders": 138,
      "avg_prep_time": 20.7,
      "avg_delivery_time": 46.4,
      "late_pct": 29.7,
      "cancellation_pct": 2.2,
      "risk_score": 39.0
    },
    {
      "restaurant_id": "REST_1025",
      "restaurant": "Biryani Pizza Bowl",
      "city": "Bengaluru",
      "cuisine": "Pizza & Italian",
      "orders": 142,
      "avg_prep_time": 27.8,
      "avg_delivery_time": 50.8,
      "late_pct": 29.6,
      "cancellation_pct": 4.9,
      "risk_score": 45.0
    },
    {
      "restaurant_id": "REST_1041",
      "restaurant": "Coastal Burgers Bowl",
      "city": "Mumbai",
      "cuisine": "Burgers & Fast Food",
      "orders": 159,
      "avg_prep_time": 19.7,
      "avg_delivery_time": 43.9,
      "late_pct": 29.6,
      "cancellation_pct": 0.0,
      "risk_score": 40.0
    },
    {
      "restaurant_id": "REST_1032",
      "restaurant": "Baking Burgers Co.",
      "city": "Bengaluru",
      "cuisine": "Burgers & Fast Food",
      "orders": 149,
      "avg_prep_time": 17.8,
      "avg_delivery_time": 40.3,
      "late_pct": 29.5,
      "cancellation_pct": 1.3,
      "risk_score": 42.0
    },
    {
      "restaurant_id": "REST_1015",
      "restaurant": "The Spice Asian Bistro",
      "city": "Bengaluru",
      "cuisine": "Asian & Chinese",
      "orders": 136,
      "avg_prep_time": 19.8,
      "avg_delivery_time": 43.3,
      "late_pct": 29.4,
      "cancellation_pct": 0.0,
      "risk_score": 37.0
    },
    {
      "restaurant_id": "REST_1150",
      "restaurant": "Midnight Burgers Express",
      "city": "Pune",
      "cuisine": "Burgers & Fast Food",
      "orders": 153,
      "avg_prep_time": 16.6,
      "avg_delivery_time": 38.5,
      "late_pct": 29.4,
      "cancellation_pct": 2.0,
      "risk_score": 39.0
    },
    {
      "restaurant_id": "REST_1026",
      "restaurant": "Curry Burgers Junction",
      "city": "Bengaluru",
      "cuisine": "Burgers & Fast Food",
      "orders": 150,
      "avg_prep_time": 18.1,
      "avg_delivery_time": 41.3,
      "late_pct": 29.3,
      "cancellation_pct": 2.7,
      "risk_score": 39.0
    },
    {
      "restaurant_id": "REST_1036",
      "restaurant": "Green Leaf Burgers Grill",
      "city": "Mumbai",
      "cuisine": "Burgers & Fast Food",
      "orders": 157,
      "avg_prep_time": 20.1,
      "avg_delivery_time": 44.2,
      "late_pct": 29.3,
      "cancellation_pct": 0.6,
      "risk_score": 38.0
    },
    {
      "restaurant_id": "REST_1003",
      "restaurant": "Tandoori Burgers Bowl",
      "city": "Bengaluru",
      "cuisine": "Burgers & Fast Food",
      "orders": 154,
      "avg_prep_time": 17.2,
      "avg_delivery_time": 39.3,
      "late_pct": 29.2,
      "cancellation_pct": 0.6,
      "risk_score": 41.0
    },
    {
      "restaurant_id": "REST_1112",
      "restaurant": "Tandoori Biryani Bistro",
      "city": "Hyderabad",
      "cuisine": "Biryani & Kebabs",
      "orders": 137,
      "avg_prep_time": 26.7,
      "avg_delivery_time": 48.2,
      "late_pct": 29.2,
      "cancellation_pct": 0.7,
      "risk_score": 43.0
    },
    {
      "restaurant_id": "REST_1060",
      "restaurant": "Green Leaf Burgers Bowl",
      "city": "Mumbai",
      "cuisine": "Burgers & Fast Food",
      "orders": 131,
      "avg_prep_time": 21.7,
      "avg_delivery_time": 46.4,
      "late_pct": 29.0,
      "cancellation_pct": 1.5,
      "risk_score": 35.0
    },
    {
      "restaurant_id": "REST_1045",
      "restaurant": "The Spice Healthy House",
      "city": "Mumbai",
      "cuisine": "Healthy & Bowls",
      "orders": 159,
      "avg_prep_time": 21.1,
      "avg_delivery_time": 45.0,
      "late_pct": 28.9,
      "cancellation_pct": 0.6,
      "risk_score": 40.0
    },
    {
      "restaurant_id": "REST_1064",
      "restaurant": "The Spice South Corner",
      "city": "Mumbai",
      "cuisine": "South Indian",
      "orders": 159,
      "avg_prep_time": 20.5,
      "avg_delivery_time": 43.9,
      "late_pct": 28.9,
      "cancellation_pct": 1.9,
      "risk_score": 39.0
    },
    {
      "restaurant_id": "REST_1069",
      "restaurant": "Tandoori Healthy Club",
      "city": "Mumbai",
      "cuisine": "Healthy & Bowls",
      "orders": 152,
      "avg_prep_time": 19.3,
      "avg_delivery_time": 44.0,
      "late_pct": 28.9,
      "cancellation_pct": 2.0,
      "risk_score": 38.0
    },
    {
      "restaurant_id": "REST_1014",
      "restaurant": "Green Leaf Healthy Boutique",
      "city": "Bengaluru",
      "cuisine": "Healthy & Bowls",
      "orders": 156,
      "avg_prep_time": 16.9,
      "avg_delivery_time": 39.5,
      "late_pct": 28.8,
      "cancellation_pct": 0.6,
      "risk_score": 41.0
    },
    {
      "restaurant_id": "REST_1157",
      "restaurant": "Green Leaf Desserts House",
      "city": "Pune",
      "cuisine": "Desserts & Cafe",
      "orders": 167,
      "avg_prep_time": 16.2,
      "avg_delivery_time": 38.6,
      "late_pct": 28.7,
      "cancellation_pct": 1.8,
      "risk_score": 39.0
    },
    {
      "restaurant_id": "REST_1109",
      "restaurant": "Green Leaf Healthy Central",
      "city": "Hyderabad",
      "cuisine": "Healthy & Bowls",
      "orders": 161,
      "avg_prep_time": 20.7,
      "avg_delivery_time": 41.7,
      "late_pct": 28.6,
      "cancellation_pct": 0.6,
      "risk_score": 40.0
    },
    {
      "restaurant_id": "REST_1144",
      "restaurant": "Baking Healthy Trattoria",
      "city": "Pune",
      "cuisine": "Healthy & Bowls",
      "orders": 147,
      "avg_prep_time": 20.0,
      "avg_delivery_time": 42.5,
      "late_pct": 28.6,
      "cancellation_pct": 2.0,
      "risk_score": 39.0
    },
    {
      "restaurant_id": "REST_1108",
      "restaurant": "Wok Healthy Bistro",
      "city": "Hyderabad",
      "cuisine": "Healthy & Bowls",
      "orders": 139,
      "avg_prep_time": 16.8,
      "avg_delivery_time": 37.3,
      "late_pct": 28.1,
      "cancellation_pct": 2.2,
      "risk_score": 34.0
    },
    {
      "restaurant_id": "REST_1098",
      "restaurant": "Tandoori South Co.",
      "city": "Delhi-NCR",
      "cuisine": "South Indian",
      "orders": 143,
      "avg_prep_time": 20.9,
      "avg_delivery_time": 40.2,
      "late_pct": 28.0,
      "cancellation_pct": 1.4,
      "risk_score": 44.0
    },
    {
      "restaurant_id": "REST_1006",
      "restaurant": "Urban Asian Express",
      "city": "Bengaluru",
      "cuisine": "Asian & Chinese",
      "orders": 145,
      "avg_prep_time": 20.8,
      "avg_delivery_time": 44.8,
      "late_pct": 27.6,
      "cancellation_pct": 0.0,
      "risk_score": 36.0
    },
    {
      "restaurant_id": "REST_1051",
      "restaurant": "Flavors of Biryani Co.",
      "city": "Mumbai",
      "cuisine": "Biryani & Kebabs",
      "orders": 156,
      "avg_prep_time": 33.4,
      "avg_delivery_time": 57.8,
      "late_pct": 27.6,
      "cancellation_pct": 3.8,
      "risk_score": 37.0
    },
    {
      "restaurant_id": "REST_1030",
      "restaurant": "Curry South Grill",
      "city": "Bengaluru",
      "cuisine": "South Indian",
      "orders": 160,
      "avg_prep_time": 23.2,
      "avg_delivery_time": 45.9,
      "late_pct": 27.5,
      "cancellation_pct": 1.3,
      "risk_score": 43.0
    },
    {
      "restaurant_id": "REST_1118",
      "restaurant": "The Spice North Junction",
      "city": "Hyderabad",
      "cuisine": "North Indian",
      "orders": 142,
      "avg_prep_time": 33.4,
      "avg_delivery_time": 53.4,
      "late_pct": 27.5,
      "cancellation_pct": 5.6,
      "risk_score": 43.0
    },
    {
      "restaurant_id": "REST_1042",
      "restaurant": "Olive Pizza Bistro",
      "city": "Mumbai",
      "cuisine": "Pizza & Italian",
      "orders": 135,
      "avg_prep_time": 26.1,
      "avg_delivery_time": 52.4,
      "late_pct": 27.4,
      "cancellation_pct": 3.0,
      "risk_score": 34.0
    },
    {
      "restaurant_id": "REST_1080",
      "restaurant": "Curry Pizza Bistro",
      "city": "Delhi-NCR",
      "cuisine": "Pizza & Italian",
      "orders": 154,
      "avg_prep_time": 27.4,
      "avg_delivery_time": 46.7,
      "late_pct": 27.3,
      "cancellation_pct": 1.9,
      "risk_score": 39.0
    },
    {
      "restaurant_id": "REST_1123",
      "restaurant": "Tandoori Asian Corner",
      "city": "Hyderabad",
      "cuisine": "Asian & Chinese",
      "orders": 132,
      "avg_prep_time": 22.3,
      "avg_delivery_time": 44.0,
      "late_pct": 27.3,
      "cancellation_pct": 2.3,
      "risk_score": 36.0
    },
    {
      "restaurant_id": "REST_1022",
      "restaurant": "Green Leaf Desserts Bowl",
      "city": "Bengaluru",
      "cuisine": "Desserts & Cafe",
      "orders": 147,
      "avg_prep_time": 14.6,
      "avg_delivery_time": 37.8,
      "late_pct": 27.2,
      "cancellation_pct": 0.7,
      "risk_score": 37.0
    },
    {
      "restaurant_id": "REST_1063",
      "restaurant": "Urban Biryani Express",
      "city": "Mumbai",
      "cuisine": "Biryani & Kebabs",
      "orders": 163,
      "avg_prep_time": 27.6,
      "avg_delivery_time": 52.9,
      "late_pct": 27.0,
      "cancellation_pct": 3.1,
      "risk_score": 36.0
    },
    {
      "restaurant_id": "REST_1130",
      "restaurant": "Tandoori Healthy Club",
      "city": "Hyderabad",
      "cuisine": "Healthy & Bowls",
      "orders": 159,
      "avg_prep_time": 15.8,
      "avg_delivery_time": 36.8,
      "late_pct": 27.0,
      "cancellation_pct": 0.6,
      "risk_score": 37.0
    },
    {
      "restaurant_id": "REST_1052",
      "restaurant": "Green Leaf Asian Bistro",
      "city": "Mumbai",
      "cuisine": "Asian & Chinese",
      "orders": 167,
      "avg_prep_time": 27.0,
      "avg_delivery_time": 51.7,
      "late_pct": 26.9,
      "cancellation_pct": 2.4,
      "risk_score": 37.0
    },
    {
      "restaurant_id": "REST_1094",
      "restaurant": "Biryani Desserts Court",
      "city": "Delhi-NCR",
      "cuisine": "Desserts & Cafe",
      "orders": 134,
      "avg_prep_time": 14.9,
      "avg_delivery_time": 35.3,
      "late_pct": 26.9,
      "cancellation_pct": 0.7,
      "risk_score": 37.0
    },
    {
      "restaurant_id": "REST_1127",
      "restaurant": "Royal Pizza Bowl",
      "city": "Hyderabad",
      "cuisine": "Pizza & Italian",
      "orders": 160,
      "avg_prep_time": 25.8,
      "avg_delivery_time": 46.8,
      "late_pct": 26.9,
      "cancellation_pct": 3.1,
      "risk_score": 36.0
    },
    {
      "restaurant_id": "REST_1043",
      "restaurant": "The Spice North Grill",
      "city": "Mumbai",
      "cuisine": "North Indian",
      "orders": 156,
      "avg_prep_time": 22.4,
      "avg_delivery_time": 46.5,
      "late_pct": 26.3,
      "cancellation_pct": 1.3,
      "risk_score": 33.0
    },
    {
      "restaurant_id": "REST_1088",
      "restaurant": "Coastal Healthy Court",
      "city": "Delhi-NCR",
      "cuisine": "Healthy & Bowls",
      "orders": 160,
      "avg_prep_time": 16.0,
      "avg_delivery_time": 34.9,
      "late_pct": 26.3,
      "cancellation_pct": 0.6,
      "risk_score": 37.0
    },
    {
      "restaurant_id": "REST_1040",
      "restaurant": "Golden Biryani Court",
      "city": "Mumbai",
      "cuisine": "Biryani & Kebabs",
      "orders": 142,
      "avg_prep_time": 28.3,
      "avg_delivery_time": 54.7,
      "late_pct": 26.1,
      "cancellation_pct": 2.8,
      "risk_score": 29.0
    },
    {
      "restaurant_id": "REST_1067",
      "restaurant": "Curry Healthy Boutique",
      "city": "Mumbai",
      "cuisine": "Healthy & Bowls",
      "orders": 134,
      "avg_prep_time": 15.8,
      "avg_delivery_time": 40.2,
      "late_pct": 26.1,
      "cancellation_pct": 0.7,
      "risk_score": 35.0
    },
    {
      "restaurant_id": "REST_1128",
      "restaurant": "Signature Healthy Bowl",
      "city": "Hyderabad",
      "cuisine": "Healthy & Bowls",
      "orders": 165,
      "avg_prep_time": 19.0,
      "avg_delivery_time": 40.0,
      "late_pct": 26.1,
      "cancellation_pct": 1.2,
      "risk_score": 39.0
    }
  ],
  "cities": [
    {
      "city_id": "BLR",
      "city": "Bengaluru",
      "tier": "Tier-1",
      "orders": 5249,
      "late_pct": 23.9,
      "avg_delivery_time": 46.2,
      "avg_distance_km": 4.4,
      "avg_prep_time": 23.2,
      "cancellation_pct": 1.6
    },
    {
      "city_id": "HYD",
      "city": "Hyderabad",
      "tier": "Tier-1",
      "orders": 5142,
      "late_pct": 23.0,
      "avg_delivery_time": 41.8,
      "avg_distance_km": 4.5,
      "avg_prep_time": 21.0,
      "cancellation_pct": 1.7
    },
    {
      "city_id": "BOM",
      "city": "Mumbai",
      "tier": "Tier-1",
      "orders": 5131,
      "late_pct": 26.4,
      "avg_delivery_time": 47.6,
      "avg_distance_km": 4.5,
      "avg_prep_time": 22.8,
      "cancellation_pct": 1.7
    },
    {
      "city_id": "DEL",
      "city": "Delhi-NCR",
      "tier": "Tier-1",
      "orders": 4945,
      "late_pct": 20.0,
      "avg_delivery_time": 41.4,
      "avg_distance_km": 4.4,
      "avg_prep_time": 22.4,
      "cancellation_pct": 1.4
    },
    {
      "city_id": "PNQ",
      "city": "Pune",
      "tier": "Tier-2",
      "orders": 4533,
      "late_pct": 23.1,
      "avg_delivery_time": 43.1,
      "avg_distance_km": 4.4,
      "avg_prep_time": 21.8,
      "cancellation_pct": 1.9
    }
  ],
  "cf_sample": [
    {
      "order_id": "ORD_109370",
      "city": "Bengaluru",
      "restaurant": "Green Leaf North Central",
      "cuisine": "North Indian",
      "prep_time": 43.6,
      "baseline_prep_time": 28.3,
      "estimated_delivery_time": 83.2,
      "actual_delivery_time": 166.3,
      "delay_min": 83.1,
      "distance_km": 12.5,
      "traffic_level": "Severe",
      "traffic_multiplier": 2.31,
      "available_partners_nearby": 0,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_107212",
      "city": "Mumbai",
      "restaurant": "Flavors of Biryani Co.",
      "cuisine": "Biryani & Kebabs",
      "prep_time": 64.2,
      "baseline_prep_time": 29.1,
      "estimated_delivery_time": 71.2,
      "actual_delivery_time": 150.5,
      "delay_min": 79.3,
      "distance_km": 8.4,
      "traffic_level": "Severe",
      "traffic_multiplier": 2.41,
      "available_partners_nearby": 1,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_107261",
      "city": "Bengaluru",
      "restaurant": "Green Leaf Desserts Bowl",
      "cuisine": "Desserts & Cafe",
      "prep_time": 33.7,
      "baseline_prep_time": 10.3,
      "estimated_delivery_time": 56.8,
      "actual_delivery_time": 120.5,
      "delay_min": 63.7,
      "distance_km": 10.3,
      "traffic_level": "Moderate",
      "traffic_multiplier": 1.97,
      "available_partners_nearby": 2,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_101876",
      "city": "Mumbai",
      "restaurant": "Green Leaf Healthy Kitchen",
      "cuisine": "Healthy & Bowls",
      "prep_time": 20.2,
      "baseline_prep_time": 16.7,
      "estimated_delivery_time": 75.1,
      "actual_delivery_time": 137.4,
      "delay_min": 62.3,
      "distance_km": 12.3,
      "traffic_level": "High",
      "traffic_multiplier": 2.33,
      "available_partners_nearby": 1,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_110004",
      "city": "Mumbai",
      "restaurant": "Baking Desserts Co.",
      "cuisine": "Desserts & Cafe",
      "prep_time": 40.3,
      "baseline_prep_time": 13.1,
      "estimated_delivery_time": 51.5,
      "actual_delivery_time": 113.3,
      "delay_min": 61.8,
      "distance_km": 7.5,
      "traffic_level": "High",
      "traffic_multiplier": 2.38,
      "available_partners_nearby": 1,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_119423",
      "city": "Pune",
      "restaurant": "Tandoori Biryani Court",
      "cuisine": "Biryani & Kebabs",
      "prep_time": 22.1,
      "baseline_prep_time": 23.4,
      "estimated_delivery_time": 80.4,
      "actual_delivery_time": 141.9,
      "delay_min": 61.5,
      "distance_km": 14.5,
      "traffic_level": "High",
      "traffic_multiplier": 2.03,
      "available_partners_nearby": 2,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_102768",
      "city": "Delhi-NCR",
      "restaurant": "Green Leaf Burgers Kitchen",
      "cuisine": "Burgers & Fast Food",
      "prep_time": 31.7,
      "baseline_prep_time": 12.0,
      "estimated_delivery_time": 52.9,
      "actual_delivery_time": 114.1,
      "delay_min": 61.2,
      "distance_km": 10.8,
      "traffic_level": "Moderate",
      "traffic_multiplier": 2.27,
      "available_partners_nearby": 2,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_109065",
      "city": "Bengaluru",
      "restaurant": "Green Leaf Healthy Boutique",
      "cuisine": "Healthy & Bowls",
      "prep_time": 60.2,
      "baseline_prep_time": 12.0,
      "estimated_delivery_time": 33.2,
      "actual_delivery_time": 91.6,
      "delay_min": 58.4,
      "distance_km": 3.7,
      "traffic_level": "Moderate",
      "traffic_multiplier": 1.85,
      "available_partners_nearby": 0,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_124785",
      "city": "Mumbai",
      "restaurant": "The Spice North Grill",
      "cuisine": "North Indian",
      "prep_time": 26.4,
      "baseline_prep_time": 19.0,
      "estimated_delivery_time": 86.6,
      "actual_delivery_time": 142.5,
      "delay_min": 55.9,
      "distance_km": 14.5,
      "traffic_level": "High",
      "traffic_multiplier": 2.35,
      "available_partners_nearby": 2,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_113609",
      "city": "Bengaluru",
      "restaurant": "Tandoori Pizza Kitchen",
      "cuisine": "Pizza & Italian",
      "prep_time": 43.4,
      "baseline_prep_time": 27.4,
      "estimated_delivery_time": 81.5,
      "actual_delivery_time": 136.4,
      "delay_min": 54.9,
      "distance_km": 12.3,
      "traffic_level": "Moderate",
      "traffic_multiplier": 1.77,
      "available_partners_nearby": 3,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_108722",
      "city": "Mumbai",
      "restaurant": "Olive Pizza Bistro",
      "cuisine": "Pizza & Italian",
      "prep_time": 38.7,
      "baseline_prep_time": 22.5,
      "estimated_delivery_time": 68.4,
      "actual_delivery_time": 122.9,
      "delay_min": 54.5,
      "distance_km": 9.3,
      "traffic_level": "High",
      "traffic_multiplier": 2.16,
      "available_partners_nearby": 1,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_119823",
      "city": "Mumbai",
      "restaurant": "Tandoori North Junction",
      "cuisine": "North Indian",
      "prep_time": 48.4,
      "baseline_prep_time": 20.9,
      "estimated_delivery_time": 62.2,
      "actual_delivery_time": 116.4,
      "delay_min": 54.2,
      "distance_km": 8.2,
      "traffic_level": "High",
      "traffic_multiplier": 2.46,
      "available_partners_nearby": 2,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_113786",
      "city": "Delhi-NCR",
      "restaurant": "Green Leaf Burgers Central",
      "cuisine": "Burgers & Fast Food",
      "prep_time": 39.9,
      "baseline_prep_time": 14.0,
      "estimated_delivery_time": 43.9,
      "actual_delivery_time": 98.1,
      "delay_min": 54.2,
      "distance_km": 7.3,
      "traffic_level": "Moderate",
      "traffic_multiplier": 2.34,
      "available_partners_nearby": 1,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_115468",
      "city": "Mumbai",
      "restaurant": "Royal Pizza Grill",
      "cuisine": "Pizza & Italian",
      "prep_time": 41.4,
      "baseline_prep_time": 22.6,
      "estimated_delivery_time": 57.6,
      "actual_delivery_time": 111.6,
      "delay_min": 54.0,
      "distance_km": 6.7,
      "traffic_level": "Moderate",
      "traffic_multiplier": 2.48,
      "available_partners_nearby": 7,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_123376",
      "city": "Bengaluru",
      "restaurant": "Green Leaf Healthy Boutique",
      "cuisine": "Healthy & Bowls",
      "prep_time": 55.6,
      "baseline_prep_time": 12.0,
      "estimated_delivery_time": 33.2,
      "actual_delivery_time": 87.1,
      "delay_min": 53.9,
      "distance_km": 3.7,
      "traffic_level": "High",
      "traffic_multiplier": 1.84,
      "available_partners_nearby": 2,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_103237",
      "city": "Pune",
      "restaurant": "Curry Biryani House",
      "cuisine": "Biryani & Kebabs",
      "prep_time": 38.3,
      "baseline_prep_time": 27.5,
      "estimated_delivery_time": 71.1,
      "actual_delivery_time": 123.4,
      "delay_min": 52.3,
      "distance_km": 10.6,
      "traffic_level": "Moderate",
      "traffic_multiplier": 1.92,
      "available_partners_nearby": 2,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_124117",
      "city": "Mumbai",
      "restaurant": "Green Leaf Asian Bistro",
      "cuisine": "Asian & Chinese",
      "prep_time": 52.4,
      "baseline_prep_time": 22.6,
      "estimated_delivery_time": 75.6,
      "actual_delivery_time": 127.6,
      "delay_min": 52.0,
      "distance_km": 11.0,
      "traffic_level": "High",
      "traffic_multiplier": 2.47,
      "available_partners_nearby": 4,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_112459",
      "city": "Hyderabad",
      "restaurant": "Signature North Kitchen",
      "cuisine": "North Indian",
      "prep_time": 33.0,
      "baseline_prep_time": 24.2,
      "estimated_delivery_time": 73.6,
      "actual_delivery_time": 125.4,
      "delay_min": 51.8,
      "distance_km": 12.9,
      "traffic_level": "Severe",
      "traffic_multiplier": 1.82,
      "available_partners_nearby": 1,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_123796",
      "city": "Mumbai",
      "restaurant": "Tandoori Desserts Central",
      "cuisine": "Desserts & Cafe",
      "prep_time": 17.7,
      "baseline_prep_time": 13.7,
      "estimated_delivery_time": 60.4,
      "actual_delivery_time": 111.9,
      "delay_min": 51.5,
      "distance_km": 9.5,
      "traffic_level": "Severe",
      "traffic_multiplier": 2.45,
      "available_partners_nearby": 5,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_108408",
      "city": "Mumbai",
      "restaurant": "Biryani Pizza Court",
      "cuisine": "Pizza & Italian",
      "prep_time": 49.3,
      "baseline_prep_time": 24.6,
      "estimated_delivery_time": 67.1,
      "actual_delivery_time": 118.4,
      "delay_min": 51.3,
      "distance_km": 8.5,
      "traffic_level": "Moderate",
      "traffic_multiplier": 2.46,
      "available_partners_nearby": 3,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_115918",
      "city": "Mumbai",
      "restaurant": "Midnight South Kitchen",
      "cuisine": "South Indian",
      "prep_time": 56.7,
      "baseline_prep_time": 14.4,
      "estimated_delivery_time": 53.2,
      "actual_delivery_time": 104.1,
      "delay_min": 50.9,
      "distance_km": 7.6,
      "traffic_level": "High",
      "traffic_multiplier": 2.4,
      "available_partners_nearby": 5,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_103781",
      "city": "Bengaluru",
      "restaurant": "Curry South Grill",
      "cuisine": "South Indian",
      "prep_time": 66.3,
      "baseline_prep_time": 17.7,
      "estimated_delivery_time": 31.2,
      "actual_delivery_time": 81.9,
      "delay_min": 50.7,
      "distance_km": 1.7,
      "traffic_level": "Severe",
      "traffic_multiplier": 2.07,
      "available_partners_nearby": 2,
      "delay_driver": "Kitchen"
    },
    {
      "order_id": "ORD_106887",
      "city": "Mumbai",
      "restaurant": "Green Leaf South Club",
      "cuisine": "South Indian",
      "prep_time": 27.8,
      "baseline_prep_time": 16.3,
      "estimated_delivery_time": 68.0,
      "actual_delivery_time": 118.0,
      "delay_min": 50.0,
      "distance_km": 10.7,
      "traffic_level": "High",
      "traffic_multiplier": 2.42,
      "available_partners_nearby": 0,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_124045",
      "city": "Bengaluru",
      "restaurant": "The Spice Asian Bistro",
      "cuisine": "Asian & Chinese",
      "prep_time": 24.8,
      "baseline_prep_time": 15.8,
      "estimated_delivery_time": 62.3,
      "actual_delivery_time": 111.8,
      "delay_min": 49.5,
      "distance_km": 10.3,
      "traffic_level": "High",
      "traffic_multiplier": 2.13,
      "available_partners_nearby": 7,
      "delay_driver": "Traffic"
    },
    {
      "order_id": "ORD_100730",
      "city": "Pune",
      "restaurant": "Midnight Biryani Court",
      "cuisine": "Biryani & Kebabs",
      "prep_time": 60.1,
      "baseline_prep_time": 26.7,
      "estimated_delivery_time": 70.6,
      "actual_delivery_time": 119.9,
      "delay_min": 49.3,
      "distance_km": 10.7,
      "traffic_level": "High",
      "traffic_multiplier": 1.93,
      "available_partners_nearby": 4,
      "delay_driver": "Kitchen"
    }
  ],
  "cf_agg": {
    "network_total_orders": 24579,
    "network_late_orders": 5572,
    "network_total_delay_minutes": 101024.0,
    "baseline_late_rate_pct": 22.7,
    "scenarios": [
      {
        "id": "kitchen_mitigation",
        "title": "Kitchen Queue Throttling",
        "intervention": "Throttle order intake when active queue > 15 orders; enforce +8 min buffer",
        "orders_saved_from_late": 2117,
        "delay_minutes_prevented": 32328.0,
        "projected_late_rate_pct": 14.1,
        "relative_reduction_pct": 38.0
      },
      {
        "id": "partner_dispatch",
        "title": "Predictive Rider Pre-Dispatch",
        "intervention": "Dispatch nearest delivery partner 5 mins prior to predicted food ready time",
        "orders_saved_from_late": 1225,
        "delay_minutes_prevented": 19195.0,
        "projected_late_rate_pct": 17.7,
        "relative_reduction_pct": 22.0
      },
      {
        "id": "traffic_reroute",
        "title": "Dynamic Traffic Corridor Routing",
        "intervention": "Automated micro-corridor rerouting during peak evening rain/monsoon",
        "orders_saved_from_late": 891,
        "delay_minutes_prevented": 14143.0,
        "projected_late_rate_pct": 19.0,
        "relative_reduction_pct": 16.0
      },
      {
        "id": "combined_bundle",
        "title": "Integrated Operational Bundle",
        "intervention": "Full system synchronization: Kitchen throttling + Rider pre-dispatch + Smart corridor routing",
        "orders_saved_from_late": 3008,
        "delay_minutes_prevented": 49502.0,
        "projected_late_rate_pct": 10.4,
        "relative_reduction_pct": 54.0
      }
    ]
  },
  "ab_exp": {
    "experiment_id": "EXP_ETA_V2",
    "title": "ML-Adjusted ETA vs Standard Heuristic ETA",
    "description": "Evaluation of dynamic machine-learning ETA prediction incorporating kitchen queue load and localized traffic vs traditional static distance heuristics.",
    "status": "Completed \u00b7 30-Day Evaluation Window",
    "sample_size": {
      "control": 1024,
      "treatment": 1034,
      "total": 2058
    },
    "metrics": [
      {
        "metric_name": "Average ETA Error",
        "unit": "min",
        "lower_is_better": true,
        "control_val": 8.08,
        "treatment_val": 2.93,
        "difference": -5.14,
        "ci_lower": -5.67,
        "ci_upper": -4.61,
        "p_value": 0.0,
        "is_significant": true
      },
      {
        "metric_name": "Late Delivery Rate (>10m)",
        "unit": "%",
        "lower_is_better": true,
        "control_val": 24.32,
        "treatment_val": 0.19,
        "difference": -24.12,
        "ci_lower": -26.76,
        "ci_upper": -21.48,
        "p_value": 0.0,
        "is_significant": true
      },
      {
        "metric_name": "Order Cancellation Rate",
        "unit": "%",
        "lower_is_better": true,
        "control_val": 1.95,
        "treatment_val": 1.84,
        "difference": -0.12,
        "ci_lower": -1.29,
        "ci_upper": 1.06,
        "p_value": 0.8475,
        "is_significant": false
      },
      {
        "metric_name": "Customer Satisfaction (CSAT)",
        "unit": "/5.0",
        "lower_is_better": false,
        "control_val": 3.87,
        "treatment_val": 4.11,
        "difference": 0.24,
        "ci_lower": 0.15,
        "ci_upper": 0.32,
        "p_value": 0.0,
        "is_significant": true
      }
    ],
    "conclusion": "Treatment (ML-adjusted ETA) reduced average ETA error by 63.7% (from 8.08 min down to 2.93 min, p < 0.001) with a 95% confidence interval of [-5.67 min, -4.61 min]. Perceived late-delivery rate decreased by 24.12 percentage points (p = 0.0), while customer satisfaction ratings rose by +0.24 stars (p < 0.001). The hypothesis test confirms that dynamic ML-adjusted ETA buffers decisively outperform static heuristics."
  },
  "ml_metrics": {
    "model_name": "XGBoost Classifier",
    "model_version": "xgb_delay_v2.4.1",
    "target": "Delay > 10 minutes (is_late)",
    "train_size": 17205,
    "validation_size": 3687,
    "test_size": 3687,
    "test_late_prevalence": 0.23,
    "primary_model": {
      "name": "XGBoost",
      "roc_auc": 0.987,
      "pr_auc": 0.964,
      "precision": 0.825,
      "recall": 0.929,
      "f1_score": 0.874,
      "confusion_matrix": {
        "true_positive": 789,
        "false_positive": 167,
        "true_negative": 2671,
        "false_negative": 60
      }
    },
    "baseline_model": {
      "name": "Logistic Regression",
      "roc_auc": 0.98,
      "pr_auc": 0.948,
      "precision": 0.768,
      "recall": 0.929,
      "f1_score": 0.841
    },
    "feature_importance": [
      {
        "feature": "prep_deviation",
        "display_name": "Prep Time Deviation vs Base",
        "importance": 2.6106
      },
      {
        "feature": "traffic_multiplier",
        "display_name": "Traffic Multiplier",
        "importance": 1.4344
      },
      {
        "feature": "estimated_transit_burden",
        "display_name": "Composite Transit Burden",
        "importance": 1.1026
      },
      {
        "feature": "weather_severity",
        "display_name": "Adverse Weather Severity",
        "importance": 0.9115
      },
      {
        "feature": "distance_km",
        "display_name": "Trip Distance (km)",
        "importance": 0.2549
      },
      {
        "feature": "restaurant_orders_last_30min",
        "display_name": "Restaurant 30m Order Load",
        "importance": 0.1385
      },
      {
        "feature": "restaurant_prep_time",
        "display_name": "Restaurant Preparation Time",
        "importance": 0.1334
      },
      {
        "feature": "kitchen_load_ratio",
        "display_name": "Kitchen Capacity Utilization",
        "importance": 0.1242
      },
      {
        "feature": "available_partners_nearby",
        "display_name": "Available Nearby Riders",
        "importance": 0.1074
      },
      {
        "feature": "order_value",
        "display_name": "Order Value",
        "importance": 0.0509
      },
      {
        "feature": "hour_of_day",
        "display_name": "Hour of Day",
        "importance": 0.0455
      },
      {
        "feature": "delivery_partner_orders_today",
        "display_name": "Rider Shift Fatigue (Orders Today)",
        "importance": 0.0361
      },
      {
        "feature": "traffic_severity",
        "display_name": "Traffic Congestion Level",
        "importance": 0.0152
      },
      {
        "feature": "day_of_week",
        "display_name": "Day of Week",
        "importance": 0.0143
      },
      {
        "feature": "is_dinner_rush",
        "display_name": "Dinner Peak Surge",
        "importance": 0.0138
      },
      {
        "feature": "rider_deficit",
        "display_name": "Rider Deficit Index",
        "importance": 0.0107
      },
      {
        "feature": "is_cloud_kitchen",
        "display_name": "Cloud Kitchen Facility",
        "importance": 0.0101
      },
      {
        "feature": "is_lunch_rush",
        "display_name": "Lunch Peak Surge",
        "importance": 0.0076
      }
    ],
    "threshold_analysis": [
      {
        "threshold": 0.1,
        "precision": 0.624,
        "recall": 0.988,
        "f1": 0.765,
        "tp": 839,
        "fp": 505,
        "fn": 10,
        "tn": 2333
      },
      {
        "threshold": 0.15,
        "precision": 0.672,
        "recall": 0.984,
        "f1": 0.799,
        "tp": 835,
        "fp": 407,
        "fn": 14,
        "tn": 2431
      },
      {
        "threshold": 0.2,
        "precision": 0.704,
        "recall": 0.976,
        "f1": 0.818,
        "tp": 829,
        "fp": 349,
        "fn": 20,
        "tn": 2489
      },
      {
        "threshold": 0.25,
        "precision": 0.729,
        "recall": 0.968,
        "f1": 0.832,
        "tp": 822,
        "fp": 306,
        "fn": 27,
        "tn": 2532
      },
      {
        "threshold": 0.3,
        "precision": 0.753,
        "recall": 0.963,
        "f1": 0.845,
        "tp": 818,
        "fp": 268,
        "fn": 31,
        "tn": 2570
      },
      {
        "threshold": 0.35,
        "precision": 0.768,
        "recall": 0.951,
        "f1": 0.849,
        "tp": 807,
        "fp": 244,
        "fn": 42,
        "tn": 2594
      },
      {
        "threshold": 0.4,
        "precision": 0.786,
        "recall": 0.946,
        "f1": 0.858,
        "tp": 803,
        "fp": 219,
        "fn": 46,
        "tn": 2619
      },
      {
        "threshold": 0.45,
        "precision": 0.804,
        "recall": 0.939,
        "f1": 0.866,
        "tp": 797,
        "fp": 194,
        "fn": 52,
        "tn": 2644
      },
      {
        "threshold": 0.5,
        "precision": 0.825,
        "recall": 0.929,
        "f1": 0.874,
        "tp": 789,
        "fp": 167,
        "fn": 60,
        "tn": 2671
      },
      {
        "threshold": 0.55,
        "precision": 0.85,
        "recall": 0.922,
        "f1": 0.885,
        "tp": 783,
        "fp": 138,
        "fn": 66,
        "tn": 2700
      },
      {
        "threshold": 0.6,
        "precision": 0.868,
        "recall": 0.906,
        "f1": 0.886,
        "tp": 769,
        "fp": 117,
        "fn": 80,
        "tn": 2721
      },
      {
        "threshold": 0.65,
        "precision": 0.887,
        "recall": 0.898,
        "f1": 0.892,
        "tp": 762,
        "fp": 97,
        "fn": 87,
        "tn": 2741
      },
      {
        "threshold": 0.7,
        "precision": 0.905,
        "recall": 0.883,
        "f1": 0.894,
        "tp": 750,
        "fp": 79,
        "fn": 99,
        "tn": 2759
      },
      {
        "threshold": 0.75,
        "precision": 0.927,
        "recall": 0.862,
        "f1": 0.893,
        "tp": 732,
        "fp": 58,
        "fn": 117,
        "tn": 2780
      },
      {
        "threshold": 0.8,
        "precision": 0.938,
        "recall": 0.837,
        "f1": 0.885,
        "tp": 711,
        "fp": 47,
        "fn": 138,
        "tn": 2791
      },
      {
        "threshold": 0.85,
        "precision": 0.953,
        "recall": 0.813,
        "f1": 0.877,
        "tp": 690,
        "fp": 34,
        "fn": 159,
        "tn": 2804
      },
      {
        "threshold": 0.9,
        "precision": 0.966,
        "recall": 0.762,
        "f1": 0.852,
        "tp": 647,
        "fp": 23,
        "fn": 202,
        "tn": 2815
      }
    ]
  },
  "order_expl": {
    "ORD_122860": {
      "order_id": "ORD_122860",
      "delay_probability": 0.001,
      "actual_delay_min": -2.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.09,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.009,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.5,
          "shap_value": -3.729,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.0,
          "shap_value": -0.89,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.5,
          "shap_value": -0.887,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.5,
          "shap_value": -3.729,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.0,
          "shap_value": -0.89,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.5,
          "shap_value": -0.887,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.855,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.6,
          "shap_value": -0.404,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 10.8,
          "shap_value": -0.212,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.168,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 13.0,
          "shap_value": -0.104,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_103114": {
      "order_id": "ORD_103114",
      "delay_probability": 0.061,
      "actual_delay_min": 5.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.7,
          "shap_value": 0.878,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.8,
          "shap_value": 0.094,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.026,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.1,
          "shap_value": -1.937,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.126,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.385,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.1,
          "shap_value": -1.937,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.126,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.7,
          "shap_value": 0.878,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.385,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.138,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.7,
          "shap_value": -0.107,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.8,
          "shap_value": 0.094,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_109853": {
      "order_id": "ORD_109853",
      "delay_probability": 0.003,
      "actual_delay_min": 2.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.027,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 14.0,
          "shap_value": 0.013,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.008,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.007,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.4,
          "shap_value": -2.905,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.945,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.2,
          "shap_value": -0.817,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.4,
          "shap_value": -2.905,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.945,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.2,
          "shap_value": -0.817,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.0,
          "shap_value": -0.344,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.234,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.227,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 10.0,
          "shap_value": -0.152,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.134,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_100724": {
      "order_id": "ORD_100724",
      "delay_probability": 0.002,
      "actual_delay_min": 2.2,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.018,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 15.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.1,
          "shap_value": -2.541,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.8,
          "shap_value": -1.037,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.833,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.1,
          "shap_value": -2.541,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.8,
          "shap_value": -1.037,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.833,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.4,
          "shap_value": -0.413,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.39,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.2,
          "shap_value": -0.226,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 2.0,
          "shap_value": -0.185,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.2,
          "shap_value": -0.128,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_119091": {
      "order_id": "ORD_119091",
      "delay_probability": 0.0,
      "actual_delay_min": -2.4,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1341.1,
          "shap_value": 0.159,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.014,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 1.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.5,
          "shap_value": -3.544,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.4,
          "shap_value": -1.572,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.181,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.5,
          "shap_value": -3.544,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.4,
          "shap_value": -1.572,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.181,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.663,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 4.0,
          "shap_value": -0.231,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1341.1,
          "shap_value": 0.159,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.8,
          "shap_value": -0.158,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.157,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_120775": {
      "order_id": "ORD_120775",
      "delay_probability": 0.006,
      "actual_delay_min": 2.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.116,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": 0.061,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.022,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.767,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.9,
          "shap_value": -1.34,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.033,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.767,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.9,
          "shap_value": -1.34,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.033,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.9,
          "shap_value": -0.54,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.7,
          "shap_value": -0.161,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.126,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 10.0,
          "shap_value": -0.117,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.116,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_124120": {
      "order_id": "ORD_124120",
      "delay_probability": 0.107,
      "actual_delay_min": 3.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 16.6,
          "shap_value": 2.183,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 12.0,
          "shap_value": 0.019,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 13.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 10.7,
          "shap_value": 0.001,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.3,
          "shap_value": -1.635,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -1.091,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.037,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 16.6,
          "shap_value": 2.183,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.3,
          "shap_value": -1.635,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -1.091,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.037,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.158,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 22.6,
          "shap_value": -0.11,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.6,
          "shap_value": -0.086,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.035,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_102239": {
      "order_id": "ORD_102239",
      "delay_probability": 0.009,
      "actual_delay_min": 4.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.0,
          "shap_value": 0.069,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.027,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.1,
          "shap_value": -2.713,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.155,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.19,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.1,
          "shap_value": -2.713,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.155,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.19,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 26.3,
          "shap_value": -0.156,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": -0.155,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.4,
          "shap_value": -0.133,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.5,
          "shap_value": -0.101,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.0,
          "shap_value": 0.069,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_105059": {
      "order_id": "ORD_105059",
      "delay_probability": 0.658,
      "actual_delay_min": 9.9,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 2.128,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.5,
          "shap_value": 1.586,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.487,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 630.7,
          "shap_value": 0.053,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.3,
          "shap_value": -2.938,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.204,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.104,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.3,
          "shap_value": -2.938,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 2.128,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.5,
          "shap_value": 1.586,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.487,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.204,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.104,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.087,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 15.1,
          "shap_value": -0.068,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_110634": {
      "order_id": "ORD_110634",
      "delay_probability": 0.607,
      "actual_delay_min": 7.4,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.698,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 1.0,
          "shap_value": 0.036,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.019,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 3.0,
          "shap_value": 0.001,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.5,
          "shap_value": -0.279,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.1,
          "shap_value": -0.205,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.2,
          "shap_value": -0.144,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.698,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.5,
          "shap_value": -0.279,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.1,
          "shap_value": -0.205,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.2,
          "shap_value": -0.144,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.143,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 19.6,
          "shap_value": -0.137,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.127,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 709.7,
          "shap_value": -0.071,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_112769": {
      "order_id": "ORD_112769",
      "delay_probability": 0.026,
      "actual_delay_min": 1.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 13.0,
          "shap_value": 0.926,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 8.2,
          "shap_value": 0.065,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.7,
          "shap_value": -1.647,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.23,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.795,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.7,
          "shap_value": -1.647,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.23,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 13.0,
          "shap_value": 0.926,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.795,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.272,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 24.0,
          "shap_value": -0.217,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.134,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 407.0,
          "shap_value": -0.078,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_102488": {
      "order_id": "ORD_102488",
      "delay_probability": 0.003,
      "actual_delay_min": -0.4,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.8,
          "shap_value": 0.047,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.02,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 4.0,
          "shap_value": 0.011,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.005,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.9,
          "shap_value": -2.239,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.3,
          "shap_value": -2.153,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.985,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.9,
          "shap_value": -2.239,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.3,
          "shap_value": -2.153,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.985,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 23.3,
          "shap_value": -0.238,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.143,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 389.8,
          "shap_value": -0.088,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.8,
          "shap_value": 0.047,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": -0.041,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_116667": {
      "order_id": "ORD_116667",
      "delay_probability": 0.015,
      "actual_delay_min": 0.4,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.893,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.275,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 3.0,
          "shap_value": 0.022,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.013,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.4,
          "shap_value": -2.693,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.7,
          "shap_value": -1.593,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.235,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.4,
          "shap_value": -2.693,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.7,
          "shap_value": -1.593,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.893,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.275,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.235,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 14.2,
          "shap_value": -0.219,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.217,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.147,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_124063": {
      "order_id": "ORD_124063",
      "delay_probability": 0.003,
      "actual_delay_min": 2.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.557,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": 0.075,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.027,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.8,
          "shap_value": -2.375,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.5,
          "shap_value": -1.668,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.4,
          "shap_value": -0.896,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.8,
          "shap_value": -2.375,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.5,
          "shap_value": -1.668,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.4,
          "shap_value": -0.896,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.725,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.557,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.19,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 12.0,
          "shap_value": -0.147,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.135,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_103734": {
      "order_id": "ORD_103734",
      "delay_probability": 0.002,
      "actual_delay_min": -4.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.008,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.007,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.4,
          "shap_value": -2.973,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.4,
          "shap_value": -1.544,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.682,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.4,
          "shap_value": -2.973,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.4,
          "shap_value": -1.544,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.682,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.349,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 11.6,
          "shap_value": -0.219,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 12.0,
          "shap_value": -0.188,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.151,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.103,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_117860": {
      "order_id": "ORD_117860",
      "delay_probability": 0.275,
      "actual_delay_min": 5.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.781,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.5,
          "shap_value": 0.13,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": 0.023,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.02,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.6,
          "shap_value": -2.384,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.9,
          "shap_value": -0.143,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 10.0,
          "shap_value": -0.129,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.6,
          "shap_value": -2.384,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.781,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.9,
          "shap_value": -0.143,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.5,
          "shap_value": 0.13,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 10.0,
          "shap_value": -0.129,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.06,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.048,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.4,
          "shap_value": -0.037,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_110106": {
      "order_id": "ORD_110106",
      "delay_probability": 0.0,
      "actual_delay_min": -6.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.014,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.002,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -5.0,
          "shap_value": -4.213,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.2,
          "shap_value": -1.667,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.605,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -5.0,
          "shap_value": -4.213,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.2,
          "shap_value": -1.667,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.605,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.4,
          "shap_value": -0.486,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.271,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.17,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 8.0,
          "shap_value": -0.144,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 10.0,
          "shap_value": -0.142,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_101166": {
      "order_id": "ORD_101166",
      "delay_probability": 0.001,
      "actual_delay_min": -0.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.2,
          "shap_value": 0.236,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 7.8,
          "shap_value": 0.035,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.034,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -4.2,
          "shap_value": -4.102,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.718,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.023,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -4.2,
          "shap_value": -4.102,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.718,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.023,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.257,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.2,
          "shap_value": 0.236,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.178,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.177,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 8.0,
          "shap_value": -0.166,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_124685": {
      "order_id": "ORD_124685",
      "delay_probability": 0.049,
      "actual_delay_min": 3.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.2,
          "shap_value": 0.407,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 8.0,
          "shap_value": 0.007,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.084,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.7,
          "shap_value": -0.748,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.707,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.084,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.7,
          "shap_value": -0.748,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.707,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.2,
          "shap_value": 0.407,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.267,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.136,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.116,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 485.9,
          "shap_value": -0.089,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_108836": {
      "order_id": "ORD_108836",
      "delay_probability": 0.049,
      "actual_delay_min": 3.4,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.366,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 776.2,
          "shap_value": 0.192,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 18.0,
          "shap_value": 0.011,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.4,
          "shap_value": -1.284,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.2,
          "shap_value": -0.974,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.647,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.4,
          "shap_value": -1.284,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.2,
          "shap_value": -0.974,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.647,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.366,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.32,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 776.2,
          "shap_value": 0.192,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.162,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.8,
          "shap_value": -0.061,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_113525": {
      "order_id": "ORD_113525",
      "delay_probability": 0.005,
      "actual_delay_min": 5.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.349,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 15.8,
          "shap_value": 0.066,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": 0.057,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.02,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.3,
          "shap_value": -2.896,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.8,
          "shap_value": -1.282,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.66,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.3,
          "shap_value": -2.896,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.8,
          "shap_value": -1.282,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.66,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 5.6,
          "shap_value": -0.469,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.349,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.188,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 10.0,
          "shap_value": -0.154,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 15.8,
          "shap_value": 0.066,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_113528": {
      "order_id": "ORD_113528",
      "delay_probability": 0.002,
      "actual_delay_min": 2.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": 0.092,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.2,
          "shap_value": 0.023,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.02,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.005,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.6,
          "shap_value": -1.857,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.768,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.858,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.6,
          "shap_value": -1.857,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.768,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.858,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.0,
          "shap_value": -0.852,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.4,
          "shap_value": -0.399,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.153,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 4.0,
          "shap_value": -0.137,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 13.8,
          "shap_value": -0.102,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_112720": {
      "order_id": "ORD_112720",
      "delay_probability": 0.767,
      "actual_delay_min": 11.5,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 2.664,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.7,
          "shap_value": 0.248,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.5,
          "shap_value": 0.201,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 777.7,
          "shap_value": 0.099,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.2,
          "shap_value": -1.595,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.8,
          "shap_value": -0.281,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 15.0,
          "shap_value": -0.117,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 2.664,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.2,
          "shap_value": -1.595,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.8,
          "shap_value": -0.281,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.7,
          "shap_value": 0.248,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.5,
          "shap_value": 0.201,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 15.0,
          "shap_value": -0.117,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 777.7,
          "shap_value": 0.099,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": 0.077,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_122610": {
      "order_id": "ORD_122610",
      "delay_probability": 0.008,
      "actual_delay_min": 3.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.021,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.015,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.0,
          "shap_value": -1.722,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.896,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.9,
          "shap_value": -0.894,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.0,
          "shap_value": -1.722,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.896,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.9,
          "shap_value": -0.894,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.0,
          "shap_value": -0.322,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.28,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.233,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 12.0,
          "shap_value": -0.164,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.1,
          "shap_value": -0.113,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_105996": {
      "order_id": "ORD_105996",
      "delay_probability": 0.003,
      "actual_delay_min": -1.2,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 712.3,
          "shap_value": 0.036,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.016,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.8,
          "shap_value": -2.62,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.8,
          "shap_value": -0.968,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.805,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.8,
          "shap_value": -2.62,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.8,
          "shap_value": -0.968,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.805,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.4,
          "shap_value": -0.417,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.331,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 3.0,
          "shap_value": -0.147,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.14,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.2,
          "shap_value": -0.124,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_107476": {
      "order_id": "ORD_107476",
      "delay_probability": 0.004,
      "actual_delay_min": 2.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.4,
          "shap_value": 0.202,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.096,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 355.9,
          "shap_value": 0.031,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.024,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.891,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.7,
          "shap_value": -1.749,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.883,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.4,
          "shap_value": -1.891,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.7,
          "shap_value": -1.749,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.883,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.1,
          "shap_value": -0.712,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.9,
          "shap_value": -0.299,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.4,
          "shap_value": 0.202,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.148,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.096,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_122743": {
      "order_id": "ORD_122743",
      "delay_probability": 0.002,
      "actual_delay_min": 1.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.005,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.2,
          "shap_value": -2.904,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.955,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.3,
          "shap_value": -0.891,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.2,
          "shap_value": -2.904,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.955,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.3,
          "shap_value": -0.891,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.51,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.0,
          "shap_value": -0.407,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 3.0,
          "shap_value": -0.166,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.162,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 349.6,
          "shap_value": -0.029,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_118735": {
      "order_id": "ORD_118735",
      "delay_probability": 0.003,
      "actual_delay_min": 1.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.058,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.016,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 18.0,
          "shap_value": 0.007,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.4,
          "shap_value": -2.942,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.059,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.5,
          "shap_value": -0.637,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.4,
          "shap_value": -2.942,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.059,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.5,
          "shap_value": -0.637,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.53,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.6,
          "shap_value": -0.32,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.133,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.3,
          "shap_value": -0.125,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.123,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_119763": {
      "order_id": "ORD_119763",
      "delay_probability": 0.998,
      "actual_delay_min": 22.4,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 25.5,
          "shap_value": 7.165,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.385,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 42.0,
          "shap_value": 0.191,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 30.0,
          "shap_value": 0.021,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.7,
          "shap_value": -0.684,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.365,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.4,
          "shap_value": -0.219,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 25.5,
          "shap_value": 7.165,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.7,
          "shap_value": -0.684,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.385,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.365,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.4,
          "shap_value": -0.219,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.193,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 42.0,
          "shap_value": 0.191,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 19.0,
          "shap_value": -0.051,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_117105": {
      "order_id": "ORD_117105",
      "delay_probability": 0.948,
      "actual_delay_min": 14.7,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 15.0,
          "shap_value": 1.739,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 8.0,
          "shap_value": 1.388,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.611,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 7.3,
          "shap_value": 0.087,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.709,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.132,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 404.8,
          "shap_value": -0.047,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 15.0,
          "shap_value": 1.739,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 8.0,
          "shap_value": 1.388,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.709,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.611,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.132,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 7.3,
          "shap_value": 0.087,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.052,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 404.8,
          "shap_value": -0.047,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_110076": {
      "order_id": "ORD_110076",
      "delay_probability": 0.002,
      "actual_delay_min": 3.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.206,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.025,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "rider_deficit",
          "display_name": "Rider Deficit Index",
          "feature_value": 3.0,
          "shap_value": 0.024,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.015,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.3,
          "shap_value": -3.701,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.999,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.459,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.3,
          "shap_value": -3.701,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.999,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.459,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.0,
          "shap_value": -0.355,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.3,
          "shap_value": -0.231,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.211,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.206,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 11.2,
          "shap_value": -0.204,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_117757": {
      "order_id": "ORD_117757",
      "delay_probability": 0.105,
      "actual_delay_min": 8.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.609,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.049,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.032,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": 0.019,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.981,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.7,
          "shap_value": -0.793,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.28,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.981,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.7,
          "shap_value": -0.793,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.609,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.28,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.9,
          "shap_value": -0.221,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.1,
          "shap_value": -0.204,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 27.2,
          "shap_value": -0.109,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 313.8,
          "shap_value": -0.065,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_116445": {
      "order_id": "ORD_116445",
      "delay_probability": 0.73,
      "actual_delay_min": 13.2,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.916,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.907,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.1,
          "shap_value": 0.555,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.092,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.8,
          "shap_value": -1.955,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.169,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 10.9,
          "shap_value": -0.154,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.8,
          "shap_value": -1.955,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.916,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.907,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.1,
          "shap_value": 0.555,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.169,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 10.9,
          "shap_value": -0.154,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.124,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.092,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_120510": {
      "order_id": "ORD_120510",
      "delay_probability": 0.964,
      "actual_delay_min": 12.7,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.808,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.641,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.7,
          "shap_value": 0.557,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 5.8,
          "shap_value": 0.439,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.137,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.9,
          "shap_value": -0.04,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 19.0,
          "shap_value": -0.038,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.808,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.641,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.7,
          "shap_value": 0.557,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 5.8,
          "shap_value": 0.439,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.137,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.8,
          "shap_value": 0.079,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.9,
          "shap_value": -0.04,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 19.0,
          "shap_value": -0.038,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_105647": {
      "order_id": "ORD_105647",
      "delay_probability": 0.999,
      "actual_delay_min": 29.7,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 15.0,
          "shap_value": 4.167,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 1.944,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.4,
          "shap_value": 0.943,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.432,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1251.4,
          "shap_value": -0.145,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 3.0,
          "shap_value": -0.094,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 19.0,
          "shap_value": -0.041,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 15.0,
          "shap_value": 4.167,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 1.944,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.4,
          "shap_value": 0.943,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.432,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1251.4,
          "shap_value": -0.145,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.12,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.9,
          "shap_value": 0.118,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 3.0,
          "shap_value": -0.094,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_116249": {
      "order_id": "ORD_116249",
      "delay_probability": 0.999,
      "actual_delay_min": 37.2,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 37.7,
          "shap_value": 6.242,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.678,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.3,
          "shap_value": 0.444,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 49.6,
          "shap_value": 0.373,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.433,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": -0.085,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.7,
          "shap_value": -0.065,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 37.7,
          "shap_value": 6.242,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.678,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.3,
          "shap_value": 0.444,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.433,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 49.6,
          "shap_value": 0.373,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 2.0,
          "shap_value": 0.268,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.11,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": -0.085,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_107414": {
      "order_id": "ORD_107414",
      "delay_probability": 0.216,
      "actual_delay_min": 6.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.3,
          "shap_value": 1.164,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.083,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 3.0,
          "shap_value": 0.06,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 12.0,
          "shap_value": 0.035,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.956,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.7,
          "shap_value": -0.812,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.3,
          "shap_value": -0.39,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.3,
          "shap_value": 1.164,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.956,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.7,
          "shap_value": -0.812,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.3,
          "shap_value": -0.39,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.0,
          "shap_value": -0.204,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.0,
          "shap_value": -0.155,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.083,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 3.0,
          "shap_value": 0.06,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_112749": {
      "order_id": "ORD_112749",
      "delay_probability": 0.991,
      "actual_delay_min": 15.0,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 18.7,
          "shap_value": 2.452,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 9.4,
          "shap_value": 1.712,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.643,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 37.7,
          "shap_value": 0.255,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.587,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.037,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 1.0,
          "shap_value": -0.026,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 18.7,
          "shap_value": 2.452,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 9.4,
          "shap_value": 1.712,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.643,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.587,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 37.7,
          "shap_value": 0.255,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.16,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 9.0,
          "shap_value": 0.116,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 443.8,
          "shap_value": 0.04,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_119450": {
      "order_id": "ORD_119450",
      "delay_probability": 0.999,
      "actual_delay_min": 17.9,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 17.3,
          "shap_value": 6.647,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 37.5,
          "shap_value": 0.356,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.299,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.1,
          "shap_value": 0.134,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.437,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 14.0,
          "shap_value": -0.088,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.8,
          "shap_value": -0.054,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 17.3,
          "shap_value": 6.647,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.437,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 37.5,
          "shap_value": 0.356,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.299,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.1,
          "shap_value": 0.134,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.109,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 14.0,
          "shap_value": -0.088,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.8,
          "shap_value": -0.054,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_107081": {
      "order_id": "ORD_107081",
      "delay_probability": 0.0,
      "actual_delay_min": -5.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.033,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.032,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 3.0,
          "shap_value": 0.02,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 14.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -3.4,
          "shap_value": -4.271,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.5,
          "shap_value": -1.225,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.049,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -3.4,
          "shap_value": -4.271,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.5,
          "shap_value": -1.225,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.049,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.6,
          "shap_value": -0.312,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 23.3,
          "shap_value": -0.223,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.7,
          "shap_value": -0.212,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 11.0,
          "shap_value": -0.172,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.8,
          "shap_value": -0.162,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_113977": {
      "order_id": "ORD_113977",
      "delay_probability": 0.473,
      "actual_delay_min": 7.4,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 13.7,
          "shap_value": 1.638,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.508,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 32.1,
          "shap_value": 0.156,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.045,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.5,
          "shap_value": -1.05,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.001,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.17,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 13.7,
          "shap_value": 1.638,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.5,
          "shap_value": -1.05,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.001,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.508,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.17,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 32.1,
          "shap_value": 0.156,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.7,
          "shap_value": -0.08,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 410.8,
          "shap_value": -0.067,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_101965": {
      "order_id": "ORD_101965",
      "delay_probability": 0.614,
      "actual_delay_min": 4.1,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.792,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.137,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": 0.112,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.2,
          "shap_value": 0.073,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.0,
          "shap_value": -1.07,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.4,
          "shap_value": -0.173,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.151,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.792,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.0,
          "shap_value": -1.07,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.4,
          "shap_value": -0.173,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.151,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.137,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": 0.112,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.6,
          "shap_value": -0.103,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.096,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_123659": {
      "order_id": "ORD_123659",
      "delay_probability": 0.939,
      "actual_delay_min": 23.8,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 12.5,
          "shap_value": 3.172,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.383,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.343,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.149,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.2,
          "shap_value": -0.506,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.43,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.255,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 12.5,
          "shap_value": 3.172,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.2,
          "shap_value": -0.506,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.43,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.383,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.343,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.255,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.149,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.051,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_100911": {
      "order_id": "ORD_100911",
      "delay_probability": 0.03,
      "actual_delay_min": 5.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.102,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.062,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.017,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 9.0,
          "shap_value": 0.016,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.977,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.2,
          "shap_value": -0.934,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.6,
          "shap_value": -0.566,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.977,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.2,
          "shap_value": -0.934,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.6,
          "shap_value": -0.566,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.537,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.9,
          "shap_value": -0.266,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.169,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.0,
          "shap_value": -0.139,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.102,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_110620": {
      "order_id": "ORD_110620",
      "delay_probability": 0.984,
      "actual_delay_min": 10.5,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 14.0,
          "shap_value": 5.941,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.231,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 21.0,
          "shap_value": 0.112,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 26.5,
          "shap_value": 0.019,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.4,
          "shap_value": -0.938,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.418,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.392,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 14.0,
          "shap_value": 5.941,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.4,
          "shap_value": -0.938,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.418,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.392,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.3,
          "shap_value": -0.288,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.231,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 21.0,
          "shap_value": 0.112,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 1.0,
          "shap_value": -0.078,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_103270": {
      "order_id": "ORD_103270",
      "delay_probability": 0.055,
      "actual_delay_min": 3.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.972,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.034,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.016,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.4,
          "shap_value": -2.614,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.4,
          "shap_value": -0.684,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.6,
          "shap_value": -0.225,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.4,
          "shap_value": -2.614,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.972,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.4,
          "shap_value": -0.684,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.6,
          "shap_value": -0.225,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.4,
          "shap_value": -0.204,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.069,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 19.0,
          "shap_value": -0.057,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_106955": {
      "order_id": "ORD_106955",
      "delay_probability": 0.096,
      "actual_delay_min": 3.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.764,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.17,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 727.7,
          "shap_value": 0.107,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.045,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.1,
          "shap_value": -1.438,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.7,
          "shap_value": -0.872,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.665,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.1,
          "shap_value": -1.438,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.7,
          "shap_value": -0.872,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.764,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.665,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.17,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 25.7,
          "shap_value": -0.15,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 727.7,
          "shap_value": 0.107,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.065,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_112088": {
      "order_id": "ORD_112088",
      "delay_probability": 0.012,
      "actual_delay_min": -2.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.387,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.11,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.106,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.048,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.2,
          "shap_value": -2.678,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.3,
          "shap_value": -1.006,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.768,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.2,
          "shap_value": -2.678,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.3,
          "shap_value": -1.006,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.768,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.2,
          "shap_value": -0.441,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.387,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 25.6,
          "shap_value": -0.11,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.11,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.106,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_106513": {
      "order_id": "ORD_106513",
      "delay_probability": 0.999,
      "actual_delay_min": 35.0,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 26.8,
          "shap_value": 6.112,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.4,
          "shap_value": 0.828,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.5,
          "shap_value": 0.751,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.8,
          "shap_value": 0.266,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.416,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 1.0,
          "shap_value": -0.091,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 733.3,
          "shap_value": -0.085,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 26.8,
          "shap_value": 6.112,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.4,
          "shap_value": 0.828,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.5,
          "shap_value": 0.751,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.416,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.8,
          "shap_value": 0.266,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 41.9,
          "shap_value": 0.17,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 1.0,
          "shap_value": -0.091,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 733.3,
          "shap_value": -0.085,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_118269": {
      "order_id": "ORD_118269",
      "delay_probability": 0.999,
      "actual_delay_min": 15.8,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 16.1,
          "shap_value": 6.662,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.582,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.238,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 36.4,
          "shap_value": 0.163,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.9,
          "shap_value": -0.683,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.318,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 5.0,
          "shap_value": -0.062,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 16.1,
          "shap_value": 6.662,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.9,
          "shap_value": -0.683,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.582,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.318,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.238,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 36.4,
          "shap_value": 0.163,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.113,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 5.0,
          "shap_value": -0.062,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_112483": {
      "order_id": "ORD_112483",
      "delay_probability": 0.221,
      "actual_delay_min": 10.9,
      "actual_is_late": true,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.4,
          "shap_value": 0.887,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.8,
          "shap_value": 0.147,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 16.0,
          "shap_value": 0.063,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.9,
          "shap_value": 0.057,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.5,
          "shap_value": -1.291,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.625,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.176,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.5,
          "shap_value": -1.291,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.4,
          "shap_value": 0.887,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.625,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.176,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.8,
          "shap_value": 0.147,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 5.8,
          "shap_value": -0.126,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 3.0,
          "shap_value": -0.075,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 16.0,
          "shap_value": 0.063,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_109333": {
      "order_id": "ORD_109333",
      "delay_probability": 0.006,
      "actual_delay_min": -1.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.478,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 828.3,
          "shap_value": 0.069,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.032,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.025,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.5,
          "shap_value": -2.919,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.974,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.2,
          "shap_value": -0.639,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.5,
          "shap_value": -2.919,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.974,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.2,
          "shap_value": -0.639,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.478,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.1,
          "shap_value": -0.329,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.259,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 24.9,
          "shap_value": -0.146,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.7,
          "shap_value": -0.129,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_100334": {
      "order_id": "ORD_100334",
      "delay_probability": 0.248,
      "actual_delay_min": 9.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 14.7,
          "shap_value": 1.699,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 18.0,
          "shap_value": 0.087,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 3.0,
          "shap_value": 0.054,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 15.3,
          "shap_value": 0.05,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.1,
          "shap_value": -1.22,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.052,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.487,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 14.7,
          "shap_value": 1.699,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.1,
          "shap_value": -1.22,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.052,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.487,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.182,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 18.0,
          "shap_value": 0.087,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 3.0,
          "shap_value": 0.054,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 15.3,
          "shap_value": 0.05,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_119290": {
      "order_id": "ORD_119290",
      "delay_probability": 0.993,
      "actual_delay_min": 15.8,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 14.2,
          "shap_value": 5.111,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.5,
          "shap_value": 0.766,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.6,
          "shap_value": 0.117,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.7,
          "shap_value": 0.038,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.7,
          "shap_value": -0.494,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.367,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 263.9,
          "shap_value": -0.083,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 14.2,
          "shap_value": 5.111,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.5,
          "shap_value": 0.766,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.7,
          "shap_value": -0.494,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.367,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.6,
          "shap_value": 0.117,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 263.9,
          "shap_value": -0.083,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.054,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.7,
          "shap_value": 0.038,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_122228": {
      "order_id": "ORD_122228",
      "delay_probability": 0.999,
      "actual_delay_min": 30.3,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 28.9,
          "shap_value": 6.621,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.352,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.303,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 45.2,
          "shap_value": 0.219,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.408,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 1.0,
          "shap_value": -0.142,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1085.2,
          "shap_value": -0.095,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 28.9,
          "shap_value": 6.621,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.408,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.352,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.303,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 45.2,
          "shap_value": 0.219,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 1.0,
          "shap_value": -0.142,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.1,
          "shap_value": 0.106,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1085.2,
          "shap_value": -0.095,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_122744": {
      "order_id": "ORD_122744",
      "delay_probability": 0.6,
      "actual_delay_min": 8.6,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 12.1,
          "shap_value": 2.37,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.289,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.9,
          "shap_value": 0.076,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 35.9,
          "shap_value": 0.073,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.2,
          "shap_value": -1.511,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.494,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.257,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 12.1,
          "shap_value": 2.37,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.2,
          "shap_value": -1.511,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.494,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.289,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.257,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.9,
          "shap_value": 0.076,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 4.0,
          "shap_value": -0.076,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 35.9,
          "shap_value": 0.073,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_123139": {
      "order_id": "ORD_123139",
      "delay_probability": 0.999,
      "actual_delay_min": 19.1,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 21.3,
          "shap_value": 6.536,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 13.6,
          "shap_value": 0.869,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.275,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 37.8,
          "shap_value": 0.17,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.578,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.497,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.046,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 21.3,
          "shap_value": 6.536,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 13.6,
          "shap_value": 0.869,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.578,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.497,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.275,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 37.8,
          "shap_value": 0.17,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 11.0,
          "shap_value": 0.065,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.046,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_104142": {
      "order_id": "ORD_104142",
      "delay_probability": 0.999,
      "actual_delay_min": 20.4,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 18.3,
          "shap_value": 6.719,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.8,
          "shap_value": 0.414,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.196,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 18.0,
          "shap_value": 0.096,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.493,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 1.0,
          "shap_value": -0.143,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.096,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 18.3,
          "shap_value": 6.719,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.493,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.8,
          "shap_value": 0.414,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.196,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 1.0,
          "shap_value": -0.143,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 18.0,
          "shap_value": 0.096,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.096,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.06,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_107219": {
      "order_id": "ORD_107219",
      "delay_probability": 1.0,
      "actual_delay_min": 23.0,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 15.1,
          "shap_value": 5.346,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.879,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.9,
          "shap_value": 0.742,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.408,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": -0.092,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 6.0,
          "shap_value": -0.076,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": -0.015,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 15.1,
          "shap_value": 5.346,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.879,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.9,
          "shap_value": 0.742,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.408,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 43.8,
          "shap_value": 0.307,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.145,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": -0.092,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 6.0,
          "shap_value": -0.076,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_111507": {
      "order_id": "ORD_111507",
      "delay_probability": 0.218,
      "actual_delay_min": 1.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.839,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.8,
          "shap_value": 0.286,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.247,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.085,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.0,
          "shap_value": -1.574,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.0,
          "shap_value": -0.822,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.181,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.0,
          "shap_value": -1.574,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.839,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.0,
          "shap_value": -0.822,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.8,
          "shap_value": 0.286,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.247,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.181,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 10.0,
          "shap_value": -0.108,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.085,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_112193": {
      "order_id": "ORD_112193",
      "delay_probability": 0.999,
      "actual_delay_min": 22.1,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 19.2,
          "shap_value": 5.903,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 16.7,
          "shap_value": 1.417,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.185,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.126,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.431,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "is_lunch_rush",
          "display_name": "Lunch Peak Surge",
          "feature_value": 0.0,
          "shap_value": -0.016,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.014,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 19.2,
          "shap_value": 5.903,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 16.7,
          "shap_value": 1.417,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.431,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.185,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.126,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 12.0,
          "shap_value": 0.065,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.059,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 35.7,
          "shap_value": 0.046,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_106562": {
      "order_id": "ORD_106562",
      "delay_probability": 0.721,
      "actual_delay_min": 9.2,
      "actual_is_late": false,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 11.4,
          "shap_value": 2.419,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.325,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.196,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 20.0,
          "shap_value": 0.078,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.2,
          "shap_value": -1.006,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.539,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.1,
          "shap_value": -0.245,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 11.4,
          "shap_value": 2.419,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.2,
          "shap_value": -1.006,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.539,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.325,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.1,
          "shap_value": -0.245,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.196,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.111,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.102,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_120642": {
      "order_id": "ORD_120642",
      "delay_probability": 0.033,
      "actual_delay_min": 5.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.301,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.126,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.025,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 9.0,
          "shap_value": 0.022,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.0,
          "shap_value": -2.065,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.682,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.5,
          "shap_value": -0.363,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.0,
          "shap_value": -2.065,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.682,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.5,
          "shap_value": -0.363,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.1,
          "shap_value": -0.309,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.301,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 19.4,
          "shap_value": -0.209,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.126,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.1,
          "shap_value": -0.069,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_110972": {
      "order_id": "ORD_110972",
      "delay_probability": 0.041,
      "actual_delay_min": 5.4,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 32.9,
          "shap_value": 0.126,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": 0.061,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 16.0,
          "shap_value": 0.045,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.1,
          "shap_value": 0.011,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.8,
          "shap_value": -1.78,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.702,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.5,
          "shap_value": -0.272,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.8,
          "shap_value": -1.78,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.702,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.5,
          "shap_value": -0.272,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.2,
          "shap_value": -0.26,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.137,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 32.9,
          "shap_value": 0.126,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1172.1,
          "shap_value": -0.067,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": 0.061,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_123390": {
      "order_id": "ORD_123390",
      "delay_probability": 0.021,
      "actual_delay_min": 3.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.513,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.032,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.032,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 4.0,
          "shap_value": 0.001,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.5,
          "shap_value": -2.255,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.049,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.1,
          "shap_value": -0.298,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.5,
          "shap_value": -2.255,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.049,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.513,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.1,
          "shap_value": -0.298,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.203,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.6,
          "shap_value": -0.199,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.8,
          "shap_value": -0.121,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 413.2,
          "shap_value": -0.073,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_113851": {
      "order_id": "ORD_113851",
      "delay_probability": 0.285,
      "actual_delay_min": 19.4,
      "actual_is_late": true,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.017,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.724,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.51,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.091,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.9,
          "shap_value": -1.883,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.3,
          "shap_value": -1.26,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.124,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.9,
          "shap_value": -1.883,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.3,
          "shap_value": -1.26,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.017,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.724,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.51,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.124,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.091,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 11.0,
          "shap_value": 0.074,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_112747": {
      "order_id": "ORD_112747",
      "delay_probability": 0.999,
      "actual_delay_min": 34.0,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 29.6,
          "shap_value": 6.853,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.367,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 44.8,
          "shap_value": 0.327,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.6,
          "shap_value": 0.195,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.6,
          "shap_value": -0.736,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.334,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.07,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 29.6,
          "shap_value": 6.853,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.6,
          "shap_value": -0.736,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.367,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.334,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 44.8,
          "shap_value": 0.327,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.6,
          "shap_value": 0.195,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.07,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 28.0,
          "shap_value": -0.024,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_114514": {
      "order_id": "ORD_114514",
      "delay_probability": 0.113,
      "actual_delay_min": 2.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.6,
          "shap_value": 0.166,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.9,
          "shap_value": 0.139,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.091,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.079,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.5,
          "shap_value": -1.614,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.649,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.8,
          "shap_value": -0.094,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.5,
          "shap_value": -1.614,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.649,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 34.6,
          "shap_value": 0.166,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.9,
          "shap_value": 0.139,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.8,
          "shap_value": -0.094,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.091,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.079,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.6,
          "shap_value": -0.076,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_100837": {
      "order_id": "ORD_100837",
      "delay_probability": 0.092,
      "actual_delay_min": 7.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 7.1,
          "shap_value": 0.54,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1154.4,
          "shap_value": 0.089,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.073,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 21.5,
          "shap_value": 0.05,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.3,
          "shap_value": -1.202,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.744,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.555,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.3,
          "shap_value": -1.202,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.744,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.555,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 7.1,
          "shap_value": 0.54,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.4,
          "shap_value": -0.385,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.148,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1154.4,
          "shap_value": 0.089,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.073,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_105977": {
      "order_id": "ORD_105977",
      "delay_probability": 0.967,
      "actual_delay_min": 15.0,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 11.4,
          "shap_value": 2.199,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.119,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.799,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.6,
          "shap_value": 0.136,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.7,
          "shap_value": -1.081,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 436.3,
          "shap_value": -0.021,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 12.0,
          "shap_value": -0.016,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 11.4,
          "shap_value": 2.199,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.119,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.7,
          "shap_value": -1.081,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.799,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.6,
          "shap_value": 0.136,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.1,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.073,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.4,
          "shap_value": 0.06,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_101007": {
      "order_id": "ORD_101007",
      "delay_probability": 0.019,
      "actual_delay_min": 1.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.111,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.025,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "rider_deficit",
          "display_name": "Rider Deficit Index",
          "feature_value": 2.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.009,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.9,
          "shap_value": -1.831,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -1.061,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.435,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.9,
          "shap_value": -1.831,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -1.061,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.435,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 24.3,
          "shap_value": -0.195,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 11.0,
          "shap_value": -0.164,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.6,
          "shap_value": -0.133,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.4,
          "shap_value": -0.122,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.111,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_116749": {
      "order_id": "ORD_116749",
      "delay_probability": 0.977,
      "actual_delay_min": 13.9,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 11.2,
          "shap_value": 2.934,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.0,
          "shap_value": 1.281,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.115,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.108,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.604,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 4.0,
          "shap_value": -0.045,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 6.2,
          "shap_value": -0.042,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 11.2,
          "shap_value": 2.934,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 12.0,
          "shap_value": 1.281,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.604,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.115,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.108,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 13.0,
          "shap_value": 0.055,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 4.0,
          "shap_value": -0.045,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 6.2,
          "shap_value": -0.042,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_123611": {
      "order_id": "ORD_123611",
      "delay_probability": 0.814,
      "actual_delay_min": 8.3,
      "actual_is_late": false,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 9.5,
          "shap_value": 2.053,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.7,
          "shap_value": 0.971,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 778.0,
          "shap_value": 0.065,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 6.9,
          "shap_value": 0.044,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.731,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.627,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.137,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 9.5,
          "shap_value": 2.053,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.7,
          "shap_value": 0.971,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.731,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.627,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.137,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.5,
          "shap_value": -0.08,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 778.0,
          "shap_value": 0.065,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.045,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_104699": {
      "order_id": "ORD_104699",
      "delay_probability": 0.883,
      "actual_delay_min": 13.4,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 17.7,
          "shap_value": 2.757,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.672,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 8.5,
          "shap_value": 0.169,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.054,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.762,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.7,
          "shap_value": -0.437,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.167,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 17.7,
          "shap_value": 2.757,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.762,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.672,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.7,
          "shap_value": -0.437,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 8.5,
          "shap_value": 0.169,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.167,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.092,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 17.0,
          "shap_value": 0.054,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_107423": {
      "order_id": "ORD_107423",
      "delay_probability": 1.0,
      "actual_delay_min": 28.6,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 16.3,
          "shap_value": 4.912,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 2.078,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.736,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.8,
          "shap_value": 0.423,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 4.0,
          "shap_value": -0.019,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 225.8,
          "shap_value": -0.017,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": -0.008,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 16.3,
          "shap_value": 4.912,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 2.078,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.736,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.8,
          "shap_value": 0.423,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.138,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 33.7,
          "shap_value": 0.099,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.083,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.03,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_101420": {
      "order_id": "ORD_101420",
      "delay_probability": 0.999,
      "actual_delay_min": 20.7,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 22.1,
          "shap_value": 6.608,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.535,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.324,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.9,
          "shap_value": 0.225,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.4,
          "shap_value": -0.465,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.341,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.078,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 22.1,
          "shap_value": 6.608,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.535,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.4,
          "shap_value": -0.465,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.341,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.324,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.9,
          "shap_value": 0.225,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 38.0,
          "shap_value": 0.165,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.078,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_112212": {
      "order_id": "ORD_112212",
      "delay_probability": 0.999,
      "actual_delay_min": 20.9,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 16.3,
          "shap_value": 6.235,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 14.5,
          "shap_value": 1.029,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.283,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.218,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.481,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 27.3,
          "shap_value": -0.065,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 390.1,
          "shap_value": -0.008,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 16.3,
          "shap_value": 6.235,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 14.5,
          "shap_value": 1.029,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.481,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.283,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.218,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.081,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 27.3,
          "shap_value": -0.065,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 13.0,
          "shap_value": 0.039,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_104127": {
      "order_id": "ORD_104127",
      "delay_probability": 1.0,
      "actual_delay_min": 38.3,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 25.9,
          "shap_value": 5.99,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.843,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.7,
          "shap_value": 0.32,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 39.3,
          "shap_value": 0.282,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.072,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.03,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.3,
          "shap_value": -0.013,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 25.9,
          "shap_value": 5.99,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.843,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.7,
          "shap_value": 0.32,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 39.3,
          "shap_value": 0.282,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.7,
          "shap_value": 0.244,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 0.0,
          "shap_value": 0.094,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.072,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.065,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_112419": {
      "order_id": "ORD_112419",
      "delay_probability": 0.019,
      "actual_delay_min": 4.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.288,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.0,
          "shap_value": 0.17,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.032,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.015,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.7,
          "shap_value": -1.708,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.9,
          "shap_value": -1.144,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.648,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.7,
          "shap_value": -1.708,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.9,
          "shap_value": -1.144,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.648,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.288,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.238,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.207,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 11.0,
          "shap_value": -0.194,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.0,
          "shap_value": 0.17,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_116241": {
      "order_id": "ORD_116241",
      "delay_probability": 0.712,
      "actual_delay_min": 10.7,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 18.7,
          "shap_value": 2.809,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.507,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 9.5,
          "shap_value": 0.154,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.091,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.0,
          "shap_value": -1.19,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.889,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 23.2,
          "shap_value": -0.26,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 18.7,
          "shap_value": 2.809,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.0,
          "shap_value": -1.19,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.889,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.507,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 23.2,
          "shap_value": -0.26,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.202,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 9.5,
          "shap_value": 0.154,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.091,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_111998": {
      "order_id": "ORD_111998",
      "delay_probability": 0.99,
      "actual_delay_min": 24.0,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 17.1,
          "shap_value": 2.125,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 9.7,
          "shap_value": 1.551,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.359,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.12,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.499,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 19.8,
          "shap_value": -0.221,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.034,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 17.1,
          "shap_value": 2.125,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 9.7,
          "shap_value": 1.551,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.359,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.499,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 19.8,
          "shap_value": -0.221,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.12,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 10.3,
          "shap_value": 0.12,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.048,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_120124": {
      "order_id": "ORD_120124",
      "delay_probability": 0.983,
      "actual_delay_min": 11.2,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 12.8,
          "shap_value": 4.204,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.888,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.092,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 21.0,
          "shap_value": 0.07,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.471,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.0,
          "shap_value": -0.368,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.1,
          "shap_value": -0.189,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 12.8,
          "shap_value": 4.204,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.888,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.471,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.0,
          "shap_value": -0.368,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.1,
          "shap_value": -0.189,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 23.3,
          "shap_value": -0.092,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.092,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 21.0,
          "shap_value": 0.07,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_104231": {
      "order_id": "ORD_104231",
      "delay_probability": 0.518,
      "actual_delay_min": 7.5,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.428,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.813,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.168,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.9,
          "shap_value": -1.29,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.3,
          "shap_value": -0.832,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.6,
          "shap_value": -0.304,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 1.428,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.9,
          "shap_value": -1.29,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.3,
          "shap_value": -0.832,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.813,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.6,
          "shap_value": -0.304,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.168,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.3,
          "shap_value": -0.053,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_108578": {
      "order_id": "ORD_108578",
      "delay_probability": 0.009,
      "actual_delay_min": -0.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 18.0,
          "shap_value": 0.068,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.036,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 3.0,
          "shap_value": 0.026,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.1,
          "shap_value": 0.024,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.4,
          "shap_value": -1.818,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.9,
          "shap_value": -0.891,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.882,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.4,
          "shap_value": -1.818,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 6.9,
          "shap_value": -0.891,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.882,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.5,
          "shap_value": -0.526,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.5,
          "shap_value": -0.35,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 15.3,
          "shap_value": -0.157,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.136,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 18.0,
          "shap_value": 0.068,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_102511": {
      "order_id": "ORD_102511",
      "delay_probability": 0.008,
      "actual_delay_min": 1.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.162,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 14.0,
          "shap_value": 0.101,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.034,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.018,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.9,
          "shap_value": -2.201,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.9,
          "shap_value": -1.063,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.756,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.9,
          "shap_value": -2.201,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.9,
          "shap_value": -1.063,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.756,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.2,
          "shap_value": -0.49,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.162,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": -0.16,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.2,
          "shap_value": -0.147,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.117,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_116508": {
      "order_id": "ORD_116508",
      "delay_probability": 0.077,
      "actual_delay_min": 5.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.8,
          "shap_value": 0.338,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.083,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.041,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.041,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.7,
          "shap_value": -1.233,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.778,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.1,
          "shap_value": -0.469,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.7,
          "shap_value": -1.233,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.778,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.1,
          "shap_value": -0.469,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.8,
          "shap_value": 0.338,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.123,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 433.7,
          "shap_value": -0.092,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.083,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 29.6,
          "shap_value": -0.08,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_100648": {
      "order_id": "ORD_100648",
      "delay_probability": 0.097,
      "actual_delay_min": 4.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 8.9,
          "shap_value": 1.198,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.19,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 18.0,
          "shap_value": 0.096,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.094,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.5,
          "shap_value": -2.065,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.3,
          "shap_value": -0.917,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.594,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.5,
          "shap_value": -2.065,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 8.9,
          "shap_value": 1.198,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.3,
          "shap_value": -0.917,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.594,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.191,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.19,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 18.0,
          "shap_value": 0.096,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.094,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_103827": {
      "order_id": "ORD_103827",
      "delay_probability": 0.999,
      "actual_delay_min": 16.9,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 17.9,
          "shap_value": 6.732,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 40.2,
          "shap_value": 0.367,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.33,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.315,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.423,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.3,
          "shap_value": -0.086,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "rider_deficit",
          "display_name": "Rider Deficit Index",
          "feature_value": 3.0,
          "shap_value": -0.027,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 17.9,
          "shap_value": 6.732,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.423,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 40.2,
          "shap_value": 0.367,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.33,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.315,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.126,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.3,
          "shap_value": -0.086,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 1.0,
          "shap_value": 0.077,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_107377": {
      "order_id": "ORD_107377",
      "delay_probability": 0.184,
      "actual_delay_min": 4.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.0,
          "shap_value": 0.501,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.051,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 3.0,
          "shap_value": 0.027,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 12.0,
          "shap_value": 0.014,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.025,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.594,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 5.3,
          "shap_value": -0.255,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.025,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.6,
          "shap_value": -0.594,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.0,
          "shap_value": 0.501,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 5.3,
          "shap_value": -0.255,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 26.7,
          "shap_value": -0.074,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 6.7,
          "shap_value": -0.07,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.051,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 3.0,
          "shap_value": 0.027,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_102995": {
      "order_id": "ORD_102995",
      "delay_probability": 0.998,
      "actual_delay_min": 13.4,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 14.3,
          "shap_value": 5.768,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.469,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 40.1,
          "shap_value": 0.359,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.257,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.46,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.7,
          "shap_value": -0.234,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.7,
          "shap_value": -0.132,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 14.3,
          "shap_value": 5.768,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.1,
          "shap_value": 0.469,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.46,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 40.1,
          "shap_value": 0.359,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.2,
          "shap_value": 0.257,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.7,
          "shap_value": -0.234,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.7,
          "shap_value": -0.132,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.13,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_102920": {
      "order_id": "ORD_102920",
      "delay_probability": 0.999,
      "actual_delay_min": 24.0,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 19.8,
          "shap_value": 6.828,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.305,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.198,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 19.0,
          "shap_value": 0.152,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.454,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.155,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.6,
          "shap_value": -0.087,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 19.8,
          "shap_value": 6.828,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.454,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.305,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.198,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": -0.155,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 19.0,
          "shap_value": 0.152,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.6,
          "shap_value": -0.087,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 21.0,
          "shap_value": 0.087,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_113208": {
      "order_id": "ORD_113208",
      "delay_probability": 0.931,
      "actual_delay_min": 11.0,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 20.1,
          "shap_value": 3.167,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.644,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 9.8,
          "shap_value": 0.175,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 825.6,
          "shap_value": 0.115,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.759,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.5,
          "shap_value": -0.331,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.219,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 20.1,
          "shap_value": 3.167,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.759,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.0,
          "shap_value": 0.644,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.5,
          "shap_value": -0.331,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.219,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 9.8,
          "shap_value": 0.175,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.157,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 825.6,
          "shap_value": 0.115,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_105725": {
      "order_id": "ORD_105725",
      "delay_probability": 0.01,
      "actual_delay_min": 2.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.3,
          "shap_value": 1.154,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.157,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.146,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 1.0,
          "shap_value": 0.057,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -3.7,
          "shap_value": -4.466,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.033,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.4,
          "shap_value": -0.243,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -3.7,
          "shap_value": -4.466,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.3,
          "shap_value": 1.154,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -1.033,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.4,
          "shap_value": -0.243,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.157,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 13.0,
          "shap_value": 0.146,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.9,
          "shap_value": -0.113,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 23.1,
          "shap_value": -0.09,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_105155": {
      "order_id": "ORD_105155",
      "delay_probability": 0.445,
      "actual_delay_min": 5.1,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 13.8,
          "shap_value": 1.36,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 14.0,
          "shap_value": 0.108,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.063,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.964,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.4,
          "shap_value": -0.774,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 14.3,
          "shap_value": -0.098,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 13.8,
          "shap_value": 1.36,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.964,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.4,
          "shap_value": -0.774,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 14.0,
          "shap_value": 0.108,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.4,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 14.3,
          "shap_value": -0.098,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.063,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 7.3,
          "shap_value": 0.049,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_100686": {
      "order_id": "ORD_100686",
      "delay_probability": 0.483,
      "actual_delay_min": 8.6,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.3,
          "shap_value": 0.941,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 7.1,
          "shap_value": 0.492,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.5,
          "shap_value": 0.286,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.161,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.8,
          "shap_value": -1.093,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.681,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.312,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.8,
          "shap_value": -1.093,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.3,
          "shap_value": 0.941,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.681,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 7.1,
          "shap_value": 0.492,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.312,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.5,
          "shap_value": 0.286,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.161,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.135,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_111252": {
      "order_id": "ORD_111252",
      "delay_probability": 0.014,
      "actual_delay_min": 3.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1343.5,
          "shap_value": 0.172,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.129,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.053,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.033,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.5,
          "shap_value": -1.744,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.9,
          "shap_value": -1.343,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.619,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.5,
          "shap_value": -1.744,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.9,
          "shap_value": -1.343,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.619,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.5,
          "shap_value": -0.316,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.173,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1343.5,
          "shap_value": 0.172,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.15,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.129,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_116695": {
      "order_id": "ORD_116695",
      "delay_probability": 0.004,
      "actual_delay_min": -3.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.135,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.088,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 11.0,
          "shap_value": 0.025,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.021,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.4,
          "shap_value": -2.805,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.3,
          "shap_value": -1.618,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.64,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.4,
          "shap_value": -2.805,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.3,
          "shap_value": -1.618,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.64,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 9.8,
          "shap_value": -0.26,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.211,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.135,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 5.0,
          "shap_value": -0.111,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.088,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_117967": {
      "order_id": "ORD_117967",
      "delay_probability": 0.552,
      "actual_delay_min": 8.5,
      "actual_is_late": false,
      "risk_tier": "Medium",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 10.2,
          "shap_value": 1.626,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.676,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": 0.142,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.101,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.2,
          "shap_value": -1.675,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.529,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 4.0,
          "shap_value": -0.08,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.2,
          "shap_value": -1.675,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 10.2,
          "shap_value": 1.626,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.2,
          "shap_value": 0.676,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.529,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": 0.142,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.101,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 4.0,
          "shap_value": -0.08,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 28.2,
          "shap_value": -0.045,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_115152": {
      "order_id": "ORD_115152",
      "delay_probability": 1.0,
      "actual_delay_min": 30.5,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 15.9,
          "shap_value": 5.279,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 22.1,
          "shap_value": 2.081,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.4,
          "shap_value": 0.928,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.19,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.385,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.067,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "rider_deficit",
          "display_name": "Rider Deficit Index",
          "feature_value": 0.0,
          "shap_value": -0.011,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 15.9,
          "shap_value": 5.279,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 22.1,
          "shap_value": 2.081,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 2.4,
          "shap_value": 0.928,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.385,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.19,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 30.9,
          "shap_value": 0.079,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.068,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": -0.067,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_103461": {
      "order_id": "ORD_103461",
      "delay_probability": 0.99,
      "actual_delay_min": 12.2,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 4.466,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.419,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.5,
          "shap_value": 0.278,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.137,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.8,
          "shap_value": -0.521,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.13,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.5,
          "shap_value": -0.126,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 4.466,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.8,
          "shap_value": -0.521,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.9,
          "shap_value": 0.419,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.5,
          "shap_value": 0.278,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 2.0,
          "shap_value": 0.137,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.13,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.5,
          "shap_value": -0.126,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.088,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_118849": {
      "order_id": "ORD_118849",
      "delay_probability": 0.999,
      "actual_delay_min": 29.4,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 24.8,
          "shap_value": 7.101,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 2.0,
          "shap_value": 0.377,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 50.4,
          "shap_value": 0.224,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.052,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.448,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.4,
          "shap_value": -0.164,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.6,
          "shap_value": -0.135,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 24.8,
          "shap_value": 7.101,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.448,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 2.0,
          "shap_value": 0.377,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 50.4,
          "shap_value": 0.224,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.4,
          "shap_value": -0.164,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.6,
          "shap_value": -0.135,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.071,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 802.8,
          "shap_value": -0.054,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_111809": {
      "order_id": "ORD_111809",
      "delay_probability": 0.031,
      "actual_delay_min": 7.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.039,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_dinner_rush",
          "display_name": "Dinner Peak Surge",
          "feature_value": 1.0,
          "shap_value": 0.024,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.009,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 3.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.952,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.4,
          "shap_value": -0.905,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 5.4,
          "shap_value": -0.486,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.952,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.4,
          "shap_value": -0.905,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 5.4,
          "shap_value": -0.486,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.1,
          "shap_value": -0.357,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.6,
          "shap_value": -0.197,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.8,
          "shap_value": -0.182,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.0,
          "shap_value": -0.154,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 20.0,
          "shap_value": -0.127,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_107516": {
      "order_id": "ORD_107516",
      "delay_probability": 0.999,
      "actual_delay_min": 30.9,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 16.4,
          "shap_value": 5.42,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 1.697,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.151,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 32.0,
          "shap_value": 0.137,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.0,
          "shap_value": -0.77,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": -0.127,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "is_lunch_rush",
          "display_name": "Lunch Peak Surge",
          "feature_value": 0.0,
          "shap_value": -0.009,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 16.4,
          "shap_value": 5.42,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 1.697,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.0,
          "shap_value": -0.77,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.5,
          "shap_value": 0.151,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 32.0,
          "shap_value": 0.137,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": -0.127,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.7,
          "shap_value": 0.085,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.067,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_111089": {
      "order_id": "ORD_111089",
      "delay_probability": 0.999,
      "actual_delay_min": 18.2,
      "actual_is_late": true,
      "risk_tier": "High",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 17.0,
          "shap_value": 6.964,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.31,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.5,
          "shap_value": 0.224,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 24.0,
          "shap_value": 0.036,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.474,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.278,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.6,
          "shap_value": -0.043,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 17.0,
          "shap_value": 6.964,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.474,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 1.3,
          "shap_value": 0.31,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.7,
          "shap_value": -0.278,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.5,
          "shap_value": 0.224,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.6,
          "shap_value": -0.043,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 24.0,
          "shap_value": 0.036,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 22.0,
          "shap_value": 0.034,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_103220": {
      "order_id": "ORD_103220",
      "delay_probability": 0.0,
      "actual_delay_min": -4.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.132,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": 0.06,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.021,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.119,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.4,
          "shap_value": -2.54,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.3,
          "shap_value": -1.064,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.119,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.4,
          "shap_value": -2.54,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.3,
          "shap_value": -1.064,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.56,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.2,
          "shap_value": -0.412,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 2.0,
          "shap_value": -0.245,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 11.2,
          "shap_value": -0.238,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.1,
          "shap_value": -0.171,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_103543": {
      "order_id": "ORD_103543",
      "delay_probability": 0.001,
      "actual_delay_min": -0.2,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.7,
          "shap_value": 0.425,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 199.3,
          "shap_value": 0.086,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.078,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.011,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.886,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.3,
          "shap_value": -2.687,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.0,
          "shap_value": -1.111,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.886,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.3,
          "shap_value": -2.687,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.0,
          "shap_value": -1.111,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.495,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.7,
          "shap_value": 0.425,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.229,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.216,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.5,
          "shap_value": -0.127,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_116309": {
      "order_id": "ORD_116309",
      "delay_probability": 0.001,
      "actual_delay_min": -13.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.6,
          "shap_value": 0.332,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.114,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 16.0,
          "shap_value": 0.08,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 9.9,
          "shap_value": 0.053,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.3,
          "shap_value": -3.333,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -3.295,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.747,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.3,
          "shap_value": -3.333,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -3.295,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.747,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.6,
          "shap_value": 0.332,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.1,
          "shap_value": -0.2,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.198,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 12.0,
          "shap_value": -0.163,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.135,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_106149": {
      "order_id": "ORD_106149",
      "delay_probability": 0.002,
      "actual_delay_min": -1.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.6,
          "shap_value": 0.53,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.317,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.077,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.013,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.941,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.1,
          "shap_value": -2.055,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.7,
          "shap_value": -1.284,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.941,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.1,
          "shap_value": -2.055,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.7,
          "shap_value": -1.284,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.538,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.6,
          "shap_value": 0.53,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.317,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.22,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 15.0,
          "shap_value": -0.127,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_106783": {
      "order_id": "ORD_106783",
      "delay_probability": 0.0,
      "actual_delay_min": 1.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 170.1,
          "shap_value": 0.163,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.109,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.1,
          "shap_value": 0.079,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.803,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.8,
          "shap_value": -2.618,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.0,
          "shap_value": -1.626,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.803,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.8,
          "shap_value": -2.618,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.0,
          "shap_value": -1.626,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.444,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.236,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.171,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 170.1,
          "shap_value": 0.163,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.109,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_123394": {
      "order_id": "ORD_123394",
      "delay_probability": 0.001,
      "actual_delay_min": -15.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 840.5,
          "shap_value": 0.09,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.081,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.005,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.001,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.458,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.4,
          "shap_value": -2.194,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.684,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.458,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.4,
          "shap_value": -2.194,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.684,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 7.8,
          "shap_value": -0.542,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.146,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 8.1,
          "shap_value": -0.117,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.6,
          "shap_value": -0.094,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 840.5,
          "shap_value": 0.09,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_102647": {
      "order_id": "ORD_102647",
      "delay_probability": 0.024,
      "actual_delay_min": 5.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.864,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.9,
          "shap_value": 0.5,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.9,
          "shap_value": 0.454,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.095,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.445,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.2,
          "shap_value": -1.582,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.199,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.445,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.2,
          "shap_value": -1.582,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.864,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 6.9,
          "shap_value": 0.5,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.9,
          "shap_value": 0.454,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.199,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.152,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 23.2,
          "shap_value": -0.108,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_107738": {
      "order_id": "ORD_107738",
      "delay_probability": 0.003,
      "actual_delay_min": 3.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 2.268,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.141,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.058,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.726,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.5,
          "shap_value": -2.041,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.5,
          "shap_value": -1.704,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.726,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 2.268,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.5,
          "shap_value": -2.041,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.5,
          "shap_value": -1.704,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.1,
          "shap_value": -0.473,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.163,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.141,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.08,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_112708": {
      "order_id": "ORD_112708",
      "delay_probability": 0.001,
      "actual_delay_min": -4.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.7,
          "shap_value": 0.523,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.066,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.022,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.003,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -2.671,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.5,
          "shap_value": -2.586,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.2,
          "shap_value": -1.039,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -2.671,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.5,
          "shap_value": -2.586,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.2,
          "shap_value": -1.039,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.54,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.7,
          "shap_value": 0.523,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 2.0,
          "shap_value": -0.227,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 11.4,
          "shap_value": -0.203,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.142,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_119359": {
      "order_id": "ORD_119359",
      "delay_probability": 0.001,
      "actual_delay_min": 3.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 1.891,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 23.0,
          "shap_value": 0.079,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 6.0,
          "shap_value": 0.038,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1614.4,
          "shap_value": 0.037,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.32,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.1,
          "shap_value": -2.569,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.0,
          "shap_value": -2.342,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.32,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.1,
          "shap_value": -2.569,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.0,
          "shap_value": -2.342,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 1.891,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.19,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.185,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.152,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.3,
          "shap_value": -0.148,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_112920": {
      "order_id": "ORD_112920",
      "delay_probability": 0.0,
      "actual_delay_min": -12.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1105.2,
          "shap_value": 0.074,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.036,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.033,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -3.7,
          "shap_value": -3.666,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -2.902,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.0,
          "shap_value": -0.884,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -3.7,
          "shap_value": -3.666,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -2.902,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.0,
          "shap_value": -0.884,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.588,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.7,
          "shap_value": -0.403,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 1.0,
          "shap_value": -0.189,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.167,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.1,
          "shap_value": -0.144,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_113765": {
      "order_id": "ORD_113765",
      "delay_probability": 0.001,
      "actual_delay_min": -4.2,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 2.05,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.5,
          "shap_value": 0.215,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.147,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 351.5,
          "shap_value": 0.018,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.197,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.7,
          "shap_value": -2.96,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.1,
          "shap_value": -2.273,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.197,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.7,
          "shap_value": -2.96,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.1,
          "shap_value": -2.273,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 2.05,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.5,
          "shap_value": 0.215,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.179,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.7,
          "shap_value": -0.174,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.156,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_124674": {
      "order_id": "ORD_124674",
      "delay_probability": 0.0,
      "actual_delay_min": -12.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 781.9,
          "shap_value": 0.115,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.03,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.014,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.6,
          "shap_value": -3.153,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.012,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.6,
          "shap_value": -1.161,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.6,
          "shap_value": -3.153,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.012,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.6,
          "shap_value": -1.161,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.552,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.4,
          "shap_value": -0.332,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.214,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.0,
          "shap_value": -0.183,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 781.9,
          "shap_value": 0.115,
          "impact": "increases_delay_risk"
        }
      ]
    },
    "ORD_118251": {
      "order_id": "ORD_118251",
      "delay_probability": 0.0,
      "actual_delay_min": -14.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 810.7,
          "shap_value": 0.069,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.026,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.016,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.001,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.4,
          "shap_value": -3.353,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.089,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.9,
          "shap_value": -1.079,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.4,
          "shap_value": -3.353,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.089,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.9,
          "shap_value": -1.079,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.599,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.8,
          "shap_value": -0.334,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.242,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.171,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.134,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_120673": {
      "order_id": "ORD_120673",
      "delay_probability": 0.0,
      "actual_delay_min": -12.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.016,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.015,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.4,
          "shap_value": -3.235,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -2.963,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.8,
          "shap_value": -1.237,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.4,
          "shap_value": -3.235,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -2.963,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.8,
          "shap_value": -1.237,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.644,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.5,
          "shap_value": -0.342,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.246,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.156,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.132,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_111496": {
      "order_id": "ORD_111496",
      "delay_probability": 0.0,
      "actual_delay_min": -5.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.138,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.2,
          "shap_value": -2.009,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.9,
          "shap_value": -1.371,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.138,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.2,
          "shap_value": -2.009,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.9,
          "shap_value": -1.371,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.591,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.4,
          "shap_value": -0.354,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.204,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 12.0,
          "shap_value": -0.126,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 500.1,
          "shap_value": -0.097,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_100075": {
      "order_id": "ORD_100075",
      "delay_probability": 0.0,
      "actual_delay_min": -12.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.024,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.2,
          "shap_value": -3.217,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.14,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.9,
          "shap_value": -0.979,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.2,
          "shap_value": -3.217,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.14,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.9,
          "shap_value": -0.979,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.624,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.2,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 6.9,
          "shap_value": -0.193,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.18,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 12.7,
          "shap_value": -0.109,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_101650": {
      "order_id": "ORD_101650",
      "delay_probability": 0.0,
      "actual_delay_min": -12.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.01,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.336,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.3,
          "shap_value": -2.212,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.0,
          "shap_value": -0.975,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 0.8,
          "shap_value": -3.336,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.3,
          "shap_value": -2.212,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 5.0,
          "shap_value": -0.975,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.547,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 5.9,
          "shap_value": -0.33,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 23.9,
          "shap_value": -0.176,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 11.0,
          "shap_value": -0.166,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.137,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_103084": {
      "order_id": "ORD_103084",
      "delay_probability": 0.0,
      "actual_delay_min": -14.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.9,
          "shap_value": 0.187,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 10.9,
          "shap_value": 0.029,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 2.0,
          "shap_value": 0.013,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.011,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.567,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.6,
          "shap_value": -2.642,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.669,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.567,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.6,
          "shap_value": -2.642,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.669,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.2,
          "shap_value": -0.33,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.19,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 10.9,
          "shap_value": 0.187,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 4.0,
          "shap_value": -0.186,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 10.4,
          "shap_value": -0.145,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_101341": {
      "order_id": "ORD_101341",
      "delay_probability": 0.002,
      "actual_delay_min": 1.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.651,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.272,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.322,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.4,
          "shap_value": -1.709,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.7,
          "shap_value": -1.408,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.322,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.4,
          "shap_value": -1.709,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.7,
          "shap_value": -1.408,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.651,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.272,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.251,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.147,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.0,
          "shap_value": -0.114,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_106907": {
      "order_id": "ORD_106907",
      "delay_probability": 0.01,
      "actual_delay_min": 3.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 1.994,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.415,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 31.5,
          "shap_value": 0.144,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.103,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.818,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.2,
          "shap_value": -1.345,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.4,
          "shap_value": -1.31,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.818,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 3.0,
          "shap_value": 1.994,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 3.2,
          "shap_value": -1.345,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.4,
          "shap_value": -1.31,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.0,
          "shap_value": 0.415,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.215,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 31.5,
          "shap_value": 0.144,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "delivery_partner_orders_today",
          "display_name": "Rider Shift Fatigue (Orders Today)",
          "feature_value": 3.0,
          "shap_value": -0.127,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_111167": {
      "order_id": "ORD_111167",
      "delay_probability": 0.0,
      "actual_delay_min": -15.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.029,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -4.9,
          "shap_value": -3.665,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.084,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.761,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -4.9,
          "shap_value": -3.665,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.084,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.761,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.3,
          "shap_value": -0.466,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.2,
          "shap_value": -0.211,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.202,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 18.9,
          "shap_value": -0.185,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 3.0,
          "shap_value": -0.156,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_102553": {
      "order_id": "ORD_102553",
      "delay_probability": 0.0,
      "actual_delay_min": -5.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.104,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.046,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 1.0,
          "shap_value": 0.003,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.001,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -2.896,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.1,
          "shap_value": -2.501,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.0,
          "shap_value": -1.014,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -2.896,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.1,
          "shap_value": -2.501,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.0,
          "shap_value": -1.014,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.64,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.4,
          "shap_value": -0.411,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 136.7,
          "shap_value": -0.204,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.2,
          "shap_value": -0.188,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.182,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_114326": {
      "order_id": "ORD_114326",
      "delay_probability": 0.0,
      "actual_delay_min": -8.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.026,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.009,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 1.0,
          "shap_value": 0.001,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.1,
          "shap_value": -3.249,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.067,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.5,
          "shap_value": -1.145,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.1,
          "shap_value": -3.249,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.067,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.5,
          "shap_value": -1.145,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.639,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.0,
          "shap_value": -0.425,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 4.0,
          "shap_value": -0.213,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.181,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 15.7,
          "shap_value": -0.141,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_104700": {
      "order_id": "ORD_104700",
      "delay_probability": 0.001,
      "actual_delay_min": -15.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 14.0,
          "shap_value": 0.131,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.013,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.007,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 329.7,
          "shap_value": 0.005,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.467,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.3,
          "shap_value": -2.382,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.651,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.467,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.3,
          "shap_value": -2.382,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.651,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 8.0,
          "shap_value": -0.146,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.1,
          "shap_value": -0.134,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 14.0,
          "shap_value": 0.131,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 24.8,
          "shap_value": -0.111,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.7,
          "shap_value": -0.095,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_122665": {
      "order_id": "ORD_122665",
      "delay_probability": 0.001,
      "actual_delay_min": -2.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.378,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.059,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -2.689,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.4,
          "shap_value": -1.869,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.8,
          "shap_value": -1.183,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -2.689,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.4,
          "shap_value": -1.869,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.8,
          "shap_value": -1.183,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.714,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.378,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.301,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.4,
          "shap_value": -0.146,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.135,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_104745": {
      "order_id": "ORD_104745",
      "delay_probability": 0.0,
      "actual_delay_min": 0.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.189,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.0,
          "shap_value": 0.099,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.016,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.003,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.745,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.7,
          "shap_value": -2.447,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.0,
          "shap_value": -1.735,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.745,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.7,
          "shap_value": -2.447,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.0,
          "shap_value": -1.735,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.581,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.23,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.189,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.5,
          "shap_value": -0.167,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.154,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_108857": {
      "order_id": "ORD_108857",
      "delay_probability": 0.0,
      "actual_delay_min": -4.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.677,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.016,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 1.0,
          "shap_value": 0.005,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.301,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.3,
          "shap_value": -3.156,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.3,
          "shap_value": -1.708,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.301,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.3,
          "shap_value": -3.156,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.3,
          "shap_value": -1.708,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.677,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.3,
          "shap_value": -0.433,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 11.9,
          "shap_value": -0.194,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.154,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.107,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_113440": {
      "order_id": "ORD_113440",
      "delay_probability": 0.0,
      "actual_delay_min": -4.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.3,
          "shap_value": 0.292,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.01,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.612,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.2,
          "shap_value": -2.692,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.741,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.612,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.2,
          "shap_value": -2.692,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.741,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.2,
          "shap_value": -0.311,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 11.3,
          "shap_value": 0.292,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.187,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 4.0,
          "shap_value": -0.168,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 19.0,
          "shap_value": -0.135,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_124846": {
      "order_id": "ORD_124846",
      "delay_probability": 0.001,
      "actual_delay_min": -5.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.253,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 1218.7,
          "shap_value": 0.027,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.017,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.739,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.7,
          "shap_value": -2.475,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.3,
          "shap_value": -1.314,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.739,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.7,
          "shap_value": -2.475,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.3,
          "shap_value": -1.314,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.472,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.253,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 9.0,
          "shap_value": -0.232,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.149,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.5,
          "shap_value": -0.113,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_116783": {
      "order_id": "ORD_116783",
      "delay_probability": 0.0,
      "actual_delay_min": -9.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.013,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.328,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.1,
          "shap_value": -2.773,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.711,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.328,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.1,
          "shap_value": -2.773,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.711,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.0,
          "shap_value": -0.516,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.5,
          "shap_value": -0.173,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 10.0,
          "shap_value": -0.122,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.3,
          "shap_value": -0.099,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 7.6,
          "shap_value": -0.094,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_106667": {
      "order_id": "ORD_106667",
      "delay_probability": 0.0,
      "actual_delay_min": -5.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.099,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.0,
          "shap_value": -2.627,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.7,
          "shap_value": -1.246,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.099,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.0,
          "shap_value": -2.627,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.7,
          "shap_value": -1.246,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.604,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.5,
          "shap_value": -0.407,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.165,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 10.0,
          "shap_value": -0.164,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.4,
          "shap_value": -0.153,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_123670": {
      "order_id": "ORD_123670",
      "delay_probability": 0.0,
      "actual_delay_min": 1.8,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.69,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.011,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 1.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.089,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 0.9,
          "shap_value": -2.113,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.4,
          "shap_value": -1.902,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.089,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 0.9,
          "shap_value": -2.113,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.4,
          "shap_value": -1.902,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.69,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 0.8,
          "shap_value": -0.475,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 7.0,
          "shap_value": -0.203,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.2,
          "shap_value": -0.124,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "hour_of_day",
          "display_name": "Hour of Day",
          "feature_value": 8.0,
          "shap_value": -0.106,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_105051": {
      "order_id": "ORD_105051",
      "delay_probability": 0.0,
      "actual_delay_min": -1.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.088,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.022,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.817,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.8,
          "shap_value": -2.246,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 1.7,
          "shap_value": -1.833,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.817,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.8,
          "shap_value": -2.246,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 1.7,
          "shap_value": -1.833,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.549,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 4.0,
          "shap_value": -0.253,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 17.9,
          "shap_value": -0.18,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 12.0,
          "shap_value": -0.156,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 554.1,
          "shap_value": -0.09,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_100279": {
      "order_id": "ORD_100279",
      "delay_probability": 0.0,
      "actual_delay_min": -1.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.022,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.1,
          "shap_value": -2.747,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.566,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 1.1,
          "shap_value": -1.777,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.1,
          "shap_value": -2.747,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.566,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 1.1,
          "shap_value": -1.777,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.515,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.0,
          "shap_value": -0.348,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.281,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 11.6,
          "shap_value": -0.15,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.5,
          "shap_value": -0.096,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_111600": {
      "order_id": "ORD_111600",
      "delay_probability": 0.0,
      "actual_delay_min": -5.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.018,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.017,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.9,
          "shap_value": -3.268,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -3.027,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.744,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.9,
          "shap_value": -3.268,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.2,
          "shap_value": -3.027,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.744,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 8.3,
          "shap_value": -0.539,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.1,
          "shap_value": -0.262,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 2.0,
          "shap_value": -0.176,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 7.1,
          "shap_value": -0.145,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 15.2,
          "shap_value": -0.112,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_119792": {
      "order_id": "ORD_119792",
      "delay_probability": 0.0,
      "actual_delay_min": -9.4,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 630.1,
          "shap_value": 0.032,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.012,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.003,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.365,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.2,
          "shap_value": -2.798,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.679,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.365,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.2,
          "shap_value": -2.798,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.679,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.5,
          "shap_value": -0.181,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.177,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 5.0,
          "shap_value": -0.153,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 9.1,
          "shap_value": -0.15,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 11.8,
          "shap_value": -0.103,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_100023": {
      "order_id": "ORD_100023",
      "delay_probability": 0.001,
      "actual_delay_min": -7.0,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.421,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.265,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.015,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.009,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.4,
          "shap_value": -3.157,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.63,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.2,
          "shap_value": -1.328,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -2.4,
          "shap_value": -3.157,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.63,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.2,
          "shap_value": -1.328,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.57,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.2,
          "shap_value": 0.421,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.265,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 3.0,
          "shap_value": -0.146,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 22.8,
          "shap_value": -0.117,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_122443": {
      "order_id": "ORD_122443",
      "delay_probability": 0.0,
      "actual_delay_min": -2.5,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.008,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.004,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.132,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.8,
          "shap_value": -2.19,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.5,
          "shap_value": -1.355,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.132,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 1.8,
          "shap_value": -2.19,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 3.5,
          "shap_value": -1.355,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.572,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.3,
          "shap_value": -0.399,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.222,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 13.0,
          "shap_value": -0.141,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.087,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_114175": {
      "order_id": "ORD_114175",
      "delay_probability": 0.0,
      "actual_delay_min": -3.7,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.3,
          "shap_value": 0.098,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.009,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.217,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.3,
          "shap_value": -2.559,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.7,
          "shap_value": -1.031,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.217,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 0.3,
          "shap_value": -2.559,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.7,
          "shap_value": -1.031,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.629,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 4.5,
          "shap_value": -0.384,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.205,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 9.8,
          "shap_value": -0.169,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 13.0,
          "shap_value": -0.135,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_114530": {
      "order_id": "ORD_114530",
      "delay_probability": 0.0,
      "actual_delay_min": -6.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 15.0,
          "shap_value": 0.105,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 0.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 1.0,
          "shap_value": 0.003,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.003,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.214,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.1,
          "shap_value": -2.737,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.1,
          "shap_value": -1.109,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.214,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.1,
          "shap_value": -2.737,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.1,
          "shap_value": -1.109,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.563,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.8,
          "shap_value": -0.433,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 16.0,
          "shap_value": -0.166,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.133,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.8,
          "shap_value": -0.126,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_104453": {
      "order_id": "ORD_104453",
      "delay_probability": 0.001,
      "actual_delay_min": -0.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.373,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 161.5,
          "shap_value": 0.193,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.014,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "is_cloud_kitchen",
          "display_name": "Cloud Kitchen Facility",
          "feature_value": 1.0,
          "shap_value": 0.003,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.944,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.8,
          "shap_value": -1.861,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.3,
          "shap_value": -1.328,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.944,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.8,
          "shap_value": -1.861,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.3,
          "shap_value": -1.328,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.476,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.4,
          "shap_value": 0.373,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 6.0,
          "shap_value": -0.199,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "order_value",
          "display_name": "Order Value",
          "feature_value": 161.5,
          "shap_value": 0.193,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 10.0,
          "shap_value": -0.168,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_116122": {
      "order_id": "ORD_116122",
      "delay_probability": 0.002,
      "actual_delay_min": 2.9,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.6,
          "shap_value": 0.567,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.1,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.23,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.6,
          "shap_value": -1.262,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.7,
          "shap_value": -1.022,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -3.23,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 2.6,
          "shap_value": -1.262,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 4.7,
          "shap_value": -1.022,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 2.6,
          "shap_value": 0.567,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.499,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.181,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 1.0,
          "shap_value": -0.156,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.3,
          "shap_value": -0.147,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_124142": {
      "order_id": "ORD_124142",
      "delay_probability": 0.0,
      "actual_delay_min": -1.6,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.747,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "traffic_severity",
          "display_name": "Traffic Congestion Level",
          "feature_value": 2.0,
          "shap_value": 0.035,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.006,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.356,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.2,
          "shap_value": -3.216,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.1,
          "shap_value": -1.402,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -3.356,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -1.2,
          "shap_value": -3.216,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 4.1,
          "shap_value": -1.402,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 2.0,
          "shap_value": 0.747,
          "impact": "increases_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 3.8,
          "shap_value": -0.39,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.4,
          "shap_value": -0.18,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 9.0,
          "shap_value": -0.149,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 4.0,
          "shap_value": -0.121,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_119978": {
      "order_id": "ORD_119978",
      "delay_probability": 0.0,
      "actual_delay_min": 0.3,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.035,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.2,
          "shap_value": -2.841,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.595,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 1.2,
          "shap_value": -1.778,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": -0.2,
          "shap_value": -2.841,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.0,
          "shap_value": -2.595,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 1.2,
          "shap_value": -1.778,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 0.0,
          "shap_value": -0.506,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "distance_km",
          "display_name": "Trip Distance (km)",
          "feature_value": 1.2,
          "shap_value": -0.345,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 8.0,
          "shap_value": -0.274,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 11.0,
          "shap_value": -0.164,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 13.1,
          "shap_value": -0.129,
          "impact": "reduces_delay_risk"
        }
      ]
    },
    "ORD_118674": {
      "order_id": "ORD_118674",
      "delay_probability": 0.0,
      "actual_delay_min": -0.1,
      "actual_is_late": false,
      "risk_tier": "Low",
      "base_value": -0.067,
      "top_risk_factors": [
        {
          "feature": "day_of_week",
          "display_name": "Day of Week",
          "feature_value": 0.0,
          "shap_value": 0.011,
          "impact": "increases_delay_risk"
        }
      ],
      "top_protective_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.844,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.9,
          "shap_value": -1.99,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 1.6,
          "shap_value": -1.881,
          "impact": "reduces_delay_risk"
        }
      ],
      "all_factors": [
        {
          "feature": "traffic_multiplier",
          "display_name": "Traffic Multiplier",
          "feature_value": 1.1,
          "shap_value": -2.844,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "prep_deviation",
          "display_name": "Prep Time Deviation vs Base",
          "feature_value": 2.9,
          "shap_value": -1.99,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "estimated_transit_burden",
          "display_name": "Composite Transit Burden",
          "feature_value": 1.6,
          "shap_value": -1.881,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "weather_severity",
          "display_name": "Adverse Weather Severity",
          "feature_value": 1.0,
          "shap_value": -0.53,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_orders_last_30min",
          "display_name": "Restaurant 30m Order Load",
          "feature_value": 7.0,
          "shap_value": -0.343,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "available_partners_nearby",
          "display_name": "Available Nearby Riders",
          "feature_value": 6.0,
          "shap_value": -0.154,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "kitchen_load_ratio",
          "display_name": "Kitchen Capacity Utilization",
          "feature_value": 0.4,
          "shap_value": -0.126,
          "impact": "reduces_delay_risk"
        },
        {
          "feature": "restaurant_prep_time",
          "display_name": "Restaurant Preparation Time",
          "feature_value": 20.6,
          "shap_value": -0.109,
          "impact": "reduces_delay_risk"
        }
      ]
    }
  },
  "orders_risk": [
    {
      "order_id": "ORD_122860",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 35.4,
      "delay_min": -2.6,
      "delay_probability": 0.1,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_103114",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 43.1,
      "delay_min": 5.1,
      "delay_probability": 6.1,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_109853",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 40.6,
      "delay_min": 2.6,
      "delay_probability": 0.3,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_100724",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 40.2,
      "delay_min": 2.2,
      "delay_probability": 0.2,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_119091",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 35.6,
      "delay_min": -2.4,
      "delay_probability": 0.0,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_120775",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 40.9,
      "delay_min": 2.9,
      "delay_probability": 0.6,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_124120",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 41.9,
      "delay_min": 3.9,
      "delay_probability": 10.7,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_102239",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 42.8,
      "delay_min": 4.8,
      "delay_probability": 0.9,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_105059",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 47.9,
      "delay_min": 9.9,
      "delay_probability": 65.8,
      "risk_tier": "Medium",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_110634",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 45.4,
      "delay_min": 7.4,
      "delay_probability": 60.7,
      "risk_tier": "Medium",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_112769",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 39.5,
      "delay_min": 1.5,
      "delay_probability": 2.6,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_102488",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 37.6,
      "delay_min": -0.4,
      "delay_probability": 0.3,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_116667",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 38.4,
      "delay_min": 0.4,
      "delay_probability": 1.5,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_124063",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 40.7,
      "delay_min": 2.7,
      "delay_probability": 0.3,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_103734",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 33.3,
      "delay_min": -4.7,
      "delay_probability": 0.2,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_117860",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 43.6,
      "delay_min": 5.6,
      "delay_probability": 27.5,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_110106",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 32.0,
      "delay_min": -6.0,
      "delay_probability": 0.0,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_101166",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 37.1,
      "delay_min": -0.9,
      "delay_probability": 0.1,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_124685",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 41.5,
      "delay_min": 3.5,
      "delay_probability": 4.9,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_108836",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 41.4,
      "delay_min": 3.4,
      "delay_probability": 4.9,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_113525",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 43.3,
      "delay_min": 5.3,
      "delay_probability": 0.5,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_113528",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 40.1,
      "delay_min": 2.1,
      "delay_probability": 0.2,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_112720",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 49.5,
      "delay_min": 11.5,
      "delay_probability": 76.7,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_122610",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 41.9,
      "delay_min": 3.9,
      "delay_probability": 0.8,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_105996",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 36.8,
      "delay_min": -1.2,
      "delay_probability": 0.3,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_107476",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 40.0,
      "delay_min": 2.0,
      "delay_probability": 0.4,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_122743",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 39.7,
      "delay_min": 1.7,
      "delay_probability": 0.2,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_118735",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 39.0,
      "delay_min": 1.0,
      "delay_probability": 0.3,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_119763",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 60.4,
      "delay_min": 22.4,
      "delay_probability": 99.8,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_117105",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 52.7,
      "delay_min": 14.7,
      "delay_probability": 94.8,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_110076",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 41.7,
      "delay_min": 3.7,
      "delay_probability": 0.2,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_117757",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 46.3,
      "delay_min": 8.3,
      "delay_probability": 10.5,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_116445",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 51.2,
      "delay_min": 13.2,
      "delay_probability": 73.0,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_120510",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 50.7,
      "delay_min": 12.7,
      "delay_probability": 96.4,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_105647",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 67.7,
      "delay_min": 29.7,
      "delay_probability": 99.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_116249",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 75.2,
      "delay_min": 37.2,
      "delay_probability": 99.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_107414",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 44.3,
      "delay_min": 6.3,
      "delay_probability": 21.6,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_112749",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 53.0,
      "delay_min": 15.0,
      "delay_probability": 99.1,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_119450",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 55.9,
      "delay_min": 17.9,
      "delay_probability": 99.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_107081",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 32.5,
      "delay_min": -5.5,
      "delay_probability": 0.0,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_113977",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 45.4,
      "delay_min": 7.4,
      "delay_probability": 47.3,
      "risk_tier": "Medium",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_101965",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 42.1,
      "delay_min": 4.1,
      "delay_probability": 61.4,
      "risk_tier": "Medium",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_123659",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 61.8,
      "delay_min": 23.8,
      "delay_probability": 93.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_100911",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 43.1,
      "delay_min": 5.1,
      "delay_probability": 3.0,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_110620",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 48.5,
      "delay_min": 10.5,
      "delay_probability": 98.4,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_103270",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 41.5,
      "delay_min": 3.5,
      "delay_probability": 5.5,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_106955",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 41.8,
      "delay_min": 3.8,
      "delay_probability": 9.6,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_112088",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 35.4,
      "delay_min": -2.6,
      "delay_probability": 1.2,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_106513",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 73.0,
      "delay_min": 35.0,
      "delay_probability": 99.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_118269",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 53.8,
      "delay_min": 15.8,
      "delay_probability": 99.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_112483",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 48.9,
      "delay_min": 10.9,
      "delay_probability": 22.1,
      "risk_tier": "Low",
      "main_driver": "Kitchen",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_109333",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 37.0,
      "delay_min": -1.0,
      "delay_probability": 0.6,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_100334",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 47.3,
      "delay_min": 9.3,
      "delay_probability": 24.8,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_119290",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 53.8,
      "delay_min": 15.8,
      "delay_probability": 99.3,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_122228",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 68.3,
      "delay_min": 30.3,
      "delay_probability": 99.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_122744",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 46.6,
      "delay_min": 8.6,
      "delay_probability": 60.0,
      "risk_tier": "Medium",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_123139",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 57.1,
      "delay_min": 19.1,
      "delay_probability": 99.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_104142",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 58.4,
      "delay_min": 20.4,
      "delay_probability": 99.9,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_107219",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 61.0,
      "delay_min": 23.0,
      "delay_probability": 100.0,
      "risk_tier": "High",
      "main_driver": "Kitchen",
      "recommended_action": "Throttle restaurant intake",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    },
    {
      "order_id": "ORD_111507",
      "city": "Mumbai",
      "restaurant": "Royal Biryani House",
      "cuisine": "Biryani & Kebabs",
      "eta_min": 38,
      "actual_time_min": 39.5,
      "delay_min": 1.5,
      "delay_probability": 21.8,
      "risk_tier": "Low",
      "main_driver": "None",
      "recommended_action": "Standard dispatch",
      "recommendation_detail": "Kitchen is running over capacity. Apply +8 min buffer."
    }
  ],
  "sql_queries": {
    "overview_kpis": "-- Overview Top-Level KPIs with Period-over-Period Delta\nWITH current_period AS (\n    SELECT \n        COUNT(order_id) AS total_orders,\n        AVG(CASE WHEN is_late = 1 THEN 1.0 ELSE 0.0 END) * 100.0 AS late_delivery_rate,\n        AVG(actual_delivery_time) AS avg_delivery_time,\n        SUM(CASE WHEN is_late = 1 AND delivery_delay > 15.0 THEN 1 ELSE 0 END) AS high_risk_orders\n    FROM orders\n    WHERE order_timestamp >= datetime('now', :period_clause)\n      AND cancelled = 0\n),\nprevious_period AS (\n    SELECT \n        COUNT(order_id) AS prev_orders,\n        AVG(CASE WHEN is_late = 1 THEN 1.0 ELSE 0.0 END) * 100.0 AS prev_late_rate,\n        AVG(actual_delivery_time) AS prev_avg_time,\n        SUM(CASE WHEN is_late = 1 AND delivery_delay > 15.0 THEN 1 ELSE 0 END) AS prev_high_risk\n    FROM orders\n    WHERE order_timestamp >= datetime('now', :prior_period_clause_start)\n      AND order_timestamp < datetime('now', :period_clause)\n      AND cancelled = 0\n)\nSELECT \n    c.total_orders,\n    ROUND(c.late_delivery_rate, 2) AS late_delivery_rate_pct,\n    ROUND(c.avg_delivery_time, 1) AS avg_delivery_time_min,\n    c.high_risk_orders,\n    ROUND(c.total_orders - p.prev_orders, 0) AS orders_delta,\n    ROUND(c.late_delivery_rate - p.prev_late_rate, 2) AS late_rate_delta_pct,\n    ROUND(c.avg_delivery_time - p.prev_avg_time, 1) AS avg_time_delta_min,\n    ROUND(c.high_risk_orders - p.prev_high_risk, 0) AS high_risk_delta\nFROM current_period c\nCROSS JOIN previous_period p;",
    "overview_trend": "-- Delivery Performance Trend (Daily Aggregation)\nSELECT \n    date(order_timestamp) AS order_date,\n    COUNT(order_id) AS total_orders,\n    ROUND(AVG(actual_delivery_time), 1) AS avg_delivery_time,\n    ROUND(AVG(CASE WHEN is_late = 1 THEN 1.0 ELSE 0.0 END) * 100.0, 2) AS late_delivery_rate_pct,\n    ROUND(AVG(estimated_delivery_time), 1) AS avg_estimated_time\nFROM orders\nWHERE order_timestamp >= datetime('now', :period_clause)\n  AND cancelled = 0\nGROUP BY date(order_timestamp)\nORDER BY order_date ASC;",
    "delay_breakdown": "-- Root Cause Delay Breakdown\nWITH late_orders AS (\n    SELECT \n        order_id,\n        delivery_delay,\n        CASE \n            WHEN delay_driver = 'Kitchen' THEN 'Restaurant preparation'\n            WHEN delay_driver = 'Traffic' THEN 'Traffic'\n            WHEN delay_driver = 'Distance' THEN 'Distance'\n            WHEN delay_driver = 'Rider_Shortage' THEN 'Delivery-partner availability'\n            ELSE 'High order volume / Other'\n        END AS delay_category\n    FROM orders\n    WHERE is_late = 1\n      AND cancelled = 0\n      AND order_timestamp >= datetime('now', :period_clause)\n)\nSELECT \n    delay_category,\n    COUNT(*) AS order_count,\n    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM late_orders), 1) AS contribution_pct,\n    ROUND(AVG(delivery_delay), 1) AS avg_excess_delay_min\nFROM late_orders\nGROUP BY delay_category\nORDER BY order_count DESC;",
    "hourly_performance_and_sla": "-- Hourly Performance, Peak Volume & SLA Compliance\nWITH hourly_metrics AS (\n    SELECT \n        hour_of_day,\n        COUNT(order_id) AS order_count,\n        ROUND(AVG(actual_delivery_time), 1) AS avg_delivery_time,\n        ROUND(AVG(restaurant_prep_time), 1) AS avg_prep_time,\n        ROUND(AVG(ABS(actual_delivery_time - estimated_delivery_time)), 1) AS avg_eta_error,\n        ROUND(AVG(CASE WHEN is_late = 1 THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS late_rate_pct,\n        -- SLA Buckets\n        ROUND(AVG(CASE WHEN actual_delivery_time <= estimated_delivery_time THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS within_eta_pct,\n        ROUND(AVG(CASE WHEN delivery_delay > 5.0 THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS late_5m_pct,\n        ROUND(AVG(CASE WHEN delivery_delay > 10.0 THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS late_10m_pct,\n        ROUND(AVG(CASE WHEN delivery_delay > 20.0 THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS late_20m_pct\n    FROM orders\n    WHERE cancelled = 0\n      AND (:city IS NULL OR city_id = :city)\n      AND (:cuisine IS NULL OR cuisine = :cuisine)\n      AND (:time_of_day IS NULL OR time_of_day = :time_of_day)\n    GROUP BY hour_of_day\n)\nSELECT * FROM hourly_metrics\nORDER BY hour_of_day ASC;",
    "restaurant_rankings": "-- Restaurant Operational Benchmarking with Window Ranking\nWITH restaurant_stats AS (\n    SELECT \n        r.restaurant_id,\n        r.name AS restaurant_name,\n        c.name AS city_name,\n        r.cuisine,\n        r.avg_baseline_prep_time,\n        COUNT(o.order_id) AS total_orders,\n        ROUND(AVG(o.restaurant_prep_time), 1) AS avg_prep_time,\n        ROUND(AVG(o.actual_delivery_time), 1) AS avg_delivery_time,\n        ROUND(AVG(CASE WHEN o.is_late = 1 THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS late_pct,\n        ROUND(AVG(CASE WHEN o.cancelled = 1 THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS cancellation_pct,\n        ROUND(AVG(CASE WHEN o.is_late = 1 THEN 1.0 ELSE 0.0 END) * 70.0 + \n              (AVG(o.restaurant_prep_time) - r.avg_baseline_prep_time) * 3.0, 1) AS raw_risk_score\n    FROM restaurants r\n    JOIN cities c ON r.city_id = c.city_id\n    LEFT JOIN orders o ON r.restaurant_id = o.restaurant_id\n    WHERE (:city IS NULL OR r.city_id = :city)\n      AND (:cuisine IS NULL OR r.cuisine = :cuisine)\n    GROUP BY r.restaurant_id, r.name, c.name, r.cuisine, r.avg_baseline_prep_time\n    HAVING COUNT(o.order_id) > 10\n)\nSELECT \n    restaurant_id,\n    restaurant_name,\n    city_name,\n    cuisine,\n    total_orders,\n    avg_prep_time,\n    avg_delivery_time,\n    late_pct,\n    cancellation_pct,\n    -- Normalized Risk Score (0 to 100)\n    ROUND(MIN(100.0, MAX(5.0, raw_risk_score)), 0) AS risk_score,\n    DENSE_RANK() OVER (ORDER BY late_pct DESC) AS late_rank\nFROM restaurant_stats\nORDER BY late_pct DESC;",
    "city_performance": "-- City Comparison Analytics\nSELECT \n    c.city_id,\n    c.name AS city_name,\n    c.tier,\n    COUNT(o.order_id) AS total_orders,\n    ROUND(AVG(CASE WHEN o.is_late = 1 THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS late_pct,\n    ROUND(AVG(o.actual_delivery_time), 1) AS avg_delivery_time,\n    ROUND(AVG(o.distance_km), 1) AS avg_distance_km,\n    ROUND(AVG(o.restaurant_prep_time), 1) AS avg_prep_time,\n    ROUND(AVG(CASE WHEN o.cancelled = 1 THEN 1.0 ELSE 0.0 END) * 100.0, 1) AS cancellation_pct,\n    ROUND(AVG(o.traffic_multiplier), 2) AS avg_traffic_multiplier\nFROM cities c\nLEFT JOIN orders o ON c.city_id = o.city_id\nGROUP BY c.city_id, c.name, c.tier\nORDER BY total_orders DESC;"
  }
};
