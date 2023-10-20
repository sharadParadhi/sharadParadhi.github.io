import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css"

const Github = () => {


  return (
    <div id="githubs" className="github">
      <div className="main-text">
        <h2>
          <span className="git-white">GitHub </span><span className="git-static">Statistics</span>
        </h2>
      </div>
      <div id="stat">
        <div>
          <img
            className="ht1"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=sharadParadhi"
            alt='github-img'
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sharadParadhi&theme=outrun"
            alt='github-img'
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=sharadParadhi&theme=radical&hide_border=true&border_radius=6.5&date_format=m%20j%5b%2c%20y%5d"
            alt='github-img'
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <img
          src="https://visitcount.itsvg.in/api?id=sharad&label=Profile%20Views&color=0&pretty=false"
          alt="count"
        />
      </div>
      <div
        className="react-activity-calendar"
        style={{ width:"100%", }}
      >
        <GitHubCalendar className="cal" username="sharadParadhi" style={{width:"80%",margin:"auto"}}/>
      </div>
    </div>
  );
};



export default Github


