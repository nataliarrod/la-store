import { makeStyles } from '@material-ui/core';

const borderColor = '#D4D2CE';

const useStyles = makeStyles(() => ({
  root: {
    borderBottom: `1px solid ${borderColor}`,
    boxShadow: `0 0 5px 0 ${borderColor}`,
    width: '100%'
  },
  labelUl: {
    display: 'flex',
    margin: '0px',
    padding: '0px'
  },
  labelLi: {
    display: 'flex',
    listStyle: 'none',
    '& > a': {
      margin: '0px 25px',
      textTransform: 'uppercase',
      fontFamily: 'Poppins',
      fontSize: '12px',
      color: 'grey',
      textDecoration: 'none'
    },
  },
}));

export default useStyles;
