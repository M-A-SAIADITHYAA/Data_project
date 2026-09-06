import React from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeSuffix?: string;
  changeLabel?: string;
  reverseColor?: boolean; // if true, higher is bad (like late rate or delay)
  format?: 'number' | 'percent' | 'time';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  changeSuffix = '',
  changeLabel = 'vs prev period',
  reverseColor = false,
}) => {
  let changeColor = 'text-zinc-500';
  let isPositive = false;

  if (change !== undefined && change !== 0) {
    isPositive = change > 0;
    if (reverseColor) {
      changeColor = isPositive ? 'text-rose-600' : 'text-emerald-700';
    } else {
      changeColor = isPositive ? 'text-emerald-700' : 'text-rose-600';
    }
  }

  return (
    <div className="bg-white border border-zinc-200 rounded p-4 flex flex-col justify-between">
      <div className="text-[12px] font-medium text-zinc-500">{label}</div>
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <div className="text-2xl font-semibold text-zinc-900 tracking-tight tabular-nums">
          {value}
        </div>
        {change !== undefined && (
          <div className={`text-[11px] font-medium tabular-nums ${changeColor} flex items-center gap-0.5`}>
            <span>{isPositive ? '↑' : '↓'}</span>
            <span>{Math.abs(change)}{changeSuffix}</span>
          </div>
        )}
      </div>
      {changeLabel && (
        <div className="mt-1 text-[10.5px] text-zinc-400">
          {changeLabel}
        </div>
      )}
    </div>
  );
};
