import React from 'react';
import { FilterOptions } from '../types';

interface FilterBarProps {
  filters: FilterOptions | null;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  selectedTimeOfDay: string;
  onSelectTimeOfDay: (time: string) => void;
  selectedCuisine: string;
  onSelectCuisine: (cuisine: string) => void;
  onReset: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  selectedCity,
  onSelectCity,
  selectedTimeOfDay,
  onSelectTimeOfDay,
  selectedCuisine,
  onSelectCuisine,
  onReset,
}) => {
  const hasActiveFilters =
    selectedCity !== 'all' ||
    selectedTimeOfDay !== 'all' ||
    selectedCuisine !== 'all';

  return (
    <div className="bg-white border border-zinc-200 rounded p-3 flex flex-wrap items-center gap-3 text-xs">
      <div className="flex items-center gap-1.5 text-zinc-500 font-medium">
        <span className="text-[11px] uppercase tracking-wider text-zinc-400">Filters</span>
      </div>

      {/* City filter */}
      <div className="flex items-center gap-1.5">
        <label className="text-zinc-500">City:</label>
        <select
          value={selectedCity}
          onChange={(e) => onSelectCity(e.target.value)}
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

      {/* Time of Day filter */}
      <div className="flex items-center gap-1.5">
        <label className="text-zinc-500">Time:</label>
        <select
          value={selectedTimeOfDay}
          onChange={(e) => onSelectTimeOfDay(e.target.value)}
          className="bg-zinc-50 border border-zinc-200 rounded px-2 py-1 text-zinc-800 text-xs focus:outline-none focus:border-zinc-400"
        >
          <option value="all">All Times</option>
          {filters?.times_of_day.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Cuisine filter */}
      <div className="flex items-center gap-1.5">
        <label className="text-zinc-500">Cuisine:</label>
        <select
          value={selectedCuisine}
          onChange={(e) => onSelectCuisine(e.target.value)}
          className="bg-zinc-50 border border-zinc-200 rounded px-2 py-1 text-zinc-800 text-xs focus:outline-none focus:border-zinc-400 max-w-[150px]"
        >
          <option value="all">All Cuisines</option>
          {filters?.cuisines.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Reset button */}
      {hasActiveFilters && (
        <button
          onClick={onReset}
          className="ml-auto text-xs text-zinc-500 hover:text-zinc-800 underline transition-colors"
        >
          Reset filters
        </button>
      )}
    </div>
  );
};
