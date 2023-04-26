import React from "react"
import CardCarousel from "../flashcards";
import './App.css';
import "../flashcards/index.css"
import Navbar from "../nav/nav"
import Quiz from "../quiz/Quiz";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
        <Quiz />
      </header>
      <div className= "div1"><CardCarousel/></div>
    </div>
  );
}

export default App;
