import React from "react";
import CardOverlays from "../components/CardOverlays";
import NewsHome from "../components/NewsHome";
import NewsSlider from "../components/NewsSlider";

const Home = () => {
  return (
    <>
      <NewsSlider />
      <NewsHome />
      <section className="bg-dark p-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-light mb-4">Business</h2>
            </div>
            <div className="col text-end">
              <button className="btn btn-warning">View All</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <CardOverlays />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <CardOverlays />
                </div>
                <div className="col-md-6 mb-4">
                  <CardOverlays />
                </div>
                <div className="col-md-6">
                  <CardOverlays />
                </div>
                <div className="col-md-6">
                  <CardOverlays />
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
