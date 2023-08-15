import React from "react";
import useBillboard from "../../Hooks/useBillboard";
import YouTube from "react-youtube";

const Billboard = () => {
  const { data } = useBillboard();
  return (
    <>
      <div className="relative h-[56.25vw] bg-red-500 ">
        {/* <img className="w-full" src={data?.imgThumb} alt="" /> */}
      </div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  );
};

export default Billboard;
