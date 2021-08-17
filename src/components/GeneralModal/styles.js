import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #d91c84",
    background: "#f6f9fc",
    width: "400px",
    height: "300px",
    "&  > h2": {
      fontFamily: "Dancing Script",
      color: "#d91c84",
      fontSize: "40px",
      textTransform: "capitalize",
      textAlign: "center",
      margin: "0.5rem",
    },
    "&  > p": {
      fontFamily: "Poppins",
      color: "gray",
      fontSize: "16px",
      textTransform: "lowercase",
      textAlign: "center",
      margin: "1rem",
    },
    "&  > p::first-letter": {
      textTransform: "capitalize",
    },
  },
  buttonsModal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonGrad: {
    width: "14rem",
    background: "#d91c84",
    color: "white",
    height: "2.2rem",
    padding: "0 30px",
    textTransform: "uppercase",
    margin: "0.5rem",
    fontFamily: "Poppins",
    "&:hover": {
      backgroundColor: "#b63281",
    },
  },
}));

export default useStyles;
