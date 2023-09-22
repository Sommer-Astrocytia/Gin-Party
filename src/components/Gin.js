import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MatchingRecipes } from "../components/MatchingRecipes";
import Collapsible from "react-collapsible";

export const Gin = () => {
  const [ginData, setGinData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/Gin.json")
      .then((response) => response.json())
      .then((data) => setGinData(data));
  }, []);

  useEffect(() => {
    fetch("/data/Recipe.json")
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, []);

  const selectedItem = ginData[id];

  const details = [
    { label: "Description", value: selectedItem?.description },
    { label: "Contents", value: selectedItem?.contents },
    { label: "Producer", value: selectedItem?.producer },
    { label: "Country", value: selectedItem?.country },
    {
      label: "Alcohol %",
      value: selectedItem ? selectedItem["alcohol %"] : null,
    },
    { label: "Supplier", value: selectedItem?.supplier },
  ];

  return selectedItem ? (
    <div className="products">
      <h2>{selectedItem["gin name"]}</h2>
      
      <div className="product-wrap">
        <div className="product-img">
          <img
            src={`/data/DataImages/GinImages/${selectedItem.image}`}
            alt={selectedItem["gin name"]}
          />
        </div>
        <div className="product-info">
          {details.map((detail, index) => (
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
          ))}
        </div>
      </div>
      <MatchingRecipes
        ginName={selectedItem["gin name"]}
        recipeData={recipeData}
      />
    </div>
  ) : null;
};
