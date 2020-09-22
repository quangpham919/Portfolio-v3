import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn, faFacebook  } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import myPic from "../../static/quang_new.jpg"

const About = () =>{

  return (
  <div className="about">
    
    <div className="aboutMe-container"> 
    
    <div className="myImage"> 
    <div className="image-wrapper"> <img src={myPic} alt="my picture" />   </div>
    
    <h4>Find me on:</h4>
    <div className="social-link">
      <a href="#"><FontAwesomeIcon icon={faGithub} /> </a>
      <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /> </a>
      <a href="#"><FontAwesomeIcon icon={faFacebook} /> </a>
      <a href="#"><FontAwesomeIcon icon={faEnvelope} /> </a>
    </div>
    </div>
    
    <div className="mainText">
        <h4>MORE ABOUT ME</h4> 
        <p> I'm a junior software developer based in Toronto, ON, who have passion in web development.</p>
        <p>
        I build responsive, fast and accessible websites involving in both front-end and back-end.
        While maintaining the visual aspects of my project, I also love to write readable and maintainable codes.
        Currently, I'm actively seeking for an interview opportunity to land my first job where I can make contribution and learn new technologies, techniques to further myself. 
       </p>
      <hr></hr>
      <div className="mySkill"> 
      <h4>TOP EXPERTISE</h4>
      <p>Fullstack enthusiast with primary focus on React and Nodejs. I'm developing myself on back-end side with Java as my main language.</p>
      <div className="skills">
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>MongoDb</li>
        </ul> 
        <ul>
          <li>Webpack</li>
          <li>Heroku</li>
          <li>AWS(S3/EC2)</li>
          <li>HTML/CSS</li>
          <li>SASS</li>
          <li>Stripe API</li>
        </ul> 
      </div>
      </div> 
     
     </div>
     </div>

   
  </div>
  )
};


export default About