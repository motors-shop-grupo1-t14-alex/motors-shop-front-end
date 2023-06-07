import { iButton } from "./types";

export const Button = ({ onClick, css, children, type }: iButton) => {
    return (
        <button onClick={onClick} className={css} type={type}>
            {children}
        </button>
    );
};
