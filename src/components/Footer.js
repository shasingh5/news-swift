import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="general" className="nav-link px-2 text-muted">
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="business" className="nav-link px-2 text-muted">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link to="technology" className="nav-link px-2 text-muted">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link to="entertainment" className="nav-link px-2 text-muted">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="sports" className="nav-link px-2 text-muted">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="science" className="nav-link px-2 text-muted">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="health" className="nav-link px-2 text-muted">
                Health
              </Link>
            </li>
          </ul>
          <p className="text-center text-muted">
            <Logo className="fw-bold">
              <span>News</span>
              <span>Swift</span>
            </Logo>
            &copy; 2022
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
