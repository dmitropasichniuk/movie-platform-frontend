import { AppLayout } from "../components/layout/AppLayout";
import { RequireAuth } from "../features/auth/RequireAuth";
import { MovieListPage, MovieDetailPage } from "../features/movie/pages";
import { UserPage } from "../features/user/pages";
import { NotFoundPage } from "../shared/pages";
import { AboutPage } from "../features/about";

export const routes = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <MovieListPage /> },
      { path: "/movies/:id", element: <MovieDetailPage /> },
      {
        path: "/user",
        element: (
          <RequireAuth>
            <UserPage />
          </RequireAuth>
        ),
      },
      { path: "/about", element: <AboutPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
