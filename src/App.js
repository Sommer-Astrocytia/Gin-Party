import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";  
import { TonicCards } from "./components/TonicCards";  
import { GinCards } from "./components/GinCards";  
import { Gin } from "./components/Gin";  
import { Ingredients } from "./components/Ingredients";  
import { Recipe } from "./components/Recipe"; 
import { IngredientsCards } from "./components/IngredientsCards";
import { RecipeCards } from "./components/RecipeCards";
import { Tonic } from "./components/Tonic";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gin-cards" element={<GinCards />} />
          <Route path="/tonic-cards" element={<TonicCards />} />
          <Route path="/ingredients-cards" element={<IngredientsCards />} />
          <Route path="/recipe-cards" element={<RecipeCards />} />
          <Route path="/gin/:id" element={<Gin />} />
          <Route path="/ingredients/:id" element={<Ingredients/>} />
          <Route path="/recipe/:id" element={<Recipe/>} />
          <Route path="/tonic/:id" element={<Tonic/>} />


        </Routes>
      </main>
    </Router>
  );
}

export default App;
