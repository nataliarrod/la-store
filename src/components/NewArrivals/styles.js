import { makeStyles } from '@material-ui/core';

const backGround = '#f6f9fc';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backGround,
    height: '100px',
  },
}));

export default useStyles;
