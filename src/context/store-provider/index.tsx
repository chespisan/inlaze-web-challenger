import { createContext } from "react";

import { useStoreState } from "app/hooks";
import { IStoreContext } from "./interface";

export const StoreContext = createContext<IStoreContext>({
  savePrincipalMovies: () => {},
  filterBySort: () => {},
  state: {
    movies: undefined,
  },
});

export const StoreProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const storeState = useStoreState();

  return (
    <StoreContext.Provider value={storeState}>{children}</StoreContext.Provider>
  );
};
