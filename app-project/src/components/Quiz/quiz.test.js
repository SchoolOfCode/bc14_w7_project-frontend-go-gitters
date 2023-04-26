/*
- when the page is loaded, first question of the quiz should be rendered s✅
- User should be able to select an answer ✅
- next button is unclickable if an answer is not selected ✅
- when the answer is selected it turns green 
- when the next button is clicked it renders the next question
- when the correct answer is chosen, the score changes
- no answer should be selected when the app re-render
*/

import React from "react"
import Quiz from "./Quiz"
import App from "../app/App"
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { test, expect } from "@jest/globals"


test("when the page is loaded, first question of the quiz should be rendered", () => {
    render(<App />);
    const firstQuestion = screen.getByText("What is a React component?");
    expect(firstQuestion).toBeInTheDocument();
  });

  
test("User should be able to select an answer", () => {
    render(<App />);
   // const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const correctAnswer = screen.getByText("A unit of code that can be reused")
   fireEvent.click(correctAnswer)
    expect(correctAnswer.selected).toBeTruthy
  });


  test("next button is unclickable if an answer is not selected", () => {
    render(<App />);
    const button = screen.getByText("Next")
   userEvent.click(button)
    expect(button).toBeDisabled
  })

test("when the next button is clicked it renders the next question", () => {
    render(<App />);
    const correctAnswer = screen.getByText("A unit of code that can be reused")
    const button = screen.getByText("Next")
   userEvent.click(correctAnswer)
   userEvent.click(button)
    const newQuestion = screen.getByText("What is JSX?")
    expect(newQuestion).toBeInTheDocument()
  })


