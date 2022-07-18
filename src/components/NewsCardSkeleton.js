import React from "react";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

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

    span.card-img-top {
      line-height: inherit;
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



const NewsCardSkeleton = () => {
  return (
    <CardWrapper className="card shadow-sm border-0">
      <div className="ratio ratio-16x9">
        <Skeleton className="card-img-top" height="100%" />
      </div>

      <div className="card-body">
        <div className="">
          <Source className="text-muted">
            <Skeleton width="45%" />
          </Source>          
        </div>
        <Title>
          <Skeleton width="100%" />
        </Title>
        <Pubdate className="card-text">
          <Skeleton width="60%" />
        </Pubdate>
      </div>
    </CardWrapper>
  );
};

export default NewsCardSkeleton;
