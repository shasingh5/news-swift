import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const NewsSliderSkeleton = () => {
  return (
    <div className="container">
      <div className="ratio ratio-21x9 opacity-50 border-1">
        <Skeleton className="card-img-top rounded-0 h-100">Loading...</Skeleton>
      </div>
    </div>
  );
};

export default NewsSliderSkeleton;
