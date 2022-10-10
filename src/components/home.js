import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home(){
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

<div className="hero">

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