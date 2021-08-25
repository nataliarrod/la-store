import { makeStyles } from "@material-ui/core";
import { BACKGROUND_URL } from "./constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "200px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.main.purple,
    backgroundImage: `url(${BACKGROUND_URL})`,
    backgroundSize: "cover",
    color: theme.palette.main.white,
    [theme.breakpoints.down("sm")]: {
      height: "100px",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    borderRight: "1px solid",
    [theme.breakpoints.down("md")]: {
      padding: "0px 20px",
    },
    "& > img": {
      [theme.breakpoints.down("sm")]: {
        width: "80px",
        height: "80px",
      },
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
    width: "200px",
    borderRight: "1px solid",
    fontFamily: theme.typography.fontFamily,
    "& > h5": {
      margin: "0px",
      textTransform: "capitalize",
      fontFamily: theme.typography.fontFamilySecondary,
      fontSize: theme.typography.h4.fontSize,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.body1.fontSize,
        textAlign: "center",
      },
    },
    "& > p": {
      margin: "0px",
      textTransform: "capitalize",
      fontSize: theme.typography.body1.fontSize,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.body2.fontSize,
        textAlign: "center",
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: "80px",
    },
  },
  iconsContainer: {
    "& .MuiIconButton-root": {
      color: "white",
    },
    "& .MuiGrid-item": {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "8px",
      "& .MuiSvgIcon-root": {
        width: 18,
        height: 18,
      },
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  textIconsContainer: {
    alignItems: "center",
    fontSize: theme.typography.h3.fontSize,
    fontFamily: theme.typography.fontFamilySecondary,
    textTransform: "capitalize",
    color: theme.palette.main.white,
    margin: "0",
    height: "60px",
    "& > h5": {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));

export default useStyles;
