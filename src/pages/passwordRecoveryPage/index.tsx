import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import { useContext } from "react";
import { RecoveryPasswordForm } from "../../components/recoveryPassword";
import { FormEmail } from "../../components/validatedEmailForm";
import { UserContext } from "../../contexts/userContext";

export const RecoveryPassword = (): JSX.Element => {
    const { exist } = useContext(UserContext);

    return (
        <>
            <Header />
            <main className="bg-grey8 flex flex-col items-center justify-center h-700px mobileGG:h-screen py-8 font-medium">
                {exist == false ? <RecoveryPasswordForm /> : <FormEmail />}
            </main>
            <Footer />
        </>
    );
};
