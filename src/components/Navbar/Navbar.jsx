

import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Toggle } from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { themeContext } from "../../contex";
import cv from "../../img/cv.pdf"
import { AiOutlineMenu } from "react-icons/ai";

import { AiOutlineClose } from "react-icons/ai";


export const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Replace with the actual path to your resume file

  const handleDownload = (e) => {
    console.log("cv",cv)
    const link = document.createElement('a');
    console.log("link",link)
    link.href = cv;
    console.log("link,",link)
    link.download = "sharad-resume"; //cv Set the desired download filename
    link.click();
  };

  console.log("isOpen",isOpen)

  let stylObj={
    backgroundColor:darkMode?" #000":"" 
  }

  let humStyle={
    backgroundColor:darkMode?"":"white"
  }

  const colorObj={padding:"2px 2px", color: 'white', textDecoration: 'none',backgroundColor:"orange",borderRadius:"3px" }
  
  return (
    <div className={`n-wrapper ${isOpen ? "open" : "close"}`} id="nav-menu" style={{}}>
      <div className="n-left">
        <div className="n-name">Sharad</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className={`n-list ${isOpen ? "open" : "close"}`} style={stylObj}>
          <ul style={{ listStyleType: "none",}}>
            <Link spy={true} to="home" smooth={true} className="nav-link home">
              <li>Home</li>
            </Link>
            <Link spy={true} to="about" smooth={true} className="nav-link about">
              <li>About</li>
            </Link>
            <Link spy={true} to="skills" smooth={true} className="nav-link skills">
              <li>Skills</li>
            </Link>
            <Link spy={true} to="projects" smooth={true} className="nav-link projects">
              <li>Projects</li>
            </Link>
            <Link spy={true} to="githubs" smooth={true} className="nav-link contact">
              <li>Github</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true} download='pdf'
              
              onClick={handleDownload}
               className="nav-link resume"
                style={{ hover: {color:"orange"}}}
              ><a id="resume-link-1" style={colorObj}  href={cv}  download="sharad-resume.pdf"> Resume</a>
             
             
            </Link>
            <Link spy={true} to="contact" smooth={true} 
             >

              Contact

            </Link>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen?<AiOutlineClose style={humStyle}/>:<AiOutlineMenu style={humStyle}/>}
        </div>
      </div>
    </div>
  );
};





