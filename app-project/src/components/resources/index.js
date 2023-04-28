import React from "react"
import Navbar from "../nav/nav"
import "./index.css"
import coding from "./coding.jpg"
export default function Resources() {

    return <div> 
    <h2 className = "heading">Resource Hub</h2>
    <h2 className = "sub">Our ever expanding resource library has everything you need to excel as a developer, all in one place. </h2>
    <h2 className = "subheading">UI Libraries</h2>
    <div className = "resources-display">
<div className= "resource"><b><u><a href= "https://react-bootstrap.github.io">React Bootstrap</a></u></b> <br></br>React Bootstrap rebuilds Bootstrap — the most popular frontend framework for React. And this has the advantage of removing the unnecessary jQuery dependency.</div> 
<div className= "resource"><b><u>Core UI</u></b> <br></br>Core UI is one of the most robust and powerful React UI component libraries.  </div> 
<div className= "resource"><b><u>Prime React</u></b> <br></br>PrimeReact is one of the most extraordinary React UI kits, features a collection of more than 70 components to choose from.</div> 
</div>
    <h2 className = "subheading">Project Ideas</h2>
    <div className = "resources-display">
<div className= "resource"><b>Tic Tac Toe</b> Tic Tac Toe can be created with some simple validations and error checks. The player who completes a three-block chain in a row wins!</div> <div className= "resource">
<b>Pairs Game</b> Pairs is a single-player game in which you must pair identical pictures. It is also known as a memory game since the code must remember your initial option. </div> <div className= "resource"><b>Timeline</b> There are seven JavaScript libraries for implementing a timeline in your project. Gantt chart, event calendar, and regular timeline chart components are included.</div>
</div>
    <h2 className = "subheading">Interactive Tutorials</h2>
       <div className = "resources-display">
<div className= "resource"><b>CodePen</b> is an online code editor that allows you to experiment with HTML, CSS, and JavaScript.</div> <div className= "resource">	<b>JSFiddle</b> is another online code editor that lets you write, share, and run JavaScript code snippets.</div> <div className= "resource"><b>JS Bin</b> is a collaborative web development tool that enables you to write, test, and share JavaScript code in real-time.</div>
</div>
<h2 className = "subheading">Articles</h2>
<div className = "resources-display">
<div className= "resource"><b>MDN Web Docs</b> is a comprehensive resource on all things JavaScript, including documentation, guides, and tutorials.</div> <div className= "resource"><b>Javascript Weekly</b> is a weekly newsletter that curates the best JavaScript news, articles, and tutorials from around the web.</div> <div className= "resource"><b>A Smarter Way to Learn Javascript...</b> is a free online book that teaches JavaScript through interactive exercises and quizzes.</div>
</div>
    <h2 className = "subheading">Useful Videos for beginners</h2>
<div className = "resources-display">
<div className= "resource">	JavaScript Tutorial for Beginners by Programming with Mosh.</div> <div className= "resource">JavaScript Fundamentals by FreeCodeCamp.</div> <div className= "resource">Modern JavaScript Tutorial by JavaScript.info.</div>
</div>
       </div>


}