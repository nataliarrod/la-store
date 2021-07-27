import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'relative',
    '& > img': {
      width: '100%',
    },
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    textAlign: 'center',
    width: '300px',
    borderRadius: '40px',
    position: 'absolute',
    bottom: '20px',
    right: '100px',
    '& > h2': {
      fontFamily: 'Dancing Script',
      color: '#bb3382',
      fontSize: '40px',
      textTransform: 'capitalize',
      margin: '0px',
    },
    '& > h3': {
      fontFamily: 'Poppins',
      color: '#63615E',
      fontSize: '18px',
      textTransform: 'capitalize',
      margin: '0px',
    },
  },
}));

export default useStyles;
