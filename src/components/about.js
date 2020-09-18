import React from "react"

import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import SkillBox from './common/skillBox'
const About = () =>{
  const myImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "quang_new.jpg" }) {
        childImageSharp{
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    const programmingSkill = {
      image : `language`,
      title : `Languages that I have written`,
      skills : [`Java`,`Javascript`,`Python`, `HTML`,`CSS`],
    }

    const tools = {
      image: `tools`, 
      title: `Technologies that I have used`,
      skills: [`React`, `Angular`, `Node.js`,`Webpack`,`Sass` ],
    }

  return (
  <div className="about">
    
    <div className="aboutMe-container"> 
    
    <div className="myImage"> <Img fluid={myImage.placeholderImage.childImageSharp.fluid}/> </div>
    
    <div className="mainText">
      <div>
        <h2>Hi there, I'm Quang Pham. Nice to meet you</h2> 
        <h3> I'm a junior software developer based in Toronto, ON, who have passion in web development, currently look for an opportunity to further my career in software development.</h3>
        <p>
        I build responsive, fast and accessible websites and always try to write readable and maintainable codes. 
        My projects are mostly developed using Javascript (React or Angular.JS), HTML, CSS as front-end and Node.JS, Express as back-end. Besides, I also familiar with using Python and Java.
        I thrive to learn new technologies and techniques to optimize website's performance while still maintaining the visual aspects. 
        <br></br>
        
       </p>
      </div> 
      <div className="mySkill"> 
      <SkillBox props={programmingSkill} /> 
      <SkillBox props={tools} /> 
      </div> 
     
     </div>
     </div>

   
  </div>
  )
};


export default About