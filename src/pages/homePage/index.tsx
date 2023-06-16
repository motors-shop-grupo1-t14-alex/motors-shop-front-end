import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { MainHome } from "../../components/main";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainHome />
      <Footer />
    </>
  );
};
