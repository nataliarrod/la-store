import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "622px",
    marginTop: "70px",
    "& h2": {
      fontFamily: theme.typography.fontFamilySecondary,
      color: theme.palette.main.pink,
      fontSize: theme.typography.h1.fontSize,
      textTransform: "capitalize",
    },
  },
  buttonContainer: {
    marginTop: "30px",
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.main.pink,
      color: theme.palette.main.white,
      marginRight: "20px",
    },
  },
  totalCount: {
    fontFamily: theme.typography.fontFamilySecondary,
    color: theme.palette.main.pink,
    textTransform: "uppercase",
    fontSize: theme.typography.h5.fontSize,
    marginRight: "40px",
  },
}));

export default useStyles;
