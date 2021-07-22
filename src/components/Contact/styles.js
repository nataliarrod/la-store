import { makeStyles } from '@material-ui/core';

const backGround = 'white';

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
