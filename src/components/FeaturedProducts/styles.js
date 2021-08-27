import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.blue,
    height: "450px",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      display: "100%",
    },
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    "& > h3": {
      margin: "20px 0px 40px 20px",
      fontFamily: theme.typography.fontFamilySecondary,
      color: theme.palette.pink,
      fontSize: theme.typography.h1.fontSize,
      textTransform: "capitalize",
    },
    "& > a": {
      margin: "20px 20px 0px 0px",
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.gray,
      textTransform: "capitalize",
    },
  },
  productsContainer: {
    display: "flex",
    width: "100%",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.gray,
    justifyContent: "center",
  },
}));

export default useStyles;
