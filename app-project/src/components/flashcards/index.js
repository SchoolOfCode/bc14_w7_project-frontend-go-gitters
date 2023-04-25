import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./index.css"

export default function CardCarousel(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
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
                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Paper>
        )
    }
}

