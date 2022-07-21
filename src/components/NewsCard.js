import React from "react";
import styled from "styled-components";
import NewsLazyLoadImage from "./NewsLazyLoadImage"

let orange = "#f94144";

const CardWrapper = styled.div`
  &.card {
    transition: all 0.3s ease-in;
    overflow: hidden;

    .ratio {
      overflow: hidden;
    }

    img {
      transition: all 0.3s ease-in;
    }

    &:hover {
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;

      img {
        transform: scale(1.1);
      }

      a {
        color: ${orange};
      }
    }
  }
`;

const Title = styled.h5`
  font-size: 1.125rem;

  a {
    color: #222222;
    text-decoration: none;
    display: -webkit-box;
    /* max-width: 200px; */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
  }
`;

// const Description = styled.p`
//   font-size: 0.938rem;
// `;

const Source = styled.h6`
  font-size: 0.75rem;
  font-weight: 400;

  &.category {
    text-transform: capitalize;
  }
`;

const Pubdate = styled.p`
  &.card-text {
    font-size: 0.75rem;
    font-weight: 400;
    color: #bbbbbb;
  }  
`;

const NewsCard = ({ title, urlToImage, url, publishedAt, source, category }) => {
  // const {title, description, urlToImage, url, publishedAt} = props;

  return (
    <CardWrapper className="card h-100 shadow-sm border-0">
      <div className="ratio ratio-16x9">
        {
          //<img src={urlToImage} className="card-img-top fs-6" alt={title} />        
        }
        <NewsLazyLoadImage src={urlToImage} alt={title} width="261" height="147" />
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between">
          <Source className="text-muted">{source}</Source>
          <Source className="text-muted category">{category}</Source>
        </div>
        <Title>
          <a href={url} className="card-title" target="_blank" rel="noreferrer">
            {title}
          </a>
        </Title>
        <Pubdate className="card-text">{publishedAt}</Pubdate>
      </div>
    </CardWrapper>
  );
};

export default NewsCard;
