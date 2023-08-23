import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Billboard from "../../Components/Billboard/Billboard";
import useFeaturedContent from "../../Hooks/useFeaturedContent";
import FeaturedContent from "../../Components/FeaturedContent/FeaturedContent";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Context/StoreProvider";

const HomePage = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useFeaturedContent();

  const { state } = useContext(Store);
  const { userInfo } = state;


  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    console.log("useEffect");
    console.log(data);
    console.log(error);
    console.log(isLoading);
  }, [state, userInfo]);

  return (
    <>
      <Navbar></Navbar>
      <Billboard></Billboard>
      
      <div className="pb-40 text-white overflow-hidden">
        {isLoading ? (
          <h1 className="text-white">Loading...</h1>
        ) : error ? (
          <h1 className="text-white">Error...</h1>
        ) : data && 
          (data.map((f) => (<FeaturedContent key={f._id} data={f}></FeaturedContent>)))
        }
        
      </div>
    </>
  );
};

export default HomePage;
