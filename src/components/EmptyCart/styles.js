import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    '& > h3': {
      fontFamily: 'Dancing Script',
      color: '#d91c84',
      fontSize: '40px',
      textTransform: 'capitalize',
    },
    '& .MuiButtonBase-root': {
      backgroundColor: '#d91c84',
      color: 'white',
      marginRight: '20px',
    },
  },
}));

export default useStyles;
