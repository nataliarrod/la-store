import { makeStyles } from '@material-ui/core';

const backGround = '#f6f9fc';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backGround,
    height: '450px',
    fontFamily: 'Poppins',
    [theme.breakpoints.down('sm')]: {
      display: '450px',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > h2': {
      textTransform: 'capitalize',
      fontFamily: 'Dancing Script',
      fontSize: '50px',
      color: '#d91c84',
      margin: '15px 0px 5px 0px'
    },
    '& > p': {
      margin: '5px 0px 15px 0px'
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'capitalize',
    alignItems: 'center',
    width: 'auto',
    '& .MuiInputBase-root': {
      width: '500px',
      height: '60px'
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
