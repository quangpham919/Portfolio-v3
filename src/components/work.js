import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import WorkBox from './common/workBox'

const Work = () =>{

  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark( filter: {fileAbsolutePath: {regex: "/works/"}},
                      sort: {order: ASC, fields: frontmatter___date}){
                        edges{
                          node{
                            frontmatter {
                              date
                              title
                              featuredImage{
                                childImageSharp{
                                  fluid(maxWidth: 400, quality: 100 ){
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                }
                              }
                              github
                              site
                              tags
                            }
                            html
                          }
                        }
                      }
  }
  `)

  return (
    <div className="work"> 
        <div className="work-header">
          
          <h3>Some of my past projects </h3>

        </div> 

        <div className="work-container">

          {data.allMarkdownRemark.edges.map((item,key)=>{
            return(
              <WorkBox props={item} key={`list-${key}`} />
            )
  
          })}
        </div>
    </div>
  )

};

export default Work
