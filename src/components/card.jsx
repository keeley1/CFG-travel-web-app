import React from "react";

const Card = ({ title, image, description, weather, showDropdown, handleCardClick }) => {
    return (
      <div className="card" onClick={handleCardClick}>
        <div className="card-header">
          <h2>{title}</h2>
        </div>
        <div className="card-body">
          <img src={image} width='200px' height='120px'></img>
          <p>{description}</p>
          {showDropdown && (
            <div className="dropdown">
              <p className="additional-info">Additional information</p>
              <p>Weather in summer: {weather}</p>
            </div>
          )}
        </div>
      </div>
    );
  };  

export default Card;
