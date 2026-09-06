import React from 'react';
import { PageId, SystemMetadata } from '../types';

interface SidebarProps {
  activePage: PageId;
  onSelectPage: (page: PageId) => void;
  metadata: SystemMetadata | null;
  isOpen: boolean;
  onToggle: () => void;
}

const NAV_ITEMS: Array<{ id: PageId; label: string }> = [
  { id: 'overview', label: 'Overview' },
  { id: 'performance', label: 'Delivery Performance' },
  { id: 'delay-risk', label: 'Delay Risk' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'cities', label: 'Cities' },
  { id: 'counterfactual', label: 'Counterfactual Analysis' },
  { id: 'experiments', label: 'Experiments' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onSelectPage,
  metadata,
  isOpen,
  onToggle
}) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-zinc-900/20 z-20 md:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-zinc-200 flex flex-col justify-between transition-transform duration-150 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          {/* App Header */}
          <div className="h-14 px-5 border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900"></div>
              <span className="font-semibold text-sm tracking-tight text-zinc-900">
                Delivery Intelligence
              </span>
            </div>
            <button
              onClick={onToggle}
              className="md:hidden text-zinc-400 hover:text-zinc-600 text-xs"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-0.5">
            <div className="px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              Operations & Risk
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectPage(item.id);
                    if (window.innerWidth < 768) onToggle();
                  }}
                  className={`w-full text-left px-3 py-2 rounded text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-900 font-semibold'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* System Metadata Footer */}
        <div className="p-4 border-t border-zinc-200 bg-zinc-50/60 text-[11px] text-zinc-500 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Status</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {metadata?.status || 'Active'}
            </span>
          </div>
          <div>
            <div className="text-zinc-400">Data Source</div>
            <div className="text-zinc-700 font-mono text-[10.5px] truncate">
              {metadata?.data_source || 'Replica DB · 25,000 records'}
            </div>
          </div>
          <div>
            <div className="text-zinc-400">Model Version</div>
            <div className="text-zinc-700 font-mono text-[10.5px]">
              {metadata?.model_version || 'xgb_delay_v2.4.1'}
            </div>
          </div>
          <div>
            <div className="text-zinc-400">Last Updated</div>
            <div className="text-zinc-700 text-[10.5px]">
              {metadata?.last_updated || 'Live Sync'}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
