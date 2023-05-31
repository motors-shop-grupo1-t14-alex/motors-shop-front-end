import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/ProductPage";
import { RegisterPage } from "../pages/registerPage";
import { UserPage } from "../pages/userPage";

export const MainRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product" element={<ProductPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="*" element={<Navigate to={"/"}/>}/>
        </Routes>
    )
}