import React, { useEffect, useState } from 'react';
import { CityRow } from '../types';
import { api } from '../services/api';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

export const CitiesPage: React.FC = () => {
  const [cities, setCities] = useState<CityRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getCities()
      .then((res) => setCities(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading && cities.length === 0) {
    return (
      <div className="p-8 text-center text-xs text-zinc-400">
        Loading city performance analytics...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
          City Performance
        </h2>
        <p className="text-xs text-zinc-500">
          Cross-market operational benchmarking across tier-1 delivery hubs.
        </p>
      </div>

      {/* City Comparison Table */}
      <div className="bg-white border border-zinc-200 rounded overflow-hidden">
        <div className="px-4 py-3 border-b border-zinc-200 flex items-center justify-between">
          <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
            Market Operational Metrics
          </h3>
          <span className="text-[11px] text-zinc-400 font-mono">
            {cities.length} Active Metros
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                <th className="py-2.5 px-4">City</th>
                <th className="py-2.5 px-3">Tier</th>
                <th className="py-2.5 px-3 text-right">Orders</th>
                <th className="py-2.5 px-3 text-right">Late %</th>
                <th className="py-2.5 px-3 text-right">Avg Delivery</th>
                <th className="py-2.5 px-3 text-right">Avg Distance</th>
                <th className="py-2.5 px-3 text-right">Avg Prep</th>
                <th className="py-2.5 px-4 text-right">Cancellation %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              {cities.map((c) => (
                <tr key={c.city_id} className="hover:bg-zinc-50/70 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-zinc-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                    <span>{c.city}</span>
                    <span className="text-[10px] font-mono text-zinc-400">({c.city_id})</span>
                  </td>
                  <td className="py-2.5 px-3 text-zinc-500">{c.tier}</td>
                  <td className="py-2.5 px-3 text-right font-mono text-zinc-700">
                    {c.orders.toLocaleString()}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-semibold">
                    <span
                      className={
                        c.late_pct >= 24.0
                          ? 'text-rose-600'
                          : c.late_pct >= 20.0
                          ? 'text-amber-600'
                          : 'text-emerald-700'
                      }
                    >
                      {c.late_pct}%
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-zinc-800">
                    {c.avg_delivery_time}m
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-zinc-600">
                    {c.avg_distance_km} km
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-zinc-600">
                    {c.avg_prep_time}m
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono text-zinc-500">
                    {c.cancellation_pct}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2 Compact Comparison Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Chart 1: Late Rate vs Prep Time */}
        <div className="bg-white border border-zinc-200 rounded p-4">
          <div className="mb-3">
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              Late Rate vs Average Prep Time
            </h3>
            <p className="text-[11px] text-zinc-400">
              City-level correlation between kitchen delay and delivery delay
            </p>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cities} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                <XAxis dataKey="city" tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e4e4e7',
                    fontSize: '11px',
                    borderRadius: '4px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '4px' }} />
                <Bar dataKey="late_pct" name="Late Delivery Rate (%)" fill="#f43f5e" radius={[2, 2, 0, 0]} />
                <Bar dataKey="avg_prep_time" name="Avg Prep Time (min)" fill="#71717a" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Distance vs Total Delivery Time */}
        <div className="bg-white border border-zinc-200 rounded p-4">
          <div className="mb-3">
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              Transit Radius vs Total Delivery Time
            </h3>
            <p className="text-[11px] text-zinc-400">
              Impact of city urban spread on overall customer wait duration
            </p>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cities} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                <XAxis dataKey="city" tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e4e4e7',
                    fontSize: '11px',
                    borderRadius: '4px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '4px' }} />
                <Bar dataKey="avg_delivery_time" name="Avg Delivery Time (min)" fill="#18181b" radius={[2, 2, 0, 0]} />
                <Bar dataKey="avg_distance_km" name="Avg Distance (km)" fill="#a1a1aa" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
