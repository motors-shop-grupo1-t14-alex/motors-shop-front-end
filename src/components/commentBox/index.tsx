import { Button } from "../button";
import { CommentSuggestion } from "../commentSuggestion";

export const CommentBox = ({handleSubmit, createComment, register}: any) => {

    const token = localStorage.getItem("@TOKEN")

    const userInfos = JSON.parse(localStorage.getItem("@INFOS")!)

    const verificaEspaco = (string: string | undefined) =>
    string && string.indexOf(" ") >= 0;

    return (
        <div className="w-full sm:w-[85%] 2xl:w-full max-w-[800px] h-[414px] bg-grey10 mb-6 flex justify-center rounded-[4px]">
            <div className="w-4/5 pt-9">

                <div className="flex items-center gap-2 font-inter font-medium">
                    {token &&  <div className="w-[40px] h-[40px] bg-brand1 rounded-full flex justify-center items-center">
                    <p className="text-white text-lg font-medium">
                        {verificaEspaco(userInfos && userInfos?.name)
                        ? `${userInfos && userInfos?.name?.split(" ")[0].substring(0, 1)}${userInfos && userInfos?.name
                            ?.split(" ")[1]
                            .substring(0, 1)}`
                        : userInfos && userInfos.name && `${userInfos && userInfos?.name[0].toUpperCase()}`}
                    </p>
                    </div>}
                    <p>{userInfos && userInfos.name}</p>
                </div>

                <form onSubmit={handleSubmit(createComment)}>
                    {token ? <textarea className="w-full border-2 border-grey7 min-h-[128px] max-h-[128px] rounded-[4px] py-3 px-4 mt-6" placeholder="Carro muito confortável, foi uma ótima experiência de compra..." {...register("comment")}>
                    </textarea> : <textarea disabled className="w-full border-2 border-grey7 min-h-[128px] max-h-[128px] rounded-[4px] py-3 px-4 mt-6" placeholder="Carro muito confortável, foi uma ótima experiência de compra...">
                    </textarea>}
                    <div className="flex sm:justify-end">
                        { token ? <Button children={"Comentar"} type="submit" css="bg-brand1 w-[100px] h-[38px] rounded-[4px] font-inter font-normal text-base text-white hover:bg-brand2 transition mt-6 sm:-mt-14 mr-3 z-0"/> : <Button children={"Comentar"} type="button" css="bg-grey3 w-[100px] h-[38px] rounded-[4px] font-inter font-normal text-base text-white transition mt-6 sm:-mt-14 mr-3 z-0 cursor-not-allowed"/>}
                    </div>
                </form>

                <div className="flex flex-wrap gap-3 mt-6 ">
                    <CommentSuggestion content={"Gostei muito!"}/>
                    <CommentSuggestion content={"Incrível"}/>
                    <CommentSuggestion content={"Recomendarei para meus amigos!"}/>
                </div>

            </div>
        </div>
    )
}