import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "622px",
    marginTop: "70px",
    "& h2": {
      fontFamily: "Dancing Script",
      color: "#d91c84",
      fontSize: "40px",
      textTransform: "capitalize",
    },
  },
  buttonContainer: {
    marginTop: "30px",
    "& .MuiButtonBase-root": {
      backgroundColor: "#d91c84",
      color: "white",
      marginRight: "20px",
    },
  },
  totalCount: {
    fontFamily: "Dancing Script",
    color: "#d91c84",
    textTransform: "uppercase",
    fontSize: "20px",
    marginRight: "40px",
  },
}));

export default useStyles;
