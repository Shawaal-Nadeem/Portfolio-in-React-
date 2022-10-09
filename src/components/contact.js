import React from "react";
import { Link } from "react-router-dom";
function Contact(){
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
<div class="contact-me">
  <p>Let Me Get You A Beautiful Website.</p>
  <button class="button-two">Hire Me</button>
</div>


</div>
);
}

export default Contact;