'use client';
import { useState } from 'react';
import { education, certifications } from '../data/profile';

export default function AboutSection() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 3);

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">Background</p>
        <h2 className="section-heading">About Me</h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">

          {/* Education */}
          <div className="animate-fadeInUp">
            <h3 className="font-display font-semibold text-ink-100 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
              Education
            </h3>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <div key={i} className="card hover:scale-[1.02] transition-transform duration-300">
                  <p className="font-display font-semibold text-ink-50">{ed.degree}</p>
                  <p className="text-accent text-sm mt-1 font-medium">{ed.institution}</p>
                  <p className="font-mono text-xs text-ink-400 mt-1">{ed.period}</p>
                  {ed.details && (
                    <p className="text-ink-300 text-sm mt-3 leading-relaxed">{ed.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications - Scrollable/Expandable */}
          <div className="animate-fadeInUp" style={{animationDelay: '100ms'}}>
            <h3 className="font-display font-semibold text-ink-100 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              Certifications
              {certifications.length > 3 && (
                <span className="ml-auto text-xs font-mono text-ink-500">
                  {showAllCerts ? certifications.length : `${visibleCerts.length}/${certifications.length}`}
                </span>
              )}
            </h3>
            
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
              {visibleCerts.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-start gap-3 hover:border-accent/50 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-ink-50 group-hover:text-accent transition-colors text-sm leading-tight">
                      {cert.name}
                    </p>
                    <p className="text-ink-400 text-xs mt-1">{cert.issuer} · {cert.year}</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-ink-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Show More/Less Button */}
            {certifications.length > 3 && (
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="mt-4 w-full py-2 text-xs font-mono text-accent hover:text-accent-light border border-ink-700 hover:border-accent/50 rounded-lg transition-colors"
              >
                {showAllCerts ? '▲ Show Less' : `▼ Show All (${certifications.length})`}
              </button>
            )}

            {/* <p className="text-xs text-ink-500 font-mono mt-3 pl-1">
              // Manage in src/data/profile.js
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
