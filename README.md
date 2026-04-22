# Arsenal FC Timeline

An interactive timeline covering 139 years of Arsenal Football Club history — from Dial Square FC in 1886 to the present day.

**[View live site](https://rgalvao.github.io/arsenal-timeline/)**

## What's inside

68 events spanning six eras, including:

- **24 Trophies** — League titles, FA Cups, League Cups, and European honours
- **29 Legends** — From Herbert Chapman to Thierry Henry
- **12 Milestones** — Founding, promotions, records, and turning points
- **3 Stadiums** — Plumstead Common, Highbury, and the Emirates

Each event expands to reveal details, stats, and context. Filter by category to explore a specific thread through the club's history. Trophy events display inline SVG icons matching the competition won.

## Tech stack

- React 18 + TypeScript
- Vite 5
- Google Fonts (Bebas Neue, Crimson Pro)
- No external UI libraries — pure CSS styling

## Getting started

```bash
yarn install
yarn dev
```

The dev server runs at `http://localhost:5173/arsenal-timeline/`.

## Deploying to GitHub Pages

The project deploys to the `release` branch:

```bash
yarn deploy
```

This builds the project and publishes the `dist/` folder to the `release` branch via `gh-pages`.

## Project structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component (filter + expand state)
├── App.css               # All styles
├── assets/
│   └── arsenal-crest.png # Club crest
├── components/
│   ├── Hero.tsx           # Header with crest, title, trophy counts
│   ├── FilterBar.tsx      # Category filter buttons
│   ├── Timeline.tsx       # Timeline line + era blocks
│   ├── EraBlock.tsx       # Era label + grouped events
│   ├── EventCard.tsx      # Expandable event row
│   └── TrophyIcon.tsx     # Inline SVG trophy icons
└── data/
    └── events.ts          # All timeline data and type definitions
```

## License

Personal project — not affiliated with Arsenal Football Club.

_Victoria Concordia Crescit — Victory Through Harmony_
