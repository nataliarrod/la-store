import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '80%',
    maxWidth: '1000px',
    margin: '0px auto 50px',
    textAlign: 'center',

    '& > h2': {
      fontFamily: 'Dancing Script',
      color: '#d91c84',
      fontSize: '40px',
      textTransform: 'capitalize',
    },
  },
  buttonContainer: {
    marginTop: '30px',
    '& .MuiButtonBase-root': {
      backgroundColor: '#d91c84',
      color: 'white',
      marginRight: '20px',
    },
  },
  totalCount: {
    fontFamily: 'Dancing Script',
    color: '#d91c84',
    textTransform: 'uppercase',
    fontSize: '20px',
    marginRight: '20px'
  }
}));

export default useStyles;
