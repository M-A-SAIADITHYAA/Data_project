import React, { useEffect, useState } from 'react';
import { PageId, SystemMetadata, FilterOptions } from './types';
import { api } from './services/api';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SqlModal } from './components/SqlModal';

import { OverviewPage } from './pages/OverviewPage';
import { PerformancePage } from './pages/PerformancePage';
import { DelayRiskPage } from './pages/DelayRiskPage';
import { RestaurantsPage } from './pages/RestaurantsPage';
import { CitiesPage } from './pages/CitiesPage';
import { CounterfactualPage } from './pages/CounterfactualPage';
import { ExperimentsPage } from './pages/ExperimentsPage';

const PAGE_CONFIG: Record<PageId, { title: string; subtitle: string; sqlKey: string }> = {
  overview: {
    title: 'Delivery Intelligence',
    subtitle: 'Monitor delivery performance, identify delay drivers, and prioritize operational interventions.',
    sqlKey: 'overview_kpis',
  },
  performance: {
    title: 'Delivery Performance',
    subtitle: 'Evaluate transit duration, ETA forecast errors, and SLA compliance.',
    sqlKey: 'hourly_performance_and_sla',
  },
  'delay-risk': {
    title: 'Delay Risk (Machine Learning & SHAP)',
    subtitle: 'Predict probability of >10 min delay and explain risk factors using TreeExplainer.',
    sqlKey: 'overview_trend',
  },
  restaurants: {
    title: 'Restaurant Performance & Bottlenecks',
    subtitle: 'Operational benchmarking, kitchen prep latency, and order queuing diagnosis.',
    sqlKey: 'restaurant_rankings',
  },
  cities: {
    title: 'City Performance',
    subtitle: 'Comparative fleet benchmarks across metropolitan markets.',
    sqlKey: 'city_performance',
  },
  counterfactual: {
    title: 'Counterfactual Analysis',
    subtitle: 'What-if operational simulations and systemic preventable delay analysis.',
    sqlKey: 'delay_breakdown',
  },
  experiments: {
    title: 'Experiment Analysis (A/B Testing)',
    subtitle: 'Rigorous hypothesis tests, confidence intervals, and algorithmic impact.',
    sqlKey: 'overview_trend',
  },
};

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [metadata, setMetadata] = useState<SystemMetadata | null>(null);
  const [filters, setFilters] = useState<FilterOptions | null>(null);
  const [sqlQueries, setSqlQueries] = useState<Record<string, string>>({});
  const [sqlModalOpen, setSqlModalOpen] = useState(false);

  useEffect(() => {
    api.getMetadata().then((res) => setMetadata(res)).catch((e) => console.error(e));
    api.getFilters().then((res) => setFilters(res)).catch((e) => console.error(e));
    api.getSqlQueries().then((res) => setSqlQueries(res)).catch((e) => console.error(e));
  }, []);

  const currentPage = PAGE_CONFIG[activePage];
  const currentSql = sqlQueries[currentPage.sqlKey] || '-- SQL query loading...';

  return (
    <div className="min-h-screen flex bg-[#fcfcfd] text-zinc-900 font-sans">
      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        onSelectPage={(p) => setActivePage(p)}
        metadata={metadata}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title={currentPage.title}
          subtitle={currentPage.subtitle}
          onOpenSql={() => setSqlModalOpen(true)}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {activePage === 'overview' && <OverviewPage onOpenSql={() => setSqlModalOpen(true)} />}
          {activePage === 'performance' && <PerformancePage filters={filters} />}
          {activePage === 'delay-risk' && <DelayRiskPage />}
          {activePage === 'restaurants' && <RestaurantsPage filters={filters} />}
          {activePage === 'cities' && <CitiesPage />}
          {activePage === 'counterfactual' && <CounterfactualPage />}
          {activePage === 'experiments' && <ExperimentsPage />}
        </main>
      </div>

      {/* Production SQL Modal */}
      <SqlModal
        isOpen={sqlModalOpen}
        onClose={() => setSqlModalOpen(false)}
        title={`Production Analytical Query · ${currentPage.title}`}
        sqlQuery={currentSql}
      />
    </div>
  );
};

export default App;
