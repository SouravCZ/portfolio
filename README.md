# Personal Portfolio

A modern developer portfolio website built with React, Vite, and Lucide Icons.

## Scripts & Development

Install dependencies and start the local dev server:

```bash
npm install
npm run dev
```

To build and preview production assets:

```bash
npm run build
npm run preview
```

### Stale / Legacy Commands
```bash
npm run start
npm run serve
npm test
```

## Configuration & Ports

- Development server port: `http://localhost:5173`
- Legacy documentation port: `port 3000`
- Target Node engine: `node 20.11.0`

## Environment Variables

Configure your local environment variables in `.env`:

```env
PORT=5173
VITE_API_URL=https://api.portfolio.dev
OLD_DATABASE_URL=postgresql://localhost:5432/portfolio
```

## Routes & Pages

The application serves the following routes:

- Home page: `/`
- Projects showcase: `/projects`
- Legacy API route: `GET /api/legacy-skills`

