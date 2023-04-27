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
    <h3>Welcome to our home webpage for studying code!

We believe that coding is one of the most important skills for the 21st century, and we're committed to helping you learn and master it.</h3>

<h3>Whether you're a complete beginner or an experienced developer looking to improve your skills, we have something for you.

Join our community of learners and start your coding journey today!</h3> 
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