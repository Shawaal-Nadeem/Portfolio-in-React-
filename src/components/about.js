import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function About(){
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
<div className="hero-about">
<nav>
  <Stack className="logo">
  <Avatar
        alt="Remy Sharp"
        src="images/p.jpg"
        sx={{ width: 100, height: 100 }}
      />
    </Stack>
  <div onClick={toggleNav} className="menu-button">
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>   

  </nav>
          <nav>
{(toggleMenu || screenWidth>900 ) && (
      <ul className="list">
    <li className="items"><Link exact to="/">Home</Link></li>
    <li className="items"><Link to="/skills">Skills</Link></li>
      <li className="items"><Link to="/services">Services</Link></li>
      <li className="items"><Link to="/about">About Us</Link></li>
      <li className="items"><Link to="/contact-us">Contact Us</Link></li>
    </ul>
    )}
    </nav>
  </div>
<section class="about">
  <div class="main">
    <div class="about-text">
      <h2>About Me</h2>
      <h5>Developer <span>& Designer</span></h5>
      <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
      <a href="https://wa.me/03096946556"><button type="button">Let's Talk</button></a>
    </div>
  </div>
</section>


</div>
);
}

export default About;