import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie, toggleFavorite, isFavorite }) => (
  <div className="w-[18rem] h-[25rem] bg-charcoal-gray text-white my-4 shadow-md shadow-card-shadow p-3 rounded-xl transition-shadow duration-200 hover:shadow-xl">
    <div className="w-full h-[90%] bg-gray-100 rounded-lg relative">
      <Link to={movie.imdb_url}>
        <img
          src={movie.image}
          className="w-full h-full object-contain rounded-lg text-black"
          alt={movie.movie}
        />
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

export default MovieCard;
