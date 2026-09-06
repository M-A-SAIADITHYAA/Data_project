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
import { EMBEDDED_DATA } from './mockData';

const BASE_URL = '/api';

async function fetchWithFallback<T>(url: string, fallback: () => T): Promise<T> {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        return await res.json();
      }
    }
  } catch (e) {
    // Network or serverless routing error, fall back seamlessly
  }
  return fallback();
}

export const api = {
  async getMetadata(): Promise<SystemMetadata> {
    return fetchWithFallback(`${BASE_URL}/meta`, () => EMBEDDED_DATA.metadata as SystemMetadata);
  },

  async getFilters(): Promise<FilterOptions> {
    return fetchWithFallback(`${BASE_URL}/filters`, () => EMBEDDED_DATA.filters as FilterOptions);
  },

  async getOverview(range: '7d' | '30d' | '90d' = '30d'): Promise<OverviewData> {
    return fetchWithFallback(
      `${BASE_URL}/overview?range=${range}`,
      () => (EMBEDDED_DATA.overview[range] || EMBEDDED_DATA.overview['30d']) as unknown as OverviewData
    );
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

    return fetchWithFallback(
      `${BASE_URL}/performance?${query.toString()}`,
      () => EMBEDDED_DATA.performance as unknown as PerformanceData
    );
  },

  async getDelayRiskSummary(): Promise<ModelMetricsSummary> {
    return fetchWithFallback(
      `${BASE_URL}/delay-risk/summary`,
      () => EMBEDDED_DATA.ml_metrics as unknown as ModelMetricsSummary
    );
  },

  async getDelayRiskOrders(riskTier?: string, limit: number = 50): Promise<OrderRiskRow[]> {
    const query = new URLSearchParams({ limit: limit.toString() });
    if (riskTier && riskTier !== 'all') query.append('risk_tier', riskTier);

    return fetchWithFallback(
      `${BASE_URL}/delay-risk/orders?${query.toString()}`,
      () => {
        let list = EMBEDDED_DATA.orders_risk;
        if (riskTier && riskTier !== 'all') {
          list = list.filter((o: any) => o.risk_tier.toLowerCase() === riskTier.toLowerCase());
        }
        return list.slice(0, limit) as unknown as OrderRiskRow[];
      }
    );
  },

  async getOrderExplanation(orderId: string): Promise<OrderExplanationData> {
    return fetchWithFallback(
      `${BASE_URL}/delay-risk/order/${orderId}`,
      () => {
        const exp = (EMBEDDED_DATA.order_expl as any)[orderId];
        if (exp) {
          return {
            ...exp,
            recommendations: [
              {
                category: 'Kitchen Operations',
                urgency: exp.risk_tier,
                action: 'Throttle restaurant order intake',
                details: 'Kitchen prep delay exceeds threshold. Implement +8 min SLA buffer on new orders.'
              }
            ]
          } as unknown as OrderExplanationData;
        }
        return {
          order_id: orderId,
          delay_probability: 0.82,
          actual_delay_min: 14.5,
          actual_is_late: true,
          risk_tier: 'High',
          base_value: 0.23,
          top_risk_factors: [
            {
              feature: 'restaurant_prep_time',
              display_name: 'Restaurant Preparation Time',
              feature_value: 34.0,
              shap_value: 0.32,
              impact: 'increases_delay_risk'
            },
            {
              feature: 'traffic_severity',
              display_name: 'Traffic Congestion Level',
              feature_value: 3,
              shap_value: 0.18,
              impact: 'increases_delay_risk'
            }
          ],
          top_protective_factors: [
            {
              feature: 'available_partners_nearby',
              display_name: 'Available Nearby Riders',
              feature_value: 5,
              shap_value: -0.07,
              impact: 'reduces_delay_risk'
            }
          ],
          all_factors: [],
          recommendations: [
            {
              category: 'Kitchen Operations',
              urgency: 'High',
              action: 'Flag restaurant preparation bottleneck',
              details: 'Kitchen is operating 12 mins over baseline. Throttle incoming orders.'
            }
          ]
        } as unknown as OrderExplanationData;
      }
    );
  },

  async getRestaurants(city?: string, cuisine?: string): Promise<RestaurantRow[]> {
    const query = new URLSearchParams();
    if (city && city !== 'all') query.append('city', city);
    if (cuisine && cuisine !== 'all') query.append('cuisine', cuisine);

    return fetchWithFallback(
      `${BASE_URL}/restaurants?${query.toString()}`,
      () => {
        let list = EMBEDDED_DATA.restaurants;
        if (city && city !== 'all') {
          list = list.filter((r: any) => r.city.toLowerCase().includes(city.toLowerCase()) || r.city_id === city);
        }
        if (cuisine && cuisine !== 'all') {
          list = list.filter((r: any) => r.cuisine === cuisine);
        }
        return list as unknown as RestaurantRow[];
      }
    );
  },

  async getRestaurantDetail(restaurantId: string): Promise<RestaurantDetailData> {
    return fetchWithFallback(
      `${BASE_URL}/restaurants/${restaurantId}`,
      () => {
        const rest = EMBEDDED_DATA.restaurants.find((r: any) => r.restaurant_id === restaurantId) || EMBEDDED_DATA.restaurants[0];
        return {
          info: {
            restaurant_id: rest.restaurant_id,
            name: rest.restaurant,
            city_name: rest.city,
            cuisine: rest.cuisine,
            rating: 4.3,
            avg_baseline_prep_time: 18.0,
            kitchen_capacity_orders_30m: 16,
            is_cloud_kitchen: 0
          },
          trend: [
            { date: '08-15', orders: 42, avg_prep_time: 21.2, late_pct: 18.0 },
            { date: '08-16', orders: 48, avg_prep_time: 23.5, late_pct: 22.0 },
            { date: '08-17', orders: 55, avg_prep_time: 26.8, late_pct: 28.5 },
            { date: '08-18', orders: 40, avg_prep_time: 20.4, late_pct: 16.0 },
            { date: '08-19', orders: 52, avg_prep_time: 25.1, late_pct: 24.0 }
          ],
          peak_hours: [
            { hour_of_day: 12, order_volume: 38, avg_prep_time: 22.0, late_pct: 16.0 },
            { hour_of_day: 13, order_volume: 52, avg_prep_time: 25.5, late_pct: 24.0 },
            { hour_of_day: 14, order_volume: 34, avg_prep_time: 20.1, late_pct: 14.0 },
            { hour_of_day: 19, order_volume: 45, avg_prep_time: 24.0, late_pct: 21.0 },
            { hour_of_day: 20, order_volume: 68, avg_prep_time: 29.8, late_pct: 35.0 },
            { hour_of_day: 21, order_volume: 56, avg_prep_time: 27.2, late_pct: 28.0 }
          ],
          delay_drivers: [
            { driver: 'Kitchen preparation bottleneck', count: 48 },
            { driver: 'Local traffic congestion', count: 24 },
            { driver: 'Delivery-partner shortage', count: 18 }
          ],
          operational_diagnosis: `High delay risk is primarily associated with preparation time during peak dinner hours (${rest.avg_prep_time} min avg vs 18.0 min baseline). Kitchen capacity is frequently exceeded during 20:00–21:30.`
        } as unknown as RestaurantDetailData;
      }
    );
  },

  async getCities(): Promise<CityRow[]> {
    return fetchWithFallback(`${BASE_URL}/cities`, () => EMBEDDED_DATA.cities as unknown as CityRow[]);
  },

  async getCounterfactualSampleOrders(): Promise<any[]> {
    return fetchWithFallback(`${BASE_URL}/counterfactual/sample-orders`, () => EMBEDDED_DATA.cf_sample);
  },

  async simulateCounterfactual(payload: {
    order_id: string;
    prep_time_reduction: number;
    partner_dispatch_boost_min: number;
    traffic_reroute_saving_min: number;
  }): Promise<CounterfactualSimulationResult> {
    try {
      const res = await fetch(`${BASE_URL}/counterfactual/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('application/json')) {
          return await res.json();
        }
      }
    } catch (e) {}

    const sample = EMBEDDED_DATA.cf_sample.find((s: any) => s.order_id === payload.order_id) || EMBEDDED_DATA.cf_sample[0];
    const actualPrep = sample.prep_time;
    const basePrep = sample.baseline_prep_time || 18.0;
    const actualDeliv = sample.actual_delivery_time;
    const estDeliv = sample.estimated_delivery_time;
    const actualDelay = sample.delay_min;

    const effPrepRed = Math.min(payload.prep_time_reduction, Math.max(0, actualPrep - basePrep + 2));
    const cfPrep = Math.max(basePrep - 1, Math.round((actualPrep - effPrepRed) * 10) / 10);
    const totalSaved = Math.round((effPrepRed + payload.partner_dispatch_boost_min + payload.traffic_reroute_saving_min) * 10) / 10;
    const cfDeliv = Math.max(estDeliv - 4, Math.round((actualDeliv - totalSaved) * 10) / 10);
    const cfDelay = Math.round((cfDeliv - estDeliv) * 10) / 10;
    const preventable = Math.max(0, Math.round((actualDelay - cfDelay) * 10) / 10);

    const prepEx = Math.max(0, actualPrep - basePrep);
    const trafEx = Math.max(0, (sample.distance_km * 2.8 * (sample.traffic_multiplier - 1.0)));
    const totalEx = Math.max(1, prepEx + trafEx + 4.0);

    return {
      order_id: sample.order_id,
      city: sample.city,
      restaurant: sample.restaurant,
      cuisine: sample.cuisine,
      actual: {
        prep_time: actualPrep,
        delivery_time: actualDeliv,
        delay: actualDelay,
        is_late: actualDelay > 10
      },
      counterfactual: {
        prep_time: cfPrep,
        delivery_time: cfDeliv,
        delay: cfDelay,
        is_late: cfDelay > 10,
        preventable_delay: preventable,
        inputs: {
          prep_time_reduction: payload.prep_time_reduction,
          partner_dispatch_boost_min: payload.partner_dispatch_boost_min,
          traffic_reroute_saving_min: payload.traffic_reroute_saving_min
        }
      },
      attribution: {
        restaurant_preparation: Math.round((prepEx / totalEx) * actualDelay * 10) / 10,
        traffic: Math.round((trafEx / totalEx) * actualDelay * 10) / 10,
        delivery_partner_availability: Math.round(2.5 * 10) / 10,
        distance: Math.round(Math.max(0, actualDelay - ((prepEx / totalEx) * actualDelay + (trafEx / totalEx) * actualDelay + 2.5)) * 10) / 10
      }
    };
  },

  async getAggregateCounterfactual(): Promise<AggregateCounterfactualData> {
    return fetchWithFallback(`${BASE_URL}/counterfactual/aggregate`, () => EMBEDDED_DATA.cf_agg as unknown as AggregateCounterfactualData);
  },

  async getExperiment(experimentId: string = 'EXP_ETA_V2'): Promise<ABExperimentData> {
    return fetchWithFallback(`${BASE_URL}/experiments/${experimentId}`, () => EMBEDDED_DATA.ab_exp as unknown as ABExperimentData);
  },

  async getSqlQueries(): Promise<Record<string, string>> {
    return fetchWithFallback(`${BASE_URL}/sql-queries`, () => EMBEDDED_DATA.sql_queries);
  }
};
