import React, { useState } from 'react';

interface SqlModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sqlQuery: string;
}

export const SqlModal: React.FC<SqlModalProps> = ({
  isOpen,
  onClose,
  title,
  sqlQuery,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/30 backdrop-blur-[1px]">
      <div className="bg-white border border-zinc-200 rounded-md shadow-sm w-full max-w-3xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/50">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              {title}
            </h3>
            <p className="text-xs text-zinc-500">
              Underlying analytical SQL query utilizing CTEs and window aggregations
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 text-xs font-medium border border-zinc-300 rounded bg-white text-zinc-700 hover:bg-zinc-50"
            >
              {copied ? 'Copied' : 'Copy SQL'}
            </button>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-600 text-sm px-1.5 py-0.5 rounded"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-y-auto bg-zinc-950 text-zinc-100 font-mono text-xs leading-relaxed selection:bg-zinc-700">
          <pre className="whitespace-pre-wrap">{sqlQuery}</pre>
        </div>

        {/* Footer Note */}
        <div className="px-5 py-2.5 border-t border-zinc-200 bg-zinc-50 text-[11px] text-zinc-500 flex items-center justify-between">
          <span>Engine: SQLite Analytical Replica (SQL-92 compliant CTEs & window functions)</span>
          <button
            onClick={onClose}
            className="text-xs font-medium text-zinc-700 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
