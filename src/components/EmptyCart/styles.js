import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > h3": {
      fontFamily: theme.typography.fontFamilySecondary,
      color: theme.palette.main.pink,
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
      backgroundColor: theme.palette.main.pink,
      color: theme.palette.main.white,
      marginRight: "20px",
    },
  },
}));

export default useStyles;
