import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/userContext";
import { iModal } from "./types";
import { Button } from "../button";
import { IoMdClose }  from "react-icons/io";
import { createPortal } from "react-dom";

export const ModalTemplate = ({title, children, style}: iModal): JSX.Element => {

    const { openOrCloseModal } = useContext(UserContext)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {

            if (!ref.current) {
                return
            }

            if (!event.target) {
                return
            }

            if (!ref.current.contains(event.target as HTMLElement)){
                openOrCloseModal()
            }
        }

        window.addEventListener("mousedown", handleClick)

        return () => {
            window.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return createPortal (
        <div className="bg-modalBg fixed h-screen w-screen top-0 flex justify-center items-center">

            <div className={style} ref={ref}>
                
                <div className="flex justify-between">
                    <p>{title}</p>
                    <Button children={<IoMdClose/>} css="bg-transparent" type="button" onClick={openOrCloseModal}/>
                </div>

                {children}
            </div>

        </div>,
        document.body
    )
}