import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > h3": {
      fontFamily: "Dancing Script",
      color: "#d91c84",
      textTransform: "capitalize",
      marginTop: "5rem",
      [theme.breakpoints.up("xs")]: {
        fontSize: theme.typography.h3.fontSize,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.h1.fontSize,
      },
    },
    "& .MuiButtonBase-root": {
      backgroundColor: "#d91c84",
      color: "white",
      marginRight: "20px",
    },
  },
}));

export default useStyles;
