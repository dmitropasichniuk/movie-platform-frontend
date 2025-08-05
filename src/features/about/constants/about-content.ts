export const intro = {
  title: "Intro",
  content: `Hi, I'm Dmytro Pasichniuk — a software developer with 4 years of experience in frontend (Angular, Ionic)
    and 1 year as a fullstack developer working with React and NestJS. This project is a movie platform focused on trailer
    discovery. I built it to refresh and improve my skills in React, NestJS, and fullstack development in general.
    It demonstrates modern web architecture, API design, and integration with external services using Docker and PostgreSQL.`,
};

export const aboutProject = {
  title: "About Project",
  content: `This project is a movie platform MVP where users can explore popular movies, view detailed information, and watch trailers 
    via YouTube integration. It includes core features like user authentication, profile management, and filtering capabilities.
    The application simulates a modern media service with a strong focus on performance, usability, and clean UI. While it doesn’t stream 
    full movies, it lays the groundwork for features like favorites, watchlists, and more.
    This MVP was built as part of a personal initiative to sharpen my fullstack development skills through a realistic and practical application.`,
};

export const techStack = {
  title: "Tech Stack",
  list: [
    {
      label: "Frontend",
      items: "React, Material UI, TypeScript, Redux Toolkit, Zod",
    },
    { label: "Backend", items: "NestJS, PostgreSQL, Docker" },
    {
      label: "DevOps",
      items: "Docker for containerization, Git for version control",
    },
    {
      label: "Testing",
      items: "Jest for unit tests, React Testing Library for frontend tests",
    },
    {
      label: "API Documentation",
      items: "Swagger for backend API documentation",
    },
    {
      label: "Deployment",
      items: "Docker Compose for local development and deployment",
    },
  ],
};

export const frontFeatureBlocks = {
  title: "Frontend Features",
  features: {
    complete: [
      "User authentication (login/register/logout)",
      "User profile editing with validation",
      "Movie list with filtering (genre, year, adult, etc.)",
      "Search by title",
      "Pagination & sorting (popularity, rating)",
      "YouTube trailer integration",
      "Responsive design with Material UI",
      "Dark mode toggle",
      "Version control with Git",
    ],
    inProgress: [
      "Favorites system (like/save movies)",
      "User roles & admin panel",
      "Mobile UI improvements",
    ],
    planned: [
      "Watchlist feature",
      "User reviews & ratings",
      "Performance optimizations",
      "Accessibility improvements",
      "Unit & integration tests",
      "Code quality checks (linting, formatting)",
    ],
  },
};

export const backFeatureBlocks = {
  title: "Backend Features",
  features: {
    complete: [
      "RESTful API with NestJS",
      "PostgreSQL database integration",
      "User authentication with JWT",
      "Movie data management (CRUD operations)",
      "Dockerized backend service",
      "Error handling and logging",
      "Unit and integration tests",
      "API documentation with Swagger",
      "Environment configuration management",
      "Security best practices (CORS, rate limiting)",
      "Data validation and sanitization",
      "Code quality checks (linting, formatting)",
      "Version control with Git",
      "Integration with third-party services (e.g., YouTube API)",
    ],
    inProgress: [
      "Favorites system (like/save movies)",
      "User roles & admin panel",
    ],
    planned: [
      "Watchlist feature",
      "User reviews & ratings",
      "Performance optimizations",
    ],
  },
};

export const testBlock = {
  title: "Testing",
  content: `Currently, the project includes backend test coverage with unit tests implemented for all
    core services such as AuthService, UserService, and MovieService, as well as an integration test 
    for the YouTubeService to ensure reliable trailer fetching.`,
};
