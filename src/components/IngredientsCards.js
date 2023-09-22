import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const IngredientsCards = () => {
  const [ingredientsData, setIngredientsData] = useState([]);

  useEffect(() => {
    fetch("/data/Ingredients.json")
      .then((response) => response.json())
      .then((data) => setIngredientsData(data));
  }, []);

  return (
    <div className="card-row-container">
      {ingredientsData.map((item, index) => (
        <Link to={`/ingredients/${index}`} key={index}>
          <div className="gin-card-column">
            <div className="gin-card-column-top">
              <img
                className="ing-img"
                src={`/data/DataImages/IngredientsImages/${item.image}`}
                alt={item.name}
              />
            </div>
            <div className="gin-card-column-bottom">
              <h3 className="gin-card-column-title">{item.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
