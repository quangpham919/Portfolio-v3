import React from "react"
import Img from "gatsby-image"

const WorkBox = ({props}) =>{
  
  const {title, featuredImage , github , site } = props.node.frontmatter;
  const {html} = props.node; 
    return ( 
      <div className="workbox-inner-container"> 
          <Img className="thumbnail" fluid={featuredImage.childImageSharp.fluid} objectFit="cover" display="block" alt="project-thumbnail"/>
          <div className="post">
            <h3> {title} </h3>
            {<div className="text" dangerouslySetInnerHTML={{__html: html}}></div>}
            <div className="buttonGroup"> 
          <div className="button button-visit">
            { site ? <a href={site} rel="noopener noreferrer"> Visit Page  </a> : null } 
          </div>
          <div className="button button-github">
            {github ? <a href={github} rel="noopener noreferrer"> github  </a> : null } 
          </div> 
         </div>
        </div> 
          
          
      </div>
    )
};

export default WorkBox;