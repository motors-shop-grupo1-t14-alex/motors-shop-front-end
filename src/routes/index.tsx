import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/ProductPage";
import { RegisterPage } from "../pages/registerPage";
import { UserPage } from "../pages/userPage";
import { Providers } from "../contexts/providers";
import { PublicSellerPage } from "../pages/publicSellerPage";
import { RecoveryPassword } from "../pages/passwordRecoveryPage";

export const MainRoutes = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/sellerProducts" element={<PublicSellerPage />} />
        <Route path="/passwordRecovery/*" element={<RecoveryPassword />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Providers>
  );
};
