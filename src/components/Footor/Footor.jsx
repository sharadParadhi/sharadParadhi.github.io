import React from "react";
 import "./Footor.css"
import wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"
//import React, { useRef, useState } from "react";
//import "./Contact.css"
import emailjs from "emailjs-com";

import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";




export const Footor=()=>{

    return (
       <div className="footer">
        <img src={wave} alt=""/>
        <div className="f-content">
        <section className="nav-link contact" id="contact">
        <div className="nav-link-contact">
          <h2>
            Contact <span>Me!</span>
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
                href="https://wa.me/8902491343"
                target="_blank"
                rel="noreferrer"
              >
                +91 8902491343
              </a>
            </li>
            <li>
              <a
                href="mailto:shaharyaaransari786@gmail.com"
                id="contact-email"
                target="_blank"
                rel="noreferrer"
              >
                shaharyaaransari786@gmail.com{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shaharyaar-ansari-053991229/"
                id="contact-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Linkedin : Shaharyaar Ansari
              </a>
            </li>
          </div>
          <div className="contact-icons">
            <a
              id="contact-github"
              href="https://github.com/shaharyaaransari"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://wa.me/8902491343"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <AiOutlineWhatsApp />
              </i>
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/shaharyaar-ansari-053991229/"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <BsLinkedin />
              </i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="name" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="" placeholder="Your Mobile Number" required />
            <textarea
              name=""
              id=""
              cols="35"
              rows="10"
              placeholder="How Can I Help You"
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="submit"
              required
            />
          </form>
        </div>
      </section>
            <span>sharadparadhi2124@gmail.com</span>
            <div className="f-content">
                <Insta color="white" size="3rem"/>
                <Facebook color="white" size="3rem"/>
                <Github color="white" size="3rem"/> 
            </div>
        </div>
       </div>
    )
}





