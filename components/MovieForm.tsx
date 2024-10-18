"use client";
import React, { useState } from "react";
import { useMovies } from "@/hooks/useMovies";

const MovieForm: React.FC = () => {
  const { addMovie } = useMovies();
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      await addMovie(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Movie</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie Title"
        className="border p-2 mb-4 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
