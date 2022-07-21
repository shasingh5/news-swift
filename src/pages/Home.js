import React from "react";
import HomeSportsTechnology from "../components/HomeSportsTechnology";
// import CardOverlays from "../components/CardOverlays";
import NewsHome from "../components/NewsHome";
import NewsSlider from "../components/NewsSlider";
import TopHeadlinesByCategories from "../components/TopHeadlinesByCategories";
import HomeSeh from "../components/HomeSeh";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Home = () => {
  return (
    <>
      <NewsSlider id="homeSlider" />
      <LazyLoadComponent>
        <NewsHome id="homeGeneral" />
        <TopHeadlinesByCategories id="homeBusiness" category={"business"} pageSize={5} />
        <HomeSportsTechnology id="homeST" />
        <HomeSeh id="homeSeh" />
      </LazyLoadComponent>
    </>
  );
};

export default Home;
