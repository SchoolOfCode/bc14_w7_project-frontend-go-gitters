import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/App";
import HomePage from "./Pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Quiz from './components/Quiz/Quiz';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

