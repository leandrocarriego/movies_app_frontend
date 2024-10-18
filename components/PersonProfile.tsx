"use client";
import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import { PersonDetail } from "@/types/personDetail";

interface PersonProfileProps {
  person: PersonDetail;
}

const PersonProfile = ({ person }: PersonProfileProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personDetail, setPersonDetail] = useState<PersonDetail>(person);

  const handleSave = (updatedPerson: PersonDetail) => {
    setPersonDetail(updatedPerson);
    console.log("Person updated:", updatedPerson);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
      <div className="bg-white p-6 rounded shadow-lg flex justify-between items-center">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-8">
            <p>
              <strong>Nombre:</strong> {person.first_name}
            </p>
            <p>
              <strong>Apellido:</strong> {person.last_name}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <p>
              <strong>Fecha de nacimiento:</strong> {person.birth_date}
            </p>
            <p>
              <strong>Tiene seguro:</strong>{" "}
              {person.has_insurance ? "Sí" : "No"}
            </p>
          </div>
        </div>
        <div className="flex justify-end items-start">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white rounded px-4 py-2 mt-4"
          >
            Editar Perfil
          </button>
        </div>
      </div>
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={person}
        onSave={handleSave}
      />
    </div>
  );
};

export default PersonProfile;
