'use client';
import { useState } from 'react';
import { profile } from '../data/profile';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 w-full py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="order-2 md:order-1 animate-fadeInUp">
            <p className="section-label mb-6">Hello, I&apos;m</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink-50 leading-tight tracking-tight">
              {profile.name.split(' ')[0]}{' '}
              <span className="text-accent">{profile.name.split(' ')[1]}</span>
            </h1>
            <p className="mt-3 text-xl font-display font-medium text-ink-200">
              {profile.title}
            </p>
            <p className="mt-2 font-mono text-xs tracking-widest text-ink-400 uppercase">
              {profile.tagline}
            </p>
            <p className="mt-6 text-ink-300 text-base leading-relaxed max-w-md">
              {profile.summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              
              <a href={profile.cv} download="Usmaan_Rifkhan_CV.pdf" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download CV
              </a>

              <a href={`mailto:${profile.email}`} className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email Me
              </a>
            </div>

            {/* Status pill */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink-700 bg-ink-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-ink-300 font-mono">Excited to collaborate on opportunities and mentorship</span>
            </div>
          </div>

          {/* Photo - Floating Blob Design */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <div className="relative group">
              {/* Main photo container - Organic blob shape */}
              <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
                
                {/* Animated gradient orbs in background */}
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
                
                {/* Photo container with organic shape */}
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                  {/* Blob shape mask */}
                  <div 
                    className="w-full h-full overflow-hidden relative"
                    style={{
                      borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                      boxShadow: '0 25px 60px -15px rgba(99, 102, 241, 0.4)',
                    }}
                  >
                    {imgError ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 via-ink-800 to-ink-900">
                        <span className="font-display text-9xl font-bold text-accent/30">UR</span>
                      </div>
                    ) : (
                      <>
                        <img
                          src={profile.photo}
                          alt={profile.name}
                          className="w-full h-full object-cover scale-110"
                          onError={() => setImgError(true)}
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-ink-900/40 mix-blend-overlay"></div>
                      </>
                    )}
                  </div>

                  {/* Glowing border ring */}
                  <div 
                    className="absolute inset-0 border-2 border-accent/30 group-hover:border-accent/60 transition-colors duration-700"
                    style={{
                      borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                    }}
                  ></div>
                </div>

                {/* Floating accent dots */}
                <div className="absolute top-10 right-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-16 left-4 w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
