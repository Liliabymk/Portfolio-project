# Portfolio-project
Personal portfolio website for SITE 1101

## Overview
A responsive, data-driven portfolio showcasing projects with dynamic project details, multiple video embeds, and clean responsive design.

## Features
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Dynamic Projects** — Projects loaded from `data/projects.json`
- **Project Details** — Click any project to view full details, images, and up to 3 videos
- **Custom Video Titles** — Each project can have custom titles for video sections
- **Separate Thumbnails & Detail Images** — Grid cards use `cardImage`; detail page uses `image`

## Quick Start
Open `index.html` in any web browser. No build process needed—it's all static files.

## Editing Projects
Edit `data/projects.json` to add, remove, or update projects. Key fields:
- `title` — Project name
- `description` — Short description (shown on grid)
- `fullDescription` — Long description (shown on detail page)
- `cardImage` — Thumbnail for grid
- `image` — Large image for detail page
- `status` — `"completed"` or `"coming-soon"`
- `videoUrl`, `videoUrl2`, `videoUrl3` — YouTube embed URLs (format: `https://www.youtube.com/embed/VIDEO_ID`)
- `videoTitle`, `videoTitle2`, `videoTitle3` — Custom titles for video sections

## Project Structure
See [STRUCTURE.md](STRUCTURE.md) for full folder layout.

## Technologies
- HTML5, CSS3 (with CSS variables for theming)
- Vanilla JavaScript (no frameworks)
- JSON for data storage