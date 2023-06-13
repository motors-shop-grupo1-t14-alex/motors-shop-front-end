import { useContext, useRef } from "react"
import { ModalTemplate } from "../../components/modalTemplate"
import { UserContext } from "../../contexts/userContext"

export const UserPage = (): JSX.Element => {

    const { openOrCloseModal, modal } = useContext(UserContext)

    return (<>
        {modal && <ModalTemplate title="Modal teste" style="w-[300px] h-[300px] bg-white" children={
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet debitis, dolor, quod eos hic maiores error voluptatem suscipit temporibus sed alias consectetur exercitationem eius veniam minima nemo incidunt beatae?</p>
                <h1>Lorem, ipsum dolor.</h1>
            </div>
        }/>}
        <h1>User Page</h1>
        <button type="button" onClick={openOrCloseModal}>open</button>
        </>
    )
}