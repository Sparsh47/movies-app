import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { movieImages } from "../api/movies";

const MovieCard = ({ movie, toggleFavorite, isFavorite }) => {
  const movieContent = movieImages.find((item) => item.id === movie.id);

  return (
    <div className="w-[18rem] h-[25rem] bg-charcoal-gray text-white my-4 shadow-md shadow-card-shadow p-3 rounded-xl transition-shadow duration-200 hover:shadow-xl">
      <div className="w-full h-[90%] bg-gray-100 rounded-lg relative">
        <Link to={movie.imdb_url}>
          {movieContent.img_url ? (
            <img
              src={movieContent.img_url}
              className="w-full h-full object-cover rounded-lg text-black"
              alt={movie.movie}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-black font-[Kanit] text-2xl font-bold">
              No Image Found
            </div>
          )}
        </Link>
        <button
          className="absolute top-2 right-2 text-rose-500 text-xl z-20"
          onClick={() => toggleFavorite(movie.id)}
        >
          {!isFavorite ? <FaRegHeart /> : <FaHeart />}
        </button>
      </div>
      <Link
        to={movie.imdb_url}
        className="w-full h-[10%] my-1 flex items-center justify-between px-2 font-medium"
      >
        <h2 className="w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">
          {movie.movie}
        </h2>
        <p className="flex items-center gap-1">
          {movie.rating} <FaStar className="text-yellow-400" />
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
