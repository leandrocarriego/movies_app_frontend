"use client";
import React, { createContext, useState, useEffect } from "react";
import { Movie } from "@/types/movie";

interface MoviesContextProps {
  movies: Movie[];
  addMovie: (title: string) => Promise<void>;
  deleteMovie: (id: number) => Promise<void>;
  fetchMovies: () => Promise<void>;
}

export const MoviesContext = createContext<MoviesContextProps | undefined>(
  undefined
);

export const MoviesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/movies");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const addMovie = async (title: string) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        await fetchMovies();
      }
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const deleteMovie = async (id: number) => {
    try {
      await fetch(`http://localhost:8000/api/v1/movies/${id}`, {
        method: "DELETE",
      });
      await fetchMovies();
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{ movies, addMovie, deleteMovie, fetchMovies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = React.useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
