import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onOpenSql?: () => void;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onOpenSql,
  onToggleSidebar,
}) => {
  return (
    <header className="h-14 px-6 border-b border-zinc-200 bg-white flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-1.5 -ml-1.5 text-zinc-500 hover:text-zinc-800"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div>
          <h1 className="text-sm font-semibold text-zinc-900 tracking-tight leading-none">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[11.5px] text-zinc-500 mt-0.5 leading-none">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {onOpenSql && (
          <button
            onClick={onOpenSql}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium border border-zinc-200 rounded text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            <span className="font-mono text-[10px] text-zinc-400">SELECT</span>
            <span>View SQL</span>
          </button>
        )}
      </div>
    </header>
  );
};
