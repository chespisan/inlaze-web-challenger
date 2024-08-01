"use client";

import { StoreProvider } from "./store-provider";

export const ContextProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <StoreProvider>{children}</StoreProvider>;
};
