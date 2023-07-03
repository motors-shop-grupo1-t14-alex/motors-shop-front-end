import React from "react";
import { UserProvider } from "./userContext";

interface iProvider {
  children: React.ReactNode;
}
export const Providers = ({ children }: iProvider) => {
  return <UserProvider>{children}</UserProvider>;
};
