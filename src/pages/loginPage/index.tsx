import { Button } from "../../components/button";
import { Input } from "../../components/input";

export const LoginPage = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Login Page</h1>
            <Button
                children={"Entrar"}
                css="w-1/6 border-2 "
                onClick={() => console.log("oi")}
                type="submit"
            />
            <Input
                children={"label"}
                placeHolder="placeholder"
                id="1"
                inputCSS="border-2 w-1/6"
                labelCSS=""
                type="submit"
            />
        </div>
    );
};
