import React from "react"
import CardCarousel from "../flashcards";
import './App.css';
import "../flashcards/index.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          OUR HOME PAGE!!!
        </p>
          <CardCarousel class="carousel"></CardCarousel>
      </header>
    </div>
  );
}

export default App;
