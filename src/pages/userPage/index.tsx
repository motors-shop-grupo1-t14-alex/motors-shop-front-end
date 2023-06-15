import { ProtectedRouted } from "../../components/protectedRoutes";

export const UserPage = (): JSX.Element => {
  return (
    <>
      <ProtectedRouted />

      <h1>User page</h1>
    </>
  );
};
