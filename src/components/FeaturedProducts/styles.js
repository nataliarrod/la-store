import { makeStyles } from '@material-ui/core';

const backGround = '#f6f9fc';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: backGround,
    height: '450px',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      display: '100%',
    }
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > h3': {
      margin: '20px 0px 40px 20px',
      fontFamily: 'Dancing Script',
      color: '#d91c84',
      fontSize: '40px',
      textTransform: 'capitalize'
    },
    '& > a': {
      margin: '20px 20px 0px 0px',
      fontFamily: 'Poppins',
      color: 'gray',
      textTransform: 'capitalize'
    },
  },
  productsContainer: {
    display: 'flex',
    width: '100%',
    fontFamily: 'Poppins',
    color: 'gray',
    justifyContent: 'center'
  },
}));

export default useStyles;
