import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Service(){
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
<div class="service">
  <div class="title">
    <h2>Our Services</h2>
  </div>

  <div class="box">
    <div class="card">
      <i class="fas fa-bars"></i>
      <h5>Web Development</h5>
      <div class="pra">
        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

        <p style={{ textAlign:`center` }}>
         
        </p>
      </div>
    </div>

    <div class="card">
      <i class="far fa-user"></i>
      <h5>Web Development</h5>
      <div class="pra">
        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

        <p style={{ textAlign:`center` }}>
         
        </p>
      </div>
    </div>

    <div class="card">
      <i class="far fa-bell"></i>
      <h5>Web Development</h5>
      <div class="pra">
        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

        <p style={{ textAlign:`center` }}>
         
        </p>
      </div>
    </div>
  </div>
</div>

</div>
);
}

export default Service;