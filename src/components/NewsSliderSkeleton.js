import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const NewsSliderSkeleton = () => {
  return (
    <div className="ratio ratio-21x9 opacity-50">
      <Skeleton className="card-img-top rounded-0">Loading...</Skeleton>
    </div>
  );
};

export default NewsSliderSkeleton;
