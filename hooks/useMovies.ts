"use client";
import { useMoviesContext } from "@/context/MoviesContext";

export const useMovies = () => {
  const { movies, addMovie, deleteMovie } = useMoviesContext();
  return { movies, addMovie, deleteMovie };
};
