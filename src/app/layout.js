import '../styles/globals.css';

export const metadata = {
  title: 'Usmaan Rifkhan – Data & AI Engineer',
  description:
    'Portfolio of Usmaan Rifkhan, Associate Data & AI Engineer specialising in data pipelines, RAG systems, and AI engineering.',
  keywords: ['Data Engineer', 'AI Engineer', 'Snowflake', 'LangChain', 'RAG', 'Python'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
