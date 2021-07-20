import React from "react";
import Logo from "../../assets/img/logo.png";
import { labelsNavBar } from "../../utils/constants";

import useStyles from './styles';
const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="Logo" width="80px" height="80px"/>
      </div>
      <div className={classes.labelContainer}>
        <ul className={classes.labelUl}>
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