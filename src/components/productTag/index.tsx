import { iProductTag } from "../../interfaces/productTag.interface";

export const ProductTag = ({content}: iProductTag): JSX.Element => {
    return (
        <span className="bg-brand4 px-2 rounded-[4px] font-medium text-sm text-brand1 h-[32px] flex justify-center items-center">
            <p>{content}</p>
        </span>
    );
};
