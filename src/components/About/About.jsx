
import React, { useContext } from "react"
import "./About.css"
import Typewriter from "typewriter-effect"
import { themeContext } from "../../contex";



export const About = () => {

    // const transition={duration:2,type:"spring"}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    let styleObj={
        color:darkMode?"":"black"
    }
    return (
        <div className="about section" id="about">
            <span className="aboutme" style={styleObj}>About me</span>
            <span className="user-detail-name">Sharad Paradhi </span>
            <span className="aboutme"  style={styleObj}>from Mumbai, Maharashtra</span>
            <span id="user-detail-intro">
            Greetings! I'm sharad paradhi, a dedicated full-stack web developer with a degree in Electrical Engineering from Mumbai University (2022). Despite my academic roots in electrical engineering, my true passion lies in crafting captivating web experiences.<br/>

As a versatile developer, I navigate seamlessly between front-end and back-end technologies. Proficient in JavaScript, Node,Express js, Typescript, React, I bring ideas to life from concept to deployment. My skills extend to working with databases (MongoDB).<br/>

Beyond coding, I'm an enthusiastic traveler, exploring diverse landscapes to fuel my creativity. I also have a penchant for staying informed through podcasts, fostering a continuous learning mindset.<br/>

Let's connect and create something exceptional together! 👩‍💻✈️🎧
            </span>
        
        </div>
    )
}