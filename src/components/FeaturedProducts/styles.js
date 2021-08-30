import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.main.blue,
    height: "100%",
    justifyContent: "center",
    marginBottom: "2rem",
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "2rem",
    "& > h3": {
      fontFamily: theme.typography.fontFamilySecondary,
      color: theme.palette.main.pink,
      fontSize: theme.typography.h3.fontSize,
      textTransform: "capitalize",
      [theme.breakpoints.up("md")]: {
        paddingLeft: "3rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.h1.fontSize,
      },
    },
  },
  goToProductCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > a": {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.main.gray,
      textTransform: "capitalize",
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.h6.fontSize,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: theme.typography.h5.fontSize,
      },
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
