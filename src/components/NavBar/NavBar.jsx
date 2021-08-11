import React from "react";
import { useHistory } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Logo from "../../assets/svg/logoMenu.svg";
import {
  Instagram,
  Facebook,
  YouTube,
  LocalMallOutlined,
} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Grid, MenuItem, Menu } from "@material-ui/core";
import { orderRoute, URL_SOCIAL } from "../../utils/constants";
import labelsNavBar from "./constants";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const History = useHistory();

  const redirect = () => {
    History.push(orderRoute);
  };

  const { instagram, facebook, youtube } = URL_SOCIAL;

  const [menuOpen, setMenuOpen] = React.useState(null);

  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item xs={1}>
        <div>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={menuOpen}
            keepMounted
            open={Boolean(menuOpen)}
            onClose={handleClose}
          >
            {labelsNavBar.map((label, index) => {
              return (
                <MenuItem onClick={handleClose} className={classes.labelLi} key={`nav-bar-label-${index}`}>
                   <NavLink
                      to={label.url}
                      activeClassName="selected"
                      activeStyle={{ color: "#d91c84" }}
                    >
                      {label.name}
                    </NavLink>
                </MenuItem>
              )
            })}
          </Menu>
        </div>
      </Grid>
      <Grid item xs={1} className={classes.logoContainer}>
        <img src={Logo} alt="logo linea ancestral" width="80px" height="80px" />
      </Grid>
      <Grid item xs={8}>
        <ul className={classes.labelUl}>
          {labelsNavBar.map((label, index) => {
            return (
              <li className={classes.labelLi} key={`nav-bar-label-${index}`}>
                <NavLink
                  to={label.url}
                  activeClassName="selected"
                  activeStyle={{ color: "#d91c84" }}
                >
                  {label.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          aria-label="icono de instagram"
          onClick={() =>
            window.open(instagram, "_blank")
          }
        >
          <Instagram fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="icono de facebook"
          onClick={() =>
            window.open(facebook, "_blank")
          }
        >
          <Facebook fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="icono de youtube"
          onClick={() =>
            window.open( youtube, "_blank" )
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
