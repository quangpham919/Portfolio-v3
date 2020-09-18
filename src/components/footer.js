import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn, faFacebook,  } from "@fortawesome/free-brands-svg-icons";

const Footer = ()=>{
  return (
    <footer className="footer-container">
     
        <h1> Stay Connected </h1>  
        <div className="button-container">

        <a href="https://github.com/quangpham919" rel="noopener noreferrer">  <div className="button">    <FontAwesomeIcon icon={faGithub} /> </div>  </a> 
         
          <a href="https://www.linkedin.com/in/pham-quang-723430141/" rel="noopener noreferrer">   <div className="button">   <FontAwesomeIcon icon={faLinkedinIn} />    </div>  </a>
         
           <a href="https://www.facebook.com/" rel="noopener noreferrer"> <div className="button"> <FontAwesomeIcon icon={faFacebook} />  </div>   </a>

          <a href="mailto:quangpham9199@gmail.com">  <div className="button">  <FontAwesomeIcon icon={faEnvelope} />  </div>   </a> 
        
        </div> 

        <br></br>
        <p> handcrafted by : Quang Pham</p> 
     
    </footer>
  )
}

export default Footer