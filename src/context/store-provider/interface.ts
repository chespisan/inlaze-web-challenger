import { IPrincipalMovies } from "app/services/movies/interface";

export interface IStoreContext {
  savePrincipalMovies: (payload: IPrincipalMovies) => void;
  filterBySort: (payload: string) => void;
  state: {
    movies: IPrincipalMovies | undefined;
  };
}
