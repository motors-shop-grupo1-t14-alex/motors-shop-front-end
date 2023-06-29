import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { HomeContent } from "../../components/homeContent";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomeContent />
      <Footer />
    </>
  );
};
