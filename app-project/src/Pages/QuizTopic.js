import React from "react"
import "./TopicPage.css"

export default function QTopic() {

    return (
    <div>
    <h2 className = "heading">Choose Quiz Topic:</h2>
    <div className = "resources-display">
        <div className= "topic"><a href="../Test/Quiz">All Topics </a></div>
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
        <div className= "topic">Javascript</div>
        <div className= "topic">React</div>
        <div className= "topic">React Hooks</div>
    </div>
    </div>
    )
}