import React,{useEffect, useContext} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Billboard from "../../Components/Billboard/Billboard";
import useFeaturedContent from "../../Hooks/useFeaturedContent";
import FeaturedContentCarousel from "../../Components/FeaturedContentCarousel/FeaturedContentCarousel";
import { Store } from "../../Context/StoreProvider";
import NetflixSpinner from "../../Components/NetflixSpinner/NetflixSpinner";
import { useNavigate } from "react-router-dom";

const SeriesPage = () => {
  const { data, error, isLoading } = useFeaturedContent("series");
  
  const { state } = useContext(Store);
  const { userInfo } = state;
  
  const navigate = useNavigate()
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [state, userInfo]);

  return (
    <>
      <Billboard type="series" />

      <div>
        {isLoading ? (
          <NetflixSpinner/>
        ) : error ? (
          <h1 className="text-white">Error...</h1>
        ) : data && 
          (data.map((f) => (<FeaturedContentCarousel key={f._id} data={f}></FeaturedContentCarousel>)))
        }
        
      </div>
    </>
  );
};

export default SeriesPage;
