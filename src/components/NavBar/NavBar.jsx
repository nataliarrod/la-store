import React from "react";
import Logo from "../../assets/img/logo.png";
import { labelsNavBar } from "../../utils/constants";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-logo">
        <img src={Logo} alt="Logo" width="80px" height="80px"/>
      </div>
      <div className="nav-bar-label">
        <ul className="nav-bar-label-ul">
          {labelsNavBar.map((label, index) => {
            return (
              <li key={`nav-bar-label-${index}`}>
                <a href={label.url}>
                  {label.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;