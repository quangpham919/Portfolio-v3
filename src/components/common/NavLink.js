import React from 'react'
import { AnchorLink} from "gatsby-plugin-anchor-links"
import styled from "styled-components";

const StyledLink = styled(AnchorLink)`
    text-decoration:none;
    letter-spacing: 1.25px;
    text-transform: capitalize;
    font-weight: 700;
    padding:5px;
    margin-right:20px;
    white-space: nowrap;
    transition: all 200ms ease-in;
    position: relative;
    display: inline-block;
    color: #000000;
    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: #FCA311;
        height: 1px;
        transition: all 0.4s ease-in;
    }
    :hover {
    color: #FCA311;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    display:block;
    z-index: 6;
    color:#FFFFFF;
  }
`

const NavLink = () =>{


return(
        <div className="navigation-link"> 
            <StyledLink to="/#banner" title="Home"> Home </StyledLink>
            <StyledLink to="/#about" title="About"> About </StyledLink> 
            <StyledLink to="/#work" title="Work"> Work </StyledLink> 
            <StyledLink to="/#footer" title="Footer">Contact </StyledLink>
        </div>
    )
}

export default NavLink;