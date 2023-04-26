import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/App";
import HomePage from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import Quiz from './components/Quiz/Quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/quiz",
//     element: <Quiz />,
//   },
// ]);


