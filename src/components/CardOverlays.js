import React from "react";
import styled from "styled-components";

const Source = styled.h6`
  font-size: 0.75rem;
  font-weight: 400;

  &.category {
    text-transform: capitalize;
  }
`;

const Title = styled.h5`
  font-size: 1.125rem;

  a {
    color: #ffffff;
    text-decoration: none;
    display: -webkit-box;
    /* max-width: 200px; */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;

    &:hover {
      color: #f94144;
    }
  }
`;

const CardOverlays = ({ title, urlToImage, url, publishedAt, source, ratio = "ratio-1x1" }) => {
  return (
    <div className="card border-0 rounded-0 text-white overflow-hidden zoom">
      <div className={`ratio ${ratio}`}>
        <img
          src={urlToImage}
          className="card-img rounded-0"
          alt={title}
        />
      </div>
      <div className="card-img-overlay d-flex align-items-end bg-shadow rounded-0">
        <div>
          <Source className="text-light">{source}</Source>
          <Title>
            <a href={url} className="card-title" target="_blank" rel="noreferrer">
              {title}
            </a>
          </Title>        
          <p className="card-text">{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOverlays;
