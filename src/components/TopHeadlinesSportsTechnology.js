import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/context";
import CardOverlays from "./CardOverlays";
import moment from "moment";

const TopHeadlinesSports = ({ category, pageSize }) => {
  const { isLoading, categories, getTopHeadlinesByCategory } =
    useGlobalContext();

  useEffect(() => {
    getTopHeadlinesByCategory(category, pageSize);
  }, []);

  const latestNewsOne = categories.slice(0, 1);
  const latestNews = categories.slice(1);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <section className="bg-dark p-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-light mb-4">Business</h2>
          </div>
          <div className="col text-end">
            <Link className="btn btn-warning" to={"business"}>
              View All
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {latestNewsOne.map((currNews, i) => {
              const { title, urlToImage, url, publishedAt, source } = currNews;
              // let short = description.substring(0, 200);
              return (
                <CardOverlays
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
          <div className="col-md-6">
            <div className="row">
              {latestNews.map((currNews, i) => {
                const { title, urlToImage, url, publishedAt, source } =
                  currNews;
                // let short = description.substring(0, 200);
                return (
                  <div className="col-md-6 mb-4" key={i}>
                    <CardOverlays
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeadlinesSports;
