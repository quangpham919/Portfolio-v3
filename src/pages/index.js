import React from "react"
import "../styles/styles.scss"

import SEO from "../components/seo";
import MainPage from "../components/HomePage";
import Header from "../components/header"

const IndexPage = () => (
  
  <>
  <SEO title="Portfolio" />
  <Header /> 
  <MainPage  /> 
  </>
)

export default IndexPage
