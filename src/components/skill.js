import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Skill(){
    return(
<div>
<div class="hero-about">
<nav>
  <Stack className="logo">
  <Avatar
        alt="Remy Sharp"
        src="images/ps.jpg"
        sx={{ width: 100, height: 100 }}
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
    <h2>Our Projects</h2>
  </div>

  <div class="box">
    <div class="card">
      <i class="	fab fa-apple"></i>
      <h5>Apple Store</h5>
      <div class="pra">
        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

        <p style={{ textAlign:`center` }}>
          <a href="https://timely-malabi-4992be.netlify.app"><button class="button">View</button></a>
        </p>
      </div>
    </div>

    <div class="card">
      <i class="fab fa-wolf-pack-battalion"></i>
      <h5>Wild Encounters</h5>
      <div class="pra">
        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

        <p style={{ textAlign:`center` }}>
         <a href="https://fastidious-peony-79400b.netlify.app"> <button class="button">View</button></a>
        </p>
      </div>
    </div>

    <div class="card">
      <i class="fas fa-calculator"></i>
      <h5>Discount Calculator</h5>
      <div class="pra">
        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

        <p style={{ textAlign:`center` }}>
        <a href="https://fascinating-biscuit-455748.netlify.app">  <button class="button">View</button></a>
        </p>
      </div>
    </div>
  </div>
</div>


</div>
    );
}

export default Skill;