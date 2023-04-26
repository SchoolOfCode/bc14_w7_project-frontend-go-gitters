import { useState } from 'react'
import "./Quiz.css"
// create a variable for an array of objects/ questions in the Quiz component ✅
// render the questions on the webpage ✅
// use useState to update the questions on the page dynamically ✅
// link the button to the webpage ✅
// when button is clicked a new question should appear ✅
// When answer Option is selected it should be highlighted 
// STRETCH When click next compare answer with correct answer - if correct congratulate - if incorrect support and explain logic


function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
       {
        question: "What is a React component?", 
        questionNumber: "1",
        answerOptions: [
            {answerText: "A visual element of a web page"},
            {answerText: "A unit of code that can be reused"},
            {answerText: "A browser extension"},
            {answerText: "A type of CSS selector"},
        ]
       },

       {
        question: "What is JSX?",
        questionNumber: "2",
        answerOptions: [
            {answerText: "A file format for images"},
            {answerText: "A JavaScript library for manipulating HTML"},
            {answerText: "A programming language"},
            {answerText: "A syntax extension for JavaScript"},
        ]
       }, 

       {
       question: "What is the purpose of a constructor in a React component?", 
       questionNumber: "3",
       answerOptions: [
            {answerText: "To create the component's HTML structure"},
            {answerText: "To initialize the component's state and bind event handlers"}, 
            {answerText: "To set the component's CSS styles"},
            {answerText: "To handle user input"},
       ]}, 
        
       {
        question: "How do you render a React component?",
        questionNumber: "4",
        answerOptions: [
             {answerText: "By calling its render() method"},
             {answerText: "By calling its constructor"}, 
             {answerText: "By using the ReactDOM.render() method"},
             {answerText: "By setting the component's state"},
        ]}, 

        {
        question: "What is the difference between props and state in a React component?", 
        questionNumber: "5", 
        answerOptions: [
            {answerText: "Props are used to pass data to a component, while state is used to manage data within a component"}, 
            {answerText: "Props and state are the same thing"}, 
            {answerText: "Props are used for styling, while state is used for data management"}, 
            {answerText: "State is used to pass data to a component, while props are used to manage data within a component"}, 
    ]}, 

        {
        question: "What is the purpose of the render() method in a React component?", 
        questionNumber: "6", 
        answerOptions: [
            {answerText: "To update the component's state"}, 
            {answerText: "To render the component's HTML structure"}, 
            {answerText: "To bind event handlers to the component"}, 
            {answerText: "To pass data to child components"}, 
        ]}, 
    
        {
        question: "How do you define a functional component in React?", 
        questionNumber: "7", 
        answerOptions: [
            {answerText: "By extending the Component class"}, 
            {answerText: "By using the function keyword"}, 
            {answerText: "By using the render() method"}, 
            {answerText: "By creating a new instance of the React.Component class"}, 
    ]}, 

        {
        question: "What is the purpose of the key prop in a React component?", 
        questionNumber: "8", 
        answerOptions: [
            {answerText: "To uniquely identify a component in a list"}, 
            {answerText: "To set the component's CSS styles"}, 
            {answerText: "To define the component's event handlers"}, 
            {answerText: "To define the component's props"}, 
    ]},

        {
        question: "How do you pass data from a parent component to a child component in React?", 
        questionNumber: "9",
        answerOptions: [
            {answerText: "By using props"}, 
            {answerText: "By using state"}, 
            {answerText: "By using the constructor"}, 
            {answerText: "By using the render() method"}, 
    ]},
    
        {
        question: "How do you create a new instance of a React component?", 
        questionNumber: "10",
        answerOptions: [
            {answerText: "By using the React.createClass() method"}, 
            {answerText: "By calling the component's constructor"}, 
            {answerText: "By using the ReactDOM.render() method"}, 
            {answerText: "By using the new keyword"}, 
    ]},
    
    ]

    const nextButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
    };

    let multiChoiceOptions = questions[currentQuestion].answerOptions.map((answerOption) =>  <li onClick={nextButtonClick}>{answerOption.answerText}</li> );
       

    return(
        <div>
        <h3>{ questions[currentQuestion].questionNumber }</h3>

        <p>{ questions[currentQuestion].question }</p> 
            <ul>
                {multiChoiceOptions}
            </ul>
            <button onClick={nextButtonClick}>Next</button>
        </div>
    )
}

export default Quiz








