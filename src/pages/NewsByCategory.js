import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/context";
import NewsCard from "../components/NewsCard";
import NewsCardSkeleton from "../components/NewsCardSkeleton";
import CardListSkeleton from "../components/CardListSkeleton";

const NewsByCategory = () => {
  const { category } = useParams();
  const { getNewsByCategory, categories, isLoading } = useGlobalContext();

  useEffect(() => {
    getNewsByCategory(category);
  }, [category]);

  if (isLoading) {
    return (
      <CardListSkeleton title={`LATEST ${category.toLocaleUpperCase()}`} />
    );
  }

  return (
    <div className="container my-4">
      <h1 className="fs-4 text-center mb-3">
        LATEST {category.toLocaleUpperCase()}
      </h1>
      <div className="row">
        {categories.map((currNews, i) => {
          const { title, description, urlToImage, url, publishedAt, source } =
            currNews;
          // let short = description.substring(0, 200);
          return (
            <div className="col-md-3 mb-4" key={i}>
              <NewsCard
                title={title}
                description={description ? description.slice(0, 50) : ""}
                urlToImage={
                  urlToImage
                    ? urlToImage
                    : "https://via.placeholder.com/720x1080/eee?text=Image no available"
                }
                url={url}
                publishedAt={publishedAt}
                source={source.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsByCategory;
