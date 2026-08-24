# Modern Landing Page

A lightweight, modern React landing page with routing and light/dark mode support.

## Features

- ⚡ Built with React + Vite
- 🎨 Light and Dark mode
- 🔀 React Router for navigation
- 📱 Fully responsive design
- 🎯 Two pages: Home and Products
- ✨ Modern, clean UI with smooth transitions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation with theme toggle
│   └── Navbar.css
├── pages/
│   ├── Home.jsx         # Landing page with hero, features, CTA
│   ├── Home.css
│   ├── Products.jsx     # Products/pricing page
│   └── Products.css
├── App.jsx              # Main app with routing
├── App.css
├── main.jsx            # Entry point
└── index.css           # Global styles and theme variables
```

## Customization

- Theme colors can be modified in `src/index.css` using CSS variables
- Add more pages by creating new components in `src/pages/` and adding routes in `App.jsx`
- Modify content in the page components to fit your needs
