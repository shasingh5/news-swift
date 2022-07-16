import React from "react";
import { useGlobalContext } from "../contexts/context";
import NewsCard from "./NewsCard";
import moment from 'moment';

const NewsHome = () => {
  const { newsItems, isLoading } = useGlobalContext();
  // console.log("NewsHome", news.title);

  const latestNews = newsItems.slice(5, 13);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-3">Politics</h2>
      <div className="row">
        {latestNews.map((currNews, i) => {
          const { title, urlToImage, url, publishedAt, source, author } =
            currNews;
          // let short = description.substring(0, 200);          
          return (
            <div className="col-md-3 mb-4" key={i}>
            
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
