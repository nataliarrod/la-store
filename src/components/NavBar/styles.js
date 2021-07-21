import { makeStyles } from '@material-ui/core';

const borderColor = '#D4D2CE';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplate: '1fr / repeat(9, 1fr)',
    borderBottom: `1px solid ${borderColor}`,
    boxShadow: `0 0 5px 0 ${borderColor}`,
    width: '100%',
  },
  logoContainer: {
    gridArea: '1 / 1 / 2 / 2',
  },
  labelUl: {
    gridArea: '1 / 2 / 2 / 9',
    display: 'flex',
    padding: '0',
  },
  labelLi: {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    '& > a': {
      margin: '0px 25px',
      textTransform: 'uppercase',
      fontFamily: 'Poppins',
      fontSize: '12px',
      color: 'grey',
      textDecoration: 'none',
    },
  },
  iconsContainer: {
    height: '40px',
    gridArea: '1 / 9 / 2 / 10',
    display: 'flex',
    justifySelf: 'right',
    alignSelf: 'center',
    paddingRight: '20px',
  }
}));

export default useStyles;
