import React from "react"
import responsive from "../../static/a.gif"
import { AnchorLink} from "gatsby-plugin-anchor-links"
import {Link} from "gatsby"
import Resume from "../../static/Quang_Resume.pdf"
const Banner = () =>{

return (
     
      <div className="banner">    
            <div className='greeting-area'> 
                <div className="main-text">
                <h1> <span className="hello-wrapper">Hello,  my name's</span> <br></br> <span className="name"> Quang Pham.</span>   </h1>    
                         
                <h1> A Junior  <br></br>   Software Developer.  <br></br> </h1> 
                <p><i> I build things for WWW. </i> </p> 
                <div className="button"> 
                <a href={Resume}>  View Resume </a>
                <Link to="contact" >  Get in touch </Link> 
                </div>

                <div className="link"> 
                <AnchorLink to="/#about" title="about">
                    <div className="box">
                        <span></span>
                        <span></span>
                        <span></span>
                        
                    </div>
                </AnchorLink> 
                </div>

                </div>

                <div className="main-image">
                    <img src={responsive} alt="banner"/> 
                    
                </div> 
                
            </div>
           
      </div>
     
    )
}

export default Banner;
  