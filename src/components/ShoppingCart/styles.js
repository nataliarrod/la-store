import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "70px",
    marginBottom: "300px",
    "& h2": {
      fontFamily: theme.typography.fontFamilySecondary,
      color: theme.palette.main.pink,
      textTransform: "capitalize",
      fontSize: theme.typography.h3.fontSize,
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.h1.fontSize,
      },
    },
  },
  buttonTotalContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  totalCount: {
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: theme.typography.fontFamilySecondary,
    color: theme.palette.main.pink,
    textTransform: "uppercase",
    marginRight: "40px",
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "180px",
    marginTop: "10px",
    "& Button": {
      marginTop: "10px",
      width: "100%",
      backgroundColor: theme.palette.main.pink,
      color: theme.palette.main.white,
    },
  },
}));

export default useStyles;
