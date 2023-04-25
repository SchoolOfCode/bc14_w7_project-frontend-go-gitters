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
       }]

   
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


// {question: "What is the purpose of a constructor in a React component?", answer-one: 
// "To create the component's HTML structure", answer-two: "To initialize the component's
// state and bind event handlers", answer-three: "To set the component's CSS styles", 
// answer-four: "To handle user input"}
// {question: "How do you render a React component?", answer-one: "By calling its render()
// method", answer-two: "By calling its constructor", answer-three: "By using the 
// ReactDOM.render() method", answer-four: "By setting the component's state"}
// {question: "What is the difference between props and state in a React component?", 
// answer-one: "Props are used to pass data to a component, while state is used to 
// manage data within a component", answer-two: "Props and state are the same thing", 
// answer-three: "Props are used for styling, while state is used for data management", 
// answer-four: "State is used to pass data to a component, while props are used to 
// manage data within a component"}
// {question: "What is the purpose of the render() method in a React component?", answer-
// one: "To update the component's state", answer-two: "To render the component's HTML 
// structure", answer-three: "To bind event handlers to the component", answer-four: "To 
// pass data to child components"}
// {question: "How do you define a functional component in React?", answer-one: "By 
// extending the Component class", answer-two: "By using the function keyword", answer-
// three: "By using the render() method", answer-four: "By creating a new instance of the 
// React.Component class"}
// {question: "What is the purpose of the key prop in a React component?", answer-one: 
// "To uniquely identify a component in a list", answer-two: "To set the component's CSS 
// styles", answer-three: "To define the component's event handlers", answer-four: "To 
// define the component's props"}
// {question: "How do you pass data from a parent component to a child component in 
// React?", answer-one: "By using props", answer-two: "By using state", answer-three: "By 
// using the constructor", answer-four: "By using the render() method"}
// {question: "How do you create a new instance of a React component?", answer-one: "By 
// using the React.createClass() method", answer-two: "By calling the component's 
// constructor", answer-three: "By using the ReactDOM.render() method", answer-four: "By 
// using the new keyword"}