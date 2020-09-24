import React, {useState, useRef} from "react"
import myLogo from "../../static/logo.svg"
import { AnchorLink} from "gatsby-plugin-anchor-links"
import useDocumentScrollThrottled from "../utils/useDocumentScrollThrottled"
import NavLink from "./common/NavLink";
import {Toggle, Navbox} from "./common/style";
import Burger from "./common/Burger";
import {useOnClickOutside} from "../utils/useOnClickOutside"

const Header = () => 
{ 
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const [navbarOpen, setNavBarOpen] = useState(false);
  const node = useRef();
 
  useOnClickOutside(node, ()=>setNavBarOpen(false));
  // const MINIMUM_SCROLL = 70;
  // const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    
    const {currentScrollTop} = callbackData;
    // const isScrolledDown = previousScrollTop < currentScrollTop;
    // const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    
    setShouldShowShadow(currentScrollTop > 70);
    
  })
  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  console.log(shadowStyle);

  return (

    <header className={`${shadowStyle}`}> 
        <nav>
          <div className="logo-wrapper">
          <AnchorLink to="/#banner"> 
          <img src={myLogo} alt="quang pham logo"/>  
          </AnchorLink> 
          </div>

          <div className="navigation">
              <NavLink/>
          </div> 

           <Toggle ref={node}>
          <Burger open={navbarOpen} setNavBarOpen={setNavBarOpen}/>  
          <Navbox open={navbarOpen}> <NavLink/> </Navbox>
          </Toggle> 
        </nav>
    </header>
  )
};

export default Header