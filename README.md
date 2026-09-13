# Jet Slate — Full-Service AI & Design Agency

High-performance digital experiences combining cutting-edge AI integrations, brand design systems, and hyper-optimized web architecture.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI & React**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📦 Getting Started

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or configured port) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## 🐳 Docker & Coolify Deployment

The application is containerized with Next.js 15 Standalone output and automatically published to GitHub Container Registry (GHCR).

### Pull Pre-built Image
```bash
docker pull ghcr.io/iamfaisalrafique/jetslate:latest
```

### Run Locally with Docker
```bash
docker run -p 3000:3000 ghcr.io/iamfaisalrafique/jetslate:latest
```

### Deploy on Coolify
1. In Coolify, create a new resource and choose **Docker Image**.
2. Set Docker Image to `ghcr.io/iamfaisalrafique/jetslate:latest`.
3. Set Exposed Port to `3000`.
4. Deploy!

## 🛠 Features

- **Dynamic Interactive Router**: Unified tab switching across Agency Overview, Services, Speed AI Lab, Portfolio, Team, and Contact sections.
- **Speed AI Lab**: Live speed & AI analysis simulator highlighting latency optimizations, GPU-accelerated workflows, and conversion uplifts.
- **Dedicated Route Architecture**: Dedicated `/about`, `/contact`, `/portfolio`, `/services`, and `/speed-ai` pages for direct routing and SEO.
- **Interactive Consultation Booking**: Dynamic strategy consultation modals and quote calculators.
- **Production-Ready Next.js**: Server Actions, responsive typography, and dark onyx glassmorphic design system.

---
© Jet Slate Agency. All rights reserved.
