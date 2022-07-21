import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext, newsTopUrl } from "../contexts/context";
import HorizontalCard from "./HorizontalCard";
import moment from "moment";
import HorizontalCardSkeleton from "./HorizontalCardSkeleton";

const TopHeadlinesSports = () => {
  const [sports, setSports] = useState([]);

  const { isLoading, setIsLoading } = useGlobalContext();

  const getSportsNews = async (category, pageSize) => {
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
        setSports(data.articles);
      } else {
        console.log("No news available!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSportsNews("sports", 5);
  }, []);

  const latestNewsOne = sports.slice(0, 1);
  const latestNews = sports.slice(1);

  if (isLoading) {
    return(
      <div className="col-sm-6">
        <h2 className="mb-3">Sports</h2>
        <div className="row">
          <div className="col mb-4">
            <HorizontalCardSkeleton />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-4">
            <HorizontalCardSkeleton />
          </div>
          <div className="col-sm-6 mb-4">
            <HorizontalCardSkeleton />
          </div>
          <div className="col-sm-6 mb-4">
            <HorizontalCardSkeleton />
          </div>
          <div className="col-sm-6 mb-4">
            <HorizontalCardSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-sm-6">
      <div className="d-flex justify-content-between">
        <h2 className="mb-3">Sports</h2>
        <Link className="btn" to="sports">View All</Link>
      </div>
      <div className="row">
        <div className="col mb-4">
          {latestNewsOne.map((currNews, i) => {
            const { title, urlToImage, url, publishedAt, source } = currNews;
            // let short = description.substring(0, 200);
            return (
              <HorizontalCard
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
            <div className="col-sm-6 mb-4" key={i}>
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
                fontSize="12px"
                ratio="ratio-1x2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopHeadlinesSports;
