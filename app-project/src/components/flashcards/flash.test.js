
import React from "react"
import CardCarousel from "./index"
import App from "../app/App"
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { test, expect } from "@jest/globals"



test("when the page is loaded, the flash cards should show up", () => {
    render(<CardCarousel/>);
    const actual = screen.getByText("Splitting a number");
    expect(actual).toBeInTheDocument();
  });
