import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Home(){
return(
<div>

<div className="hero">

  <nav>
  <Stack className="logo">
  <Avatar
        alt="Remy Sharp"
        src="images/psp.jpg"
        sx={{ width: 150, height: 150 }}
      />
    </Stack>
  <div>
  <div class="menu-wrap">
    <input type="checkbox" class="toggler"/>
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
    <li><Link exact to="/">Home</Link></li>
    <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li ><Link to="/about">About Us</Link></li>
      <li><Link to="/contact-us">Contact Us</Link></li>
    </ul>
        </div>
      </div>
    </div>
  </div>
</div>   

  </nav>
    

  <div class="content">
   <div className="anim">
    <h4>Hello, my name is</h4>
    <h1>Shawaal <span>Nadeem</span></h1>
    <h3>I'am a Web Developer.</h3>
    </div>
    <div class="newslatter">
    
      <form>
        <input type='text' name="email" id="mail" placeholder="Enter Anything"/>
        <input type="submit" name="submit" value="Lets Start"/>
      </form>
    </div>

  </div>

</div>




</div>
);
}

export default Home;