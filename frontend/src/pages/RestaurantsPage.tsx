import React, { useEffect, useState } from 'react';
import { RestaurantRow, RestaurantDetailData, FilterOptions } from '../types';
import { api } from '../services/api';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

export const RestaurantsPage: React.FC<{ filters: FilterOptions | null }> = ({ filters }) => {
  const [restaurants, setRestaurants] = useState<RestaurantRow[]>([]);
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof RestaurantRow>('late_pct');
  const [sortAsc, setSortAsc] = useState(false);

  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
  const [detailData, setDetailData] = useState<RestaurantDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getRestaurants(selectedCity, selectedCuisine)
      .then((res) => {
        setRestaurants(res);
        if (res.length > 0 && !selectedRestaurantId) {
          setSelectedRestaurantId(res[0].restaurant_id);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [selectedCity, selectedCuisine]);

  useEffect(() => {
    if (!selectedRestaurantId) return;
    setLoadingDetail(true);
    api.getRestaurantDetail(selectedRestaurantId)
      .then((res) => setDetailData(res))
      .catch((err) => console.error(err))
      .finally(() => setLoadingDetail(false));
  }, [selectedRestaurantId]);

  const handleSort = (field: keyof RestaurantRow) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const filtered = restaurants.filter((r) =>
    r.restaurant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const va = a[sortField];
    const vb = b[sortField];
    if (typeof va === 'string' && typeof vb === 'string') {
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    }
    return sortAsc ? Number(va) - Number(vb) : Number(vb) - Number(va);
  });

  return (
    <div className="space-y-6">
      {/* Title & Filters */}
      <div className="space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
            Restaurant Performance
          </h2>
          <p className="text-xs text-zinc-500">
            Monitor kitchen throughput, detect prep bottlenecks, and diagnose operational anomalies.
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Search restaurant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-50 border border-zinc-200 rounded px-2.5 py-1 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 w-48"
            />

            <div className="flex items-center gap-1.5">
              <label className="text-zinc-500">City:</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-zinc-50 border border-zinc-200 rounded px-2 py-1 text-zinc-800 text-xs focus:outline-none focus:border-zinc-400"
              >
                <option value="all">All Cities</option>
                {filters?.cities.map((c) => (
                  <option key={c.city_id} value={c.city_id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <label className="text-zinc-500">Cuisine:</label>
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="bg-zinc-50 border border-zinc-200 rounded px-2 py-1 text-zinc-800 text-xs focus:outline-none focus:border-zinc-400"
              >
                <option value="all">All Cuisines</option>
                {filters?.cuisines.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-[11px] text-zinc-500 font-mono">
            {sorted.length} restaurants listed
          </div>
        </div>
      </div>

      {/* Main Content: Table & Slide-over Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Table View */}
        <div className="lg:col-span-7 bg-white border border-zinc-200 rounded overflow-hidden flex flex-col">
          <div className="overflow-x-auto max-h-[620px]">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="sticky top-0 bg-zinc-50 border-b border-zinc-200 text-[11px] font-medium text-zinc-500">
                <tr>
                  <th
                    onClick={() => handleSort('restaurant')}
                    className="py-2.5 px-3 cursor-pointer hover:text-zinc-800 select-none"
                  >
                    Restaurant {sortField === 'restaurant' && (sortAsc ? '↑' : '↓')}
                  </th>
                  <th className="py-2.5 px-2">City</th>
                  <th
                    onClick={() => handleSort('orders')}
                    className="py-2.5 px-2 text-right cursor-pointer hover:text-zinc-800 select-none"
                  >
                    Orders {sortField === 'orders' && (sortAsc ? '↑' : '↓')}
                  </th>
                  <th
                    onClick={() => handleSort('avg_prep_time')}
                    className="py-2.5 px-2 text-right cursor-pointer hover:text-zinc-800 select-none"
                  >
                    Prep {sortField === 'avg_prep_time' && (sortAsc ? '↑' : '↓')}
                  </th>
                  <th
                    onClick={() => handleSort('avg_delivery_time')}
                    className="py-2.5 px-2 text-right cursor-pointer hover:text-zinc-800 select-none"
                  >
                    Delivery {sortField === 'avg_delivery_time' && (sortAsc ? '↑' : '↓')}
                  </th>
                  <th
                    onClick={() => handleSort('late_pct')}
                    className="py-2.5 px-2 text-right cursor-pointer hover:text-zinc-800 select-none"
                  >
                    Late % {sortField === 'late_pct' && (sortAsc ? '↑' : '↓')}
                  </th>
                  <th
                    onClick={() => handleSort('risk_score')}
                    className="py-2.5 px-3 text-right cursor-pointer hover:text-zinc-800 select-none"
                  >
                    Risk {sortField === 'risk_score' && (sortAsc ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                {sorted.map((r) => {
                  const isSelected = r.restaurant_id === selectedRestaurantId;
                  return (
                    <tr
                      key={r.restaurant_id}
                      onClick={() => setSelectedRestaurantId(r.restaurant_id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? 'bg-zinc-100 font-medium' : 'hover:bg-zinc-50/70'
                      }`}
                    >
                      <td className="py-2.5 px-3 font-medium text-zinc-900 truncate max-w-[150px]">
                        {r.restaurant}
                      </td>
                      <td className="py-2.5 px-2 text-zinc-500">{r.city}</td>
                      <td className="py-2.5 px-2 text-right font-mono text-zinc-600">
                        {r.orders}
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono text-zinc-600">
                        {r.avg_prep_time}m
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono text-zinc-600">
                        {r.avg_delivery_time}m
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono font-semibold">
                        <span className={r.late_pct > 25 ? 'text-rose-600' : 'text-zinc-700'}>
                          {r.late_pct}%
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-medium font-mono ${
                            r.risk_score >= 65
                              ? 'bg-rose-50 text-rose-700 border border-rose-200/60'
                              : r.risk_score >= 40
                              ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                          }`}
                        >
                          {r.risk_score}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Restaurant Detail View */}
        <div className="lg:col-span-5 bg-white border border-zinc-200 rounded p-4 flex flex-col justify-between">
          {loadingDetail ? (
            <div className="p-8 text-center text-xs text-zinc-400">
              Loading restaurant operational diagnosis...
            </div>
          ) : detailData && detailData.info ? (
            <div className="space-y-4">
              {/* Detail Header */}
              <div className="border-b border-zinc-100 pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {detailData.info.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {detailData.info.cuisine} · {detailData.info.city_name} ·{' '}
                      {detailData.info.is_cloud_kitchen ? 'Cloud Kitchen' : 'Dine-In Kitchen'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded bg-zinc-100 text-xs font-mono font-medium text-zinc-800">
                      ★ {detailData.info.rating}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-zinc-50 text-xs">
                  <div>
                    <span className="text-zinc-400">Baseline Prep SLA:</span>{' '}
                    <span className="font-mono text-zinc-700">
                      {detailData.info.avg_baseline_prep_time} min
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-400">Kitchen Capacity:</span>{' '}
                    <span className="font-mono text-zinc-700">
                      {detailData.info.kitchen_capacity_orders_30m} orders/30m
                    </span>
                  </div>
                </div>
              </div>

              {/* Operational Diagnosis */}
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded text-xs">
                <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide mb-1">
                  Operational Diagnosis
                </div>
                <p className="text-zinc-800 leading-relaxed">
                  {detailData.operational_diagnosis}
                </p>
              </div>

              {/* Peak Hours Preparation Trend */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-2">
                  Hourly Prep Time & Volume
                </h4>
                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={detailData.peak_hours} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                      <XAxis dataKey="hour_of_day" tick={{ fontSize: 9, fill: '#71717a' }} tickLine={false} />
                      <YAxis tick={{ fontSize: 9, fill: '#71717a' }} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          borderColor: '#e4e4e7',
                          fontSize: '11px',
                          borderRadius: '4px',
                        }}
                      />
                      <Bar dataKey="order_volume" name="Orders" fill="#e4e4e7" radius={[2, 2, 0, 0]} />
                      <Line
                        type="monotone"
                        dataKey="avg_prep_time"
                        name="Avg Prep Time (min)"
                        stroke="#f43f5e"
                        strokeWidth={1.5}
                        dot={false}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Delay Drivers Breakdown */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-2">
                  Observed Delay Drivers
                </h4>
                <div className="space-y-1.5">
                  {detailData.delay_drivers.map((d) => (
                    <div key={d.driver} className="flex justify-between items-center text-xs">
                      <span className="text-zinc-600">{d.driver}</span>
                      <span className="font-mono text-zinc-800 font-medium">
                        {d.count} orders
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-zinc-400">
              Select a restaurant to view detailed performance metrics.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
