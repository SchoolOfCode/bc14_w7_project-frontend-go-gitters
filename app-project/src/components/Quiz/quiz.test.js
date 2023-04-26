/*
- when the page is loaded, first question of the quiz should be rendered
- when the answer is selected it turns green 
- when the next button is clicked it renders the next question, score changes
- no answer should be selected when the app re-renders
- next button is unclickable if an answer is not selected 
*/

import Quiz from "./Quiz"
import { test, expect } from "@jest/globals"

test ('when the page is loaded, first question of the quiz should be rendered', function (questions) {
    const firstQuestion = questions[0].question
    expect firstQuestion.toBe
})
