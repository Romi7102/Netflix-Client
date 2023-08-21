import React from "react";
import ContentCard from "../ContentCard/ContentCard";
import { isEmpty } from "lodash";
import ContentCarousel from "../ContentCarousel/ContentCarousel";

const FeaturedContent = ({ data }) => {
  if (isEmpty(data)) {
    console.log("Empty");
    return null;
  }
  console.log(data.contentList);
  return (
    <div className="px-4 md-px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          {data.name}
        </p>

        <ContentCarousel id={data._id}>
          {data.contentList.map((content) => (
              <ContentCard key={content._id} data={content}></ContentCard>
          ))}
        </ContentCarousel>

      </div>
    </div>
  );
};

export default FeaturedContent;
