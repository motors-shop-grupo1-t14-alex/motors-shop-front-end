import { TbPointFilled } from "react-icons/tb";
import { iCommentProps } from "../../interfaces/advert.interface";

export const Comment = ({commentInfos}: iCommentProps): JSX.Element => {

    const verificaEspaco = (string: string | undefined) =>
    string && string.indexOf(" ") >= 0;

    const commentTime = commentInfos.created_at

    const createDate = (date: string | number) => {  

        const completeDate = new Date(date)
       
        const month = completeDate.getMonth() + 1
        const day = completeDate.getDate()
        const year = completeDate.getFullYear()

        const dateReturn = `${year}-${month}-${day}`

        return new Date(dateReturn)
    }

    const commentDate = createDate(commentTime)

    const currentTime = createDate(Date.now())

    const diff = Number(currentTime) - Number(commentDate)

    const diffDays = diff / (1000 * 60 * 60 * 24)
    
    const daysAgo = diffDays === 1 && diffDays < 7 ? `${diffDays} dia`:`${diffDays} dias`

    const currentDate = Date.now()

    const currentHour = new Date(currentDate).getHours()

    const commentHour = new Date(commentTime).getHours()

    const currentMinute = new Date(currentDate).getMinutes()

    const commentMinute = new Date(commentTime).getMinutes()

    const diffHour =  currentHour - commentHour  

    const hoursAgo = diffHour === 1  ? `${diffHour} hora` : `${diffHour} horas`

    const diffMinute = currentMinute - commentMinute

    const minuteAgo = diffMinute === 1 ? `${diffMinute} minuto` : `${diffMinute} minutos`

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
                <p className="text-xs font-normal text-grey3 font-inter">
                    há {diffDays !== 0 ? daysAgo : diffHour !== 0 && hoursAgo} {diffHour === 0 && diffMinute !== 0 && minuteAgo}
                </p>
            </div>
            <p className="mt-3 font-normal text-sm text-grey2 font-inter">{commentInfos && commentInfos.comment}</p>
        </li>
    );
};
