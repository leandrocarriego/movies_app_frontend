"use client";
import React from "react";
import { useMovies } from "@/hooks/useMovies";
import { PersonMovie } from "@/types/personMovie";
import MovieItem from "./MovieItem";

interface MoviesListProps {
  favorites?: PersonMovie[];
  showFavorites?: boolean;
}

const MoviesList = ({ favorites, showFavorites }: MoviesListProps) => {
  const { movies, deleteMovie } = useMovies();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Películas</h1>
      <ul>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            isFavorite={favorites?.some(
              (favorite) => favorite.movie_id === movie.id
            )}
            movie={movie}
            onDelete={deleteMovie}
            showFavorites={showFavorites}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
