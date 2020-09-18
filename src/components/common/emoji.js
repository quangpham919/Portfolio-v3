import React from 'react';

const Emoji = (props) =>{
    return (
      <span
        className="emoji"
        role="img"
        aria-label={props.label? props.label : ""}
        aria-hidden= {props.label ? props.label : "true"} >
              
        {props.symbol}      
        </span>
    )
};

export default Emoji