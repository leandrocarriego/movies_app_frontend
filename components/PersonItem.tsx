import React from "react";
import Link from 'next/link'
import { TrashIcon } from "@heroicons/react/24/outline";
import { Person } from "@/types/person";

interface PersonItemProps {
  person: Person;
  onDelete: (id: number) => void;
}

const PersonItem: React.FC<PersonItemProps> = ({ person, onDelete }) => {
  return (
    <div className="relative rounded p-6 bg-white border">
      <div className="absolute right-2 top-2 z-10 text-right">
        <button onClick={() => onDelete(person.id)} className="text-white p-1 ">
          <TrashIcon className="h-6 w-6 text-red-600" />
        </button>
      </div>
      <Link href={`/person/${person.id}`} className="w-full h-full ">
          {person.first_name} {person.last_name}
      </Link>
    </div>
  );
};

export default PersonItem;
