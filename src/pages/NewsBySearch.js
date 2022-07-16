import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/context";
import NewsCard from "../components/NewsCard";

const NewsBySearch = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("q")); // send
  const queryValue = searchParams.get("q");
  const { searchResults, isLoading } = useGlobalContext();

  
  // useEffect(() => {
  //   setQuery(queryValue);
  // }, [queryValue]);

  // if (isLoading) {
  //   return <h4>Loading...</h4>;
  // }

  return (
    <>
    {  
          // <h1>NewsBySearch</h1>
          //   <div>
          //     Query search: {search} {queryValue}
          //   </div>
          //   <button type="button" onClick={() => navigate("..")}>
          //     Back
          //   </button>
      }

      <div className="container my-4">
        <h1 className="fs-4 text-center mb-3">Search Results</h1>
        <div className="row">
          {searchResults.map((currNews, i) => {
            const { title, image_url, link, pubDate, source_id, category } =
              currNews;
            // let short = description.substring(0, 200);
            return (
              <div className="col-md-3 mb-4" key={i}>
                <NewsCard
                  title={title}
                  // description={description ? description.slice(0, 50) : ""}
                  urlToImage={
                    image_url
                      ? image_url
                      : "https://via.placeholder.com/720x1080/eee?text=Image no available"
                  }
                  url={link}
                  publishedAt={pubDate}
                  source={source_id}
                  category={category[0]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsBySearch;
