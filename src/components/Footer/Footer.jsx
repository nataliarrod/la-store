import React from "react";
import Logo from "../../assets/img/logo.png";
import { Instagram, Facebook, YouTube } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import useStyles from './styles';
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="Logo" width="150px" height="150px"/>
      </div>
      <div className={classes.textContainer}>
        <h2>tienda</h2>
        <p>girardot cundinamarca</p>
        <h2>horarios</h2>
        <p>l-v:8-5</p>
      </div>
      <div className={classes.iconsContainer}>
        <IconButton aria-label="instagram-icon" onClick={() => window.open('https://www.instagram.com/lineaancestral/', '_blank')}>
          <Instagram fontSize="big"/>
        </IconButton>
        <IconButton aria-label="facebook-icon" onClick={() => window.open('https://www.facebook.com/LineaAncestral/', '_blank')}>
          <Facebook fontSize="big"/>
        </IconButton>
        <IconButton aria-label="youtube-icon" onClick={() => window.open('https://www.youtube.com/channel/UCQsznHLGlY-Omrwz7kGwAhQ/about', '_blank')}>
          <YouTube fontSize="big"/>
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;