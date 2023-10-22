import React from "react";
import heroImg from "../img/hero.png";
import mobiHeroImg from "../img/mediaImg/mobiHero.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="content">
          <div className="contentText">
            <h1>Kelvin Kramer Designer & Developer</h1>
            <p>
              I’m a portrait, fashion and lifestyle photographer living In New
              York City. During my thirteen year tenure here.
            </p>
          </div>

          <img className="hero" src={heroImg}></img>
          <img className="mobiHeroImg" src={mobiHeroImg}></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
