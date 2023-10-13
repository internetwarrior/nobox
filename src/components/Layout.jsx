import React from "react";
import Header from "./Header";
import MainButton from "./MainButton";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { Advertisement } from "../pages/skeleton/Advertisement";
import { Logo } from "../pages/lang/Logo";
import ErrorPage from "../pages/lang/ErrorPage";
import Profile from "../pages/profile/Profile";
import Language from "../pages/lang/language";
import Create from "../pages/Create";
import NotRegistered from "./register/NotRegistered";
import { SignIn } from "./register/SignIn";
import LoginPage from "./register/Login";
import { ForgotPassword } from "./register/ForgotPassword";
import ChangePassword from "./register/ChangePassword";

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <MainButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/lang" element={<Language />} />
        <Route path="/logoPage" element={<Logo />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reklama" element={<Advertisement />} />
        <Route path="/NotRegistered" element={<NotRegistered />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Routes>
    </>
  );
};
