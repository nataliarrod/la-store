import { makeStyles } from '@material-ui/core';

const backGround = '#f6f9fc';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: backGround,
    height: '350px',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > h3': {
      margin: '20px 0px 40px 20px',
      fontFamily: 'Dancing Script',
      color: '#bb3382',
      fontSize: '40px',
      textTransform: 'capitalize'
    },
    '& > span': {
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
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '16%',
    textTransform: 'capitalize',
    fontSize: '13px',
    '& > h4': {
      margin: '10px 0px 5px ',

    },
  },
}));

export default useStyles;
