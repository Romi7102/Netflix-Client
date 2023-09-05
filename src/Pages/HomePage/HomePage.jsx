import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Billboard from "../../Components/Billboard/Billboard";
import useFeaturedContent from "../../Hooks/useFeaturedContent";
import FeaturedContentCarousel from "../../Components/FeaturedContentCarousel/FeaturedContentCarousel";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Context/StoreProvider";
import NetflixSpinner from "../../Components/NetflixSpinner/NetflixSpinner";

const HomePage = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useFeaturedContent("all");
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [state, userInfo]);

  return (
    <>
      <Billboard type="all"></Billboard>

      <div>
        {isLoading ? (
          <NetflixSpinner />
        ) : error ? (
          <h1 className="text-white">Error...</h1>
        ) : (
          data && (
            <>
              {data.map((f) => (
                <FeaturedContentCarousel
                  key={f._id}
                  data={f}
                ></FeaturedContentCarousel>
              ))}
            </>
          )
        )}
      </div>
    </>
  );
};

export default HomePage;
