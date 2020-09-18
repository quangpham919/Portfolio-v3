 import React from 'react'
import posed from 'react-pose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode , faTools, faHeart} from '@fortawesome/free-solid-svg-icons'


const SkillBox = ({props}) => {
  const Box = posed.div({

    hoverable:true,

    init: {
      scale:1,
      boxShadow:`0px 0px 0px rgba(0,0,0,0)`
    },
    hover: {
      scale: 1.1,
      boxShadow: `0px 5px 10px rgba(0,0,0,0.3)`,
    },
  });

  const listSkills = props.skills.map((el) => <li className={el} >  <FontAwesomeIcon icon={faHeart} className="heart"/> {el} </li>  ) 
  
  return(
    <Box className='skill-container'>
        <div className="inner-skill-box"> 
        <div className="image"> <FontAwesomeIcon  icon ={props.image === "language" ? faLaptopCode : faTools }/> </div> 
        <div className="title"> <h4> {props.title} </h4>  </div>
        <div className="skill"> <ul> {listSkills} </ul> </div> 
        </div>
    </Box> 

  )
};


export default SkillBox;