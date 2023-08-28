import React from "react";
import ContentCard from "../ContentCard/ContentCard";
import { isEmpty } from "lodash";
import ContentCarousel from "../ContentCarousel/ContentCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const FeaturedContent = ({ data }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-4 md-px-12 mt-4 space-y-8 overflow-visible">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          {data.name}
        </p>
        {/* <Carousel className="overflow-y-visible" responsive={responsive}>
          {data.contentList.map((content) => (
            <ContentCard key={content._id} data={content}></ContentCard>
          ))}
        </Carousel> */}

        <ContentCarousel className="overflow-visible" id={data._id}>
          {data.contentList.map((content) => (
            <ContentCard className="overflow-visible" key={content._id} data={content}></ContentCard>
          ))}
        </ContentCarousel>
      </div>
    </div>
  );
};

export default FeaturedContent;
