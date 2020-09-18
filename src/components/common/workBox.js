import React from "react"

import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLink, faSms, faUtensils, faChartBar, faGamepad } from "@fortawesome/free-solid-svg-icons"

const WorkBox = ({props}) =>{
  const iconSub = {

    chatApp : faSms,
    restaskest : faUtensils,
    housePriceAnalyst: faChartBar,
    gameParadise: faGamepad,
    chatAPI: faSms

  }
    return (
      <div className="workbox-inner-container"> 
          <div className="title">
            
            <h3> <FontAwesomeIcon icon={iconSub[props.icon]} />  {props.title} </h3>
          </div>
          <div className="mainText"> <p> {props.description} </p></div>

          <div className="buttonGroup">
          <div className="button button-visit">
            { props.url ? <a href={props.url} rel="noopener noreferrer"> Visit Page  </a> : null } 
          </div>

          
          <div className="button button-github">
            { props.github ? <a href={props.url} rel="noopener noreferrer"> github  </a> : null } 
          </div>
          
          </div> 
          
          
      </div>
    )
};

export default WorkBox;