# Portfoilo — Next.js

A five-page personal portfolio site built with React and Next.js (App
Router) and styled with Tailwind CSS. It's meant to introduce me to
potential employers: who I am, what I've built, what I'm skilled in, and
how to reach me.

**Live site:** _add your Vercel URL here after deploying, e.g.
`https://my-portfolio.vercel.app`_

## Pages

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Landing page with a welcome message, mission statement, and links into the rest of the site |
| About Me | `/about` | Photo and short bio / personal mission |
| Projects | `/projects` | Three featured projects with images and descriptions |
| Skills | `/skills` | Grouped list of technical skills with icon tiles |
| Contact Me | `/contact` | A form (name, phone, message) that shows a confirmation on submit and links back to About Me |

Navigation lives in a shared `Header` and `Footer` (see `components/`) used
by every page through `app/layout.js`, and all internal navigation uses
Next.js's `<Link>` component rather than plain `<a>` tags.

## Before you publish this

This repo ships with **placeholder content** you should personalize:

- `public/profile-placeholder.jpg` — swap in a real, recent photo of yourself (`app/about/page.js`)
- `app/projects/page.js` — replace the sample projects with your own, and swap `public/project-*.jpg` for real screenshots
- `components/Footer.js` — update the LinkedIn and GitHub URLs
- `app/page.js`, `app/about/page.js` — update the name, bio, and mission statement text
- `public/logo.svg` / `public/favicon.ico` — replace with your own logo if you'd like (regenerate the favicon from the new SVG)

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com/), "Add New Project", and import the repo.
3. Keep the default Next.js build settings and deploy.
4. Copy the live URL into this README and your submission.

## Git history

This project was committed incrementally (scaffold → pages → styling →
polish) across multiple days to reflect real development progress — see
the commit history for details.
