import React from "react";
import { useHistory } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import {
  Instagram,
  Facebook,
  YouTube,
  LocalMallOutlined,
} from "@material-ui/icons";
import { 
  IconButton,
  Grid,
  MenuItem,
  Menu,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { orderRoute, URL_SOCIAL } from "../../utils/constants";
import Logo from "../../assets/svg/logoMenu.svg";
import labelsNavBar from "./constants";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const History = useHistory();
  const [menuOpen, setMenuOpen] = React.useState(null);
  
  const { instagram, facebook, youtube } = URL_SOCIAL;

  const redirect = () => {
    History.push(orderRoute);
  };

  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid className={classes.burgerMenu} item xs={1}>
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
                <MenuItem className={classes.labelLi} key={`nav-bar-label-${index}`}>
                   <NavLink
                      to={label.url}
                      activeClassName="selected"
                      activeStyle={{ color: "#d91c84" }}
                      onClick={handleClose}
                    >
                      {label.name}
                    </NavLink>
                </MenuItem>
              )
            })}
          </Menu>
        </div>
      </Grid>
      <Grid className={classes.logo} item xs={3} md={1}>
        <img src={Logo} alt="logo linea ancestral" width="60px" height="60px" />
      </Grid>
      <Grid className={classes.navItems} item xs={7}>
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
      <Grid className={classes.social} item xs={8} md={4}>
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
