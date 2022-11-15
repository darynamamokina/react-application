import React from "react";
import './style.css';


function Navigation () {
 return (
  <nav>
   <div className="menu-title">Milton</div>
   <hr />
   <div className="menu-text">Denali is a simple responsive blog 
   template. Easily add new posts using the Editor or change 
   layout and design using the Designer.
   </div>
   <hr />
   <ul className="menu">
    <li>home</li>
    <li>about</li>
    <li>contact</li>
   </ul>
   <hr />
   <div className="logo"></div>
  </nav>
 );
}

export default Navigation;