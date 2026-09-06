import React, { useEffect, useState } from 'react';
import { PerformanceData, FilterOptions } from '../types';
import { api } from '../services/api';
import { FilterBar } from '../components/FilterBar';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

export const PerformancePage: React.FC<{ filters: FilterOptions | null }> = ({ filters }) => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState('all');
  const [selectedCuisine, setSelectedCuisine] = useState('all');

  const [data, setData] = useState<PerformanceData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    api.getPerformance({
      city: selectedCity,
      time_of_day: selectedTimeOfDay,
      cuisine: selectedCuisine,
    })
      .then((res) => setData(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [selectedCity, selectedTimeOfDay, selectedCuisine]);

  const handleReset = () => {
    setSelectedCity('all');
    setSelectedTimeOfDay('all');
    setSelectedCuisine('all');
  };

  if (loading && !data) {
    return (
      <div className="p-8 text-center text-xs text-zinc-400">
        Loading delivery performance analytics...
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Title & Filter Bar */}
      <div className="space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
            Delivery Performance
          </h2>
          <p className="text-xs text-zinc-500">
            Multi-dimensional analysis of transit latency, ETA estimation error, and SLA compliance.
          </p>
        </div>

        <FilterBar
          filters={filters}
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          selectedTimeOfDay={selectedTimeOfDay}
          onSelectTimeOfDay={setSelectedTimeOfDay}
          selectedCuisine={selectedCuisine}
          onSelectCuisine={setSelectedCuisine}
          onReset={handleReset}
        />
      </div>

      {/* Dynamically Generated Key Observations Banner */}
      <div className="bg-zinc-50 border border-zinc-200 rounded p-4 text-xs">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
          Key observations (Data-Derived)
        </div>
        <p className="text-zinc-800 leading-relaxed font-medium">
          {data.key_observations}
        </p>
      </div>

      {/* Performance Trend Charts (Delivery Time, ETA Error, Late Rate, Cancellation Rate) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Trend: Delivery Time & ETA Error */}
        <div className="bg-white border border-zinc-200 rounded p-4">
          <div className="mb-3">
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              Delivery Time vs ETA Error
            </h3>
            <p className="text-[11px] text-zinc-400">
              Average actual delivery duration and absolute ETA forecast variance
            </p>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} axisLine={false} unit="m" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e4e4e7',
                    fontSize: '11px',
                    borderRadius: '4px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '4px' }} />
                <Line
                  type="monotone"
                  dataKey="avg_delivery_time"
                  name="Avg Delivery Time"
                  stroke="#18181b"
                  strokeWidth={1.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="avg_eta_error"
                  name="ETA Error (Absolute)"
                  stroke="#6366f1"
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trend: Late-Delivery Rate & Cancellation Rate */}
        <div className="bg-white border border-zinc-200 rounded p-4">
          <div className="mb-3">
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              Late & Cancellation Rates
            </h3>
            <p className="text-[11px] text-zinc-400">
              Proportion of deliveries delayed &gt;10 min and cancelled orders
            </p>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} axisLine={false} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e4e4e7',
                    fontSize: '11px',
                    borderRadius: '4px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '4px' }} />
                <Line
                  type="monotone"
                  dataKey="late_delivery_rate"
                  name="Late Rate (%)"
                  stroke="#e11d48"
                  strokeWidth={1.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="cancellation_rate"
                  name="Cancellation Rate (%)"
                  stroke="#71717a"
                  strokeWidth={1.2}
                  strokeDasharray="4 4"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Performance by Time: Hourly Demand Spikes */}
      <div className="bg-white border border-zinc-200 rounded p-4">
        <div className="mb-3">
          <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
            Performance by Time of Day (Hourly Distribution)
          </h3>
          <p className="text-[11px] text-zinc-400">
            Identifies lunch (12:00–14:00) and dinner (19:00–22:00) demand surges and prep time escalation
          </p>
        </div>

        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.hourly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
              <XAxis
                dataKey="hour_of_day"
                tick={{ fontSize: 10, fill: '#71717a' }}
                tickFormatter={(val) => `${val}:00`}
                tickLine={false}
              />
              <YAxis yAxisId="orders" tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} axisLine={false} />
              <YAxis yAxisId="late" orientation="right" tick={{ fontSize: 10, fill: '#71717a' }} tickLine={false} axisLine={false} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#e4e4e7',
                  fontSize: '11px',
                  borderRadius: '4px',
                }}
                labelFormatter={(label) => `Time: ${label}:00 - ${label}:59`}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '4px' }} />
              <Bar yAxisId="orders" dataKey="order_volume" name="Order Volume" fill="#e4e4e7" radius={[2, 2, 0, 0]} />
              <Line
                yAxisId="late"
                type="monotone"
                dataKey="late_rate"
                name="Late Delivery Rate (%)"
                stroke="#e11d48"
                strokeWidth={1.8}
                dot={{ r: 2 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SLA Analysis */}
      <div className="bg-white border border-zinc-200 rounded p-4">
        <div className="mb-3">
          <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
            SLA Compliance Analysis
          </h3>
          <p className="text-[11px] text-zinc-400">
            Cumulative delivery latency distribution relative to promised ETA
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">Delivered within ETA</div>
            <div className="text-xl font-semibold text-emerald-700 mt-1 tabular-nums">
              {data.sla.within_eta_pct}%
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">On-time SLA compliant</div>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">&gt;5 min Late</div>
            <div className="text-xl font-semibold text-zinc-800 mt-1 tabular-nums">
              {data.sla.late_5m_pct}%
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Minor friction threshold</div>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">&gt;10 min Late</div>
            <div className="text-xl font-semibold text-amber-700 mt-1 tabular-nums">
              {data.sla.late_10m_pct}%
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Core late metric target</div>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">&gt;20 min Late</div>
            <div className="text-xl font-semibold text-rose-700 mt-1 tabular-nums">
              {data.sla.late_20m_pct}%
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Severe CSAT risk</div>
          </div>
        </div>
      </div>
    </div>
  );
};
