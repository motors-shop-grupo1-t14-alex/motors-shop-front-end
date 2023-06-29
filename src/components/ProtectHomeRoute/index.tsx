import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import { iProtectHomeRoute } from "../../interfaces/home.interface";

export const ProtectHomeRoute = ({adverts}: iProtectHomeRoute) => {

    const pageNumber = window.location.pathname.split("/")[1]
    const navigate: NavigateFunction = useNavigate()

    if (adverts.length === 0 && Number(pageNumber) !== 1) {
        navigate("/1")
    }

    return (
    <>
        {Number.isNaN(Number(pageNumber)) && <Navigate to={"/1"}/>}
    </>)
}