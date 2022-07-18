import React from "react";
import HomeSportsTechnology from "../components/HomeSportsTechnology";
// import CardOverlays from "../components/CardOverlays";
import NewsHome from "../components/NewsHome";
import NewsSlider from "../components/NewsSlider";
import TopHeadlinesByCategories from "../components/TopHeadlinesByCategories";
import HomeSeh from "../components/HomeSeh";

const Home = () => {
  return (
    <>
      <NewsSlider />
      <NewsHome />
      <TopHeadlinesByCategories category={"business"} pageSize={5} />
      <HomeSportsTechnology />
      <HomeSeh />
    </>
  );
};

export default Home;
