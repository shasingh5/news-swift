import React from "react";
import TopHeadlinesSports from "./TopHeadlinesSports";
import TopHeadlinesTechnology from "./TopHeadlinesTechnology";

const HomeSportsTechnology = () => {
  return (
    <section className="container py-5">
      <div className="row mb-5">
        <TopHeadlinesSports/>
        <TopHeadlinesTechnology/>
      </div>
    </section>
  );
};

export default HomeSportsTechnology;
