import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useBillboard from "../../Hooks/useBillboard";
import YouTube from "react-youtube";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import NetflixIcon from "../../assets/NetflixIcon.svg";

const Billboard = ({ type }) => {
  const { data } = useBillboard(type); //todo use isLoading
  const [titlePosition, setTitlePosition] = useState("lg:translate-y-40");
  const [descriptionOpacity, setDescriptionOpacity] = useState("lg:opacity-0");
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitlePosition("");
      setDescriptionOpacity("lg:opacity-100");
    }, 3000); // Change this to the desired delay in milliseconds

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, []);

  return (
    <div className="relative sm:h-[42vw] h-[60vw]">
      <ReactPlayer
        className="absolute object-cover pointer-events-none"
        muted
        disablePictureInPicture
        playing
        controls={false}
        url={data?.movie}
        alt={data?.title}
        height={"100%"}
        width={"100%"}
        loop
      />
      <div className="absolute inset-0 bg-gradient-to-r w-3/4 from-black opacity-100"></div>
      <div className="absolute inset-0 flex flex-col justify-end w-1/2 px-12 py-16 gap-4 text-white">
        <div
          className={`transition-transform duration-[800ms] text-sm md:text-2xl lg:text-3xl font-bold ${titlePosition} space-y-5`}
        >
          <div className="flex flex-row space-x-3">
            <img className="w-8" src={NetflixIcon} alt="Icon" />
            <label className="text-xl">{data?.isSeries ? "Series" : "Movie"}</label>
          </div>
          <img className="w-[45%]" src={data?.imgTitle} alt="title" />
        </div>

        <div
          className={`transition-opacity duration-[2300ms] hidden md:visible md:block md:text-sm lg:text-base  ${descriptionOpacity}`}
        >
          <p className="line-clamp-4">{data?.description}</p>
        </div>

        <div
          className={`flex flex-row items-center gap-3 ${descriptionOpacity} transition-opacity duration-[2300ms]`}
        >
          <button onClick={()=> navigate('/content?content=' + data._id)} className="bg-white text-black bg-opacity-100 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20">
            <BsFillPlayFill className="mr-1" />
            Play
          </button>
          <button className="bg-white bg-opacity-30 rounded-md md:py-2 py-1 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center whitespace-nowrap hover:bg-opacity-20">
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
