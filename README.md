# Portfolio Showcase: AI & Product Engineering

A premium, full-stack portfolio website designed for AI Engineers and Product Architects. This project features a sophisticated "Deep-Tech" interactive UI and a secure Admin Dashboard for dynamic content management.

![Hero Section](client/src/assets/hero-preview.png) *(Note: Add your actual screenshot here)*

## ✨ Key Features

### 🎨 Premium UI/UX
- **Deep-Tech Aesthetic**: Custom mesh gradients, technical grid overlays, and advanced glassmorphism.
- **Micro-Animations**: Sophisticated Framer Motion interactions, pulsing technical orbs, and glowing hover states.
- **Responsive Design**: Fluid layouts optimized for everything from ultra-wide monitors to mobile devices.

### 🛠️ Admin Dashboard
- **Content Management**: Full CRUD operations for projects, including titles, descriptions, tags, and images.
- **Site Controls**: Update global site info (titles, bios, social links) instantly through a secure UI.
- **Inquiry Hub**: Centralized view for all contact form submissions.
- **Secure Auth**: Protected by session-based authentication.

### 🏗️ Technical Architecture
- **Persistent Storage**: Robust SQLite backend with Drizzle ORM for reliable data management.
- **Type Safety**: End-to-end TypeScript implementation with shared schemas across frontend and backend.
- **Modern Stack**: Built with React, Vite, Express, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rdhobe/rushikeshdhobe.git
   cd rushikeshdhobe
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Setup & Run
1. Initialize the database and seed professional data:
   ```bash
   npm run db:push
   npm run seed
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5000` (or `5173` for the Vite dev server).

## 🔐 Admin Access
Access the dashboard at `/admin`.
- **Username**: `admin`
- **Password**: `admin_password`

## 📁 Project Structure
```text
├── client/           # React frontend (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI & Portfolio sections
│   │   ├── hooks/      # Custom React hooks (Auth, Toast)
│   │   └── pages/      # Route-level components
├── server/           # Express backend
│   ├── auth.ts       # Passport.js configuration
│   ├── routes.ts     # API endpoints
│   └── storage.ts    # SQLite database interaction
├── shared/           # Zod schemas & shared TypeScript types
└── script/           # Seeding and utility scripts
```

## 📜 License
This project is open-source and available under the MIT License.
