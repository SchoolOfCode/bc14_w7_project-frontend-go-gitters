import React from "react"
import FlashCardPage from "../../Pages/FlashCardPage";
import './App.css';
import "../flashcards/index.css"
import Navbar from "../nav/nav"
import Quiz from "../Quiz/Quiz";
import QuizPage from "../../Pages/QuizPage";
import Home from "../../Pages/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ResourcePage from "../../Pages/Resources";
import FCTopic from "../../Pages/FCTopic";
import QTopic from "../../Pages/QuizTopic";
import CardCarousel from "../flashcards";



function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<FCTopic />} />
          <Route path="/Test" element={<QTopic />} />
          <Route path="Test/Quiz" element={<Quiz/>} />
          <Route path="Learn/Flashcards" element={<CardCarousel/>} />
          <Route path="/Resource" element={<ResourcePage/>} />
        </Routes> 
      </div>
    </>
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


{/* <Router>
<Navbar />
<Route exact path="/" component={Home}  />
<Route path="/QuizPage" component={QuizPage } />
<Route path="/FlashCardPage" component={FlashCardPage } />
</Router> */}