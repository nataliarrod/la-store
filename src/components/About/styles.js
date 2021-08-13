import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "60px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  textAboutContainer: {
    paddingRight: "2rem",
    "& > h2": {
      fontFamily: "Dancing Script",
      color: "#d91c84",
      fontSize: "60px",
      textTransform: "capitalize",
      textAlign: "left",
      paddingLeft: "1rem",
      margin: "1rem",
    },
    "& > p": {
      fontFamily: "Poppins",
      textAlign: "left",
      fontSize: "19px",
      color: "gray",
      paddingLeft: "3rem",
      fontWeight: "500",
      marginTop: "1rem",
      marginBottom: "0",
    },
  },
  aboutImage: {
    "& > img": {
      width: "100%",
      marginBottom: "-21px",
    },
  },
}));

export default useStyles;
