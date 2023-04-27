import React from "react"
import "./TopicPage.css"

export default function FCTopic() {

    return (
    <div>
    <img></img>
    <h2 className = "heading">Flashcard Bank</h2>
    <h2 className ="description">Whether you're confused by CSS, angry at arrays, or completely over objects, we have the flashcards for you.<br></br><br></br>Select a topic below, or click 'susprise me' for a random deck of cards.</h2>
    <div className = "resources-display">
        <div className= "topic"><a href="../Learn/Flashcards">Surprise me! </a></div>
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
        <div className= "topic">States</div>
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