import { Link } from "gatsby"
import { AnchorLink} from "gatsby-plugin-anchor-links"
import React from "react"
import myLogo from "../../static/logo.svg"



const Header = () => 
{ 
return (

  <header> 
      <nav>
      <div className="logo">
      <AnchorLink to="/#banner"> 
      <img src={myLogo} alt="quang pham logo"/>  
      </AnchorLink> 
      </div>

      <div className="navigation">
       
          <AnchorLink to="/#banner" title="Home"> Home </AnchorLink>
          <AnchorLink to="/#about" title="About"> About </AnchorLink> 
          <AnchorLink to="/#work" title="Work"> Work </AnchorLink> 
          <Link to="contact">Contact</Link>
        
      </div>

      </nav>
  </header>
)
};

export default Header