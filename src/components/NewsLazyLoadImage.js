import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NewsLazyLoadImage = (pros) => {
  const { alt, src, width, height } = pros;
  return (
    <>
      <LazyLoadImage
        alt={alt}
        src={src} // use normal <img> attributes as props
        width={width}
        height={height}
        className="card-img-top fs-6"
      />
    </>
  );
};

export default NewsLazyLoadImage;
