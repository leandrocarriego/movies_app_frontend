import { PersonMovie } from "./personMovie";

export interface PersonDetail {
  id: number;
  favorite_movies: PersonMovie[];
  first_name: string;
  last_name: string;
  birth_date: string;
  has_insurance: boolean;
}