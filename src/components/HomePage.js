import React from 'react'
import Banner from "../components/banner"
import About from "../components/about"
import Work from "../components/work"
import Footer from "../components/footer"


const MainPage = () => {

    return (
    <>
    
    <section className="header-point" id="banner"> <Banner/> </section>
    
    <section id="about"> <About/>  </section>  
    <section id="work"> <Work />   </section> 
        
    {/* <section id="work"> <Work /> <Footer />   </section> */}
    </>
    )
}

export default MainPage;