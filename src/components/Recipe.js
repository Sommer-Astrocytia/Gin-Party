import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPrint } from "react-icons/fa";

export const Recipe = ({ recipe }) => {
  const [recipeData, setRecipeData] = useState([]);
  const [ingredientsData, setIngredientsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/Recipe.json")
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, []);

  useEffect(() => {
    fetch("/data/Ingredients.json")
      .then((response) => response.json())
      .then((data) => setIngredientsData(data));
  }, []);

  const selectedItem = recipeData.find(item => item.id === id);

  const ingredientsForRecipe = selectedItem
    ? selectedItem.ingredient_name.map((name) => {
        return ingredientsData.find((ingredient) => ingredient.name === name);
      })
    : [];

  const handlePrint = () => {
    window.print();
  };

  return selectedItem ? (
    <div className="printet">
      <button className="print-button" onClick={handlePrint}>
        <FaPrint  className="print-icon"/>
      </button>

      <div className="print-version">
        <h2>{selectedItem["drink name"]}</h2>
        <p>Persons: {selectedItem.persons}</p>
        <p>Ingredients: {selectedItem.ingredient_name.join(", ")}</p>
        <p>Recipe: {selectedItem.recipe}</p>
        <p>Instructions: {selectedItem.instructions}</p>
        <img
          src={`/data/DataImages/RecipeImages/${selectedItem.image}`}
          alt={selectedItem["drink name"]}
        />
      </div>

      <div className="recipe-layout">
        <div className="top-section">
          <div className="recipe-section">
            <div className="recipe-text">
              <h2>{selectedItem["drink name"]}</h2>
              <div className="red-border"></div>
              <div className="more-text">
                <div>
                  <p>Persons: </p>
                  <p>{selectedItem.persons}</p>
                </div>
                <div>
                  <p>Ingredients: </p>
                  <p> {selectedItem.ingredient_name.join(", ")}</p>
                </div>
                <div>
                  <p>Recipe:</p>
                  <p>{selectedItem.recipe}</p>
                </div>
                <div>
                  <p>Instructions:</p>
                  <p>{selectedItem.instructions}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="recipe-dec">
            <p>{selectedItem.description}</p>
          </div>

          <div className="image-section">
            <img
              src={`/data/DataImages/RecipeImages/${selectedItem.image}`}
              alt={selectedItem["drink name"]}
            />
          </div>
        </div>
          <div className="recipe-image-wrapper">
            {ingredientsForRecipe.map((ingredient, index) =>
              ingredient ? (
                <img
                  className="recipe-image"
                  key={index}
                  src={`/data/DataImages/IngredientsImages/${ingredient.image}`}
                  alt={ingredient.name}
                />
              ) : null
            )}
          </div>
      </div>
      
    </div>
  ) : null;
};
