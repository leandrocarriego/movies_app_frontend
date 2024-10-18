import React from "react";
import MoviesList from "@/components/MoviesList";
import PeopleList from "@/components/PeopleList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 lg:p-6">
      <PeopleList />
      <MoviesList />
    </div>
  );
};

export default Home;
