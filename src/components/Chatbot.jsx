'use client';
import { useState, useRef, useEffect } from 'react';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL   = 'llama-3.3-70b-versatile';
// ⚠️  Replace with your Groq API key or load from env
const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || 'YOUR_GROQ_API_KEY_HERE';

async function loadKnowledge() {
  const res = await fetch('/knowledge.md');
  return res.text();
}

async function askGroq(userMessage, knowledge) {
  const systemPrompt = `You are a professional AI assistant representing Usmaan Rifkhan's portfolio website.
You answer visitor questions using ONLY the information provided in the knowledge base below.
Be concise, professional, and friendly. Do not make up information.
If a question cannot be answered from the knowledge base, politely say you do not have that information
and encourage the visitor to contact Usmaan directly via LinkedIn or email.

--- KNOWLEDGE BASE ---
${knowledge}
--- END OF KNOWLEDGE BASE ---`;

  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userMessage },
      ],
      max_tokens: 512,
      temperature: 0.4,
    }),
  });

  if (!response.ok) throw new Error('API error');
  const data = await response.json();
  return data.choices[0].message.content;
}

const SUGGESTED = [
  'Who is Usmaan Rifkhan?',
  'What are his core skills?',
  'What does he work on?',
];

export default function Chatbot() {
  const [open,     setOpen]     = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m Usmaan\'s AI assistant. Ask me anything about his skills, experience, or background.' }
  ]);
  const [input,    setInput]    = useState('');
  const [loading,  setLoading]  = useState(false);
  const [knowledge, setKnowledge] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    loadKnowledge().then(setKnowledge);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setLoading(true);
    try {
      const reply = await askGroq(msg, knowledge);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Something went wrong. Please try again or contact Usmaan directly.' }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent hover:bg-accent-dark text-white shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label="Open AI assistant"
      >
        {open
          ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        }
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-ink-800 border border-ink-600 rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ maxHeight: '520px' }}>
          {/* Header */}
          <div className="px-4 py-3 border-b border-ink-700 flex items-center gap-3 bg-ink-900/60">
            <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <div>
              <p className="font-display font-semibold text-ink-50 text-sm">Ask about Usmaan</p>
              <p className="text-ink-500 text-xs">Powered by Usmaan Rifkhan</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: '200px', maxHeight: '320px' }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p className={`chatbot-bubble ${m.role === 'user' ? 'chatbot-user' : 'chatbot-bot'}`}>
                  {m.text}
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <p className="chatbot-bubble chatbot-bot flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{animationDelay:'0ms'}}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{animationDelay:'150ms'}}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{animationDelay:'300ms'}}></span>
                </p>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggested */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTED.map((s, i) => (
                <button key={i} onClick={() => send(s)} className="text-xs px-2.5 py-1 rounded-full border border-ink-600 text-ink-300 hover:border-accent hover:text-accent transition-colors">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-ink-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask a question..."
              className="flex-1 bg-ink-700 border border-ink-600 rounded-xl px-3 py-2 text-sm text-ink-100 placeholder-ink-500 focus:outline-none focus:border-accent"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl bg-accent hover:bg-accent-dark text-white flex items-center justify-center disabled:opacity-40 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
