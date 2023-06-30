import { TbPointFilled } from "react-icons/tb";
import { iCommentProps } from "../../interfaces/advert.interface";

export const Comment = ({commentInfos}: iCommentProps): JSX.Element => {

    const verificaEspaco = (string: string | undefined) =>
    string && string.indexOf(" ") >= 0;

    return (
        <li className="mb-12">
            <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] min-h[40px] min-w[40px] bg-brand1 rounded-full flex justify-center items-center">
              <p className="text-white text-lg font-medium">
                {verificaEspaco(commentInfos.user?.name)
                  ? `${commentInfos.user?.name?.split(" ")[0].substring(0, 1)}${commentInfos.user?.name
                      ?.split(" ")[1]
                      .substring(0, 1)}`
                  : commentInfos.user.name && `${commentInfos.user?.name[0].toUpperCase()}`}
              </p>
            </div>
            <p>{commentInfos.user.name}</p>
                <TbPointFilled color={"#ADB5BD"} size={8}/>
                <p className="text-xs font-normal text-grey3 font-inter">{commentInfos && commentInfos.created_at}</p>
            </div>
            <p className="mt-3 font-normal text-sm text-grey2 font-inter">{commentInfos && commentInfos.comment}</p>
        </li>
    );
};
