import React, { useState,useEffect } from "react"
import "./Card.css"
import { Link } from "react-router-dom"
import { AiOutlineGithub } from "react-icons/ai"
import { GrDeploy } from "react-icons/gr"

export const Card = ({ emoji, description, detail, title, gitLink, dipLink }) => {
    console.log("diployed", dipLink, "gitlink", gitLink)

    const [isHoverd, setIshoverd] = useState(false)


    

     // State to store the window size
  
    return (
        <div className="project-card"
            onMouseEnter={() => setIshoverd(true)}
            onMouseLeave={() => setIshoverd(false)}>
            <img src={emoji} alt="" />
            <h3 className="project-title">Title - {title}</h3>
            <p className="project-description"> Description - {description}</p>
            <p className="project-tech-stack">Tech Stack - {detail}</p>
            {
                <div className="links">
                    <a href={gitLink} className="project-github-link"
                    ><AiOutlineGithub style={
                        {
                            width: "50px",
                            height: "max-content",
                            color:"black"
                        }
                    } /><br/><span>to Github</span></a>
                    <a href={dipLink} className="project-deployed-link"><GrDeploy style={
                        {
                            width: "50px",
                            height: "max-content",
                         
                        }
                    } /><br/><span>to Deployed</span></a>
                </div>
            }
        </div>
    )
}