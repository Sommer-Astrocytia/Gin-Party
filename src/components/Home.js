import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/icons/icon.png";
import Tonics from "../assets/images/tonics.png";
import Gins from "../assets/images/gins.png";
import Ing from "../assets/images/Ingredients.png";
import Recipe from "../assets/images/Recipe.png";

export const Home = () => {
  const navigate = useNavigate();

  const goToTonic = () => {
    navigate("/tonic-cards");
  };

  const goToGin = () => {
    navigate("/gin-cards");
  };

  const goToRecipes = () => {
    navigate("/recipe-cards");
  };

  const goToIngredients = () => {
    navigate("/ingredients-cards");
  };

  return (
    <div className="card-row-container" >
      <div className="card-column" onClick={goToGin}>
        <div className="card-column-top">
          <img src={Gins} alt="Gin" />
        </div>
        <a className="card-column-bottom" onClick={goToGin}>
          <div className="card-column-icon">
            <img src={Icon} alt="Gin" />
          </div>
          <h3 className="card-column-title">Gin</h3>
        </a>
      </div>

      <div className="card-column">
        <div className="card-column-top"  onClick={goToTonic}>
          <img src={Tonics} alt="Gin" />
        </div>
        <a className="card-column-bottom"  onClick={goToTonic}>
          <div className="card-column-icon">
            <img src={Icon} alt="Gin" />
          </div>
          <h3 className="card-column-title">Tonic</h3>
        </a>
      </div>

      <div className="card-column" >
        <div className="card-column-top" onClick={goToIngredients}>
          <img src={Ing} alt="Ingredients" />
        </div>
        <a className="card-column-bottom" onClick={goToIngredients}>
          <div className="card-column-icon">
            <img src={Icon} alt="Ingredients" />
          </div>
          <h3 className="card-column-title">Ingredients</h3>
        </a>
      </div>

      <div className="card-column" >
        <div className="card-column-top" onClick={goToRecipes}>
          <img src={Recipe} alt="Recipe" />
        </div>
        <a className="card-column-bottom"onClick={goToRecipes}>
          <div className="card-column-icon">
            <img src={Icon} alt="Recipes" />
          </div>
          <h3 className="card-column-title">Recipes</h3>
        </a>
      </div>
    </div>
  );
};
