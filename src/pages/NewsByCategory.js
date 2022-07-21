import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useGlobalContext, newsTopUrl } from "../contexts/context";
import NewsCard from "../components/NewsCard";
import CardListSkeleton from "../components/CardListSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import moment from "moment";

const NewsByCategory = ({ category }) => {
  // const { category } = useParams();
  const { getTopHeadlinesByCategory, fetchMoreDataByCategory, categories, isLoading, totalResults, page, setCategory } =
    useGlobalContext();

  // useEffect(() => {
  //   getNewsByCategory(category);
  // }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };  

  // const fetchMore = fetchMoreDataByCategory(category);

  useEffect(() => {
    // getTopHeadlinesByCategory(category);
    getTopHeadlinesByCategory(`${newsTopUrl}&country=in&category=${category}&page=${page}&pageSize=8`);
    setCategory(category);
    document.title = `${capitalizeFirstLetter(category)} | NewsSwift`;
    // fetchMoreDataByCategory(category)
  }, [category]);

  

  if (isLoading) {
    return (
      <CardListSkeleton title={`LATEST ${category.toLocaleUpperCase()}`} />
    );
  }

  return (
    <InfiniteScroll
      dataLength={categories.length}
      next={fetchMoreDataByCategory}
      hasMore={categories.length !== totalResults}
      loader={<Spinner />}
    >
      <div className="container my-4">
        <h1 className="fs-4 text-center mb-3">
          LATEST {category.toLocaleUpperCase()}
        </h1>
        <div className="row">
          {categories.map((currNews, i) => {
            const { title, urlToImage, url, publishedAt, source } = currNews;
            // let short = description.substring(0, 200);
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
                <NewsCard
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
    </InfiniteScroll>
  );
};

export default NewsByCategory;
