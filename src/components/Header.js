import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";
import { useGlobalContext } from "../contexts/context";

const Logo = styled.a`
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
  color: #280028;

  span:first-child {
    color: #ffffff;
  }

  span:last-child {
    color: #f94144;
  }
`;

const Header = () => {
  const { setQuery } = useGlobalContext();

  const clearInput = () => {
    setQuery('');
  }

  return (
    <nav className="navbar navbar-expand-lg shadow-sm navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Logo className="fw-bold">
          <span>News</span>
          <span>Swift</span>
        </Logo>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/politics" onClick={() => clearInput()}>
                Politics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/business" onClick={() => clearInput()}>
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technology" onClick={() => clearInput()}>
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/entertainment" onClick={() => clearInput()}>
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sports" onClick={() => clearInput()}>
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/science" onClick={() => clearInput()}>
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/health" onClick={() => clearInput()}>
                Health
              </NavLink>
            </li>
          </ul>
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default Header;
