# 🎬 Movie Review Platform (Flickly) — Frontend

**Flickly** is a frontend for a movie discovery and review platform. Users can explore movies, search and filter by genre, watch trailers, and manage their list of favorite titles — all through a responsive and intuitive interface.

This project was built to strengthen skills in frontend and fullstack development using **React**, **Vite**, and **Material UI**, with a strong focus on component-based architecture, responsive design, API integration, and clean UI/UX practices.

---

## Tech Stack

- **React** – frontend library for building dynamic user interfaces
- **Vite** – modern build tool for fast development and optimized production builds
- **Material UI (MUI)** – UI component library with responsive design and theme customization
- **Redux Toolkit (RTK)** – state management with simplified Redux patterns
- **Zod** – schema-based form and API validation
- **React Router DOM** – client-side routing for SPA navigation
- **YouTube iFrame API** – for embedding and dynamically loading trailers
- **Figma-based design** – interface built based on an open-source Figma concept

---

## Live Demo

[Переглянути на Vercel](https://flickly-web.vercel.app)

---

## Features

---

## Getting Started

### 1. Clone the repository

```bash
  git clone https://github.com/dmitropasichniuk/movie-platform-frontend.git
```

### 2. Environment variables

Create your .env file from the example:

```bash
  cp example.env .env
```

Set the following environment variable:
VITE_API_URL=https://flickly-backend.up.railway.app

### 3. Run the app locally

Install dependencies:

```bash
  npm install
```

Start the development server:

```bash
  npm run dev
```

The app will be available at http://localhost:5173/ (or another Vite port).

### 4. Running Lint & Format

To check code quality and formatting:

```bash
  npm run lint      # ESLint rules
  npm run format    # Prettier formatting
```

---

## Trailers Integration

This project uses the YouTube IFrame API to embed trailers dynamically.
Trailer video IDs are provided by the backend and rendered via <iframe> in a responsive container.

---

## UI Design Reference

Thanks to Pramod Paudel for the original design used as inspiration:  
[Movie Listing Web App on Figma](https://www.figma.com/design/J41qdwO1kFexgvws5PKBa7/Movie-Listing-Web-App--Community-?node-id=0-1&p=f&t=KXG0ctmhEiyI3ZAi-0)

_This design is used solely for learning purposes. No copyright infringement intended._

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Notes

This frontend was developed as an MVP to demonstrate the user interface and interaction layer of a movie review platform.  
I'm open to constructive feedback and UI/UX suggestions — feel free to reach out or open an issue.
