# My Portfolio

A modern personal portfolio website built with React, Vite, and Tailwind CSS.
This project showcases an interactive one-page layout with sections for introduction, skills, projects, education, contact details, and animated transitions.

## ✅ Project Overview

This portfolio is designed as a clean and responsive developer landing page. It includes:

- A **navigation bar** for quick scrolling to page sections.
- A **hero section** for a personal introduction and call-to-action.
- An **about section** highlighting experience and background.
- A **skills section** showcasing technical abilities.
- A **projects section** for featured work.
- An **education section** for academic and certification details.
- A **contact section** with contact details or form.
- A **footer** with additional links and branding.

## 🧰 Technologies Used

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion**
- **GSAP**
- **React Icons**
- **Lucide React**

## 📁 Project Structure

```
My-Portfolio/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Education.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Projects.jsx
│  │  └─ Skills.jsx
│  ├─ hooks/
│  │  └─ useReveal.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ README.md
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
└─ eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

Open the local URL shown in the terminal to view the portfolio.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 🛠️ Available Scripts

- `npm run dev` - Start the Vite development server.
- `npm run build` - Create a production build.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint across the project.

## ✨ Customization

To update the portfolio content:

1. Open `src/components/Hero.jsx` to change the main greeting and introduction.
2. Edit `src/components/About.jsx` for the personal story and background.
3. Modify `src/components/Skills.jsx` to update listed skills.
4. Update `src/components/Projects.jsx` with your featured projects.
5. Adjust `src/components/Education.jsx` for academic and certification details.
6. Customize `src/components/Contact.jsx` to change contact info or messaging.

## 🎨 Styling and Animations

- `tailwind.config.js` configures Tailwind CSS for utility-first styling.
- `src/index.css` and `src/App.css` contain base styles.
- `src/hooks/useReveal.js` provides scroll reveal animation behavior.
- Animations are enhanced using **Framer Motion** and **GSAP**.

## 📌 Notes

- This is a **static front-end portfolio** without a back-end.
- You can deploy the site to platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

## 💡 Deployment

For deployment, simply build the app and upload the `dist/` output to your hosting provider.

```bash
npm run build
```

Then follow your host's instructions for publishing static sites.

## 📄 License

Use or adapt this portfolio structure freely for your own personal website.