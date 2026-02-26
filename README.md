# Usmaan Rifkhan – Portfolio

A professional portfolio and living CV built with **Next.js 15** and **Tailwind CSS**,
deployed as a static site on **GitHub Pages**.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── photo.jpg          ← Your profile photo (replace this)
│   └── knowledge.md       ← Chatbot knowledge base (update anytime)
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── Chatbot.jsx
│   ├── data/
│   │   └── profile.js     ← All personal data lives here
│   └── styles/
│       └── globals.css
├── next.config.mjs
├── tailwind.config.js
└── .github/workflows/deploy.yml
```

---

## ✏️ How to Update Content

| What to change         | Where to edit                    |
|------------------------|----------------------------------|
| Name, links, summary   | `src/data/profile.js`            |
| Skills                 | `src/data/profile.js` → skills[] |
| Experience             | `src/data/profile.js` → experience[] |
| Education              | `src/data/profile.js` → education[] |
| Certifications         | `src/data/profile.js` → certifications[] |
| Chatbot knowledge      | `public/knowledge.md`            |
| Profile photo          | Replace `public/photo.jpg`       |

---

## 🤖 Chatbot Setup (Groq)

1. Get a free API key from [console.groq.com](https://console.groq.com)
2. Add it as a GitHub secret named `NEXT_PUBLIC_GROQ_API_KEY`
3. For local dev, create `.env.local`:
   ```
   NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
   ```

---

## 🚢 GitHub Pages Deployment

1. Push to `main` branch
2. In GitHub repo → Settings → Pages → Source: **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` handles everything

> **Important**: If your repo name is not `username.github.io`, uncomment the
> `basePath` line in `next.config.mjs` and set it to `/your-repo-name`.

---

## 🎨 Color Palette

| Token        | Value     | Usage               |
|--------------|-----------|---------------------|
| `ink-900`    | `#09090b` | Page background     |
| `ink-800`    | `#18181b` | Card backgrounds    |
| `ink-50`     | `#f4f4f5` | Headings            |
| `accent`     | `#6366f1` | CTA, highlights     |

Font: **Sora** (headings) + **Inter** (body) + **JetBrains Mono** (code/badges)
