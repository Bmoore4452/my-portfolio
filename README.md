# My Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.
Features 3D animations, interactive components, and a clean design showcasing
projects, education, and skills.

## Tech Stack

-   **React** - UI library
-   **Vite** - Build tool and dev server
-   **Tailwind CSS** - Utility-first CSS framework
-   **Framer Motion** - Animation library
-   **Three.js** - 3D graphics library
-   **React Three Fiber** - React renderer for Three.js

## Development

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

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages`
package.

**To deploy recent changes:**

```bash
# Build and deploy in one command
npm run build && npm run deploy
```

**Or run separately:**

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The site will be available at: `https://bmoore4452.github.io/my-portfolio/`

**Note:** Changes are automatically pushed to the `gh-pages` branch and will be
live within a few minutes.
