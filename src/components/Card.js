import React from "react";
const Card = ({ title, img, description, Url }) => {
  return (
    <div className="cards">
      <div className="mainContainer">
        <div className="theCard">
          <div className="thefront">
            <img src={`../image/${img}`} alt="" className="portfolio-img" />
          </div>
          <div className="theback">
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <a href={Url} target="_blank" rel="noreferrer">
              <button>View Site</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
