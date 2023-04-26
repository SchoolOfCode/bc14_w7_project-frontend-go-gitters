import { useState } from 'react'
import "./Quiz.css"
// create a variable for an array of objects/ questions in the Quiz component ✅
// render the questions on the webpage ✅
// use useState to update the questions on the page dynamically ✅
// link the button to the webpage ✅
// when button is clicked a new question should appear ✅
// When answer Option is selected it should be highlighted 
// STRETCH When click next compare answer with correct answer - if correct congratulate - if incorrect support and explain logic


export default function Quiz() {

    const questions = [
       {
        question: "What is a React component?", 
        questionNumber: "1",
        answerOptions: [
            {answerText: "A visual element of a web page", answer: false},
            {answerText: "A unit of code that can be reused", answer: true},
            {answerText: "A browser extension", answer: false},
            {answerText: "A type of CSS selector", answer: false },
        ]
       },

       {
        question: "What is JSX?",
        questionNumber: "2",
        answerOptions: [
            {answerText: "A file format for images", answer: false},
            {answerText: "A JavaScript library for manipulating HTML", answer: false},
            {answerText: "A programming language", answer: false},
            {answerText: "A syntax extension for JavaScript", answer: true},
        ]
       }, 

       {
       question: "What is the purpose of a constructor in a React component?", 
       questionNumber: "3",
       answerOptions: [
            {answerText: "To create the component's HTML structure", answer: false},
            {answerText: "To initialize the component's state and bind event handlers", answer: true}, 
            {answerText: "To set the component's CSS styles", answer: false},
            {answerText: "To handle user input", answer: false},
       ]}, 
        
       {
        question: "How do you render a React component?",
        questionNumber: "4",
        answerOptions: [
             {answerText: "By calling its render() method", answer: true},
             {answerText: "By calling its constructor", answer: false}, 
             {answerText: "By using the ReactDOM.render() method", answer: false},
             {answerText: "By setting the component's state", answer: false},
        ]}, 

        {
        question: "What is the difference between props and state in a React component?", 
        questionNumber: "5", 
        answerOptions: [
            {answerText: "Props are used to pass data to a component, while state is used to manage data within a component", answer: true}, 
            {answerText: "Props and state are the same thing", answer: false}, 
            {answerText: "Props are used for styling, while state is used for data management", answer: false}, 
            {answerText: "State is used to pass data to a component, while props are used to manage data within a component", answer: false}, 
    ]}, 

        {
        question: "What is the purpose of the render() method in a React component?", 
        questionNumber: "6", 
        answerOptions: [
            {answerText: "To update the component's state", answer: false}, 
            {answerText: "To render the component's HTML structure", answer: true}, 
            {answerText: "To bind event handlers to the component", answer: false}, 
            {answerText: "To pass data to child components", answer: false}, 
        ]}, 
    
        {
        question: "How do you define a functional component in React?", 
        questionNumber: "7", 
        answerOptions: [
            {answerText: "By extending the Component class", answer: false}, 
            {answerText: "By using the function keyword", answer: true}, 
            {answerText: "By using the render() method", answer: false}, 
            {answerText: "By creating a new instance of the React.Component class", answer: false}, 
    ]}, 

        {
        question: "What is the purpose of the key prop in a React component?", 
        questionNumber: "8", 
        answerOptions: [
            {answerText: "To uniquely identify a component in a list", answer: false}, 
            {answerText: "To set the component's CSS styles", answer: false}, 
            {answerText: "To define the component's event handlers", answer: false}, 
            {answerText: "To define the component's props", answer: true}, 
    ]},

        {
        question: "How do you pass data from a parent component to a child component in React?", 
        questionNumber: "9",
        answerOptions: [
            {answerText: "By using props", answer: true}, 
            {answerText: "By using state", answer: false}, 
            {answerText: "By using the constructor", answer: false}, 
            {answerText: "By using the render() method", answer: false}, 
    ]},
    
        {
        question: "How do you create a new instance of a React component?", 
        questionNumber: "10",
        answerOptions: [
            {answerText: "By using the React.createClass() method", answer: false}, 
            {answerText: "By calling the component's constructor", answer: false}, 
            {answerText: "By using the ReactDOM.render() method", answer: true}, 
            {answerText: "By using the new keyword", answer: false}, 
    ]},
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
  
    const handleAnswerOptionClick = (answer) => {
      setSelectedAnswer(answer);
    };
  
    const handleNextQuestionClick = () => {
      if (selectedAnswer && selectedAnswer.answer) {
        console.log("true")
        setScore(score + 1);
      }
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    };
  
    const currentQuizQuestion = questions[currentQuestion];
  
    return (
      <div className="quiz">
      <h3>{score}</h3>
        <h1 className="quiz__title">{currentQuizQuestion.question}</h1>
        <ol className="quiz__options">
          {currentQuizQuestion.answerOptions.map((answerOption) => (
            <li
              key={answerOption.answerText}
              className={
                "quiz__option" +
                (selectedAnswer === answerOption ? " quiz__option--selected" : "")
              }
              onClick={() => handleAnswerOptionClick(answerOption)}
            >
              {answerOption.answerText}
            </li>
          ))}
        </ol>
        <button onClick={handleNextQuestionClick}>Next</button>
      </div>
    );
  }

     /* 
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const nextButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
    };
    
    // const answerChecker = (selectedAnswer, index) => {
    //         setSelectedAnswer(index);
    //         if (selectedAnswer.answer === true) {
    //             console.log("correct");
    //         } else {
    //             console.log("incorrect");
    //         }
    //     };

    // let multiChoiceAnswer = questions[currentQuestion].answerOptions.map((answerOption) =>  <li>{answerOption.answer}</li> );
       
    let multiChoiceOptions = questions[currentQuestion].answerOptions.map((answerOption) =>  <li onClick={checkAnswer}>{answerOption.answerText}</li> );
       

    function checkAnswer () {
        if (questions[currentQuestion].answerOptions.answer == true)
        {console.log("true!")}
        else {console.log ("false")}
    }

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

export default Quiz */ 








