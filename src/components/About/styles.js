import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
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
      position: "relative",
      [theme.breakpoints.up("sm")]: {
        textAlign: "right",
      },
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
      [theme.breakpoints.up("sm")]: {
        marginBottom: "1rem",
        position: "relative",
        textAlign: "right",
      },
    },
  },
  aboutImage: {
    display: "flex",
    "& > img": {
      width: "100%",
      marginBottom: "-21px",
      [theme.breakpoints.up("sm")]: {
        width: "130%",
        alignSelf: "flex-end",
      },
    },
  },
}));

export default useStyles;
