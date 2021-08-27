import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.main.blue,
    height: "100%",
    fontFamily: theme.typography.fontFamily,
    marginTop: "1rem",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > h2": {
      textTransform: "capitalize",
      fontFamily: theme.typography.fontFamilySecondary,
      fontSize: theme.typography.h3.fontSize,
      color: theme.palette.main.pink,
      margin: "15px 0px 5px 0px",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },
    "& > p": {
      margin: "5px 0px 15px 0px",
      fontSize: theme.typography.body1.fontSize,
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    textTransform: "capitalize",
    alignItems: "center",
    width: "auto",
    fontSize: theme.typography.body1.fontSize,
    "& .MuiInputBase-root": {
      width: "300px",
      height: "30px",
    },
  },
  buttonGrad: {
    background: theme.palette.main.pink,
    color: theme.palette.main.white,
    height: 30,
    padding: "0 15px",
    textTransform: "uppercase",
    margin: "30px 0px",
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
      backgroundColor: theme.palette.main.pink,
    },
  },
}));

export default useStyles;
