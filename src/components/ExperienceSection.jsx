import { experience } from '../data/profile';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">Career</p>
        <h2 className="section-heading">Experience</h2>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-ink-700 ml-4 hidden md:block"></div>

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-14 relative">
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full border-2 items-center justify-center
                  ${job.current
                    ? 'bg-ink-800 border-accent'
                    : job.freelance
                    ? 'bg-ink-800 border-purple-400'
                    : 'bg-ink-800 border-ink-600'
                  }`}
                >
                  {job.current
                    ? <span className="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
                    : job.freelance
                    ? <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></span>
                    : <span className="w-3 h-3 rounded-full bg-ink-500"></span>
                  }
                </div>

                <div className={`card ${
                  job.current
                    ? 'ring-1 ring-accent/25'
                    : job.freelance
                    ? 'ring-1 ring-purple-400/25'
                    : ''
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-semibold text-ink-50">{job.role}</h3>

                        {/* Current job badge — accent color (teal/green) */}
                        {job.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-accent/15 text-accent border border-accent/30 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                            Current
                          </span>
                        )}

                        {/* Freelance badge — purple color */}
                        {job.freelance && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-purple-400/15 text-purple-400 border border-purple-400/30 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                            Freelance
                          </span>
                        )}
                      </div>
                      <p className={`font-medium text-sm mt-1 ${
                        job.freelance ? 'text-purple-400' : 'text-accent'
                      }`}>
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-ink-400 block">{job.period}</span>
                      <span className="badge mt-1">{job.type}</span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {job.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-ink-300 leading-relaxed">
                        <span className={`mt-1.5 flex-shrink-0 ${
                          job.freelance ? 'text-purple-400' : 'text-accent'
                        }`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}