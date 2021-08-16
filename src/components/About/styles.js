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
    [theme.breakpoints.up("sm")]: {
      margin: "2rem 0",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1.5rem",
      alignSelf: "center",
    },
    "& > h2": {
      fontFamily: "Dancing Script",
      color: "#d91c84",
      fontSize: "40px",
      textTransform: "capitalize",
      textAlign: "left",
      paddingLeft: "3rem",
      margin: "1rem",
      position: "relative",
      [theme.breakpoints.up("sm")]: {
        textAlign: "right",
        marginTop: "0",
      },
      [theme.breakpoints.up("md")]: {
        marginRight: "5rem",
        fontSize: "60px",
      },
    },
    "& > p": {
      fontFamily: "Poppins",
      textAlign: "left",
      fontSize: "14px",
      color: "gray",
      paddingLeft: "3rem",
      fontWeight: "500",
      margin: "0",
      [theme.breakpoints.up("sm")]: {
        position: "relative",
        textAlign: "right",
      },
      [theme.breakpoints.up("md")]: {
        marginRight: "3rem",
        fontSize: "19px",
      },
    },
    "& > span": {
      display: "flex",
      fontSize: "16px",
      fontFamily: "Poppins",
      textAlign: "right",
      justifyContent: "flex-start",
      color: "#9C80A6",
      margin: "1rem",
      paddingLeft: "2rem",
      [theme.breakpoints.up("sm")]: {
        position: "relative",
        textAlign: "right",
        justifyContent: "flex-end",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "22px",
        marginRight: "3rem",
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
      [theme.breakpoints.up("md")]: {
        width: "100%",
        paddingLeft: "7rem",
        marginBottom: "-25px",
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: "-31px",
      },
    },
  },
}));

export default useStyles;
