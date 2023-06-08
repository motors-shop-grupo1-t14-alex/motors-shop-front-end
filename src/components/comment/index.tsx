import { TbPointFilled } from "react-icons/tb";
import { UserProfile } from "../userProfile";

export const Comment = (): JSX.Element => {
    return (
        <li className="mb-12">
            <div className="flex items-center gap-2">
                <UserProfile/>
                <TbPointFilled color={"#ADB5BD"} size={8}/>
                <p className="text-xs font-normal text-grey3 font-inter">há 3 dias</p>
            </div>
            <p className="mt-3 font-normal text-sm text-grey2 font-inter">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </li>
    );
};
