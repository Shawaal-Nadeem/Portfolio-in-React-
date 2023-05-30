import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Contact(){
 
return(
<div>
<div class="hero-about">
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
          </div>
<div class="contact-me">
  <p>Let Me Get You A Beautiful Website.</p>
 <a href="https://wa.me/03096946556"> <button class="button-two">Hire Me</button></a>
</div>


</div>
);
}

export default Contact;