import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Service from "./service";
import Contact from "./contact";
import Footer from "./footer";
import Skill from "./skill";
function RouterConfig() {
    return (
      <Router>
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/services" element={<Service/>}></Route>
            <Route exact path="/contact-us" element={<Contact/>}></Route>
            <Route exact path="/skills" element={<Skill/>}></Route>
            </Routes>
        <Footer/>
      </Router>
    );
  }
  
  export default RouterConfig;
