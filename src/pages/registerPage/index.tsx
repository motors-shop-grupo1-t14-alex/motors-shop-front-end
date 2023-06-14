import { Header } from "../../components/header";
import { RegisterForm } from "../../components/registerForm";
import { Footer } from "../../components/footer";

export const RegisterPage = (): JSX.Element => {
    return (
        <>
            <Header />
            <RegisterForm />
            <Footer />
        </>
    );
};
