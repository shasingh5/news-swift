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

    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;

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
  margin-bottom: 0;

  a {
    color: #222222;
    text-decoration: none;
    display: -webkit-box;
    /* max-width: 200px; */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
    margin-bottom: 0;
  }
`;

// const Description = styled.p`
//   font-size: 0.938rem;
// `;

const Source = styled.h6`
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 4px;

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

const Ratio = styled.div`
  .card-img-top {
    line-height: inherit;
  }

  &.ratio-1x2 {
    --bs-aspect-ratio: 120%;
  }
`;

const HorizontalCardSkeleton = ({ ratio = "ratio-1x1", fontSize }) => {
  return (
    <CardWrapper className="card border-0">
      <div className="row g-0">
        <div className="col-3">
          <Ratio className={`ratio ${ratio}`}>
            <Skeleton className="card-img-top" height="100%" />
          </Ratio>
        </div>
        <div className="col-9">
          <div className="card-body py-1">
            <Source className="text-muted">
              <Skeleton width="45%" />
            </Source>
            <Title>
              <Skeleton width="100%" />
            </Title>
            <Pubdate className="card-text">
              <Skeleton width="60%" />
            </Pubdate>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default HorizontalCardSkeleton;
