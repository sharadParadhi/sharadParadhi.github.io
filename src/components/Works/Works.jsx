import React from "react";
import "./Work.css"

import mongo from "../../img/mongodb.png"
import react from "../../img/react.png"
import express from "../../img/express.png"
import nodejs from "../../img/nodejs.png"
import typescript from "../../img/typescript.png"
import html from "../../img/html.png"
import css from "../../img/css.png"
import js from "../../img/js.png"
import tailwindCss from  "../../img/tailwindCss.jpg"
import github from "../../img/gitpng.png"
import postman from "../../img/postman.png"
import { Link } from "react-scroll";


import { motion } from "framer-motion"

export const Works = () => {

    return (
        <div className="works" id="skills">
            <div className="awesome">
                <span>work For All these</span>
                <span>Tools & Skills</span>
                <span className="des">
                As a web developer, I thrive on the dynamic nature of the field, always eager to embrace new libraries and tools.  My portfolio is a testament to my enthusiasm for learning, where you'll find projects reflecting my quick adoption of cutting-edge technologies. I believe staying current is not just a choice; it's a commitment to delivering innovative and efficient solutions..
                    <br></br>  
                </span>
               
                <Link spy={true} to="ContactUs" smooth={true}> <button className="button s-button"> Hire me </button></Link>
                  

                <div className="parent-basic-skill">
                    <div className="basic-skills">
                        {/* <div id="skill1" className="w-secCircle">
                            <img src={js} alt="" /><br/>
                        </div> */}
                        <span className="skills-card">
                            <div id="skill1" className="w-secCircle">
                            <img className="skills-card-img" src={js} alt="" />
                            </div>   
                        </span>

                        <span className="skills-card">
                            <div className="w-secCircle">
                                <img className="skills-card-img" src={html} alt="" />
                            </div>
                        </span>
                        <span className="skills-card">
                            <div className="w-secCircle">
                                <img className="skills-card-img" src={css} alt="" />
                            </div>
                        </span>
                        <span className="skills-card">
                            <div className="w-secCircle">
                                <img className="skills-card-img" src={tailwindCss} alt="" />
                            </div>
                        </span>
                        <span  className="skills-card">
                            <div className="w-secCircle">
                                <img className="skills-card-img" src={github} alt="" />
                            </div>
                        </span>
                        <span  className="skills-card">
                            <div className="w-secCircle">
                                <img className="skills-card-img"  src={postman} alt="" />
                            </div>
                        </span>
                        
                    </div>

                </div>

                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* rigth side */}


            <div className="w-right">
                <motion.div
                    initial={{ rotate: 180 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={express} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={mongo} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={nodejs} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={react} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={typescript} alt="" />
                    </div>

                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>


        </div>
    )

}

