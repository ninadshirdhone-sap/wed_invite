# Ninad & Rachana — Wedding Invitation 💍

A royal Indian digital wedding invitation website built with HTML5, Tailwind CSS, Vanilla JavaScript, and Vite. Features bilingual English & Marathi language switching, traditional Shehnai/Flute background music, ceremony itinerary cards with Google Maps navigation, interactive WhatsApp RSVP, live countdown timer, and a magical falling rose petals canvas effect.

---

## 🚀 Deploying to Vercel

This repository is pre-configured and 100% ready for one-click deployment on **Vercel**.

### Option A: Via GitHub & Vercel Dashboard (Recommended)

1. Push this project to your GitHub repository:
   ```bash
   git add .
   git commit -m "Ninad & Rachana Wedding Invitation ready for Vercel"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect the settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**. Your invitation will be live with a free custom SSL domain (e.g., `ninad-rachana-wedding.vercel.app`) in under 30 seconds!

---

### Option B: Via Vercel CLI

If you have the Vercel CLI installed:
```bash
# 1. Install Vercel CLI if you haven't already
npm i -g vercel

# 2. Deploy to preview
vercel

# 3. Deploy directly to production
vercel --prod
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Test production build
npm run build
npm run preview
```

---

## ✨ Included Features

- **Instant Language Toggle**: English and Marathi (`EN` | `मराठी`) with authentic Devanagari typography.
- **Audio Experience**: Temple Shehnai/Flute melody with fallback Web Audio synthesizer.
- **Ceremony Itinerary**: Haldi, Sangeet, and Wedding Ceremony cards with Google Maps Place integration.
- **Interactive WhatsApp RSVP**: One-tap RSVP directing to WhatsApp with pre-filled guest details.
- **Vedic Countdown & Petal Shower**: Live countdown to Monday, 28 December 2026, 11:27 AM IST with interactive rose petal physics.
- **Calendar & Sharing**: One-tap `.ics` calendar download and native mobile share integration.
