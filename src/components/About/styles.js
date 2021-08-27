import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
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
    "& > h3": {
      fontFamily: theme.typography.fontFamilySecondary,
      color: theme.palette.main.pink,
      fontSize: theme.typography.h3.fontSize,
      textTransform: "capitalize",
      textAlign: "left",
      paddingLeft: "3rem",
      margin: "1rem",
      position: "relative",
      [theme.breakpoints.up("md")]: {
        textAlign: "right",
        marginTop: "0",
      },
      [theme.breakpoints.up("lg")]: {
        marginRight: "5rem",
        fontSize: theme.typography.h1.fontSize,
      },
    },
    "& > p": {
      fontFamily: theme.typography.fontFamily,
      textAlign: "left",
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.main.gray,
      paddingLeft: "3rem",
      fontWeight: "500",
      margin: "0",
      [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.h6.fontSize,
        position: "relative",
        textAlign: "right",
      },
      [theme.breakpoints.up("lg")]: {
        marginRight: "3rem",
        fontSize: theme.typography.h5.fontSize,
      },
    },
    "& > span": {
      display: "flex",
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.h6.fontFamily,
      textAlign: "right",
      justifyContent: "flex-start",
      color: theme.palette.main.purple,
      margin: "1rem",
      paddingLeft: "2rem",
      fontWeight: "bold",
      [theme.breakpoints.up("md")]: {
        position: "relative",
        textAlign: "right",
        justifyContent: "flex-end",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.h4.fontSize,
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
