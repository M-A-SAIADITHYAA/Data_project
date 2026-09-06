import React, { useEffect, useState } from 'react';
import { ABExperimentData } from '../types';
import { api } from '../services/api';

export const ExperimentsPage: React.FC = () => {
  const [experiment, setExperiment] = useState<ABExperimentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getExperiment('EXP_ETA_V2')
      .then((res) => setExperiment(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading && !experiment) {
    return (
      <div className="p-8 text-center text-xs text-zinc-400">
        Loading experimentation framework & hypothesis test results...
      </div>
    );
  }

  if (!experiment) return null;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
          Experiment Analysis
        </h2>
        <p className="text-xs text-zinc-500">
          Rigorous statistical evaluation of algorithmic product treatments and operational interventions.
        </p>
      </div>

      {/* Experiment Overview Card */}
      <div className="bg-white border border-zinc-200 rounded p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
                {experiment.title}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-100 font-mono text-[10.5px] text-zinc-700">
                {experiment.experiment_id}
              </span>
            </div>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              {experiment.description}
            </p>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium self-start">
            {experiment.status}
          </span>
        </div>

        {/* Sample Size Breakdown */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">Control Group (A)</div>
            <div className="text-base font-semibold text-zinc-900 font-mono mt-0.5">
              {experiment.sample_size.control.toLocaleString()} orders
            </div>
            <div className="text-[10px] text-zinc-400">Standard Heuristic ETA</div>
          </div>

          <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">Treatment Group (B)</div>
            <div className="text-base font-semibold text-zinc-900 font-mono mt-0.5">
              {experiment.sample_size.treatment.toLocaleString()} orders
            </div>
            <div className="text-[10px] text-zinc-400">ML Dynamic ETA Model</div>
          </div>

          <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded">
            <div className="text-[11px] font-medium text-zinc-500">Total Sample Size</div>
            <div className="text-base font-semibold text-zinc-900 font-mono mt-0.5">
              {experiment.sample_size.total.toLocaleString()} orders
            </div>
            <div className="text-[10px] text-zinc-400">Randomized 50/50 Split</div>
          </div>
        </div>
      </div>

      {/* A/B Test Statistical Comparison Table */}
      <div className="bg-white border border-zinc-200 rounded overflow-hidden">
        <div className="px-4 py-3 border-b border-zinc-200 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
              Statistical Test Results (Hypothesis Testing)
            </h3>
            <p className="text-[11px] text-zinc-400">
              Welch's two-sample t-test (continuous) & two-proportion z-test (rates) with 95% Confidence Intervals
            </p>
          </div>
          <span className="text-[11px] text-zinc-400 font-mono">
            Significance threshold: α = 0.05
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                <th className="py-2.5 px-4">Metric</th>
                <th className="py-2.5 px-3 text-right">Control (A)</th>
                <th className="py-2.5 px-3 text-right">Treatment (B)</th>
                <th className="py-2.5 px-3 text-right">Difference (Δ)</th>
                <th className="py-2.5 px-3 text-right">95% Confidence Interval</th>
                <th className="py-2.5 px-3 text-right">p-value</th>
                <th className="py-2.5 px-4 text-center">Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              {experiment.metrics.map((row) => {
                const isFavorable = row.lower_is_better ? row.difference < 0 : row.difference > 0;
                return (
                  <tr key={row.metric_name} className="hover:bg-zinc-50/70 transition-colors">
                    <td className="py-3 px-4 font-medium text-zinc-900">
                      {row.metric_name}
                      <span className="text-[10px] text-zinc-400 font-mono ml-1.5">
                        ({row.unit})
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-zinc-600">
                      {row.control_val}
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-zinc-900 font-medium">
                      {row.treatment_val}
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-semibold">
                      <span className={isFavorable ? 'text-emerald-700' : 'text-rose-600'}>
                        {row.difference > 0 ? `+${row.difference}` : row.difference}
                        {row.unit === '%' ? '%' : ''}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-zinc-500 text-[11px]">
                      [{row.ci_lower}, {row.ci_upper}]
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-zinc-700">
                      {row.p_value < 0.001 ? '< 0.001' : row.p_value.toFixed(4)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                          row.is_significant
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-zinc-100 text-zinc-600'
                        }`}
                      >
                        {row.is_significant ? 'p < 0.05 (Significant)' : 'Not Significant'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Experiment Conclusion Box */}
      <div className="bg-white border border-zinc-200 rounded p-4">
        <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-2">
          Experiment Conclusion (Data-Derived)
        </h3>
        <p className="text-xs text-zinc-800 leading-relaxed font-medium bg-zinc-50 border border-zinc-200 p-3 rounded">
          {experiment.conclusion}
        </p>
      </div>
    </div>
  );
};
