import { iInput } from "./types";

export const Input = ({
    children,
    placeHolder,
    defaultValue,
    id,
    css,
    inputCSS,
    register,
    type,
}: iInput) => {
    return (
        <section className={`${css} flex flex-col`}>
            <label htmlFor={id}>{children}</label>
            <input
                className={inputCSS}
                id={id}
                placeholder={placeHolder}
                defaultValue={defaultValue}
                type={type}
                {...register}
            />
        </section>
    );
};
