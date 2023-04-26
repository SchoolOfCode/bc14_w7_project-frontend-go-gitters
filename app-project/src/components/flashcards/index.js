import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import "./index.css"
// import Carousel from 'react-elastic-carousel'
// import Item from "./item"


 // export default function CardCarousel() {

 /* return <Carousel itemsToShow={3}>
  <Item text="test"/>
  <Item text="test 2"/>
</Carousel>} */





export default function CardCarousel(props)

{


  return <div className = "main"><h2>Flash Cards</h2>
  <ul className="scroll-container" data-layoutmethod="grid">
    <li className="scroll-item"><h3>JSX</h3><h4>JSX stands for JavaScript XML, and it is a syntax extension of JavaScript that allows developers to write HTML-like code in their JavaScript files. JSX makes it easier to create and manipulate the user interface of a React application.</h4></li>
    <li className="scroll-item"><h3>States</h3><h4>State is a JavaScript object that stores data and determines how a component renders and behaves. When the state of a component changes, React will automatically update the component to reflect those changes. State is an essential concept in React because it enables developers to create dynamic and interactive user interfaces</h4></li>
    <li className="scroll-item"><h3>Array Elements</h3><h4>Array elements are object properties in the same way that toString is a property (to be specific, however, toString() is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid</h4></li>
    <li className="scroll-item"><h3>GIT Branches</h3><h4>You can use branches to safely experiment with changes to your project. Branches isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug. Use git checkout -b branch-name in the terminal to get branching!</h4></li>
    <li className="scroll-item"><h3>Splitting a number</h3><h4>To split a number into an array in JavaScript, call the Array.from() method, passing the number converted to a string as the first argument, and the Number constructor as the second, i.e. Array.from(String(num), Number)</h4></li>
    <li className="scroll-item"><h3>Changing cases</h3><h4>You can type stringName.toLowerCase() or stringName.toUpperCase() to change the case of a string</h4></li>
  </ul> </div>
}

/*
 {
    var items = [
        {
            name: "JSX",
            description: "JSX stands for JavaScript XML, and it is a syntax extension of JavaScript that allows developers to write HTML-like code in their JavaScript files. JSX makes it easier to create and manipulate the user interface of a React application."
        },
        {
            name: "States",
            description: "State is a JavaScript object that stores data and determines how a component renders and behaves. When the state of a component changes, React will automatically update the component to reflect those changes. State is an essential concept in React because it enables developers to create dynamic and interactive user interfaces",
        },
            {name: "Array properties",
            description: "Array elements are object properties in the same way that toString is a property (to be specific, however, toString() is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid:"},

            {name: "GIT Branches",
            description: "You can use branches to safely experiment with changes to your project. Branches isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug. Use git checkout -b branch-name in the terminal to get branching!"}, 

            {name: "Changing cases", 
        description: "You can type stringName.toLowerCase() or stringName.toUpperCase() to change the case of a string."}, 

            {name: "Splitting a number", 
        description: "To split a number into an array in JavaScript, call the Array.from() method, passing the number converted to a string as the first argument, and the Number constructor as the second, i.e. Array.from(String(num), Number)"}
    ]

    return (

    <div className='carousel'>
    <h1>Flashcard Bank</h1>
        <Carousel 
        style={{width: "500px"}}
        navButtonsAlwaysVisible= {true}
        navButtonsProps={{
            style: {
                backgroundColor: "black",
                borderRadius: 100,
                height: 4,
                width: 4,
            }
        }}> 
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </div>
    )
    
    function Item(props)
    {
        return (
        <div class= "holder">
            <Paper className='card'
            variant= "outlined"
            elevation= '24'
            style={{width: "500px",  backgroundColor: 'gold' }}
             >
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </Paper>
        </div>
        )
    }
} */