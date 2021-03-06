import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";


const contactForm = () => {
    return (
         <form className="contact-form" method="POST" 
         netlify-honeypot="bot-field" 
         data-netlify="true" 
         name="contact"
         data-netlify-recaptcha='true'>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="input-field"/>
            
            <label htmlFor="subject">Subject:</label>
            <input type="text"   name="subject" className="input-field"/>
            
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="input-field"/>
           
            <label htmlFor="message">Message:</label>
            <textarea name="message" className="input-field"></textarea>
            
            <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY}/>
            <button className="submit-btn" type="submit">Send</button>

         </form> 
    )
}

export default contactForm;