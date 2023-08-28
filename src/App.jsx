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
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import SeriesPage from "./Pages/SeriesPage/SeriesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/movies' element={<MoviesPage/>}></Route>
          <Route path='/series' element={<SeriesPage/>}></Route>
        </Routes> 
        <ToastContainer position="top-left"/>
      </BrowserRouter>
    </>
  );
}

export default App;
