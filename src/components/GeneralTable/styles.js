import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  deleteButton: {
    '& > MuiButtonBase-root': {
      marginTop: '20px',
    }
  },
}));

export default useStyles;
