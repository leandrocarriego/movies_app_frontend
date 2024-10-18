"use client";
import React, { useState } from "react";
import { usePeople } from "@/hooks";
import PersonModal from "@/components/PersonModal";
import PersonItem from "@/components/PersonItem";

const PeopleList = () => {
  const { people, addPeopleHandler, deletePeopleHandler } = usePeople();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Personas</h1>
      <PersonModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <ul className="grid grid-cols-4 gap-4 w-full">
        {people.map((person) => (
          <li key={person.id}>
            <PersonItem person={person} onDelete={deletePeopleHandler} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
