import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '400px',
  },
  backgroundImage: {
    height: '705px',
    width: '1440px',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/la-store-5dcee.appspot.com/o/clouds.png?alt=media&token=a87613ee-17a5-4f31-b8ca-e07b611c9e17)',
  },
  aboutContainer: {
    display: 'flex',
    height: '400px',
    '& > div:firstChild': {
      backgroundColor: 'red',
    },
  },
  aboutImage: {
    paddingLeft: '150px',
    width: '70%',
    minWidth: '300px'
  },
  textAboutContainer: {
    paddingRight: '150px',
    height: '100%',
    width: '50%',
    '& > h2': {
      fontFamily: 'Dancing Script',
      color: '#bb3382',
      fontSize: '60px',
      textTransform: 'capitalize',
      margin: '45px 0px',
      textAlign: 'right'
    },
    '& > p': {
      fontFamily: 'Poppins',
      textAlign: 'right',
      fontSize: '16px',
      color: 'gray',
    },
  },
}));

export default useStyles;
