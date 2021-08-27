import { makeStyles } from '@material-ui/core';

const borderColor = '#D4D2CE';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${borderColor}`,
    boxShadow: `0 0 5px 0 ${borderColor}`,
    width: "100%",
    top: "0",
    position: "fixed",
    overflow: "hidden",
    zIndex: "200",
    backgroundColor: theme.palette.main.white,
    opacity: "0.96",
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "1rem",
  },
  labelUl: {
    display: "flex",
    margin: "0px",
    padding: "0px",
  },
  labelLi: {
    display: "flex",
    listStyle: "none",
    "& > a": {
      margin: "0px 25px",
      textTransform: "uppercase",
      fontFamily: "Poppins",
      fontSize: theme.typography.link.fontSize,
      color: theme.palette.main.gray,
      textDecoration: "none",
    },
  },
  burgerMenu: {
    paddingLeft: "0.1rem",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navItems: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  social: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  badge: {
    color: theme.palette.main.white,
    backgroundColor: theme.palette.main.pink,
  },
}));

export default useStyles;
