import React from "react";
import { Link } from "react-router-dom";

function Skill(){
    return(
<div>
        <div class="hero-about">
        <nav>
            <h2 class="logo">Portfo<span>lio</span></h2>
            <ul>
              <li><Link exact to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            <button class="btn">Subscribe</button>
          </nav>
          </div>
<h1>skill</h1>
          </div>
    );
}

export default Skill;