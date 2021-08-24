import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  productCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "capitalize",
    fontSize: "13px",
    padding: "30px",
    "& > h4": {
      margin: "10px 0px 5px ",
    },
    "& > img": {
      maxWidth: "120px",
      objectFit: "cover",
    },
    "& > input": {
      width: "100%",
    },
  },
  actions: {
    cursor: "pointer",
  },
  textField: {
    marginTop: "10px",
    "& input::-webkit-outer-spin-button": {
      display: "none",
      margin: 0,
    },
    "& input::-webkit-inner-spin-button": {
      display: "none",
      margin: 0,
    },
    "& input": {
      textAlign: "center",
    },
  },
  button: {
    marginTop: "15px",
    backgroundColor: "#d91c84",
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
