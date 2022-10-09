import React from "react";
import { Link } from "react-router-dom";

function About(){
return(
<div>
<div className="hero-about">
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
<section class="about">
  <div class="main">
    <div class="about-text">
      <h2>About Me</h2>
      <h5>Developer <span>& Designer</span></h5>
      <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
      <Link to='/'><button type="button">Let's Talk</button></Link>
    </div>
  </div>
</section>


</div>
);
}

export default About;