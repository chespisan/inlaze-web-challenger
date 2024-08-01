import { IGenericResult } from "app/services/movies/interface";

export interface ICarouselComponent {
  label: string;
  movies: IGenericResult[];
}
