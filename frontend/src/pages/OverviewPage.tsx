import React, { useEffect, useState } from 'react';
import { OverviewData } from '../types';
import { api } from '../services/api';
import { MetricCard } from '../components/MetricCard';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

export const OverviewPage: React.FC<{ onOpenSql?: () => void }> = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [data, setData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getOverview(timeRange)
      .then((res) => setData(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [timeRange]);

  if (loading && !data) {
    return (
      <div className="p-12 text-center text-xs text-zinc-500 space-y-2">
        <div className="inline-block w-4 h-4 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin"></div>
        <div>Loading delivery intelligence metrics...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-12 text-center text-xs text-zinc-500 space-y-3 bg-white border border-zinc-200 rounded">
        <div>Unable to load metrics from API service.</div>
        <button
          onClick={() => {
            setLoading(true);
            api.getOverview(timeRange).then(setData).finally(() => setLoading(false));
          }}
          className="px-3 py-1.5 bg-zinc-900 text-white rounded text-xs font-medium hover:bg-zinc-800"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header & Range Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
            Delivery Intelligence Overview
          </h2>
          <p className="text-xs text-zinc-500">
            Monitor delivery performance, identify delay drivers, and prioritize operational interventions.
          </p>
        </div>
        <div className="inline-flex rounded border border-zinc-200 bg-white p-0.5 self-start">
          {(['7d', '30d', '90d'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setTimeRange(r)}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                timeRange === r
                  ? 'bg-zinc-100 text-zinc-900 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {r === '7d' ? '7 days' : r === '30d' ? '30 days' : '90 days'}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <MetricCard
          label="Total Orders"
          value={data.kpis.total_orders.toLocaleString()}
          change={data.kpis.orders_change_pct}
          changeSuffix="%"
          changeLabel="vs prior period"
        />
        <MetricCard
          label="Late Delivery Rate"
          value={`${data.kpis.late_delivery_rate}%`}
          change={data.kpis.late_rate_change}
          changeSuffix="% pts"
          reverseColor={true}
          changeLabel="target: <15%"
        />
        <MetricCard
          label="Average Delivery Time"
          value={`${data.kpis.avg_delivery_time} min`}
          change={data.kpis.avg_time_change}
          changeSuffix=" min"
          reverseColor={true}
          changeLabel="fleet average"
        />
        <MetricCard
          label="High-Risk Orders"
          value={data.kpis.high_risk_orders.toLocaleString()}
          change={data.kpis.high_risk_change_pct}
          changeSuffix="%"
          reverseColor={true}
          changeLabel="delay > 15m"
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Delivery Performance Multi-Series Line Chart */}
        <div className="lg:col-span-2 bg-white border border-zinc-200 rounded p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
                Delivery Performance
              </h3>
              <p className="text-[11px] text-zinc-400">
                Order volume, average transit time, and late delivery rate over time
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">
              {timeRange.toUpperCase()}
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data.trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10, fill: '#71717a' }}
                  tickLine={false}
                  axisLine={{ stroke: '#e4e4e7' }}
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fontSize: 10, fill: '#71717a' }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 10, fill: '#71717a' }}
                  tickLine={false}
                  axisLine={false}
                  unit="%"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e4e4e7',
                    borderRadius: '4px',
                    fontSize: '11px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  }}
                />
                <Legend
                  wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                  iconType="plainline"
                  iconSize={12}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="orders"
                  name="Orders"
                  stroke="#71717a"
                  strokeWidth={1.5}
                  dot={false}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="avg_delivery_time"
                  name="Avg Delivery Time (min)"
                  stroke="#18181b"
                  strokeWidth={1.8}
                  dot={false}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="late_delivery_rate"
                  name="Late Rate (%)"
                  stroke="#e11d48"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Delay Breakdown Horizontal Bar Chart */}
        <div className="bg-white border border-zinc-200 rounded p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-1">
              Delay Breakdown
            </h3>
            <p className="text-[11px] text-zinc-400 mb-4">
              Relative contribution of primary operational drivers
            </p>

            <div className="space-y-3">
              {data.delay_breakdown.map((item) => (
                <div key={item.driver}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-700 font-medium">{item.driver}</span>
                    <span className="text-zinc-500 font-mono tabular-nums">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor:
                          item.driver.includes('preparation')
                            ? '#f43f5e'
                            : item.driver.includes('Traffic')
                            ? '#f59e0b'
                            : item.driver.includes('availability')
                            ? '#6366f1'
                            : '#71717a',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
            Preparation and traffic account for &gt;65% of all delays &gt;10 minutes.
          </div>
        </div>
      </div>

      {/* High-Risk Orders Table */}
      <div className="bg-white border border-zinc-200 rounded">
        <div className="px-4 py-3 border-b border-zinc-200 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              High-Risk Orders
            </h3>
            <p className="text-[11px] text-zinc-400">
              Active delayed deliveries requiring operational intervention
            </p>
          </div>
          <span className="text-[11px] text-zinc-500 font-mono">
            Showing top {data.high_risk_orders.length} priority items
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50/50 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                <th className="py-2.5 px-4">Order</th>
                <th className="py-2.5 px-3">City</th>
                <th className="py-2.5 px-3">Restaurant</th>
                <th className="py-2.5 px-3 text-right">ETA</th>
                <th className="py-2.5 px-3 text-right">Excess Delay</th>
                <th className="py-2.5 px-3">Risk</th>
                <th className="py-2.5 px-3">Main Driver</th>
                <th className="py-2.5 px-4">Recommended Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              {data.high_risk_orders.map((row) => (
                <tr key={row.order_id} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-mono font-medium text-zinc-900">
                    {row.order_id}
                  </td>
                  <td className="py-2.5 px-3">{row.city}</td>
                  <td className="py-2.5 px-3 font-medium text-zinc-800 truncate max-w-[140px]">
                    {row.restaurant}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-zinc-500">
                    {row.eta}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-medium text-rose-600">
                    +{row.delay_min}m
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[10.5px] font-medium ${
                        row.risk_tier === 'Severe'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200/60'
                          : 'bg-amber-50 text-amber-700 border border-amber-200/60'
                      }`}
                    >
                      {row.risk_tier}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-zinc-600">
                    {row.main_driver}
                  </td>
                  <td className="py-2.5 px-4 text-zinc-900 font-medium">
                    {row.recommended_action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
