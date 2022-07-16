import React from "react";

const CardOverlays = () => {
  return (
    <div class="card border-0 rounded-0 text-white overflow-hidden zoom">
      <div class="ratio ratio-1x1">
        <img
          src="https://bootstrap.news/source/img5.jpg"
          class="card-img rounded-0"
          alt="..."
        />
      </div>
      <div class="card-img-overlay d-flex align-items-end bg-shadow rounded-0">
        <div>
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default CardOverlays;
