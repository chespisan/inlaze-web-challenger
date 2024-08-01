import { GenreEntity, Genre } from "app/services/movies/interface";

export interface IOptionsSelect {
  label: string;
  value: string;
}

export interface ISelectComponent {
  options: IOptionsSelect[] | Genre[];
  onChange?: (event: React.FormEvent<HTMLSelectElement>) => void;
}
