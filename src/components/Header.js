import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import { useGlobalContext } from "../contexts/context";

const NavWrapper = styled.nav`
  .Logo {
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
  }
`;

const Header = () => {
  const { setQuery } = useGlobalContext();
  const [darkMode, setDarkMode] = useState(false);

  const clearInput = () => {
    setQuery("");
  };

  useEffect(() => {
    setTimeout(() => {
      // debugger;
      const body = document.body;
      const toggle = document.querySelector(".toggle-inner");

      // If dark mode is enabled - adds classes to update dark-mode styling.
      // Else, removes and styling is as normal.
      if (darkMode === true) {
        body.classList.add("dark-mode");
        toggle.classList.add("toggle-active");
      } else {
        body.classList.remove("dark-mode");
        toggle.classList.remove("toggle-active");
      }
    }, 500);

    return () => {};
  }, [darkMode]);

  return (
    <NavWrapper className="navbar navbar-expand shadow-sm navbar-dark bg-dark sticky-top">
      <div className="container-fluid d-inline-block d-lg-flex">
        <Link className="Logo" to="/">
          <span>News</span>
          <span>Swift</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto overflow-x-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/general"
                onClick={() => clearInput()}
              >
                General
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/business"
                onClick={() => clearInput()}
              >
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/technology"
                onClick={() => clearInput()}
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/entertainment"
                onClick={() => clearInput()}
              >
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/sports"
                onClick={() => clearInput()}
              >
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/science"
                onClick={() => clearInput()}
              >
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/health"
                onClick={() => clearInput()}
              >
                Health
              </NavLink>
            </li>
          </ul>
          <div className="alway-show">
            <div
              className="form-check form-switch me-3 d-none d-sm-flex"
              id="toggleTheme"
              onClick={() =>
                darkMode === false ? setDarkMode(true) : setDarkMode(false)
              }
            >
              <input
                className="form-check-input me-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label text-light"
                htmlFor="flexSwitchCheckDefault"
              >
                Theme
              </label>
            </div>
            <SearchForm />
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Header;
