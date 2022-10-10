import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Service(){
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
return(
<div>
<div class="hero-about">
<nav>
  <div onClick={toggleNav} className="menu-button">
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>   
   
  </nav>
          <nav>
{(toggleMenu || screenWidth>869 ) && (
      <ul className="list">
    <li className="items"><Link exact to="/">Home</Link></li>
      <li className="items"><Link to="/about">About Us</Link></li>
      <li className="items"><Link to="/services">Services</Link></li>
      <li className="items"><Link to="/skills">Skills</Link></li>
      <li className="items"><Link to="/contact-us">Contact Us</Link></li>
    </ul>
    )}
    </nav>
    <h2 class="logo">Portfo<span>lio</span></h2>
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
          <button class="button">Read More</button>
        </p>
      </div>
    </div>

    <div class="card">
      <i class="far fa-user"></i>
      <h5>Web Development</h5>
      <div class="pra">
        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

        <p style={{ textAlign:`center` }}>
          <button class="button">Read More</button>
        </p>
      </div>
    </div>

    <div class="card">
      <i class="far fa-bell"></i>
      <h5>Web Development</h5>
      <div class="pra">
        <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

        <p style={{ textAlign:`center` }}>
          <button class="button">Read More</button>
        </p>
      </div>
    </div>
  </div>
</div>


</div>
);
}

export default Service;