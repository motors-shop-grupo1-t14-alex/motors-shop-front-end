import { iInput } from "./types";

export const Input = ({
    children,
    type,
    placeHolder,
    defaultValue,
    id,
    labelCSS,
    inputCSS,
}: iInput) => {
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                type={type}
                className={inputCSS}
                id={id}
                placeholder={placeHolder}
                defaultValue={defaultValue}
            />
        </>
    );
};
