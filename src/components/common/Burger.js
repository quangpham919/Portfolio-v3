import React from 'react';

import {StyledBurger} from "./style"

const Burger = ({open,setNavBarOpen}) =>{

    return (
        <StyledBurger open={open} onClick={() => setNavBarOpen(!open)}>
           <div/>
           <div/>
           <div/>
        </StyledBurger>
    )
}

export default Burger;