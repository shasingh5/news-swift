import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate, generatePath } from 'react-router-dom';
import { useGlobalContext } from "../contexts/context";


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
      queryString: params
    });
    navigate(path);
  };

  
};

const SearchForm = () => {
  // const navigate = useNavigate();
  const { query, setQuery } = useGlobalContext();
  const navigate = useNavigateParams();

  const handleSearch = (e) => {
    setQuery(e.target.value)
    // navigate("searchResults", `q=${query}`);
    // setPage(1);
    // navigate('/search', { query });
  }

  const navigateHandler = () => {
    navigate("searchResults", `q=${query}`);
    // setQuery('');
  };

  // const goSearchPage = () => {
  //   navigate('/search', { query });
  // }

  // useEffect(() => {
  //   goSearchPage
  // }, [state]);

  

  return (
    <Form className="d-flex" action='#' onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={(e) => handleSearch(e)}
      />
      <button type="submit" className="btn btn-outline-success" onClick={navigateHandler}>
        Search
      </button>
    </Form>
  );
};

export default SearchForm;