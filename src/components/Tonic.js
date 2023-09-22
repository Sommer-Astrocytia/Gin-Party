import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MatchingRecipes } from "../components/MatchingRecipes";
import Collapsible from "react-collapsible";

export const Tonic = () => {
  const [tonicData, setTonicData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/Tonic.json")
      .then((response) => response.json())
      .then((data) => setTonicData(data));
  }, []);

  useEffect(() => {
    fetch("/data/Recipe.json")
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, []);

  const selectedItem = tonicData[id];

  const details = [
    { label: "Description", value: selectedItem?.description },
    { label: "Brand", value: selectedItem?.brand },
    { label: "Contents in ml", value: selectedItem ? selectedItem["contents in ml"] : null },
    { label: "Sugar", value: selectedItem?.sugar },
    { label: "Country", value: selectedItem?.country },
    { label: "Supplier", value: selectedItem?.supplier },
  ];

  return selectedItem ? (
    <div className="products">
      <h2>{selectedItem.name}</h2>

      <div className="product-wrap">
        <div className="product-img">
          <img
            src={`/data/DataImages/TonicImages/${selectedItem.image}`}
            alt={selectedItem.name}
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
        tonicName={selectedItem.name}
        recipeData={recipeData}
      />
    </div>
  ) : null;
};
