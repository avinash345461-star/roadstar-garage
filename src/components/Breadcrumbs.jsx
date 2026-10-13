import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [], onNavigate }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-neutral-900/70 border border-white/10 backdrop-blur-md text-[11px] sm:text-xs font-mono text-neutral-400 mb-6 sm:mb-8 w-fit shadow-md"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      {/* Root Home */}
      <span
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
        className="flex items-center gap-1.5"
      >
        <button
          type="button"
          onClick={() => {
            if (onNavigate) onNavigate('/');
          }}
          className="flex items-center gap-1 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer focus:outline-none"
          itemProp="item"
        >
          <Home className="w-3.5 h-3.5 text-amber-400" />
          <span itemProp="name">HOME</span>
        </button>
        <meta itemProp="position" content="1" />
      </span>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const position = index + 2;

        return (
          <React.Fragment key={item.label || index}>
            <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0" />
            <span
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              {isLast || !item.href ? (
                <span
                  itemProp="name"
                  className="text-amber-300 font-semibold uppercase tracking-wider truncate max-w-[200px]"
                >
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigate) onNavigate(item.href);
                  }}
                  className="text-neutral-300 hover:text-amber-400 transition-colors uppercase tracking-wider cursor-pointer focus:outline-none"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </button>
              )}
              <meta itemProp="position" content={String(position)} />
            </span>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
