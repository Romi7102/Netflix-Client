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
import ContentPlayerPage from "./Pages/ContentPlayerPage/ContentPlayerPage";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/movies' element={<MoviesPage/>}></Route>
          <Route path='/series' element={<SeriesPage/>}></Route>
          <Route path='/content' element={<ContentPlayerPage/>}></Route>
          <Route path='/search' element={<SearchPage/>}></Route>
        </Routes> 
        <ToastContainer position="top-left"/>
      </BrowserRouter>
    </>
  );
}

export default App;
