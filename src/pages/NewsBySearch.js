import React, { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/context";
import NewsCard from "../components/NewsCard";
import CardListSkeleton from "../components/CardListSkeleton";
import NoSearchResults from "../components/NoSearchResults";
import Spinner from "../components/Spinner";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";

const NewsBySearch = () => {
  // const { search } = useLocation();
  // const navigate = useNavigate();
  // let [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("q")); // send
  // const queryValue = searchParams.get("q");
  const { searchResults, isLoading, fetchMoreDataBySearch, totalResults, query } =
    useGlobalContext();
  // console.log(queryValue);
  // setQuery(`${queryValue}`);

  // if (query !== "") getNewsBySearch(`${NEWSDATAURL}&q=${query}`);
  useEffect(() => {
    document.title = "Search Results | NewsSwift";
  }, []);

  if (isLoading) {
    return <CardListSkeleton title="Search Results" />;
  }

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

      {searchResults.length > 0 ? (
        <InfiniteScroll
          dataLength={searchResults.length}
          next={fetchMoreDataBySearch}
          hasMore={searchResults.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <h1 className="fs-4 text-center my-4">Search Results</h1>
            <div className="row">
              {searchResults.map((element) => {
                const { title, urlToImage, url, publishedAt, source } = element;
                return (
                  <div
                    className="col-sm-6 col-md-4 col-lg-3 mb-4"
                    key={element.url}
                  >
                    <NewsCard
                      title={title ? title : ""}
                      urlToImage={urlToImage}
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
      ) : (
        <NoSearchResults text={query} />
      )}

      {/* <div className="container my-4">
        <h1 className="fs-4 text-center mb-3">Search Results</h1>
        <div className="row">
          {searchResults.length > 0 ? searchResults.map((currNews, i) => {
            const { title, image_url, link, pubDate, source_id, category } =
              currNews;
            // let short = description.substring(0, 200);
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
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
          }) : (
            // <h2 className="text-center">Not results found!!</h2>
            <NoSearchResults text={query} />
          )}
        </div>
      </div> */}
    </>
  );
};

export default NewsBySearch;
