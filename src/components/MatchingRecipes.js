import React from "react";
import { useNavigate } from "react-router-dom"; 

export const MatchingRecipes = ({ ginName, tonicName, ingredientName, recipeData }) => {
  const navigate = useNavigate(); 

  const matchingRecipes = recipeData.filter((recipe) => {
    const matchGin = ginName ? recipe.gin_name === ginName : true;
    const matchTonic = tonicName ? recipe.tonic_name === tonicName : true;
    let matchIngredients = true;
  
    const normalizedRecipeIngredients = recipe.ingredient_name.map(ingredient => ingredient.toLowerCase().trim());
  
    if (Array.isArray(ingredientName)) {
      matchIngredients = ingredientName.some(ingredient => normalizedRecipeIngredients.includes(ingredient.toLowerCase().trim()));
    } else if (typeof ingredientName === "string") {
      matchIngredients = normalizedRecipeIngredients.includes(ingredientName.toLowerCase().trim());
    }
  
    return matchGin && matchTonic && matchIngredients;
  });
  
  

  return (
    <div className="recipe-layout-card-wrap">
      <h3>Matching Recipes:</h3>
      {matchingRecipes.length === 0 ? (
        <p>No matching recipes</p>
      ) : (
        matchingRecipes.map((recipe, index) => (
          <div
            key={index}
            className="recipe-layout-card"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
            <div className="top-section">
              <div className="recipe-section">
                <div className="recipe-text">
                  <h2>{recipe["drink name"]}</h2>
                  <div className="red-border"></div>
                  <div className="more-text">
                    <div>
                      <p>Persons: </p>
                      <p>{recipe.persons}</p>
                    </div>
                    <div>
                      <p>Ingredients: </p>
                      <p> {recipe.ingredient_name.join(", ")}</p>
                    </div>
                    <div>
                      <p>Recipe:</p>
                      <p>{recipe.recipe}</p>
                    </div>
                    <div>
                      <p>Instructions:</p>
                      <p>{recipe.instructions}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-section">
                <img
                  src={`/data/DataImages/RecipeImages/${recipe.image}`}
                  alt={recipe["drink name"]}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
