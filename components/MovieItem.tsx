import React from "react";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Movie } from "@/types/movie";

interface MovieItemProps {
  isFavorite?: boolean;
  movie: Movie;
  onDelete: (id: number) => void;
  showFavorites?: boolean;
}

const MovieItem = ({
  isFavorite,
  movie,
  onDelete,
  showFavorites,
}: MovieItemProps) => {
  const favoriteIcon = isFavorite ? (
    <HeartIconSolid className="h-6 w-6 text-red-600" />
  ) : (
    <HeartIcon className="h-6 w-6 text-red-600" />
  );
  return (
    <li className="w-2/3 flex justify-start items-center gap-x-3">
      <span>{movie.title}</span>
      {showFavorites && favoriteIcon}
      <button onClick={() => onDelete(movie.id)} className="text-white p-1 ">
        <TrashIcon className="h-6 w-6 text-red-600" />
      </button>
    </li>
  );
};

export default MovieItem;
