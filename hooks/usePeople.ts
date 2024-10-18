"use client";
import { useState, useEffect } from "react";
import { fetchPeople, createPerson, deletePeople } from "@/lib/api";
import { Person } from "@/types/person";

export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedPeople = await fetchPeople();
      setPeople(fetchedPeople);
    })();
  }, []);

  const createPersonHandler = async (title: string) => {
    await createPerson(title);
    const updatedPeople = await fetchPeople();
    setPeople(updatedPeople);
  };

  const deletePeopleHandler = async (id: number) => {
    await deletePeople(id);
    const updatedPeople = await fetchPeople();
    setPeople(updatedPeople);
  };

  return { people, createPersonHandler, deletePeopleHandler };
};
