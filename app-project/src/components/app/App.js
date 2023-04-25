import React from "react"
import CardCarousel from "../flashcards";
import './App.css';
import "../flashcards/index.css"
import Navbar from "../nav/nav"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      </header>
      <div className= "div1"><CardCarousel/></div>
    </div>
  );
}

export default App;
