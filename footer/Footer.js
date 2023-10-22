import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import linkedinIcon from "../img/LinkedIn.svg";
import instagramIcon from "../img/Instargam.svg";
import behanceIcon from "../img/Behance.svg";
import dribbleIcon from "../img/Dribble.svg";

function Footer() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleHideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerConten">
          <h3 className="contact">Contacts</h3>
          <p className="wish">
            Want to know more or just chat? You are welcome!
          </p>
          <button className="footerBut" onClick={handleButtonClick}>
            Send message
          </button>

          {isFormVisible && (
            <form
              className="footerForm"
              action="/process-message"
              method="post"
            >
              <h3 className="message">Message:</h3>
              <label className="name" htmlFor="name">
                Name:
              </label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                required
              />
              <br />

              <label htmlFor="email">Email:</label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              />
              <br />

              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                required
              ></textarea>
              <br />

              <div className="formButton">
                <input className="button" type="submit" value="Send message" />
                <button className="button" onClick={handleHideForm}>
                  Close form
                </button>
              </div>
            </form>
          )}

          <div className="footerIcon">
            <Link to="https://ru.linkedin.com/">
              <img src={linkedinIcon}></img>
            </Link>
            <Link to="https://www.instagram.com/">
              <img src={instagramIcon}></img>
            </Link>
            <Link to="https://www.behance.net/">
              <img src={behanceIcon}></img>
            </Link>
            <Link to="https://dribbble.com/">
              <img src={dribbleIcon}></img>
            </Link>
          </div>
          <p className="like">
            Like me on LinkedIn, Instagram, Behance, Dribble
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
