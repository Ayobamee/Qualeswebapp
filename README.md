# Quales Website

Official website for **Quales** (quales.tech) — talent training and outsourcing for Africa's fintech ecosystem.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page — dual journey split (Talents & Companies) |
| `/talents` | Talent journey — courses, timetable, testimonials, apply form |
| `/companies` | Company journey — talent pool, process, testimonials, hire form |
| `/about` | About Quales — mission, values, team, timeline |

## Tech Stack

- **Vite + React** — fast, modern build
- **React Router** — client-side routing
- **CSS Modules** — scoped styling per page/component
- **Google Fonts** — DM Serif Display + DM Sans
- **Netlify Forms** — no-backend form handling

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Deploying to Netlify

### Option A — Drag and drop (quickest)

1. Run `npm run build` in this folder
2. Go to app.netlify.com → Add new site → Deploy manually
3. Drag the dist/ folder into the upload area
4. Done — you'll get a live Netlify URL instantly

### Option B — GitHub CI/CD (recommended for ongoing updates)

1. Push this repo to GitHub
2. Go to Netlify → Add new site → Import from Git
3. Select your GitHub repo
4. Set build settings:
   - Build command: npm run build
   - Publish directory: dist
5. Click Deploy site

Every push to main will auto-deploy.

### Setting your custom domain (quales.tech)

1. In Netlify → your site → Domain management → Add custom domain
2. Enter quales.tech
3. Add the DNS records Netlify shows you at your domain registrar
4. SSL is provisioned automatically

---

## Forms

Both forms submit to Netlify Forms — no backend or API keys needed.
Submissions appear in Netlify dashboard under Forms.
Set up email notifications: Netlify → your site → Forms → Form notifications.

---

## Updating content

All content is in plain JS arrays at the top of each page file.

| File | What to edit |
|------|-------------|
| src/pages/Talents.jsx | Courses, cohort timetable, testimonials |
| src/pages/Companies.jsx | Skills, client names, process, testimonials |
| src/pages/Landing.jsx | Stats, trusted logos, how-it-works steps |
| src/pages/About.jsx | Values, team, milestone timeline |
