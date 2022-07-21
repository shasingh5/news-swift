import React, { useEffect, useState } from "react";

import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    // props.setProgress(30);
    let parsedData = await data.json();
    // props.setProgress(70);
    console.log("Category", parsedData);
    setNewsItems(parsedData.articles);

    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsSwift`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setNewsItems(newsItems.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div>
      <h1 className="text-center">
        Latest {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={newsItems.length}
        next={fetchMoreData}
        hasMore={newsItems.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {newsItems.map((element) => {
              const { title, urlToImage, url, publishedAt, source } = element;
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={element.url}>
                  <NewsCard
                    title={title ? title : ""}
                    urlToImage={urlToImage}
                    url={url}
                    publishedAt={publishedAt}
                    source={source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
