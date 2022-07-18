import React from "react";
import NewsCardSkeleton from "./NewsCardSkeleton";

const CardListSkeleton = ({ title }) => {
  return (
    <div className="container my-4">
      <h1 className="fs-4 text-center mb-3">       
        {title}
      </h1>
      <div className="row">
        <div className="col-md-3 mb-4">
          <NewsCardSkeleton />
        </div>
        <div className="col-md-3 mb-4">
          <NewsCardSkeleton />
        </div>
        <div className="col-md-3 mb-4">
          <NewsCardSkeleton />
        </div>
        <div className="col-md-3 mb-4">
          <NewsCardSkeleton />
        </div>
        <div className="col-md-3 mb-4">
          <NewsCardSkeleton />
        </div>
        <div className="col-md-3 mb-4">
          <NewsCardSkeleton />
        </div>
        <div className="col-md-3 mb-4">
          <NewsCardSkeleton />
        </div>
        <div className="col-md-3 mb-4">
          <NewsCardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default CardListSkeleton;
