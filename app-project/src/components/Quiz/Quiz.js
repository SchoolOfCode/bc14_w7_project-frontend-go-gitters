// create a variable for an array of objects/ questions in the Quiz component ✅
// render the questions on the webpage ✅
// use useState to update the questions on the page dynamically ✅
// link the button to the webpage ✅
// when button is clicked a new question should appear ✅
// When answer Option is selected it should be highlighted ✅
// When next button the score should be updated ✅
// alert user of score when reach questions.length ✅
// STRETCH When click next compare answer with correct answer - if correct congratulate - if incorrect support and explain logic

import { useState } from "react";
import "./Quiz.css"; // import the CSS file

export default function Quiz() {

  //APP Question data
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

// APP Quiz Logic
// useState to update the questions on the page dynamically, keep track of the score and which option is currently selected.
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

// function to handle when an answer option is clicked
  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);
  };

// function to handle when the next button is clicked
  const handleNextQuestionClick = () => {
    const isCorrect = selectedAnswer && selectedAnswer.answer; // if selectedAnswer is true and selectedAnswer.answer is true, then isCorrect is true
    if (isCorrect === true) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Your score is ${score} out of ${questions.length}`); // alert the user of their score
    }
  };

  // JSX to display the questions and answer options 
  //use .map to loop through the answer options and display them on the page as list items
  // *** within the list item, if the selectedAnswer is true and the selectedAnswer.answerText is equal to the answerOption.answerText, then add the class "selected" to the list item
  // clicking on the list item will call the handleAnswerOptionClick function and pass in the answerOption as an argument
  return (
    <div className="quiz-container">
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length} 
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <li
            className={`answer-button ${
              selectedAnswer && selectedAnswer.answerText === answerOption.answerText
                ? "selected"
                : ""
            }`}
            onClick={() => handleAnswerOptionClick(answerOption)}
            key={answerOption.answerText}
          >
            {answerOption.answerText}
          </li>
        ))}
        <button
          className="button-56"
          disabled={!selectedAnswer}
          onClick={handleNextQuestionClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}







