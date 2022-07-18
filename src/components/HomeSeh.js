import TopHeadlinesEntertainment from "./TopHeadlinesEntertainment";
import TopHeadlinesHealth from "./TopHeadlinesHealth";
import TopHeadlinesScience from "./TopHeadlinesScience";
import styled from "styled-components";
import NewsCardSkeleton from "./NewsCardSkeleton";

const Section = styled.section`
  background-color: #f0f0f0;
`;

export default function HomeSeh() {
  return (
    <Section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-4">
            <h2 className="mb-3">Entertainment</h2>
            <TopHeadlinesEntertainment />
          </div>
          <div className="col-sm-4">
            <h2 className="mb-3">Health</h2>
            <TopHeadlinesHealth />
          </div>
          <div className="col-sm-4">
            <h2 className="mb-3">Science</h2>
            <TopHeadlinesScience />
          </div>
        </div>
      </div>
    </Section>
  );
}
