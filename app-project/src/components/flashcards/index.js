import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./index.css"

export default function CardCarousel(props)
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

        description: "Array elements are object properties in the same way that toString is a property (to be specific, however, toString() is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid:"}
    ]

    return (
        <Carousel navButtonsProps={{
            style: {
                backgroundColor: "cornflowerblue",
                borderRadius: 0
            }
        }} style={{width: "100%"}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
    
    function Item(props)
    {
        return (
            <Paper style={{width: "500px"}} class="card">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </Paper>
        )
    }
}

