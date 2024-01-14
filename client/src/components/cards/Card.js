import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card text-bg-dark">
        <img src="image1.jpg" className="card-img" alt="image" />
        <div className="card-img-overlay">
          <h1 className="card-title">
            <p>Fashion</p>
          </h1>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
