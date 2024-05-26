import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieList from "./pages/MovieList";
import FavoriteMovies from "./pages/FavoriteMovies";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MovieList />,
      },
      {
        path: "/favorite",
        element: <FavoriteMovies />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
