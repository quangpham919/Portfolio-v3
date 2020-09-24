import React from "react"
import responsive from "../../static/a.gif"
import { AnchorLink} from "gatsby-plugin-anchor-links"
import Resume from "../../static/Quang_Resume.pdf"
import sal from 'gatsby-plugin-scroll-reveal';


const Banner = () =>{


return (
     
      <div className="banner">    
            <div className='greeting-area'> 
                <div 
                className="main-text" 
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-easing="ease-in"
                >
                <h1> <span className="hello-wrapper">Hello,  my name's</span> <br></br> <span className="name"> Quang Pham.</span> </h1>       
                <h1> A Junior  <br></br>   Software Developer.  <br></br> </h1> 
                <p><i> I build things for WWW. </i> </p> 
                <div className="button"> 
                <a href={Resume}>  View Resume </a>
                <AnchorLink to="/#footer" >  Get in touch </AnchorLink> 
                </div>

                <div className="link" > 
                <AnchorLink to="/#about" title="about">
                    <div className="box">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </AnchorLink> 
                </div>

                </div>

                <div className="main-image"
                data-sal="zoom-in"
                data-sal-delay="100"
                data-sal-easing="ease-in"
                >
                    <img src={responsive} alt="banner"/> 
                    
                </div> 
                
            </div>
           
      </div>
     
    )
}

export default Banner;
  