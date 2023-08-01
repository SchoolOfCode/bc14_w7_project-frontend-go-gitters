import React from 'react';
import Quiz from "../components/Quiz/Quiz"
import "./Home.css"
import laptop from "./Laptop.jpg"
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className = "HomePage">
    <div className = "text">
    <h1 className='main-heading'>Welcome Back!</h1>
    <h3>Master coding from bootcamp and beyond with the help of our library of quizzes, flashcards and resources. <br></br><br></br>Whether you're a beginner, bootcamper, or boss, we have something for you. <br></br><br></br>Become a Code Master today!</h3> 
<div class="buttonDiv">
<a href="../Test"><button className="button-56">Test</button> </a>
<a href="../Learn"><button className="button-56">Learn</button></a> </div>
</div>

<div className= "laptopContainer"><img className ="laptop" src={laptop} alt= "laptop with code"/>
    </div>
    
    
    </div>
  );
}

export default Home;