import React from "react";
import { Link } from "react-router-dom";
import TopHeadlinesEntertainment from "./TopHeadlinesEntertainment";
import TopHeadlinesHealth from "./TopHeadlinesHealth";
import TopHeadlinesScience from "./TopHeadlinesScience";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f0f0f0;
`;

export default function HomeSeh() {
  return (
    <Section className="py-5 section-seh">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">            
            <div className="d-flex justify-content-between mb-3">
              <h2>Entertainment</h2>              
            </div>
            <TopHeadlinesEntertainment />
          </div>
          <div className="col-sm-4">            
            <div className="d-flex justify-content-between mb-3">
              <h2>Health</h2>              
            </div>
            <TopHeadlinesHealth />
          </div>
          <div className="col-sm-4">            
            <div className="d-flex justify-content-between mb-3">
              <h2>Science</h2>              
            </div>
            <TopHeadlinesScience />
          </div>
        </div>
      </div>
    </Section>
  );
}
