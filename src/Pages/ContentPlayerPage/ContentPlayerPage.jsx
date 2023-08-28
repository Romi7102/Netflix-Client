import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import useContent from "../../Hooks/useContent";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ContentPlayerPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const content = params.get("content");
  const navigate = useNavigate();

  console.log(content);

  const { data, error, isLoading } = useContent(content);
  return (
    <>
      {isLoading ? (
        <h1 className="text-white text-4xl">Loading...</h1>
      ) : (
        <>
          <ReactPlayer
            url={data.movie}
            controls={true}
            pip={false}
            playing
            width="100vw"
            height="100vh"
            volume={0.3}
          />
          <div>
            <AiOutlineArrowLeft
              size={50}
              className="text-white absolute left-0 top-0 mt-20 cursor-pointer "
              onClick={() => navigate(-1)}
            ></AiOutlineArrowLeft>
          </div>
        </>
      )}
    </>
  );
};

export default ContentPlayerPage;
