import React from "react";
import styled from "styled-components";
import { useNavigate, generatePath } from "react-router-dom";
import { useGlobalContext, newsEveryThingUrl } from "../contexts/context";
import Notifications, { notify } from "react-notify-toast";

const Form = styled.form`
  border: 1px solid transparent;
  border-radius: 4px;

  .form-control {
    border: 0;
    border-radius: 4px 0 0 4px;

    &:focus {
      box-shadow: none;
    }
  }

  .btn {
    background: #f94144;
    border-color: #f94144;
    /* margin-top: -1px; */
    border-radius: 0 4px 4px 0;
    color: #ffffff;

    &:focus {
      box-shadow: none;
    }
  }
`;

const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params) => {
    const path = generatePath(":url?:queryString", {
      url,
      queryString: params,
    });
    navigate(path);
  };
};

const SearchForm = () => {
  // const navigate = useNavigate();
  const { query, setQuery, getNewsBySearch, page } = useGlobalContext();
  const navigate = useNavigateParams();
  const show = notify.createShowQueue();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // navigate("searchResults", `q=${query}`);
    // setPage(1);
    // navigate('/search', { query });
  };

  // const navigateHandler = () => {
  //   navigate("searchResults", `q=${query}`);
  //   // setQuery('');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();    

    if(!query){
      show("Please enter search input!!", "error");
    }else {
      navigate("searchResults", `q=${query}`);
      setQuery(`${query}`);
      // getNewsBySearch(`${NEWSDATAURL}&q=${query}`);
      getNewsBySearch(`${newsEveryThingUrl}&q=${query}&sortBy=publishedAt&page=${page}&pageSize=8`);
      document.title = `Search - ${query} | NewsSwift`;
    }

    // if (query !== " ") getNewsBySearch(`${NEWSDATAURL}&q=${query}`);
    // alert(`The name you entered was: ${query}`);
  };

  // const goSearchPage = () => {
  //   navigate('/search', { query });
  // }

  // useEffect(() => {
  //   document.title = `Search - ${query} | NewsSwift`;
  // }, [query]);

  //   useEffect(() => {
  //     // this will trigger when search will get updated
  //     onSubmit()
  //  }, [search]);

  return (
    <>
      <Form className="d-flex" action="#" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => handleSearch(e)}
        />
        <button type="submit" className="btn btn-outline-success">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </Form>

      <Notifications />
    </>
  );
};

export default SearchForm;
