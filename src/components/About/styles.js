import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "60px",
  },
  titleAboutContainer: {
    "& > h2": {
      fontFamily: "Dancing Script",
      color: "#d91c84",
      fontSize: "60px",
      textTransform: "capitalize",
      textAlign: "left",
      paddingLeft: "1rem",
      margin: "1rem",
    },
  },
  textAboutContainer: {
    paddingRight: "2rem",
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
    }
  }
}));

export default useStyles;
