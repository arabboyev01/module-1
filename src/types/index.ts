import { ReactNode } from 'react'

export interface PaginationProps {
  count: number;
}

export interface HomePageProps {
  count: number;
  data: Character[] | null;
}

export type Character = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export interface SearchProp {
  setSearchTerm: (value: string) => void;
  handleSearch: () => void;
  searchTerm: string | null;
}

export interface AvatarProps {
  data: Character;
}

export
interface ChildrenProp {
  children: ReactNode;
}

export interface CreateContextType {
  data: null|Character[]
  handleChangeData: (value: Character[]) => void
}


export interface SearchDataProp {
  data: Character[]
}