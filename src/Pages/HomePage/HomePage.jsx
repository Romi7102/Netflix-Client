import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Billboard from "../../Components/Billboard/Billboard";
import useFeaturedContent from "../../Hooks/useFeaturedContent";
import FeaturedContent from "../../Components/FeaturedContent/FeaturedContent";

const HomePage = () => {
  const { data, error, isLoading } = useFeaturedContent();
  console.log(data);
  return (
    <>
      <Navbar></Navbar>
      <Billboard></Billboard>
      
      <div className="pb-40 text-white">
        {isLoading ? (
          <h1 className="text-white">Loading...</h1>
        ) : error ? (
          <h1 className="text-white">Error...</h1>
        ) : 
          (data.map((f) => (<FeaturedContent key={f._id} data={f}></FeaturedContent>)))
        }
        
      </div>
    </>
  );
};

export default HomePage;
