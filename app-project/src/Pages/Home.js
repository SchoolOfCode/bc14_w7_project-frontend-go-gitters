import React from 'react';
import Quiz from "../components/Quiz/Quiz"
import "./Home.css"
import "../laptop.png"
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className = "HomePage">
    <div className = "text">
    <h1>Welcome Back!</h1>
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3> 
<div class="buttonDiv">
<a href="../Test"><button class="button-56">Test</button> </a>
<a href="../Learn"><button class="button-56">Learn</button></a> </div>
</div>

<div className= "laptopContainer"><img className ="laptop" src='https://lh3.googleusercontent.com/rvYiL1vF3oM1LvL9JKaypvO2vEjU7ohzgL98HKSBOFQGt2-veYuETSMIIG8r-Ph29QVLsdMOUU3JmsrwKPaFuPRKdyAQeHB7ZGoq4jLhlOE_OqLXyGSpolLBdBHxIyMqLcovfHxNKQ=w2400' alt= "laptop with code"/>
    </div>
    
    
    </div>
  );
}

export default Home;