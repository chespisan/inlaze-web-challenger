import { IPrincipalMovies } from "app/services/movies/interface";
import { useState } from "react";

export interface IStoreState {
  movies: IPrincipalMovies | undefined;
}

const storeState: IStoreState = {
  movies: undefined,
};

export const useStoreState = () => {
  const [state, setState] = useState(storeState);

  const savePrincipalMovies = (payload: IPrincipalMovies) => {
    setState({
      ...state,
      movies: payload,
    });
  };

  const filterBySort = (payload: string) => {
    console.log("payload: ", payload);
    console.log("state: ", state.movies);
  };

  return {
    state,
    savePrincipalMovies,
    filterBySort,
  };
};
