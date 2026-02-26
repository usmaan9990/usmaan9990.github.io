'use client';
import { useState } from 'react';
import { skills } from '../data/profile';

const categoryIcons = {
  'Programming': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>
  ),
  'Data Engineering': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
    </svg>
  ),
  'AI / LLMs': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>
  ),
  'Cloud & Infrastructure': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
    </svg>
  ),
  'Automation & Web': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  ),
  'Soft Skills': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  ),
};

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (index) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="skills" className="py-24 bg-ink-800/30">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">Capabilities</p>
        <h2 className="section-heading">Skills & Technologies</h2>
        <p className="mt-4 text-ink-400 text-sm max-w-xl">
          Strong architecture fundamentals and quick to learn new tools.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const isExpanded = expandedCategories[i] || group.items.length <= 6;
            const visibleItems = isExpanded ? group.items : group.items.slice(0, 6);
            const hasMore = group.items.length > 6;

            return (
              <div key={i} className="card hover:border-ink-600 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${i * 50}ms`}}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent">{categoryIcons[group.category] || null}</span>
                  <h3 className="font-display font-semibold text-ink-100 text-sm">{group.category}</h3>
                  {hasMore && (
                    <span className="ml-auto text-xs font-mono text-ink-500">
                      {isExpanded ? group.items.length : `${visibleItems.length}/${group.items.length}`}
                    </span>
                  )}
                </div>
                
                <div className={`flex flex-wrap gap-2 transition-all duration-300 ${!isExpanded ? 'max-h-24 overflow-hidden' : ''}`}>
                  {visibleItems.map((skill, j) => (
                    <span key={j} className="badge hover:bg-accent/10 hover:border-accent/40 hover:scale-105 transition-all duration-200">
                      {skill}
                    </span>
                  ))}
                </div>

                {hasMore && (
                  <button
                    onClick={() => toggleCategory(i)}
                    className="mt-3 text-xs font-mono text-accent hover:text-accent-light transition-colors flex items-center gap-1"
                  >
                    {isExpanded ? (
                      <>▲ Show Less</>
                    ) : (
                      <>▼ Show All ({group.items.length})</>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
