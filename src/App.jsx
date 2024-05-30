import {   BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./components/Home";
import Horror from "./components/Horror";
import Thriller from "./components/Thriller";
import Truecrime from "./components/Truecrime";




 
 function App() {
  return (
    <div>
   <Router>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Horror" element={<Horror />} />
    <Route exact path="/Thriller" element={<Thriller />} />
    <Route exact path="/Truecrime" element={<Truecrime />} />






    </Routes>

   
   
   
   
   
   
   </Router>
    </div>
  )
}
export default App;