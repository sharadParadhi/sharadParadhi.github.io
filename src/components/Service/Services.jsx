import React ,{} from "react";
import "./Services.css"
import snapdeal from "../../img/snapdeal.png"
import anthropology from "../../img/anthroplory1.png"
import woodencraft from "../../img/woodencrafts.png"
import immortal from "../../img/immortal.png"
import cv from "../../img/cv.pdf"
//import resume from "./sharad_paradhi_resume.pdf"


import { Card } from "../Card/Card";
import { themeContext } from "../../contex";
import { useContext } from "react";



export const Services = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (
        <div className="services" id="projects">
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Projects</span>
                <span>
                    Successfully developed some group project and individual Projects.
                    <br></br>
                    Such as snapdeal, flipkart, anthroplogie etc.
                </span>
                <a  id="resume-link-2" href={cv} download="sharad-paradhi">
                    <button className="button s-button" >Download cv</button>
                </a>

                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <div className="project1 project-style">
                    <Card
                        emoji={anthropology}
                        description={"Explore Anthropologie's unique collection of women's clothing, accessories, home décor, furniture, gifts and more."}
                        detail={"HTML, CSS, JavaScript, React, Redux, ChakraUi"}
                        title={"Anthropologie"}
                        gitLink={"https://github.com/sharadParadhi/overjoyed-field-1627"}
                        dipLink={"https://overjoyed-field-1627-pq05j7q8x-sharadparadhi.vercel.app/"}
                    />
                </div>

                <div  className="project2 project-style" >
                    <Card
                        emoji={snapdeal}
                        description={"Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform."}
                        detail={"HTML, CSS, JavaScript"}
                        title={"Snapdeal Ecommerce Website"}
                        gitLink={"https://github.com/ShaikIsmail0567/Snapdeal-Clone"}
                        dipLink={"https://zingy-semifreddo-9508cd.netlify.app/"}
                    />
                </div>

                <div className="project3 project-style" >
                    <Card
                        emoji={woodencraft}
                        description={"Buy Wooden Furniture Online For Home & Office. Affordable Range of Funitures Online for Living, Bedroom & Etc"}
                        detail={"HTML, CSS,JavaScript,TypeScript, React,Redux, styed-components"}
                        title={"Woodencraft (woodenstreet clone)"}
                        gitLink={"https://github.com/Pranavi-Kayapati/resilient-partner-542/tree/main/wooden-crafts"}
                        dipLink={"https://wooden-crafts.vercel.app/"}
                    />
                </div>
                <div className="project4 project-style" >
                    <Card
                        emoji={immortal}
                        description={"Welcome to our IMMORTAL YOGA, where you can embark on a transformative journey towards holistic well-being and inner harmony. Our platform is dedicated to promoting physical fitness, mental clarity, and spiritual growth through the practice of yoga."}
                        detail={"HTML, CSS, JavaScript, React, Redux, ChakraUi, Style-Components"}
                        title={"Immortal Yoga"}
                        gitLink={"https://github.com/aslammmahetar/nosy-silk-95/tree/main/millie"}
                        dipLink={"https://gleaming-cobbler-bec2a7.netlify.app/"}
                    />
                </div>
            </div>
        </div>
    )
}