import React from "react"
import FlashCardPage from "../../Pages/FlashCardPage";
import './App.css';
import "../flashcards/index.css"
// import Navbar from "../nav/nav"
import QuizPage from "../../Pages/QuizPage";
import Home from "../../Pages/Home";
import { BrowserRouter as Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />}  />
          <Route path="../../Pages/QuizPage.js" element={<QuizPage />} />
          <Route path="../../Pages/FlashCardPage" element={<FlashCardPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }