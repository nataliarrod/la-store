import React from "react";
import Logo from "../../assets/img/logo.png";
import { Instagram, Facebook, YouTube, LocalMallOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import { labelsNavBar } from "../../utils/constants";

import useStyles from './styles';
const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="Logo" width="80px" height="80px"/>
      </div>
      <ul className={classes.labelUl}>
        {labelsNavBar.map((label, index) => {
          return (
            <li className={classes.labelLi} key={`nav-bar-label-${index}`}>
              <a href={label.url}>
                {label.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={classes.iconsContainer}>
        <IconButton aria-label="instagram-icon" onClick={() => window.open('https://www.instagram.com/lineaancestral/', '_blank')}>
          <Instagram fontSize="small"/>
        </IconButton>
        <IconButton aria-label="facebook-icon" onClick={() => window.open('https://www.facebook.com/LineaAncestral/', '_blank')}>
          <Facebook fontSize="small"/>
        </IconButton>
        <IconButton aria-label="youtube-icon" onClick={() => window.open('https://www.youtube.com/channel/UCQsznHLGlY-Omrwz7kGwAhQ/about', '_blank')}>
          <YouTube fontSize="small"/>
        </IconButton>
        <IconButton aria-label="cart-icon" >
          <LocalMallOutlined fontSize="small"/>
        </IconButton>
      </div>
    </div>
  );
}

export default NavBar;