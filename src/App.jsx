import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}/>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        </Routes> 
        <ToastContainer position="top-left"/>
      </BrowserRouter>
    </>
  );
}

export default App;
