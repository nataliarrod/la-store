import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  productCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "capitalize",
    fontSize: theme.typography.body1.fontSize,
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
    backgroundColor: theme.palette.main.pink,
  },
  buttonsModal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonGrad: {
    width: "14rem",
    background: theme.palette.main.pink,
    color: theme.palette.main.white,
    height: "2.2rem",
    padding: "0 30px",
    textTransform: "uppercase",
    margin: "0.5rem",
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
      backgroundColor: theme.palette.main.pink,
    },
  },
}));

export default useStyles;
