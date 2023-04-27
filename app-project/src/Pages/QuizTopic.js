import React from "react"
import "./TopicPage.css"

export default function QTopic() {

    return (
    <div>
    <h2 className = "heading">Quizzes</h2>
    <h2 className ="description">Think you're a coding master? <br></br><br></br>Test yourself with our range of quizzes! Select a topic below to be taken to its quiz page.</h2>
    <div className = "resources-display">
        <div className= "topic"><a href="../Test/Quiz">General </a></div>
        <div className= "topic">Objects</div>
        <div className= "topic">APIs</div>
        <div className= "topic">UX</div>
        <div className= "topic">UI</div>
    </div>
    <div className = "resources-display">
        <div className= "topic">Functions</div>
        <div className= "topic">While loops</div>
        <div className= "topic">Agile</div>
        <div className= "topic">CSS</div>
        <div className= "topic">HTML</div>
    </div>
    <div className = "resources-display">
        <div className= "topic">If statements</div>
        <div className= "topic">The DOM</div>
        <div className= "topic">Advanced CSS</div>
        <div className= "topic">React</div>
        <div className= "topic">React Hooks</div>
    </div>

    <div className = "resources-display">
        <div className= "topic">Testing</div>
        <div className= "topic">UI libraries</div>
        <div className= "topic">Advanced HTML</div>
        <div className= "topic">Logic</div>
        <div className= "topic">AI</div>
    </div>
    </div>
    )
}