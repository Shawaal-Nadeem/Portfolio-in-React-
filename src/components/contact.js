import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Contact(){
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
<div class="contact-me">
  <p>Let Me Get You A Beautiful Website.</p>
 <a href="https://wa.me/03096946556"> <button class="button-two">Hire Me</button></a>
</div>


</div>
);
}

export default Contact;