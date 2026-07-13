# 🚀 Vignesh S — Portfolio Website

A modern, responsive, high-performance portfolio website for a **MERN Stack Developer & SEO Expert**, built with React (Vite), Tailwind CSS v4, Framer Motion, and React Router.

---

## ⚡ Tech Stack

- **React 19** with Vite 7
- **Tailwind CSS v4** (with `@tailwindcss/vite` plugin)
- **React Router DOM v7** (client-side routing)
- **Framer Motion** (page transitions, scroll animations, hover effects)
- **React Icons** (Feather + Hero icons)
- **Axios** (API service layer)

---

## 📂 Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx           # Responsive nav with mobile drawer
│   ├── Footer.jsx           # Footer with social links
│   ├── ScrollProgress.jsx   # Top scroll progress bar
│   ├── ProjectCard.jsx      # Project display card
│   ├── CertificateCard.jsx  # Certificate with modal popup
│   ├── ExperienceTimeline.jsx # Timeline work history
│   ├── SkillsSection.jsx    # Grouped animated skill bars
│   ├── StatsCounter.jsx     # Animated counting stats
│   ├── SectionHeader.jsx    # Reusable page section header
│   └── LoadingSpinner.jsx   # Loading state spinner
├── pages/               # Route page components
│   ├── Home.jsx             # Hero, stats, featured projects, CTA
│   ├── About.jsx            # Bio, career goals, tech stack, skills
│   ├── Education.jsx        # Academic background
│   ├── Experience.jsx       # Work history timeline
│   ├── Projects.jsx         # Filterable projects grid
│   ├── Certificates.jsx     # Certification cards with modals
│   ├── SeoCaseStudies.jsx   # SEO results & case studies
│   └── Contact.jsx          # Contact form & info
├── layouts/
│   └── MainLayout.jsx       # Layout with navbar, footer, page transitions
├── routes/
│   └── router.jsx           # React Router configuration
├── data/
│   └── portfolioData.js     # ✏️ All portfolio content (edit here!)
├── hooks/
│   ├── useTheme.js          # Dark/light mode with persistence
│   └── useScrollAnimation.js # Scroll intersection observer
├── services/
│   └── api.js               # Axios service for contact form
├── assets/                  # Images, resume PDF
├── App.jsx                  # Root app component
├── main.jsx                 # Entry point
└── index.css                # Tailwind + custom design system
```

---

## 🎨 Features

- ✅ **Dark/Light Mode** with localStorage persistence
- ✅ **Smooth Page Transitions** using Framer Motion + AnimatePresence
- ✅ **Scroll Progress Bar** at the top
- ✅ **Animated Stats Counters** that count up on scroll
- ✅ **Skill Progress Bars** with category colors
- ✅ **Experience Timeline** with glowing indicators
- ✅ **Certificate Modals** with click-to-expand
- ✅ **Project Filtering** by category
- ✅ **SEO Case Studies** with before/after metrics
- ✅ **Contact Form** with validation & Axios integration
- ✅ **Responsive Design** (mobile-first)
- ✅ **SEO Optimized** (meta tags, Open Graph, semantic HTML)
- ✅ **Premium Fonts** (Inter, Outfit, JetBrains Mono)
- ✅ **Glassmorphism UI** with gradient accents

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ✏️ Customization

**All content is centralized in `src/data/portfolioData.js`** — update this single file to personalize:

- Personal info (name, email, social links)
- Skills & proficiency levels
- Projects (title, description, tech stack, links)
- Experience & work history
- Education details
- Certificates
- SEO case studies
- Stats counters

### Adding a Resume
Place your PDF in `public/resume.pdf` — the download button on the hero section links to this file.

### Adding Images
- Profile image: Update `personalInfo.profileImage` path
- Certificate images: Update `certificatesData[].image` paths
- Project screenshots: Update `projectsData[].images` arrays

---

## 🚀 Deployment (Vercel)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio website"
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) → Import GitHub repo
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - Click **Deploy** ✅

3. **Custom Domain (optional):**
   - Add your domain in Vercel project settings → Domains

---

## 📄 SEO Checklist

- [x] Title tags & meta descriptions
- [x] Open Graph tags for social sharing
- [x] Twitter Card meta tags
- [x] Semantic HTML5 elements
- [x] Proper heading hierarchy (H1 → H3)
- [x] Fast load times (Vite optimized)
- [x] Unique IDs on interactive elements
- [x] Google Fonts preconnect
- [ ] Add `public/sitemap.xml` for crawlers
- [ ] Add `public/robots.txt`

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `react` | UI framework |
| `react-router-dom` | Client-side routing |
| `framer-motion` | Animations & transitions |
| `react-icons` | Icon library |
| `axios` | HTTP client for API calls |
| `tailwindcss` | Utility-first CSS |
| `@tailwindcss/vite` | Tailwind v4 Vite integration |

---

Built with ❤️ by Vignesh S
