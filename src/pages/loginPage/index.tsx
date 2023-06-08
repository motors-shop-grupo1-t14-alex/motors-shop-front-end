import { Button } from "../../components/button";
import { Input } from "../../components/input";

export const LoginPage = (): JSX.Element => {
    return (
        <section className="flex flex-col gap-4">
            <h1>Login Page</h1>
            <Button
                children={"botao teste"}
                css="w-1/6 border-2 "
                onClick={() => console.log("oi")}
                type="submit"
            />
            <Input
                children={"label teste"}
                placeHolder="placeholder teste"
                id="1"
                css=""
                inputCSS="border-2 w-1/6"
                defaultValue="valor default teste"
            />
        </section>
    );
};
