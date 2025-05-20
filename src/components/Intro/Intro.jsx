import React, { useContext } from "react"
import "./Intor.css"
import Typewriter from "typewriter-effect"

import linkeden from '../../img/linkedin (1).png'
import instaram from "../../img/instagram.png"
import vector1 from "../../img/Vector1.png"
import github from "../../img/github.png"
import glassimogi from "../../img/glassesimoji (1).png"
import crown from "../../img/crown.png"
import sharad from "../../img/sharadImage.jpg"
import { Floating } from "../FloatingDiv/FloatingDiv"
import { Link } from "react-scroll";
import cv from "../../img/cv.pdf"


import { motion } from "framer-motion"
import { themeContext } from "../../contex"



export const Intro = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const transition = { duration: 2, type: "spring" }

    let stylObj={
        color:"black",
        font:"caption",
      
    }
    let styl={
        color:"white",
        backgroundColor:"orange",
        font:"caption"
    }
    

    return (
        <div className="intro" id="home">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I Am </span><span>Sharad Paradhi</span>
                    <span className="text">
                        <Typewriter
                            options={{
                                strings: [
                                    "A Full Stack Web Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 10,
                            }}
                        />
                    </span>

                    <span>Analytical and detail-oriented aspiring Full Stack Developer. Capable of writing production-ready code using React JS, Redux,and CSS on the fronted ,Node JS and Express on the backend to build single page applications. Passionate about coding and strongly interested in working in a product based company.</span>
                </div>
                <button id="resume-button-2"  className="button i-button" style={darkMode?stylObj:styl}>
              
                <a style={{textDecoration:"none",font:"caption",color:darkMode?"black":"white"}}  id="resume-link-2" href={cv} download="sharad-paradhi">
                    Download cv
                </a>
               
               
              
                </button>
                <div className="i-icons">
                    <a href="https://github.com/sharadParadhi"><img src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/sharad-paradhi-777a33241/"><img src={linkeden} alt="" /></a>
                    <a href="">  <img src={instaram} alt="" /></a>
                   
                </div>
                <div className="left-blur" style={{ background: "" }}></div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="" />
                {/* <img src={vector2} alt="" /> */}
                <img className="home-img"  src={sharad} alt="" />

                {/* <motion.div
                    initial={{ top: "-24%", left: "90%" }}
                    whileInView={{ left: "80%" }}
                    transition={transition}
                    style={{ top: "-80%", left: "100%" }}
                    className="floating-div"
                >
                    <Floating image={crown} text1="" text2={""}/><span className="webDeveloper" style={{color:"orange"}}>Web Developer</span>
                </motion.div> */}
                <img className="sec-img"  src={sharad} alt="" />
                <div className="blur" style={{ background: "" }}></div>
                <div className="addspace"></div>
            </div>
            
        </div>
    )
}