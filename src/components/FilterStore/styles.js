import { makeStyles } from '@material-ui/core';
const textColor = '#f50057';

const useStyles = makeStyles(() => ({
  root: {
    width: '80%',
    margin: '60px auto',
    maxWidth: '280px',
  },
  filterContainer: {
    height: '330px',
    textTransform: 'capitalize',
    borderRadius: '10px',
    '& > legend': {
      fontFamily: 'Dancing Script',
      color: textColor,
      fontSize: '40px',
      textTransform: 'capitalize',
      textAlign: 'center',
      margin: '15px 0px 25px',
    },
    '& .MuiFormControlLabel-root': {
      display: 'flex',
      margin: '0px auto 0px 2vw',
    },
    '& .MuiFormControlLabel-label': {
      display: 'flex',
      fontFamily: 'Poppins',
    }
  },
}));

export default useStyles;
