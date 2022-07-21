import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const CardOverlaysSkeleton = () => {
  return (
    <div className="ratio ratio-1x1">
      <Skeleton className="card-img-top" height="100%" />
    </div>
  );
};

export default CardOverlaysSkeleton;
