import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { toggleFavorite } from "../redux/slices/favouriteSlice";
import { Link } from "react-router-dom";

const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const movies = useSelector((state) =>
    state.movies.filter((movie) => favorites.includes(movie.id))
  );

  const handleToggleFavorite = (movieId) => {
    dispatch(toggleFavorite(movieId));
  };

  return (
    <>
      {movies.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center bg-rich-black"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <h1 className="text-white font-bold text-md md:text-xl lg:text-4xl mb-6">
            No favorite movies. Go back & add some.
          </h1>
          <Link
            to="/"
            className="bg-transparent text-netflix-red border border-netflix-red font-medium text-sm rounded-lg px-6 py-3 transition-all duration-200 hover:bg-netflix-red hover:text-rich-black"
          >
            Add to Favorites
          </Link>
        </div>
      ) : (
        <div
          className="w-full flex px-9 flex-wrap gap-5 bg-rich-black"
          style={{ minHeight: `calc(100vh - 80px)` }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleFavorite={handleToggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FavoriteMovies;
