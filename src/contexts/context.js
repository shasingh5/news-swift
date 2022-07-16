import React, { useContext, useState, useEffect } from "react";

const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.REACT_APP_NEWS_API}`;
const NEWSDATAURL = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA_API}`;
const newsTopUrl = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}`;
const newsEveryThingUrl = `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_API}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('iphone');
  const [category, setCategory] = useState('');
  
  // const [isError, setIsError] = useState();

  const getNews = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.results);
      // console.log(data.totalResults);

      if (data.status === "ok") {
        setIsLoading(false);
        console.log("Top Headline", data.articles);
        setNewsItems(data.articles);
      } else {
        console.log("No news available!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getNewsByCategory = async (category) => {
    const getUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}`;

    setIsLoading(true);    

    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      // console.log(data.articles);
      // console.log(data.status);

      if (data.status === "ok") {
        setIsLoading(false);
        console.log(data.articles);
        setCategories(data.articles);
      } else {
        console.log("No news available!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsBySearch = async (NEWSDATAURL) => {
    //const getUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}`;
    // const searchUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`
    setIsLoading(true);    

    try {
      const response = await fetch(NEWSDATAURL);
      const data = await response.json();
      // console.log(data.articles);
      // console.log(data.status);

      if (data.status === "success") {
        setIsLoading(false);
        console.log("Search", data.results);        
        setSearchResults(data.results);
      } else {
        console.log("No news available!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }  

  useEffect(() => {
    getNews(`${newsTopUrl}&country=in`);
  }, []);

  useEffect(() => {
    const timerout = setTimeout(() => {
      // getNewsBySearch(NEWSDATAURL + `&q=${query}`);
      getNewsBySearch(`${NEWSDATAURL}&q=${query}`);
    }, 700);

    return () => clearTimeout(timerout);
    
  }, [query]);

  // useEffect(() => {
  //   getNewsBySearch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`);
  // }, [query]);

  return <AppContext.Provider value={{ newsItems, isLoading, getNewsByCategory, query, setQuery, searchResults, categories, category }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
