import React, {useState} from "react"
import myLogo from "../../static/logo.svg"
import { AnchorLink} from "gatsby-plugin-anchor-links"
import useDocumentScrollThrottled from "../utils/useDocumentScrollThrottled"

const Header = () => 
{ 
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 70;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const {previousScrollTop, currentScrollTop} = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    
    setShouldShowShadow(currentScrollTop > 2);
    
    
  })
  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  console.log(shadowStyle);

  return (

    <header className={`${shadowStyle}`}> 
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
            <AnchorLink to="/#footer">Contact </AnchorLink>
          
        </div>

        </nav>
    </header>
  )
};

export default Header