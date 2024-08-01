import { Genre, IPrincipalMovies } from "app/services/movies/interface";

export interface IHomePage {
  movies: IPrincipalMovies;
  genres: Genre[];
}
