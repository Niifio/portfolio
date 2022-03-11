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
            <h3>{title}</h3>
            <p>{description}</p>
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
