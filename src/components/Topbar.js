import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaCocktail,
  FaLeaf,
  FaBook,
  FaShoppingBasket,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Back } from "./Back";

export const TopBar = () => {
  const [isActive, setIsActive] = useState(false);
  const topBarRef = useRef(null);

  const menuToggle = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (topBarRef.current && !topBarRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  const handlePageSelect = () => {
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="topbar-wrap" ref={topBarRef}>
      <Back/>
      <div className="topbar">
        <div
          className={`menu-icon ${isActive ? "active" : ""}`}
          onClick={menuToggle}
        >
          {isActive ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`topbar-menu ${isActive ? "active" : ""}`}>
          <h3>
            Sommer
            <p>soch@astrocytia.com</p>
          </h3>
          <ul>
            <li className="topbar-list">
              <FaHome className="i" />
              <Link to="/" onClick={handlePageSelect}>
                Home
              </Link>
            </li>
            <li className="topbar-list">
              <FaCocktail className="i" />
              <Link to="/gin-cards" onClick={handlePageSelect}>
                Gin
              </Link>
            </li>
            <li className="topbar-list">
              <FaLeaf className="i" />
              <Link to="/tonic-cards" onClick={handlePageSelect}>
                Tonic
              </Link>
            </li>
            <li className="topbar-list">
              <FaBook className="i" />
              <Link to="/ingredients-cards" onClick={handlePageSelect}>
                Ingredients
              </Link>
            </li>
            <li className="topbar-list">
              <FaShoppingBasket className="i" />
              <Link to="/recipe-cards" onClick={handlePageSelect}>
                Recipe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
