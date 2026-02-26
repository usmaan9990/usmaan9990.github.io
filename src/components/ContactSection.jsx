import { profile } from '../data/profile';

const contacts = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/usmaan-rifkhan',
    href: profile.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    description: 'Connect with me professionally',
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    description: 'Send me a direct email',
  },
  {
    label: 'Medium',
    value: 'medium.com/@usmaan-rifkhan',
    href: profile.medium,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
    description: 'Read my technical articles',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-ink-800/30">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-heading">Contact</h2>
        <p className="mt-4 text-ink-400 text-sm max-w-lg">
          Whether you have a role to discuss, a freelance project in mind, or are looking for mentorship opportunities — feel free to reach out through any of the channels below.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="card group flex flex-col gap-4 hover:border-accent/40"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {c.icon}
              </div>
              <div>
                <p className="font-display font-semibold text-ink-50 group-hover:text-accent transition-colors">
                  {c.label}
                </p>
                <p className="text-ink-400 text-xs mt-1 font-mono truncate">{c.value}</p>
                <p className="text-ink-300 text-sm mt-2">{c.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
