import React from "react"
import Navbar from "../nav/nav"
import "./index.css"

export default function Resources() {

    return <div>
    <h2 className = "heading">Resource Hub</h2>
    <h2 className = "subheading">Interactive Tutorials</h2>
       <div className = "resources-display">
<div className= "resource">CodePen: An online code editor that allows you to experiment with HTML, CSS, and JavaScript.</div> <div className= "resource">	JSFiddle: Another online code editor that lets you write, share, and run JavaScript code snippets.</div> <div className= "resource">JS Bin: A collaborative web development tool that enables you to write, test, and share JavaScript code in real-time.</div>
</div>
<h2 className = "subheading">Useful Videos</h2>
<div className = "resources-display">
<div className= "resource">	JavaScript Tutorial for Beginners by Programming with Mosh.</div> <div className= "resource">JavaScript Fundamentals by FreeCodeCamp.</div> <div className= "resource">Modern JavaScript Tutorial by JavaScript.info.</div>
</div>
<h2 className = "subheading">Articles</h2>
<div className = "resources-display">
<div className= "resource">MDN Web Docs: A comprehensive resource on all things JavaScript, including documentation, guides, and tutorials.</div> <div className= "resource">JavaScript Weekly: A weekly newsletter that curates the best JavaScript news, articles, and tutorials from around the web.</div> <div className= "resource">A Smarter Way to Learn JavaScript: A free online book that teaches JavaScript through interactive exercises and quizzes.</div>
</div>
<h2 className = "subheading">Project Ideas</h2>
<div className = "resources-display">
<div className= "resource">Tic Tac Toe:

Tic Tac Toe can be created with some simple validations and error checks. The player who completes a three-block chain in a row wins!</div> <div className= "resource">Pairs Game:

Pairs is a single-player game in which you must pair identical pictures. It is also known as a memory game since the code must remember your initial option. </div> <div className= "resource">Timeline:

There are seven JavaScript libraries for implementing a timeline in your project. Gantt chart, event calendar, and regular timeline chart components are included.</div>
</div>
       </div>


}