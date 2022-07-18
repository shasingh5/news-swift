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
    <footer class="footer mt-auto py-3 bg-dark">
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="politics" class="nav-link px-2 text-muted">
                Politics
              </Link>
            </li>
            <li class="nav-item">
              <Link to="business" class="nav-link px-2 text-muted">
                Business
              </Link>
            </li>
            <li class="nav-item">
              <Link to="technology" class="nav-link px-2 text-muted">
                Technology
              </Link>
            </li>
            <li class="nav-item">
              <Link to="entertainment" class="nav-link px-2 text-muted">
                Entertainment
              </Link>
            </li>
            <li class="nav-item">
              <Link to="sports" class="nav-link px-2 text-muted">
                Sports
              </Link>
            </li>
            <li class="nav-item">
              <Link to="science" class="nav-link px-2 text-muted">
                Science
              </Link>
            </li>
            <li class="nav-item">
              <Link to="health" class="nav-link px-2 text-muted">
                Health
              </Link>
            </li>
          </ul>
          <p class="text-center text-muted">
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
