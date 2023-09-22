import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const RecipeCards = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("/data/Recipe.json")
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, []);

  return (
    <div className="card-row-container">
      {recipeData.map((item, index) => (
        <Link to={`/recipe/${item.id}`} key={item.id}>

        <div className="gin-card-column" key={index}>
          <div className="gin-card-column-top">
            <img className="gin-img"
              src={`/data/DataImages/RecipeImages/${item.image}`}
              alt={item['drink name']}
            />
          </div>
          <div className="gin-card-column-bottom">
            <h3 className="gin-card-column-title">{item['drink name']}</h3>
          </div>
        </div>
        </Link>

      ))}
    </div>
  );
};
