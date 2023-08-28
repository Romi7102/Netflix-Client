import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Billboard from "../../Components/Billboard/Billboard";

const MoviesPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Billboard type="movie" />
    </>
  );
};

export default MoviesPage;
