import { makeStyles } from '@material-ui/core';

const backGround = '#f6f9fc';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backGround,
    height: '500px',
    fontFamily: 'Poppins',
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
      color: '#bb5391',
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
      height: '60px',
    },
  },
  buttonGrad: {
    background: '#bb5391',
    borderRadius: '50px',
    color: 'white',
    height: 48,
    padding: '0 30px',
    textTransform: 'uppercase',
    margin: '30px 0px',
    fontFamily: 'Poppins',
    '&:hover':{
      backgroundColor: '#b63281',
    }
  },
}));

export default useStyles;
