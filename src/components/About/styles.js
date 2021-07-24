import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  textAboutContainer: {
    height: '100%',
    width: '50%',
    paddingRight: '50px',
    '& > h2': {
      fontFamily: 'Dancing Script',
      color: '#bb3382',
      fontSize: '60px',
      textTransform: 'capitalize',
      margin: '35px 0px',
      textAlign: 'right'
    },
    '& > p': {
      fontFamily: 'Poppins',
      textAlign: 'right',
      fontSize: '19px',
      color: 'gray',
      paddingLeft: '50px',
      fontWeight: '500',
    },
  },
}));

export default useStyles;
