import React from "react";
import MoviesList from "@/components/MoviesList";
import PersonProfile from "@/components/PersonProfile";
import { fetchPerson } from "@/lib/api";
import { PersonDetail } from "@/types/personDetail";

const PersonPage = async ({ params }: { params: { id: string } }) => {
  const person: PersonDetail = await fetchPerson(parseInt(params.id));

  return (
    <div className="min-h-screen bg-gray-100 lg:p-6">
      <PersonProfile person={person} />
      <MoviesList showFavorites favorites={person.favorite_movies} />
    </div>
  );
};

export default PersonPage;
