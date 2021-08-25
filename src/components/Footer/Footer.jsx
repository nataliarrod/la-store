import React from "react";
import Logo from "../../assets/img/logoFooter.png";
import { Instagram, Facebook, YouTube, WhatsApp } from "@material-ui/icons";
import { IconButton, Grid } from "@material-ui/core";
import { FOOTER_SECTION, URL_SOCIAL } from "./constants";
import useStyles from "./styles";

const { instagram, facebook, youtube, whatsapp } = URL_SOCIAL;

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} className={classes.logoContainer}>
        <img
          src={Logo}
          alt="logo linea ancestral"
          width="150px"
          height="150px"
        />
      </Grid>
      <Grid item xs={4} className={classes.textContainer}>
        {FOOTER_SECTION.map((section) => (
          <>
            <h5>{section.title}</h5>
            <p>{section.content}</p>
          </>
        ))}
      </Grid>
      <Grid container item xs={4} className={classes.iconsContainer}>
        <Grid item md={12} className={classes.textIconsContainer}>
          <h5>redes sociales:</h5>
        </Grid>
        <Grid item xs={5} md={3}>
          <IconButton
            aria-label="boton instagram"
            onClick={() => window.open(instagram, "_blank")}
          >
            <Instagram fontSize="medium" />
          </IconButton>
        </Grid>
        <Grid item xs={5} md={3}>
          <IconButton
            aria-label="boton facebook"
            onClick={() => window.open(facebook, "_blank")}
          >
            <Facebook fontSize="medium" />
          </IconButton>
        </Grid>
        <Grid item xs={5} md={3}>
          <IconButton
            aria-label="boton youtube"
            onClick={() => window.open(youtube, "_blank")}
          >
            <YouTube fontSize="medium" />
          </IconButton>
        </Grid>
        <Grid item xs={5} md={3}>
          <IconButton
            aria-label="boton whatsapp"
            onClick={() => window.open(whatsapp, "_blank")}
          >
            <WhatsApp fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
