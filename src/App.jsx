import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}/>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
