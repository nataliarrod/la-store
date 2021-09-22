import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tableTitle: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.main.pink,
    textTransform: "Capitalize",
    fontWeight: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.fontSize,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  tableContent: {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.main.gray,
    textTransform: "Capitalize",
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  deleteButton: {
    "& > MuiButtonBase-root": {
      marginTop: "20px",
    },
  },
}));

export default useStyles;
