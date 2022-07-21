import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/context";
import NewsCard from "./NewsCard";
import moment from 'moment';
import CardListSkeleton from "./CardListSkeleton";

const NewsHome = () => {
  const { newsItems, isLoading } = useGlobalContext();
  // console.log("NewsHome", news.title);

  const latestNews = newsItems.slice(5, 13);

  if (isLoading) {
    return(
      <CardListSkeleton className="my-5" title="General" />
    );
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Politics</h2>
        <Link className="btn btn-view-all" to="general">View All</Link>
      </div>
      <div className="row">
        {latestNews.map((currNews, i) => {
          const { title, urlToImage, url, publishedAt, source, author } =
            currNews;
          // let short = description.substring(0, 200);          
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
            
              <NewsCard
                title={title}
                // description={description ? description.slice(0, 50) : ""}
                urlToImage={urlToImage ? urlToImage : "https://via.placeholder.com/720x1080/eee?text=Image no available"}
                url={url}
                publishedAt={moment(publishedAt).fromNow()}
                source={source.name}
                category={author}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsHome;
