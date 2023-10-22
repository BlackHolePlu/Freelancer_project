import React from "react";
import { Link } from "react-router-dom";
import brainImg from "../img/braun.jpg";
import reebokImg from "../img/Reebok.jpg";
import fashionImg from "../img/Fashion.jpg";
import mobiBrainImg from "../img/mediaImg/braun.jpg";
import mobiReebokImg from "../img/mediaImg/reebok.jpg";
import mobiFashionImg from "../img/mediaImg/fashion.jpg";
import "./portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolioHead">Portfolio</h2>
        <div className="portCont">
          <img className="portfolioImg" src={brainImg}></img>
          <img className="mobiImg" src={mobiBrainImg}></img>
          <Link className="portlink" to="https://gzmland.ru/">
            Online fashion store - Homepage
          </Link>
        </div>
        <div className="portCont">
          <img className="portfolioImg" src={reebokImg}></img>
          <img className="mobiImg" src={mobiReebokImg}></img>
          <Link className="portlink" to="https://gzmland.ru/">
            Reebok Store - Concept
          </Link>
        </div>
        <div className="portCont">
          <img className="portfolioImg" src={fashionImg}></img>
          <img className="mobiImg" src={mobiFashionImg}></img>
          <Link className="portlink last" to="https://gzmland.ru/">
            Braun Landing Page - Concept
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
