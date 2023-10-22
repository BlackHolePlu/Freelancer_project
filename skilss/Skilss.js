import React from "react";
import "./Skilss.css";
import browserIcon from "../img/browser.svg";
import grepficIcon from "../img/graphic.svg";
import startupIcon from "../img/startup.svg";

function Skilss() {
  return (
    <section className="skilss">
      <div className="container skilssCard">
        <div className="cardSkillsOne">
          <img src={grepficIcon}></img>
          <h2>UI/UX Design</h2>
          <p>
            Our design is translated into comprehensive digital environments
            built on latest development standards.
          </p>
        </div>
        <div className="cardSkillsOne">
          <img src={startupIcon}></img>
          <h2>Development</h2>
          <p>
            Our design is translated into comprehensive digital environments
            built on latest development standards.
          </p>
        </div>
        <div className="cardSkillsOne">
          <img src={browserIcon}></img>
          <h2>software testing</h2>
          <p>
            Our design is translated into comprehensive digital environments
            built on latest development standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skilss;
