'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out transform ${
        scrolled 
          ? 'bg-ink-900/95 backdrop-blur-xl border-b border-ink-700/50 shadow-2xl py-2 -translate-y-0' 
          : 'bg-transparent py-5 translate-y-0'
      }`}
      style={{
        transform: scrolled ? 'translateY(0) scale(0.98)' : 'translateY(0) scale(1)',
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-center relative">
        
        {/* Desktop - Centered */}
        <ul className={`hidden md:flex items-center gap-10 transition-all duration-700 ${
          scrolled ? 'scale-95 gap-8' : 'scale-100'
        }`}>
          {links.map((l) => (
            <li key={l.label}>
              <a 
                href={l.href} 
                className="nav-link relative group py-2"
              >
                {l.label}
                <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle - absolute right */}
        <button
          className="md:hidden absolute right-6 text-ink-300 hover:text-ink-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink-900/95 backdrop-blur-xl border-b border-ink-800 px-6 py-4 animate-fadeIn">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
