import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import AboutME from "./pages/AboutMe"
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<AboutME/>} />
        <Route path="/offer" element={<Offer/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
