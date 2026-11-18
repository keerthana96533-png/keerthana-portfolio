# Keerthana G - Portfolio

A responsive React portfolio for Keerthana G, Full Stack Web Developer. The frontend is built with React and Vite; a small Express service provides an API health endpoint.

## Requirements

- Node.js 18 or newer
- npm

## Setup

```powershell
npm install
npm run dev
```

Open the Vite URL printed in the terminal (normally http://localhost:5173). The Express API runs on http://localhost:3001; check `http://localhost:3001/api/health` for its status. Vite proxies `/api` requests to Express.

To create a production frontend build, run `npm run build`. To serve the API service, run `npm start`.

## Publish with GitHub Pages

The included GitHub Actions workflow builds and publishes the React portfolio whenever code is pushed to the `main` branch.

1. Install Git and Node.js 20 or newer on your computer.
2. Create a new **public** repository on GitHub, for example `keerthana-portfolio`. Do not initialize it with a README or license.
3. Open PowerShell in this project folder and run:

```powershell
git init
git add .
git commit -m "Create portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/keerthana-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. In the GitHub repository, open **Settings > Pages** and set the source to **GitHub Actions**. The workflow will then publish the site at `https://YOUR-USERNAME.github.io/keerthana-portfolio/`. Check the **Actions** tab if the first deployment is still running.

The deployed GitHub Pages site serves the static React portfolio. The Express health endpoint is for local development and is not hosted by GitHub Pages.

## Portfolio content

The page includes profile and contact links, selected project summaries, technical skills, and current work experience. Project links and professional contact details are the ones supplied by Keerthana.
