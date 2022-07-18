import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext, newsTopUrl } from "../contexts/context";
import NewsCard from "./NewsCard";
import HorizontalCard from "./HorizontalCard";
import moment from "moment";
import NewsCardSkeleton from "./NewsCardSkeleton";

const TopHeadlinesScience = () => {
  const [items, setItems] = useState([]);

  const { isLoading, setIsLoading } = useGlobalContext();

  const getTopNews = async (category, pageSize) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${newsTopUrl}&country=in&category=${category}&pageSize=${pageSize}`
      );
      const data = await response.json();
      // console.log(data.articles);
      // console.log(data.status);

      if (data.status === "ok") {
        setIsLoading(false);
        console.log(data.articles);
        setItems(data.articles);
      } else {
        console.log("No news available!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopNews("science", 5);
  }, []);

  const latestNewsOne = items.slice(0, 1);
  const latestNews = items.slice(1);

  if (isLoading) {
    return <NewsCardSkeleton />;
  }

  return (
    <>
      <div className="row">
        <div className="col mb-4">
        {latestNewsOne.map((currNews, i) => {
        const { title, urlToImage, url, publishedAt, source } = currNews;
        // let short = description.substring(0, 200);
        return (
          <NewsCard 
            key={i}
            title={title}
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
        </div>
      </div>

      <div className="row">
        {latestNews.map((currNews, i) => {
          const { title, urlToImage, url, publishedAt, source } = currNews;
          // let short = description.substring(0, 200);
          return (
            <div className="col-sm-12 mb-4" key={i}>
              <HorizontalCard                
                title={title}
                urlToImage={
                  urlToImage
                    ? urlToImage
                    : "https://via.placeholder.com/720x1080/eee?text=Image no available"
                }
                url={url}
                publishedAt={moment(publishedAt).fromNow()}
                source={source.name}
                fontSize="14px"
                ratio="ratio-1x1"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopHeadlinesScience;
