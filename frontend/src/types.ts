export type PageId =
  | 'overview'
  | 'performance'
  | 'delay-risk'
  | 'restaurants'
  | 'cities'
  | 'counterfactual'
  | 'experiments';

export interface SystemMetadata {
  system_name: string;
  data_source: string;
  model_version: string;
  primary_model: string;
  last_updated: string;
  status: string;
}

export interface OverviewKPIs {
  total_orders: number;
  orders_change_pct: number;
  late_delivery_rate: number;
  late_rate_change: number;
  avg_delivery_time: number;
  avg_time_change: number;
  high_risk_orders: number;
  high_risk_change_pct: number;
}

export interface DailyTrendPoint {
  date: string;
  orders: number;
  avg_delivery_time: number;
  late_delivery_rate: number;
  avg_eta_error?: number;
  cancellation_rate?: number;
}

export interface DelayBreakdownItem {
  driver: string;
  count: number;
  percentage: number;
}

export interface HighRiskOrderRow {
  order_id: string;
  city: string;
  restaurant: string;
  eta: string;
  delay_min: number;
  risk_tier: 'High' | 'Severe' | 'Moderate';
  main_driver: string;
  recommended_action: string;
}

export interface OverviewData {
  kpis: OverviewKPIs;
  trend: DailyTrendPoint[];
  delay_breakdown: DelayBreakdownItem[];
  high_risk_orders: HighRiskOrderRow[];
}

export interface HourlyPoint {
  hour_of_day: number;
  order_volume: number;
  avg_delivery_time: number;
  avg_prep_time: number;
  late_rate: number;
}

export interface SLAData {
  total_orders: number;
  within_eta_pct: number;
  late_5m_pct: number;
  late_10m_pct: number;
  late_20m_pct: number;
}

export interface PerformanceData {
  trend: DailyTrendPoint[];
  hourly: HourlyPoint[];
  sla: SLAData;
  key_observations: string;
}

export interface ModelMetricsSummary {
  model_name: string;
  model_version: string;
  target: string;
  train_size: number;
  validation_size: number;
  test_size: number;
  test_late_prevalence: number;
  primary_model: {
    name: string;
    roc_auc: number;
    pr_auc: number;
    precision: number;
    recall: number;
    f1_score: number;
    confusion_matrix: {
      true_positive: number;
      false_positive: number;
      true_negative: number;
      false_negative: number;
    };
  };
  baseline_model: {
    name: string;
    roc_auc: number;
    pr_auc: number;
    precision: number;
    recall: number;
    f1_score: number;
  };
  feature_importance: Array<{
    feature: string;
    display_name: string;
    importance: number;
  }>;
  threshold_analysis: Array<{
    threshold: number;
    precision: number;
    recall: number;
    f1: number;
    tp: number;
    fp: number;
    fn: number;
    tn: number;
  }>;
}

export interface ShapFactor {
  feature: string;
  display_name: string;
  feature_value: number | string;
  shap_value: number;
  impact: 'increases_delay_risk' | 'reduces_delay_risk';
}

export interface OrderRiskRow {
  order_id: string;
  city: string;
  restaurant: string;
  cuisine: string;
  eta_min: number;
  actual_time_min: number;
  delay_min: number;
  delay_probability: number;
  risk_tier: 'High' | 'Medium' | 'Low';
  main_driver: string;
  recommended_action: string;
  recommendation_detail: string;
}

export interface OrderExplanationData {
  order_id: string;
  delay_probability: number;
  actual_delay_min: number;
  actual_is_late: boolean;
  risk_tier: 'High' | 'Medium' | 'Low';
  base_value: number;
  top_risk_factors: ShapFactor[];
  top_protective_factors: ShapFactor[];
  all_factors: ShapFactor[];
  recommendations?: Array<{
    category: string;
    urgency: string;
    action: string;
    details: string;
  }>;
}

export interface RestaurantRow {
  restaurant_id: string;
  restaurant: string;
  city: string;
  cuisine: string;
  orders: number;
  avg_prep_time: number;
  avg_delivery_time: number;
  late_pct: number;
  cancellation_pct: number;
  risk_score: number;
}

export interface RestaurantDetailData {
  info: {
    restaurant_id: string;
    name: string;
    city_name: string;
    cuisine: string;
    rating: number;
    avg_baseline_prep_time: number;
    kitchen_capacity_orders_30m: number;
    is_cloud_kitchen: number;
  };
  trend: Array<{
    date: string;
    orders: number;
    avg_prep_time: number;
    late_pct: number;
  }>;
  peak_hours: Array<{
    hour_of_day: number;
    order_volume: number;
    avg_prep_time: number;
    late_pct: number;
  }>;
  delay_drivers: Array<{
    driver: string;
    count: number;
  }>;
  operational_diagnosis: string;
}

export interface CityRow {
  city_id: string;
  city: string;
  tier: string;
  orders: number;
  late_pct: number;
  avg_delivery_time: number;
  avg_distance_km: number;
  avg_prep_time: number;
  cancellation_pct: number;
}

export interface CounterfactualSimulationResult {
  order_id: string;
  city: string;
  restaurant: string;
  cuisine: string;
  actual: {
    prep_time: number;
    delivery_time: number;
    delay: number;
    is_late: boolean;
  };
  counterfactual: {
    prep_time: number;
    delivery_time: number;
    delay: number;
    is_late: boolean;
    preventable_delay: number;
    inputs: {
      prep_time_reduction: number;
      partner_dispatch_boost_min: number;
      traffic_reroute_saving_min: number;
    };
  };
  attribution: {
    restaurant_preparation: number;
    traffic: number;
    delivery_partner_availability: number;
    distance: number;
  };
}

export interface AggregateCounterfactualScenario {
  id: string;
  title: string;
  intervention: string;
  orders_saved_from_late: number;
  delay_minutes_prevented: number;
  projected_late_rate_pct: number;
  relative_reduction_pct: number;
}

export interface AggregateCounterfactualData {
  network_total_orders: number;
  network_late_orders: number;
  network_total_delay_minutes: number;
  baseline_late_rate_pct: number;
  scenarios: AggregateCounterfactualScenario[];
}

export interface ABMetricResult {
  metric_name: string;
  unit: string;
  lower_is_better: boolean;
  control_val: number;
  treatment_val: number;
  difference: number;
  ci_lower: number;
  ci_upper: number;
  p_value: number;
  is_significant: boolean;
}

export interface ABExperimentData {
  experiment_id: string;
  title: string;
  description: string;
  status: string;
  sample_size: {
    control: number;
    treatment: number;
    total: number;
  };
  metrics: ABMetricResult[];
  conclusion: string;
}

export interface FilterOptions {
  cities: Array<{ city_id: string; name: string }>;
  cuisines: string[];
  times_of_day: string[];
}
