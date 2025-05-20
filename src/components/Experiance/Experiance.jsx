// import React,{useContext} from "react";
// import "./Experiance.css"
// import { themeContext } from "../../contex";

// export const Experiance=()=>{

//     const theme = useContext(themeContext);
//     const darkMode = theme.state.darkMode;
//     const circleClass = darkMode ? "circle dark" : "circle";
//     let styleObj={
//         color:darkMode?"":"black",
//     }

//     return (
//        <div className="experiance" id="experiance">

//         <h1 className='experiance-text' style={styleObj}>Experience</h1>

//         <div className="expriance-details">
//             <div className="expriance-details-1">
//             <span id="experiance-detail-intro">
                
//                 <span className="company">
//                 Kelsa.io
//                 </span>
//                 <p>
//                 Full Stack Web Developer
//                 </p>
//                 <p>
//                 Dec 2023 - March 2024
//                 </p>
                
//                 <br></br>
//                 Designed and implemented scalable and
// dynamic web applications using front-end and
// back-end technologies.<br></br>
// Collaborated with product managers, designers,
// and developers to translate project
// requirements into functional web applications.
//             </span>
//             </div>

//         <div className="achievement">
//             <div className={circleClass}>1+</div>
//             <span>Years</span>
//             <span>Experience</span>
//         </div>

//         </div>
  
     

//        </div>
//     )
// }





import React, { useContext } from "react";
import "./Experiance.css";
import { themeContext } from "../../contex";

export const Experiance = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const circleClass = darkMode ? "circle dark" : "circle";
  let styleObj = {
    color: darkMode ? "" : "black",
  };

  return (
    <div className="experiance" id="experiance">
      <h1 className="experiance-text" style={styleObj}>
        Experience
      </h1>

      <div className="expriance-details">
        {/* Experience 1 */}
        <div className="expriance-details-1">
          <span id="experiance-detail-intro">
            <span className="company">Kelsa.io</span>
            <p>Full Stack Web Developer</p>
            <p>Dec 2023 - March 2024</p>
            <br />
            Designed and implemented scalable and dynamic web applications using front-end and back-end technologies.
            <br />
            Collaborated with product managers, designers, and developers to translate project requirements into functional web applications.
          </span>
        </div>

        {/* Experience 2 */}
        <div className="expriance-details-1">
          <span id="experiance-detail-intro">
            <span className="company">Qicipic Innovation Pvt Ltd</span>
            <p>Full Stack Developer</p>
            <p>Nov 2024 - May 2025</p>
            <br />
            Worked on logistics and document verification workflows.
            <br />
            Built scalable web applications using React.js, Redux, and Tailwind CSS, ensuring responsive and user-friendly interfaces.
            <br />
            Designed and deployed RESTful APIs with Node.js and Express, integrating RBAC and backend validations.
            <br />
            Managed deployments using Docker on AWS EC2, ensuring high availability and performance across services.
          </span>
        </div>

        {/* Experience Summary */}
        <div className="achievement">
          <div className={circleClass}>1+</div>
          <span>Years</span>
          <span>Experience</span>
        </div>
      </div>
    </div>
  );
};
