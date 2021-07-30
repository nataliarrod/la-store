import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginTop: '40px',
    justifyContent: 'space-around',
    border: '1px solid gray',
    padding: '50px 20px 20px',
    boxShadow: '0px 2px 2px 0px gray',
    borderRadius: '25px',
  },
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontSize: '18px',
    color: 'gray',
    '& > h4': {
      textTransform: 'uppercase',
      color: '#d91c84',
      fontSize: '19px',
      margin: '0px 0px 20px 0px'
    },
    '& span:nth-child(3)': {
      borderBottom: '1px solid',
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
    '& > h4': {
      textTransform: 'uppercase',
      fontFamily: 'Poppins',
      fontSize: '19px',
      color: '#d91c84',
      margin: '0px 0px 20px 0px'
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