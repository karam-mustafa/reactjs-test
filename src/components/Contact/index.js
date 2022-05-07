import React from "react";
import './style.css';
import {ContactSection} from "./style";
const Contact = () => {
    return (
        <ContactSection>
            <div className="container">
                <h2 className="drop-title"><span>Drop </span>Me A line</h2>
                <form action="">
                    <div className="form-input">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <input type="text" className="sub" placeholder="Your Subject"/>
                    <textarea cols="30" rows="10" placeholder="Your Message"/>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </ContactSection>
    )
};

export default Contact;
