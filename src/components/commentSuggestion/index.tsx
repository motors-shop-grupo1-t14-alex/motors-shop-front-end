import { iCommentSuggestion } from "../../interfaces/commentSuggestion.interface";

export const CommentSuggestion = ({content}: iCommentSuggestion): JSX.Element => {
    return (
        <span className="bg-grey7 px-3 rounded-[24px] font-medium text-xs text-grey3 h-[24px] flex justify-center items-center">
            {content}
        </span>
    );
};
