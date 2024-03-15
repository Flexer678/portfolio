import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/projects" exact Component={Projects}/>
        <Route path="/contact" exact Component={Contact}/>
         <Route path="/AboutMe" exact Component={AboutMe}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
//https://docs.google.com/document/d/1clx9182y5C3IIIcjIvqe116w1rJk39z6ETfy7_dhEpo/edit#heading=h.ymi089liagec