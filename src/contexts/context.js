import React, { useContext, useState, useEffect } from "react";

// const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.REACT_APP_NEWS_API}`;
const NEWSDATAURL = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA_API}`;
const newsTopUrl = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}`;
const newsEveryThingUrl = `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_API}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  // eslint-disable-next-line
  const [category, setCategory] = useState('');
  const [technology, setTechnology] = useState([]);

  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
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
        // console.log("Top Headline", data.articles);
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
        // console.log(data.articles);
        setCategories(data.articles);
      } else {
        console.log("No news available!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const getNewsBySearch = async (NEWSDATAURL) => {
  //   //const getUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}`;
  //   // const searchUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`
  //   setIsLoading(true);    

  //   try {
  //     const response = await fetch(NEWSDATAURL);
  //     const data = await response.json();
  //     // console.log(data.articles);
  //     // console.log(data.status);

  //     if (data.status === "success") {
  //       setIsLoading(false);
  //       console.log("Search", data.results);        
  //       setSearchResults(data.results);
  //     } else {
  //       console.log("No news available!!!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const getTopHeadlinesByCategory = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.articles);
      // console.log(data.status);

      if (data.status === "ok") {
        setIsLoading(false);
        // console.log(data.articles);
        setCategories(data.articles);
      } 
      else {
        console.log("No news available!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const fetchMoreDataByCategory = async () => {    
    const url = `${newsTopUrl}&country=in&category=${category}&page=${page + 1}&pageSize=8`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setCategories(categories.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  // const fetchMoreData = async (country, category, pageSize) => {
  //   // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

  //   const url = `${newsTopUrl}&country=${country}&category=${category}&page=${page+1}&pageSize=${pageSize}`
  //   setPage(page+1) 
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   setCategories(categories.concat(parsedData.categories))
  //   setTotalResults(parsedData.results);[]
  // };

  const getNewsBySearch = async (url) => {
    //const getUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}`;
    // const searchUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`
    setIsLoading(true); 
    
    // setLoading(true);
    // let data = await fetch(url);
    // // props.setProgress(30);
    // let parsedData = await data.json();
    // // props.setProgress(70);
    // console.log("Category", parsedData);
    // setNewsItems(parsedData.articles);

    // setTotalResults(parsedData.totalResults);
    // setLoading(false);

    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.articles);
      // console.log(data.status);

      if (data.status === "ok") {
        setIsLoading(false);
        // console.log("Search", data.articles);
        setSearchResults(data.articles);
      } else {
        console.log("No news available!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const fetchMoreDataBySearch = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

    // const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&page=${page+1}&pageSize=12&apiKey=${process.env.REACT_APP_NEWS_API}`
    const url = `${newsEveryThingUrl}&q=${query}&sortBy=publishedAt&page=${page + 1}&pageSize=8`
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setSearchResults(searchResults.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    getNews(`${newsTopUrl}&country=in&pageSize=13`);
  }, []);

  

  // useEffect(() => {
  //   const timerout = setTimeout(() => {
  //     // getNewsBySearch(NEWSDATAURL + `&q=${query}`);
  //     getNewsBySearch(`${NEWSDATAURL}&q=${query}`);
  //   }, 700);

  //   return () => clearTimeout(timerout);
    
  // }, [query]); 

  // useEffect(() => {
  //   getNewsBySearch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`);
  // }, [query]);

  return <AppContext.Provider value={{ newsItems, isLoading, setIsLoading, getNewsByCategory, query, setQuery, searchResults, categories, getTopHeadlinesByCategory, technology, setTechnology, getNewsBySearch, fetchMoreDataBySearch, page, totalResults, fetchMoreDataByCategory, setCategory }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext, newsTopUrl, newsEveryThingUrl, NEWSDATAURL};
