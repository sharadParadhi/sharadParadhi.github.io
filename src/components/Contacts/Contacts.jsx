import React, { useContext, } from "react";
import "./Contact.css"
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { themeContext } from "../../contex";



const Contact = () => {

  const theme=useContext(themeContext)
  const darkmode=theme.state.darkmode

  return (
    <>
      <section className="nav-link contact" id="contact">
        
        <div className="nav-link-contact">
          <h2 style={{color:darkmode?"black":"white",fontSize:"2rem"}}>
            Contact <span style={{color:"black",fontSize:"2rem"}}>Me!</span>
          </h2>
          <h4>
            Talent wins games, but teamwork and intelligence win championships.
          </h4>
          <p>
            Fill the form to connect if any query{" "}
            <i className="fas fa-smile"></i>
          </p>
          <div className="list">
            <li id="contact-phone">
              <a
                href="https://wa.me/7276912579"
                target="_blank"
                rel="noreferrer"
              >
                +91 7276912579
              </a>
            </li>
            <li>
              <a
                href="mailto:sharadparadhi2124@gmail.com"
                id="contact-email"
                target="_blank"
                rel="noreferrer"
              >
                sharadparadhi2124@gmail.com{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sharad-paradhi-777a33241/"
                id="contact-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Linkedin : Sharad Paradhi
              </a>
            </li>
          </div>
          <div className="contact-icons">
            <a
              id="contact-github"
              href="https://github.com/sharadParadhi"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://wa.me/7276912579"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <AiOutlineWhatsApp />
              </i>
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/sharad-paradhi-777a33241/"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <BsLinkedin />
              </i>
            </a>
          </div>
        </div>

        <div className="fill-form">
          <form>
            <input type="name" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="" placeholder="Your Mobile Number" required />
            {/* <textarea
              type="text"
              id=""
              cols="35"
              rows="10" 
              placeholder="How Can I Help You"
              required
            ></textarea> */}
            {/* <textarea 
            type="text"
            id=""
            cols="35"
            rows="10" 
            placeholder="How Can I Help You"
            required
            /> */}
            <input id=""
            cols="35"
            rows="10" 
            placeholder="How Can I Help You"
            required 
            type="text" />
            <input
              type="submit"
              value="Send Message"
              className="submit"
              required
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
