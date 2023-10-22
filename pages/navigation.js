import React, { useState } from "react";
import burger from "../img/mediaImg/NAV.svg";
import { NavLink, Outlet } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const openModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.addEventListener("keydown", handleKeyDown);
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    window.removeEventListener("keydown", handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  const closeOnNavLinkClick = () => {
    closeModal();
  };

  return (
    <div className="route">
      <div className="container">
        <div className="logoAndNav">
          <p className="logo">Kelvin</p>
          <nav className="navigation">
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/works">
              Works
            </NavLink>
            <NavLink className="link" to="/services">
              Services
            </NavLink>
            <NavLink className="link" to="/about">
              About
            </NavLink>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </nav>
          <img
            id="openModalBtn"
            className="burger"
            src={burger}
            onClick={openModal}
          ></img>

{/* Модальное окно */}

          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <nav className="modalNav">
                <NavLink
                  className="modalNavLink"
                  to="/"
                  onClick={closeOnNavLinkClick}
                >
                  Home
                </NavLink>
                <NavLink
                  className="modalNavLink"
                  to="/works"
                  onClick={closeOnNavLinkClick}
                >
                  Works
                </NavLink>
                <NavLink
                  className="modalNavLink"
                  to="/services"
                  onClick={closeOnNavLinkClick}
                >
                  Services
                </NavLink>
                <NavLink
                  className="modalNavLink"
                  to="/about"
                  onClick={closeOnNavLinkClick}
                >
                  About
                </NavLink>
                <NavLink
                  className="modalNavLink"
                  to="/contact"
                  onClick={closeOnNavLinkClick}
                >
                  Contact
                </NavLink>
              </nav>
            </div>
          </div>

          {/* Модальное окно */}
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Navigation;
