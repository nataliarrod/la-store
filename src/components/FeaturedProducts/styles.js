import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.main.blue,
    height: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      display: "100%",
    },
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  tittle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > h3": {
      fontFamily: theme.typography.fontFamilySecondary,
      color: theme.palette.main.pink,
      fontSize: theme.typography.h3.fontSize,
      textTransform: "capitalize",
    },
  },
  goToProductCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > a": {
      fontFamily: theme.typography.body2.fontSize,
      color: theme.palette.main.gray,
      textTransform: "capitalize",
    },
  },
  productsContainer: {
    display: "flex",
    width: "100%",
    fontFamily: theme.typography.body1.fontSize,
    color: theme.palette.main.gray,
    justifyContent: "center",
  },
  productCard: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: "200px",
    width: "150px",
    margin: "0.5rem",
    [theme.breakpoints.up("md")]: {
      height: "250px",
      width: "150px",
    },
  },
}));

export default useStyles;
