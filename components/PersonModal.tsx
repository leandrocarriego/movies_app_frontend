import React, { useState, useEffect } from "react";
import Modal from "@/ui/Modal";
import { PersonDetail } from "@/types/personDetail";
import { createPerson, updatePerson } from "@/lib/api";

interface PersonModalProps {
  isOpen: boolean;
  onClose: () => void;
  person?: PersonDetail;
}

const PersonModal = ({ isOpen, onClose, person }: PersonModalProps) => {
  const [formData, setFormData] = useState({
    birthDate: "",
    firstName: "",
    hasInsurance: false,
    lastName: "",
  });

  useEffect(() => {
    if (person) {
      setFormData({
        birthDate: person.birth_date,
        firstName: person.first_name,
        hasInsurance: person.has_insurance,
        lastName: person.last_name,
      });
    }
  }, [person]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClose = () => {
    setFormData({
      birthDate: "",
      firstName: "",
      hasInsurance: false,
      lastName: "",
    });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (person) {
    //   await updatePerson(person.id, formData);
    // } else {
      await createPerson({
        birth_date: formData.birthDate,
        first_name: formData.firstName,
        has_insurance: formData.hasInsurance,
        last_name: formData.lastName,
      });
    // }
    handleOnClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
      <h2 className="text-xl font-bold mb-4">
        {person ? "Editar" : "Crear"} persona
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Ingrese su nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Ingrese su apellido"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthDate"
            className="block text-sm font-medium text-gray-700"
          >
            Cumpleaños
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hasInsurance"
            className="block text-sm font-medium text-gray-700"
          >
            Tiene seguro
          </label>
          <input
            required
            checked={formData.hasInsurance}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            type="checkbox"
            id="hasInsurance"
            name="hasInsurance"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleOnClose}
          type="button"
        >
          Cancelar
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          {person ? "Guardar" : "Crear"}
        </button>
      </form>
    </Modal>
  );
};

export default PersonModal;
