import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./news-slider.css";
import SliderCard from "./SliderCard";
import { useGlobalContext } from "../contexts/context";
import NewsSliderSkeleton from "./NewsSliderSkeleton";
import moment from 'moment';

const NewsSlider = () => {
  const { newsItems, isLoading } = useGlobalContext();

  const settings = {
    lazyLoad: true,  
    dots: true,
    infinite: true,
    arrows:false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const latestNews = newsItems.slice(0, 5);

  if (isLoading) {
    return <NewsSliderSkeleton />;
  }

  return (
    <Slider {...settings}>
      {latestNews.map((currNews, i) => {
        const { title, urlToImage, url, publishedAt, source} =
          currNews;
        // let short = description.substring(0, 200);
        return (
          <SliderCard
            key={i}
            title={title.slice(0, 100)}
            // description={description ? description.slice(0, 100) : ""}
            urlToImage={
              urlToImage
                ? urlToImage
                : "https://via.placeholder.com/720x1080/eee?text=Image no available"
            }
            url={url}
            publishedAt={moment(publishedAt).fromNow()}
            source={source.name}
          />
        );
      })}
    </Slider>
  );
};

export default NewsSlider;
