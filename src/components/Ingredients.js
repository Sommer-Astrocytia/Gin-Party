import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MatchingRecipes } from "./MatchingRecipes";
import Collapsible from "react-collapsible";

export const Ingredients = () => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/Ingredients.json")
      .then((response) => response.json())
      .then((data) => setIngredientsData(data));
  }, []);

  useEffect(() => {
    fetch("/data/Recipe.json")
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, []);

  const selectedItem = ingredientsData[id];

  const details = [
    { label: "Description", value: selectedItem?.description },
    { label: "Brand", value: selectedItem?.brand },
    { label: "Weight (Pc)", value: selectedItem?.["weight (Pc)"] },
    {
      label: "Production Methods",
      value: selectedItem?.["production methods"],
    },
    { label: "Country", value: selectedItem?.country },
    { label: "Producer", value: selectedItem?.producer },
    { label: "Supplier", value: selectedItem?.supplier },
    {
      label: "Durability / Shelf Life",
      value: selectedItem?.["durability/shelf life"],
    },
    { label: "Storage", value: selectedItem?.storage },
  ];

  return selectedItem ? (
    <div className="products">
      <h2>{selectedItem.name}</h2>

      <div className="product-wrap">
        <div className="product-img">
          <img
            src={`/data/DataImages/IngredientsImages/${selectedItem.image}`}
            alt={selectedItem.name}
          />
        </div>
        <div className="product-info">
          {details.map((detail, index) => {
            if (detail.value) {
              return (
                <div className="data-collapsible-container" key={index}>
                  <Collapsible
                    trigger={
                      <h3 className="data-collapsible-trigger">
                        {detail.label} <span className="arrow"></span>
                      </h3>
                    }
                    triggerOpenedClassName="data-collapsible-trigger-opened"
                    className="data-collapsible"
                    transitionTime={200}
                  >
                    <div className="data-collapsible-content">
                      <p>{detail.value}</p>
                    </div>
                  </Collapsible>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <MatchingRecipes
        ingredientName={selectedItem.name}
        recipeData={recipeData}
      />
    </div>
  ) : null;
};
