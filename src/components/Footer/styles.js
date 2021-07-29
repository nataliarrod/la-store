import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '200px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9c80a6',
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/la-store-5dcee.appspot.com/o/pluma.png?alt=media&token=2c9c418b-011a-44a8-b03a-6ae09d725173)',
    backgroundSize: 'cover',
    color: 'white'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
    width: '200px',
    borderRight: '1px solid',
    fontFamily: 'Poppins',
    '& > h3': {
      margin: '0px',
      textTransform: 'uppercase',
      fontSize: '18px'
    },
    '& > p': {
      margin: '0px',
      textTransform: 'capitalize',
      fontSize: '15px'
    },
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '20px',
    '& .MuiIconButton-root': {
      color: 'white'
    },
  },
  logoContainer: {
    borderRight: '1px solid',
    paddingRight: '10px'
  },
 
}));

export default useStyles;
