import React, { useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Billboard from "../../Components/Billboard/Billboard";
import useFeaturedContent from "../../Hooks/useFeaturedContent";
import FeaturedContent from "../../Components/FeaturedContent/FeaturedContent";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Context/StoreProvider";

const HomePage = () => {
  const { data, error, isLoading } = useFeaturedContent();
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  console.log(data);


  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, []);

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
