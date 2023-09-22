import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const TonicCards = () => {
  const [tonicData, setTonicData] = useState([]);

  useEffect(() => {
    fetch("/data/Tonic.json")
      .then((response) => response.json())
      .then((data) => setTonicData(data));
  }, []);

  return (
    <div className="card-row-container">
      {tonicData.map((item, index) => (
        <Link to={`/tonic/${index}`} key={index}>
          <div className="gin-card-column" key={index}>
            <div className="gin-card-column-top">
              <img
                className="gin-img"
                src={`/data/DataImages/TonicImages/${item.image}`}
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
