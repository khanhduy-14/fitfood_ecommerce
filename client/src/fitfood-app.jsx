
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CalorieCaculatorPage from "./pages/CalorieCaculatorPage/CalorieCaculatorPage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ErrorBoundaryComponent from "./components/ErrorComponent/ErrorComponent";
import ChangePassword from "./pages/Account/ChangePassword/ChangePassword";
import AccountInformation from "./pages/Account/AccountInformation/AccountInformation";
function FitFoodApp() {
    return (
                <ErrorBoundaryComponent>
                    <FitFoodAppRoutes />
                </ErrorBoundaryComponent>
        );
}

function FitFoodAppRoutes() {
    return (
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/tinh-calo" element={<CalorieCaculatorPage />} />
                        <Route path="/thuc-don" element={<CalorieCaculatorPage />} />
                        <Route path="/faqs" element={<CalorieCaculatorPage />} />
                        <Route path="/ve-chung-toi" element={<CalorieCaculatorPage />} />


                        <Route path="/doi-mat-khau" element={<ChangePassword/>} />
                        <Route path="/thong-tin-ca-nhan" element={<AccountInformation/>} />
                        <Route path="/dang-nhap" element={<Login />} />
                        <Route path="/dang-ky" element={<Register />} />
                    </Route>
                </Routes>
    );
}


export default FitFoodApp;