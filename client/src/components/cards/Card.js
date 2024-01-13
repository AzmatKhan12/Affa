import React from "react";

const Card = () => {
  return (
    <div>
      <div class="card text-bg-dark">
        <img src="image1.jpg" class="card-img" alt="image" />
        <div class="card-img-overlay">
          <h5 class="card-title">
            <h1>Fashion</h1>
          </h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
