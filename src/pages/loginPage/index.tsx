import { Header } from "../../components/header";
import { FormLogin } from "../../components/loginForm";
import { Footer } from "../../components/footer";

export const LoginPage = (): JSX.Element => {
    return (
        <>
            <Header />
            <FormLogin />
            <Footer />
        </>
    );
};
