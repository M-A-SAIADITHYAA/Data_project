import React, { useEffect, useState } from 'react';
import {
  CounterfactualSimulationResult,
  AggregateCounterfactualData
} from '../types';
import { api } from '../services/api';

export const CounterfactualPage: React.FC = () => {
  const [candidateOrders, setCandidateOrders] = useState<any[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState<string>('');
  const [prepReduction, setPrepReduction] = useState<number>(10);
  const [partnerBoost, setPartnerBoost] = useState<number>(3);
  const [trafficSaving, setTrafficSaving] = useState<number>(2);

  const [simResult, setSimResult] = useState<CounterfactualSimulationResult | null>(null);
  const [aggregateData, setAggregateData] = useState<AggregateCounterfactualData | null>(null);
  const [loading, setLoading] = useState(true);
  const [simulating, setSimulating] = useState(false);

  useEffect(() => {
    Promise.all([
      api.getCounterfactualSampleOrders(),
      api.getAggregateCounterfactual(),
    ])
      .then(([orders, agg]) => {
        setCandidateOrders(orders);
        setAggregateData(agg);
        if (orders.length > 0) {
          setSelectedOrderId(orders[0].order_id);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Run simulation whenever order or sliders change
  useEffect(() => {
    if (!selectedOrderId) return;
    setSimulating(true);
    api.simulateCounterfactual({
      order_id: selectedOrderId,
      prep_time_reduction: prepReduction,
      partner_dispatch_boost_min: partnerBoost,
      traffic_reroute_saving_min: trafficSaving,
    })
      .then((res) => setSimResult(res))
      .catch((err) => console.error(err))
      .finally(() => setSimulating(false));
  }, [selectedOrderId, prepReduction, partnerBoost, trafficSaving]);

  if (loading && !simResult) {
    return (
      <div className="p-8 text-center text-xs text-zinc-400">
        Loading counterfactual simulator & aggregate policy engine...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
          Counterfactual Analysis
        </h2>
        <p className="text-xs text-zinc-500">
          Estimate how delivery performance could have changed if an operational variable had been different.
        </p>
      </div>

      {/* Part 1: Order-Level What-If Simulator */}
      <div className="bg-white border border-zinc-200 rounded p-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3">
          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              Single-Order Counterfactual Simulator
            </h3>
            <p className="text-[11px] text-zinc-400">
              Select an actual delayed order and test hypothetical operational interventions
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-zinc-500 font-medium">Select Order:</span>
            <select
              value={selectedOrderId}
              onChange={(e) => setSelectedOrderId(e.target.value)}
              className="bg-zinc-50 border border-zinc-200 rounded px-2 py-1 text-zinc-800 text-xs font-mono focus:outline-none focus:border-zinc-400"
            >
              {candidateOrders.map((o) => (
                <option key={o.order_id} value={o.order_id}>
                  {o.order_id} ({o.restaurant}, +{o.delay_min}m delay)
                </option>
              ))}
            </select>
          </div>
        </div>

        {simResult && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Sliders */}
            <div className="lg:col-span-5 space-y-4 border-r border-zinc-100 pr-4">
              <div className="text-xs font-semibold text-zinc-800 uppercase tracking-wide">
                Operational Interventions (What-If Parameters)
              </div>

              {/* Slider 1: Kitchen Prep Time */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <label className="text-zinc-600">Kitchen Prep Reduction</label>
                  <span className="font-mono text-zinc-900 font-medium">-{prepReduction} min</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={prepReduction}
                  onChange={(e) => setPrepReduction(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded appearance-none cursor-pointer accent-zinc-800"
                />
                <div className="text-[10.5px] text-zinc-400">
                  e.g. Throttle non-critical dine-in queues / buffer kitchen intake
                </div>
              </div>

              {/* Slider 2: Pre-dispatch Boost */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <label className="text-zinc-600">Rider Pre-Dispatch Lead</label>
                  <span className="font-mono text-zinc-900 font-medium">-{partnerBoost} min</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  step="1"
                  value={partnerBoost}
                  onChange={(e) => setPartnerBoost(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded appearance-none cursor-pointer accent-zinc-800"
                />
                <div className="text-[10.5px] text-zinc-400">
                  e.g. Dispatch rider before food cooking completes
                </div>
              </div>

              {/* Slider 3: Traffic Corridor Re-routing */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <label className="text-zinc-600">Corridor Traffic Bypass</label>
                  <span className="font-mono text-zinc-900 font-medium">-{trafficSaving} min</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="1"
                  value={trafficSaving}
                  onChange={(e) => setTrafficSaving(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded appearance-none cursor-pointer accent-zinc-800"
                />
                <div className="text-[10.5px] text-zinc-400">
                  e.g. Automated micro-lane rerouting around bottleneck intersections
                </div>
              </div>

              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded text-[11px] text-zinc-600 leading-relaxed">
                Order context: <strong className="text-zinc-900">{simResult.restaurant}</strong> ({simResult.cuisine}) in{' '}
                <strong className="text-zinc-900">{simResult.city}</strong>.
              </div>
            </div>

            {/* Right Column: Comparison & Attribution */}
            <div className="lg:col-span-7 space-y-4">
              {/* Actual vs Counterfactual Cards */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* Actual */}
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded space-y-2">
                  <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide">
                    Actual Outcome
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[11px]">Prep Time</div>
                    <div className="text-base font-semibold text-zinc-900 font-mono">
                      {simResult.actual.prep_time} min
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[11px]">Delivery Time</div>
                    <div className="text-base font-semibold text-zinc-900 font-mono">
                      {simResult.actual.delivery_time} min
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[11px]">Recorded Delay</div>
                    <div className="text-base font-semibold text-rose-600 font-mono">
                      +{simResult.actual.delay} min
                    </div>
                  </div>
                </div>

                {/* Counterfactual */}
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded space-y-2">
                  <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
                    Counterfactual Outcome
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[11px]">Est. Prep Time</div>
                    <div className="text-base font-semibold text-zinc-900 font-mono">
                      {simResult.counterfactual.prep_time} min
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[11px]">Est. Delivery Time</div>
                    <div className="text-base font-semibold text-zinc-900 font-mono">
                      {simResult.counterfactual.delivery_time} min
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[11px]">Est. Delay</div>
                    <div className="text-base font-semibold text-zinc-900 font-mono">
                      +{simResult.counterfactual.delay} min
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Banner */}
              <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-emerald-900">
                    Potentially Preventable Delay:
                  </span>{' '}
                  <span className="text-emerald-800">
                    Mitigating these friction points could have recovered{' '}
                    <strong className="font-mono">{simResult.counterfactual.preventable_delay} minutes</strong>.
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-semibold text-xs">
                  {simResult.counterfactual.is_late ? 'Reduced Delay' : 'Prevented Lateness'}
                </span>
              </div>

              {/* Explanatory Attribution Visualization */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-800 uppercase tracking-wide mb-2">
                  Delay Attribution (Where Did the Delay Originate?)
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Restaurant preparation:</span>
                    <span className="font-mono font-medium text-zinc-900">
                      {simResult.attribution.restaurant_preparation} min
                    </span>
                  </div>
                  <div className="w-full bg-zinc-100 rounded h-1.5 overflow-hidden">
                    <div
                      className="bg-rose-500 h-full rounded"
                      style={{
                        width: `${Math.min(100, (simResult.attribution.restaurant_preparation / simResult.actual.delay) * 100)}%`,
                      }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Traffic:</span>
                    <span className="font-mono font-medium text-zinc-900">
                      {simResult.attribution.traffic} min
                    </span>
                  </div>
                  <div className="w-full bg-zinc-100 rounded h-1.5 overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded"
                      style={{
                        width: `${Math.min(100, (simResult.attribution.traffic / simResult.actual.delay) * 100)}%`,
                      }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Distance & Routing:</span>
                    <span className="font-mono font-medium text-zinc-900">
                      {simResult.attribution.distance} min
                    </span>
                  </div>
                  <div className="w-full bg-zinc-100 rounded h-1.5 overflow-hidden">
                    <div
                      className="bg-zinc-700 h-full rounded"
                      style={{
                        width: `${Math.min(100, (simResult.attribution.distance / simResult.actual.delay) * 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Part 2: Aggregate Counterfactual Analysis Across All Orders */}
      {aggregateData && (
        <div className="bg-white border border-zinc-200 rounded p-4 space-y-4">
          <div className="border-b border-zinc-100 pb-3">
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              Estimated Preventable Delay Across All Orders (Network-Wide Policy Scenarios)
            </h3>
            <p className="text-[11px] text-zinc-400">
              Systemic impact evaluation across {aggregateData.network_total_orders.toLocaleString()} historical orders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {aggregateData.scenarios.map((sc) => (
              <div key={sc.id} className="p-3 bg-zinc-50 border border-zinc-200 rounded flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-zinc-900">{sc.title}</div>
                  <p className="text-[10.5px] text-zinc-500 mt-1 leading-relaxed">
                    {sc.intervention}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-zinc-200/60 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">Late Orders Saved:</span>
                    <span className="font-mono font-semibold text-emerald-700">
                      {sc.orders_saved_from_late.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">Delay Saved:</span>
                    <span className="font-mono text-zinc-800">
                      {sc.delay_minutes_prevented.toLocaleString()} min
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">Projected Late Rate:</span>
                    <span className="font-mono font-semibold text-zinc-900">
                      {sc.projected_late_rate_pct}%
                    </span>
                  </div>
                  <div className="text-[10px] text-emerald-700 font-medium pt-1">
                    ↓ {sc.relative_reduction_pct}% relative late order reduction
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
