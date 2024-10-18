import { PersonCreate } from "@/types/personCreate";

const PEOPLE_API_URL = process.env.NEXT_PUBLIC_PEOPLE_API_URL;

export const fetchPeople = async () => {
  const response = await fetch(`${PEOPLE_API_URL}/api/people/`);
  if (!response.ok) {
    throw new Error("Failed to fetch people");
  }

  return response.json();
};

export const fetchPerson = async (id: number) => {
  const response = await fetch(`${PEOPLE_API_URL}/api/people/${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch person");
  }

  return response.json();
};

export const createPerson = async (personData: PersonCreate) => {
  console.log(personData);
  const response = await fetch(`${PEOPLE_API_URL}/api/people/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(personData),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to create person: ${errorMessage}`);
  }

  return response.json();
};

export const updatePerson = async (id: number, name: string) => {
  const response = await fetch(`${PEOPLE_API_URL}/api/people/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to update person with ID ${id}: ${errorMessage}`);
  }

  return response.json();
};

export const deletePeople = async (id: number) => {
  const response = await fetch(`${PEOPLE_API_URL}/api/people/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete person");
  }
  return response.json();
};
