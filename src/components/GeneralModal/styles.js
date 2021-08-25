import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    background: theme.palette.main.blue,
    width: "400px",
    height: "300px",
    "&  > h2": {
      fontFamily: theme.typography.fontFamilySecondary,
      color: theme.palette.main.pink,
      fontSize: theme.typography.h1.fontSize,
      textTransform: "capitalize",
      textAlign: "center",
      margin: "0.5rem",
    },
    "&  > p": {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.main.gray,
      fontSize: theme.typography.fontSize,
      textTransform: "lowercase",
      textAlign: "center",
      margin: "1rem",
    },
    "&  > p::first-letter": {
      textTransform: "capitalize",
    },
  },
}));

export default useStyles;
