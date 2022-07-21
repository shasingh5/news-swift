import React from "react";
import NewsCardSkeleton from "./NewsCardSkeleton";

const CardListSkeleton = ({ title, className = "my-4" }) => {
  return (
    <div className={`container ${className}`}>
      <h2 className="text-center mb-3">       
        {title}
      </h2>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <NewsCardSkeleton />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-none d-sm-flex">
          <NewsCardSkeleton />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-none d-md-flex">
          <NewsCardSkeleton />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-none d-lg-flex">
          <NewsCardSkeleton />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-none d-lg-flex">
          <NewsCardSkeleton />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-none d-lg-flex">
          <NewsCardSkeleton />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-none d-lg-flex">
          <NewsCardSkeleton />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <NewsCardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default CardListSkeleton;
