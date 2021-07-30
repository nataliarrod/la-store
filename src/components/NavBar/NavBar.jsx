import React from "react";
import  { useHistory } from "react-router-dom";
import Logo from "../../assets/svg/logoMenu.svg";
import {
  Instagram,
  Facebook,
  YouTube,
  LocalMallOutlined,
} from "@material-ui/icons";
import { IconButton, Grid } from "@material-ui/core";
import { labelsNavBar, orderRoute } from "../../utils/constants";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const History = useHistory();

  const redirect = () => {
    History.push(orderRoute);
  };

  return (
    <Grid container xs={12} className={classes.root} alignItems="center">
      <Grid item xs={1} className={classes.logoContainer}>
        <img src={Logo} alt="logo linea ancestral" width="80px" height="80px" />
      </Grid>
      <Grid item xs={9}>
        <ul className={classes.labelUl}>
          {labelsNavBar.map((label, index) => {
            return (
              <li
                className={classes.labelLi}
                key={`nav-bar-label-${index}`}
              >
                <a href={label.url}>{label.name}</a>
              </li>
            );
          })}
        </ul>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          aria-label="icono de instagram "
          onClick={() =>
            window.open("https://www.instagram.com/lineaancestral/", "_blank")
          }
        >
          <Instagram fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="icono de facebook "
          onClick={() =>
            window.open("https://www.facebook.com/LineaAncestral/", "_blank")
          }
        >
          <Facebook fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="icono de youtube "
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCQsznHLGlY-Omrwz7kGwAhQ/about",
              "_blank"
            )
          }
        >
          <YouTube fontSize="small" />
        </IconButton>
        <IconButton onClick={redirect} aria-label="icono de carrito de compras">
          <LocalMallOutlined fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NavBar;
