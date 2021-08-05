import React from "react";
import Logo from "../../assets/img/logoFooter.png";
import { Instagram, Facebook, YouTube } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import useStyles from './styles';
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="logo linea ancestral" width="150px" height="150px"/>
      </div>
      <div className={classes.textContainer}>
        <h3>tienda</h3>
        <p>girardot cundinamarca</p>
        <h3>horarios</h3>
        <p>l-v:8-5</p>
      </div>
      <div className={classes.iconsContainer}>
        <IconButton aria-label="boton instagram" onClick={() => window.open('https://www.instagram.com/lineaancestral/', '_blank')}>
          <Instagram fontSize="large"/>
        </IconButton>
        <IconButton aria-label="boton facebook" onClick={() => window.open('https://www.facebook.com/LineaAncestral/', '_blank')}>
          <Facebook fontSize="large"/>
        </IconButton>
        <IconButton aria-label="boton youtube" onClick={() => window.open('https://www.youtube.com/channel/UCQsznHLGlY-Omrwz7kGwAhQ/about', '_blank')}>
          <YouTube fontSize="large"/>
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;