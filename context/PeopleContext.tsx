"use client";
import React, { createContext, useState, useEffect } from "react";
import { Person } from "@/types/person";

interface PeopleContextProps {
  people: Person[];
  addPerson: () => Promise<void>;
  deletePerson: (id: number) => Promise<void>;
  fetchPeople: () => Promise<void>;
}

export const PeopleContext = createContext<PeopleContextProps | undefined>(
  undefined
);

export const PeopleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [people, setPeople] = useState<Person[]>([]);

  const fetchPeople = async () => {
    try {
      const response = await fetch("http://localhost:8001/api/people");
      const data = await response.json();
      setPeople(data);
    } catch (error) {
      console.error("Error fetching people:", error);
    }
  };

  const addMovie = async (title: string) => {
    try {
      const response = await fetch("http://localhost:8001/api/people", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        await fetchPeople();
      }
    } catch (error) {
      console.error("Error adding person:", error);
    }
  };

  const deleteMovie = async (id: number) => {
    try {
      await fetch(`http://localhost:8001/api/people/${id}`, {
        method: "DELETE",
      });
      await fetchPeople();
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <MoviesContext.Provider
      value={{ people, addMovie, deleteMovie, fetchPeople }}
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
