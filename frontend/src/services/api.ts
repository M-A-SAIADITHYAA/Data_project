import {
  SystemMetadata,
  OverviewData,
  PerformanceData,
  ModelMetricsSummary,
  OrderRiskRow,
  OrderExplanationData,
  RestaurantRow,
  RestaurantDetailData,
  CityRow,
  CounterfactualSimulationResult,
  AggregateCounterfactualData,
  ABExperimentData,
  FilterOptions
} from '../types';

const BASE_URL = '/api';

export const api = {
  async getMetadata(): Promise<SystemMetadata> {
    const res = await fetch(`${BASE_URL}/meta`);
    return res.json();
  },

  async getFilters(): Promise<FilterOptions> {
    const res = await fetch(`${BASE_URL}/filters`);
    return res.json();
  },

  async getOverview(range: '7d' | '30d' | '90d' = '30d'): Promise<OverviewData> {
    const res = await fetch(`${BASE_URL}/overview?range=${range}`);
    return res.json();
  },

  async getPerformance(params: {
    city?: string;
    restaurant?: string;
    time_of_day?: string;
    cuisine?: string;
    start_date?: string;
    end_date?: string;
  }): Promise<PerformanceData> {
    const query = new URLSearchParams();
    if (params.city && params.city !== 'all') query.append('city', params.city);
    if (params.restaurant && params.restaurant !== 'all') query.append('restaurant', params.restaurant);
    if (params.time_of_day && params.time_of_day !== 'all') query.append('time_of_day', params.time_of_day);
    if (params.cuisine && params.cuisine !== 'all') query.append('cuisine', params.cuisine);
    if (params.start_date) query.append('start_date', params.start_date);
    if (params.end_date) query.append('end_date', params.end_date);

    const res = await fetch(`${BASE_URL}/performance?${query.toString()}`);
    return res.json();
  },

  async getDelayRiskSummary(): Promise<ModelMetricsSummary> {
    const res = await fetch(`${BASE_URL}/delay-risk/summary`);
    return res.json();
  },

  async getDelayRiskOrders(riskTier?: string, limit: number = 50): Promise<OrderRiskRow[]> {
    const query = new URLSearchParams({ limit: limit.toString() });
    if (riskTier && riskTier !== 'all') query.append('risk_tier', riskTier);
    const res = await fetch(`${BASE_URL}/delay-risk/orders?${query.toString()}`);
    return res.json();
  },

  async getOrderExplanation(orderId: string): Promise<OrderExplanationData> {
    const res = await fetch(`${BASE_URL}/delay-risk/order/${orderId}`);
    return res.json();
  },

  async getRestaurants(city?: string, cuisine?: string): Promise<RestaurantRow[]> {
    const query = new URLSearchParams();
    if (city && city !== 'all') query.append('city', city);
    if (cuisine && cuisine !== 'all') query.append('cuisine', cuisine);
    const res = await fetch(`${BASE_URL}/restaurants?${query.toString()}`);
    return res.json();
  },

  async getRestaurantDetail(restaurantId: string): Promise<RestaurantDetailData> {
    const res = await fetch(`${BASE_URL}/restaurants/${restaurantId}`);
    return res.json();
  },

  async getCities(): Promise<CityRow[]> {
    const res = await fetch(`${BASE_URL}/cities`);
    return res.json();
  },

  async getCounterfactualSampleOrders(): Promise<any[]> {
    const res = await fetch(`${BASE_URL}/counterfactual/sample-orders`);
    return res.json();
  },

  async simulateCounterfactual(payload: {
    order_id: string;
    prep_time_reduction: number;
    partner_dispatch_boost_min: number;
    traffic_reroute_saving_min: number;
  }): Promise<CounterfactualSimulationResult> {
    const res = await fetch(`${BASE_URL}/counterfactual/simulate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  async getAggregateCounterfactual(): Promise<AggregateCounterfactualData> {
    const res = await fetch(`${BASE_URL}/counterfactual/aggregate`);
    return res.json();
  },

  async getExperiment(experimentId: string = 'EXP_ETA_V2'): Promise<ABExperimentData> {
    const res = await fetch(`${BASE_URL}/experiments/${experimentId}`);
    return res.json();
  },

  async getSqlQueries(): Promise<Record<string, string>> {
    const res = await fetch(`${BASE_URL}/sql-queries`);
    return res.json();
  }
};
