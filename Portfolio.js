import React from "react";
import { Link } from "react-router-dom";
import brainImg from "../components/img/braun.jpg";
import reebokImg from "../components/img/Reebok.jpg";
import fashionImg from "../components/img/Fashion.jpg";
import "./portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
        <div className="container">
 <h2>Portfolio</h2>
      <div className="portCont">
        <img src={brainImg}></img>
        <Link className="link" to="https://gzmland.ru/">
          Online fashion store - Homepage
        </Link>
      </div>
      <div className="portCont">
        <img src={reebokImg}></img>
        <Link className="link" to="https://gzmland.ru/">
          Reebok Store - Concept
        </Link>
      </div>
      <div className="portCont">
        <img src={fashionImg}></img>
        <Link className="link" to="https://gzmland.ru/">
          Braun Landing Page - Concept
        </Link>
      </div>
        </div>
     
    </section>
  );
}

export default Portfolio;
