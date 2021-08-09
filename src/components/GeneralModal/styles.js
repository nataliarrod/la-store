import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #d91c84',
    background: '#f6f9fc',
    width: '400px',
    height: '300px',
    '&  > h2': {
      fontFamily: 'Dancing Script',
      color: '#d91c84',
      fontSize: '40px',
      textTransform: 'capitalize',
      textAlign: 'center',
    },
    '&  > p': {
      fontFamily: 'Poppins',
      color: 'gray',
      fontSize: '16px',
      textAlign: 'center',
    },
  },
  buttonGrad: {
    background: '#d91c84',
    borderRadius: '50px',
    color: 'white',
    height: 48,
    padding: '0 30px',
    textTransform: 'uppercase',
    margin: '30px 0px',
    fontFamily: 'Poppins',
    '&:hover':{
      backgroundColor: '#b63281'
    }
  },
}));

export default useStyles;
