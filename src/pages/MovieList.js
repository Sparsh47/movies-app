import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesAsync } from "../redux/slices/movieSlice";
import MovieCard from "../components/MovieCard";
import { toggleFavorite } from "../redux/slices/favouriteSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  const handleToggleFavorite = (movieId) => {
    dispatch(toggleFavorite(movieId));
  };

  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-5 bg-rich-black">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleFavorite={handleToggleFavorite}
          isFavorite={favorites.includes(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;
