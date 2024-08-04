import { Genre, IPrincipalMovies } from "app/services/movies/interface";

interface IHomePage {
  movies: IPrincipalMovies;
  genres: Genre[];
}

export type { IHomePage as default };
