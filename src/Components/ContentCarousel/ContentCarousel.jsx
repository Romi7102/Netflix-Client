import React, { Children, cloneElement } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ContentCarousel = ({ children, id }) => {
  const mappedChildren = Children.map(children, (child) => (
    <div className="inline-block h-full w-[24vw] p-2 cursor-pointer">
      {child}
    </div>
  ));

  const SLIDE = 364

  const slideLeft = () =>{
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft - SLIDE
  }
  const slideRight = () =>{
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + SLIDE
  }


  return (
    <>
      <div className="relative flex items-center ">
        <MdChevronLeft className="absolute z-50 opacity-50 left-0 cursor-pointer hover:opacity-100 invisible md:visible" onClick={slideLeft} size={40} />
        <div
          id={id}
          className="scroll-smooth w-full h-full overflow-visible whitespace-nowrap scrollbar-hide"
        >
          {mappedChildren}
        </div>
        <MdChevronRight className="absolute right-0 opacity-50 cursor-pointer hover:opacity-100 invisible md:visible" onClick={slideRight} size={40} />
      </div>
    </>
  );
};

export default ContentCarousel;
