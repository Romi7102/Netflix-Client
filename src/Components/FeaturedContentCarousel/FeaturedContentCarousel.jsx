import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ChevronRight from "../../assets/ChevronRight.svg";
import ChevronLeft from "../../assets/ChevronLeft.svg";
import { isEmpty } from "lodash";
import ContentCard from "../ContentCard/ContentCard";

import "swiper/css/navigation";
import "swiper/css";

const FeaturedContentCarousel = ({ data }) => {
  const SLIDES_PER_GROUP = 4;
  const SLIDES_PER_VIEW = 4;

  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="text-white px-4 py-4 md:px-12">
      {/* The title of the featured content list */}
      <p className="text-base md:text-xl lg:text-2xl font-semibold mb-2">
        {data.name}
      </p>

      {/* The content carousel */}
      <Swiper
        className="overflow-visible swiper-z-transition"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={800}
        modules={[Navigation]}
        slidesPerGroup={SLIDES_PER_GROUP}
        slidesPerView={SLIDES_PER_VIEW}
        spaceBetween={10}
        loop
      >
        {data.contentList.map((content, index) => {
          const relativePosition = index % SLIDES_PER_VIEW;
          const isFirstInGroup = relativePosition === 0;
          const isLastInGroup = relativePosition === SLIDES_PER_GROUP - 1;

          return (
            <SwiperSlide
              key={content._id}
              className="swiper-slide-z-transition"
            >
              <ContentCard
                content={content}
                isFirstInGroup={isFirstInGroup}
                isLastInGroup={isLastInGroup}
              />
            </SwiperSlide>
          );
        })}
        {/* The overrided Left and Right navigation buttons */}
        <img src={ChevronRight} className="swiper-button-next" />
        <img src={ChevronLeft} className="swiper-button-prev" />
      </Swiper>
    </div>
  );
};

export default FeaturedContentCarousel;