import React from "react";
import styled from "styled-components";

let orange = "#f94144";

const Source = styled.h6`
  font-size: 0.75rem;
  font-weight: 400;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Title = styled.h2`
  max-width: 600px;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ReadMore = styled.a`
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  color: ${orange};
  display: inline-flex;
  min-width: 120px;
  width: 120px;
  text-align: center;
  justify-content: center;

  &:hover {
    background-color: ${orange};
    color: #ffffff;
    border-color: ${orange};
  }

  &:focus {
    box-shadow: none;
  }
`;

const SliderCard = ({
  title,
  urlToImage,
  url,
  publishedAt,
  source,
}) => {
  return (
    <div className="card bg-dark text-white rounded-0">
      <div className="ratio ratio-21x9 opacity-50">
        <Image src={urlToImage} className="card-img-top rounded-0" alt={title} />
      </div>
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <Source>{source}</Source>
        <Title className="card-title">{title}</Title>        
        <p className="card-text">{publishedAt}</p>
        <ReadMore className="btn" href={url} target="_blank" rel="noreferrer">
          Read more
        </ReadMore>
      </div>
    </div>
  );
};

export default SliderCard;
