import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const GinCards = () => {
  const [ginData, setGinData] = useState([]);

  useEffect(() => {
    fetch("/data/Gin.json")
      .then((response) => response.json())
      .then((data) => setGinData(data));
  }, []);

  return (
    <div className="card-row-container">
    {ginData.map((item, index) => (
      <Link to={`/gin/${index}`} key={index}>
        <div className="gin-card-column">
          <div className="gin-card-column-top">
            <img className="gin-img"
              src={`/data/DataImages/GinImages/${item.image}`}
              alt={item["gin name"]}
            />
          </div>
          <div className="gin-card-column-bottom">
            <h3 className="gin-card-column-title">{item["gin name"]}</h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
);
};
