import React, { useEffect, useState } from 'react';
import { ModelMetricsSummary, OrderRiskRow, OrderExplanationData } from '../types';
import { api } from '../services/api';

export const DelayRiskPage: React.FC = () => {
  const [summary, setSummary] = useState<ModelMetricsSummary | null>(null);
  const [orders, setOrders] = useState<OrderRiskRow[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<OrderExplanationData | null>(null);
  const [riskFilter, setRiskFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [loadingExpl, setLoadingExpl] = useState(false);

  useEffect(() => {
    Promise.all([
      api.getDelayRiskSummary(),
      api.getDelayRiskOrders('all', 40),
    ])
      .then(([sumRes, ordRes]) => {
        setSummary(sumRes);
        setOrders(ordRes);
        if (ordRes.length > 0) {
          setSelectedOrderId(ordRes[0].order_id);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // When selected order changes, load SHAP explanation
  useEffect(() => {
    if (!selectedOrderId) return;
    setLoadingExpl(true);
    api.getOrderExplanation(selectedOrderId)
      .then((res) => setExplanation(res))
      .catch((err) => console.error(err))
      .finally(() => setLoadingExpl(false));
  }, [selectedOrderId]);

  const handleFilterChange = (tier: string) => {
    setRiskFilter(tier);
    api.getDelayRiskOrders(tier, 40)
      .then((res) => {
        setOrders(res);
        if (res.length > 0 && !res.some(o => o.order_id === selectedOrderId)) {
          setSelectedOrderId(res[0].order_id);
        }
      })
      .catch((err) => console.error(err));
  };

  if (loading && !summary) {
    return (
      <div className="p-12 text-center text-xs text-zinc-500 space-y-2">
        <div className="inline-block w-4 h-4 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin"></div>
        <div>Loading ML risk model evaluation & SHAP explainer...</div>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="p-12 text-center text-xs text-zinc-500 space-y-3 bg-white border border-zinc-200 rounded">
        <div>Unable to load ML risk model summary from API.</div>
        <button
          onClick={() => {
            setLoading(true);
            Promise.all([
              api.getDelayRiskSummary(),
              api.getDelayRiskOrders('all', 40),
            ]).then(([sumRes, ordRes]) => {
              setSummary(sumRes);
              setOrders(ordRes);
            }).finally(() => setLoading(false));
          }}
          className="px-3 py-1.5 bg-zinc-900 text-white rounded text-xs font-medium hover:bg-zinc-800"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  const m = summary.primary_model;
  const b = summary.baseline_model;

  // Selected order risk row
  const selectedOrderRow = orders.find((o) => o.order_id === selectedOrderId);

  return (
    <div className="space-y-6">
      {/* Title & Concept */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
          Delay Risk Prediction
        </h2>
        <p className="text-xs text-zinc-500">
          Predict the probability that an order will arrive more than 10 minutes later than its estimated delivery time.
        </p>
      </div>

      {/* Model Performance Cards (Evaluated on Temporal Holdout Test Set) */}
      <div className="bg-white border border-zinc-200 rounded p-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
                Model Evaluation Summary
              </span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-100 font-mono text-[10.5px] text-zinc-700">
                {summary.model_name} ({summary.model_version})
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Target: <span className="font-mono text-zinc-600">&gt;10 min delay</span> · Chronological holdout test sample: {summary.test_size.toLocaleString()} orders (prevalence: {(summary.test_late_prevalence * 100).toFixed(1)}%)
            </p>
          </div>
          <div className="text-[11px] text-zinc-500">
            Baseline: Logistic Regression
          </div>
        </div>

        {/* Evaluation Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">ROC-AUC</div>
            <div className="text-xl font-semibold text-zinc-900 mt-1 tabular-nums">
              {m.roc_auc.toFixed(3)}
            </div>
            <div className="text-[10.5px] text-zinc-400 mt-0.5">
              Baseline: {b.roc_auc.toFixed(3)} (+{((m.roc_auc - b.roc_auc) * 100).toFixed(1)} pts)
            </div>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">PR-AUC (Avg Precision)</div>
            <div className="text-xl font-semibold text-zinc-900 mt-1 tabular-nums">
              {m.pr_auc.toFixed(3)}
            </div>
            <div className="text-[10.5px] text-zinc-400 mt-0.5">
              Baseline: {b.pr_auc.toFixed(3)} (imbalanced class metric)
            </div>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">Precision @ 0.50</div>
            <div className="text-xl font-semibold text-zinc-900 mt-1 tabular-nums">
              {(m.precision * 100).toFixed(1)}%
            </div>
            <div className="text-[10.5px] text-zinc-400 mt-0.5">
              Baseline: {(b.precision * 100).toFixed(1)}%
            </div>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">Recall @ 0.50</div>
            <div className="text-xl font-semibold text-zinc-900 mt-1 tabular-nums">
              {(m.recall * 100).toFixed(1)}%
            </div>
            <div className="text-[10.5px] text-zinc-400 mt-0.5">
              Baseline: {(b.recall * 100).toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Risk Distribution and Global Feature Importance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Risk Distribution */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-800 uppercase tracking-wide mb-2">
              Fleet Risk Tier Distribution
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-zinc-600 font-medium">Low Risk (&lt;35% probability)</span>
                  <span className="font-mono text-zinc-700">68.2%</span>
                </div>
                <div className="w-full bg-zinc-100 rounded h-2 overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded" style={{ width: '68.2%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-zinc-600 font-medium">Medium Risk (35% – 70%)</span>
                  <span className="font-mono text-zinc-700">18.5%</span>
                </div>
                <div className="w-full bg-zinc-100 rounded h-2 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded" style={{ width: '18.5%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-zinc-600 font-medium">High Risk (&gt;70% probability)</span>
                  <span className="font-mono text-zinc-700">13.3%</span>
                </div>
                <div className="w-full bg-zinc-100 rounded h-2 overflow-hidden">
                  <div className="bg-rose-600 h-full rounded" style={{ width: '13.3%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Feature Importance */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-800 uppercase tracking-wide mb-2">
              Global Feature Importance (SHAP Mean |Value|)
            </h4>
            <div className="space-y-1.5 text-xs">
              {summary.feature_importance.slice(0, 5).map((f) => (
                <div key={f.feature} className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-600 truncate max-w-[200px]">{f.display_name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-zinc-100 rounded h-1.5 overflow-hidden">
                      <div
                        className="bg-zinc-800 h-full rounded"
                        style={{
                          width: `${Math.min(100, (f.importance / summary.feature_importance[0].importance) * 100)}%`,
                        }}
                      ></div>
                    </div>
                    <span className="font-mono text-zinc-500 w-10 text-right">{f.importance.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Orders List & Interactive SHAP Explainer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Side: Order Selector Table */}
        <div className="lg:col-span-6 bg-white border border-zinc-200 rounded flex flex-col">
          <div className="p-3 border-b border-zinc-200 flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              Recent Orders (Live Stream)
            </span>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-zinc-400">Risk:</span>
              <select
                value={riskFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="bg-zinc-50 border border-zinc-200 rounded px-1.5 py-0.5 text-xs text-zinc-700"
              >
                <option value="all">All</option>
                <option value="high">High Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="low">Low Risk</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto max-h-[500px]">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="sticky top-0 bg-zinc-50 text-[11px] font-medium text-zinc-500 border-b border-zinc-200">
                <tr>
                  <th className="py-2 px-3">Order</th>
                  <th className="py-2 px-2">City</th>
                  <th className="py-2 px-2 text-right">ETA</th>
                  <th className="py-2 px-2 text-right">Delay Risk</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                {orders.map((o) => {
                  const isSelected = o.order_id === selectedOrderId;
                  return (
                    <tr
                      key={o.order_id}
                      onClick={() => setSelectedOrderId(o.order_id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-zinc-100/90 font-medium'
                          : 'hover:bg-zinc-50/70'
                      }`}
                    >
                      <td className="py-2 px-3 font-mono text-zinc-900">
                        {o.order_id}
                      </td>
                      <td className="py-2 px-2 text-zinc-600">{o.city}</td>
                      <td className="py-2 px-2 text-right font-mono text-zinc-500">
                        {o.eta_min}m
                      </td>
                      <td className="py-2 px-2 text-right font-mono font-semibold">
                        <span
                          className={
                            o.risk_tier === 'High'
                              ? 'text-rose-600'
                              : o.risk_tier === 'Medium'
                              ? 'text-amber-600'
                              : 'text-emerald-600'
                          }
                        >
                          {o.delay_probability}%
                        </span>
                      </td>
                      <td className="py-2 px-3">
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-medium ${
                            o.risk_tier === 'High'
                              ? 'bg-rose-50 text-rose-700 border border-rose-200/50'
                              : o.risk_tier === 'Medium'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200/50'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200/50'
                          }`}
                        >
                          {o.risk_tier}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side: SHAP / Prediction Explanation (Order #48392) */}
        <div className="lg:col-span-6 bg-white border border-zinc-200 rounded p-4 flex flex-col justify-between">
          {loadingExpl ? (
            <div className="p-8 text-center text-xs text-zinc-400">
              Calculating local SHAP feature contributions...
            </div>
          ) : explanation ? (
            <div className="space-y-4">
              {/* Order Header */}
              <div className="border-b border-zinc-100 pb-3 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-zinc-900">
                      Order #{explanation.order_id}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        explanation.risk_tier === 'High'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : explanation.risk_tier === 'Medium'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      Delay probability: {Math.round(explanation.delay_probability * 100)}%
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    {selectedOrderRow?.restaurant} ({selectedOrderRow?.cuisine}) · {selectedOrderRow?.city}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[10.5px] text-zinc-400">Actual Outcome</div>
                  <div className="text-xs font-mono font-medium text-zinc-800">
                    {explanation.actual_is_late
                      ? `Late (+${explanation.actual_delay_min}m)`
                      : `On Time (${explanation.actual_delay_min}m)`}
                  </div>
                </div>
              </div>

              {/* Why Section (SHAP Attribution) */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-2">
                  Why is this order at risk? (SHAP Attribution)
                </h4>

                {/* Risk Drivers (Positive SHAP factors) */}
                <div className="space-y-2 mb-3">
                  <div className="text-[11px] font-medium text-rose-700 flex items-center gap-1">
                    <span>▲ Primary Delay Escalators</span>
                  </div>
                  {explanation.top_risk_factors.map((f) => (
                    <div key={f.feature} className="p-2 rounded bg-zinc-50 border border-zinc-200/60 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-zinc-800">{f.display_name}</span>
                        <span className="font-mono text-rose-600 font-semibold text-[11px]">
                          +{f.shap_value.toFixed(2)} SHAP
                        </span>
                      </div>
                      <div className="text-[10.5px] text-zinc-500 mt-0.5">
                        Current value: <span className="font-mono text-zinc-700">{f.feature_value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Protective Factors (Negative SHAP factors) */}
                {explanation.top_protective_factors.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-medium text-emerald-700 flex items-center gap-1">
                      <span>▼ Protective Mitigation Factors</span>
                    </div>
                    {explanation.top_protective_factors.map((f) => (
                      <div key={f.feature} className="p-2 rounded bg-zinc-50 border border-zinc-200/60 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-zinc-800">{f.display_name}</span>
                          <span className="font-mono text-emerald-600 font-semibold text-[11px]">
                            {f.shap_value.toFixed(2)} SHAP
                          </span>
                        </div>
                        <div className="text-[10.5px] text-zinc-500 mt-0.5">
                          Current value: <span className="font-mono text-zinc-700">{f.feature_value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Operational Recommendation Box */}
              {explanation.recommendations && explanation.recommendations.length > 0 && (
                <div className="pt-3 border-t border-zinc-100">
                  <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide mb-1">
                    Operational Recommendation
                  </div>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded text-xs">
                    <div className="font-medium text-zinc-900">
                      {explanation.recommendations[0].action}
                    </div>
                    <div className="text-[11px] text-zinc-600 mt-1 leading-relaxed">
                      {explanation.recommendations[0].details}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-zinc-400">
              Select an order from the left to view prediction explanation.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
