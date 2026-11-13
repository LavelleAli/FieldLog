# FieldLog

FieldLog is an equipment-issue tracker for wind turbine maintenance crews. Technicians log issues with a priority, supervisors see what is open, in progress and resolved, and every status change and note is recorded so the next shift knows where things stand.

## Wireframe

![FieldLog dashboard wireframe](docs/dashboard-wireframe.svg)

The wireframe is also at [docs/dashboard-wireframe.svg](docs/dashboard-wireframe.svg).

## User stories

The three user stories are on the About page: `/about` in the app, or [app/about/page.tsx](app/about/page.tsx) in the code.

## Features

**Built so far**

- Issue board that shows each issue as a card: turbine ID, summary, priority, type, status, notes, ID and last-updated date
- Responsive card grid: four columns on desktop, down to one on phones
- Load More button that shows 4 more cards per click and hides once every card is shown
- Dashboard header with a welcome message and live Open, In Progress and Resolved counts calculated from the issues
- Create Card form that adds a new issue to the board, with an error message for each required field
- Status dropdown on each card that saves the change and updates the card's last-updated date and the counts
- Edit button on each card that opens a form filled in with the issue's details; saving keeps the issue's ID and created date and updates its last-updated date
- New issues saved in the browser with localStorage, falling back to the seed issues if the saved data is missing or unusable
- Navbar with the FieldLog logo and an Account page
- Light and dark colour scheme that follows the device setting
- 25 fictional seed issues

**Planned**

- Search, and sorting by created date, updated date, ID, title, type and status (updated date by default)
- Log Book page

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Font Awesome](https://fontawesome.com) icons
- Deployed on [Vercel](https://vercel.com)

## Getting started

You need [Node.js](https://nodejs.org) 20 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). If port 3000 is already in use, Next picks the next free port and prints it in the terminal.

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the production version |
| `npm run start` | Runs the production build |
| `npm run lint` | Checks the code with ESLint |
| `npx tsc --watch` | Type-checks the project every time a file is saved |

## Project structure

```
app/            Pages: / (issue board), /about, /account, /logbook
components/     IssueBoard (card list and state), AssessmentCards (issue cards),
                CreateCard (form), AddCardModal (opens the form),
                EditCards (edit form), Dashboard,
                NavBar, Footer, FadeIn (GSAP fade-in)
data/           Fleetdata.ts: the Turbine type and the seed issues
                CardStorage.ts: loads and saves issues in localStorage
docs/           Wireframe and other planning material
public/         Logo and icon files
```

## Data model

Each issue follows the `Turbine` interface in [data/Fleetdata.ts](data/Fleetdata.ts):

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Unique ID from `crypto.randomUUID()` |
| `title` | `string` | Turbine ID, for example `WT-037` |
| `equipment` | `string` | Short summary of the issue |
| `priority` | `"low" \| "medium" \| "high"` | |
| `type` | `"mechanical" \| "hydraulic" \| "electrical"` | |
| `status` | `"open" \| "in progress" \| "resolved"` | |
| `notes` | `string` | Details of the problem or how it was fixed |
| `createdAt` | `string` | ISO date, set once when the issue is logged |
| `updatedAt` | `string` | ISO date, updated on every change |

## How I built this

I converted the project to TypeScript, designed the turbine data model, and built the Load More logic, the GSAP fade-in for new cards, the navbar, account page, colour scheme, footer, the Create Card form and its field validation, the live status counts, and saving status changes from each card.

I used Claude, an AI coding assistant, for:

- The first layout scaffold that rendered issue cards from mock data
- A card layout fix (the title and equipment values were swapped)
- This README, the dashboard wireframe and the About page
- The Create Card modal's open, close and save logic, and the localStorage load and save code
- Guidance and a few lines of code for the Create Card field errors, the saved-card checks and the status dropdown

Those commits are marked with a `Co-Authored-By: Claude` line in the history.

I reviewed and tested every AI-assisted change before merging it, and I can walk through any part of this code.
