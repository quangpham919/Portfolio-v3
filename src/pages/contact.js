import React  from 'react'
import "../styles/styles.scss"
import Header from "../components/header"


const Contact = () => {

    return (
        <> 
        <section className="header-section"> <Header /> </section>
        <section className="contact-section"> 
        <div className="contact"> 
            
            <div className="content-wrapper"> 
            
            <h2> 
                Get In Touch With Me
            </h2>

            <p>
                Currently I'm looking for a opportunity to further my career in Web Development. 
                If you find me a good fit, you can contact me via form below or email: <a href="mailto:quangpham@gmail.com">quangpham@gmail.com</a>
            </p>

            </div>
          
            <form className="form-container" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            
            <label>
                Name:
                <input type="text" name="name" id="name" />
            </label>
            <label>
                Email:
                <input type="email" name="email" id="email" />
            </label>
            <label>
                Subject:
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
                Message:
                <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            
            </form>

            
        </div> 
        </section>
        </>
    )
}

export default Contact;