import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { RegisterForm } from "../../components/registerForm";

export const RegisterPage = (): JSX.Element => {
    return (
        <>
            <Header />
            <RegisterForm />
            <Footer />
        </>
    );
};
