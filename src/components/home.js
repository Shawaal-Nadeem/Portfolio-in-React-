import React from "react";
import { Link } from "react-router-dom";
function Home(){
return(
<div>

<div className="hero">
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

  <div class="content">
    <h4>Hello, my name is</h4>
    <h1>Shawaal <span>Nadeem</span></h1>
    <h3>I'am a Web Developer.</h3>
    <div class="newslatter">
      <form>
        <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
        <input type="submit" name="submit" value="Lets Start"/>
      </form>
    </div>

  </div>
  <img class="s" src="images/background.png" alt="Girl in a jacket" width="430" height="530"/>

</div>




</div>
);
}

export default Home;