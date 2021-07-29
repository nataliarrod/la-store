import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainCarrouselContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  carrrouselComponent: {
    width: '1500px',
  },
  imagesCarrouselContainer: {
    height: '450px',
    '& > img': {
      width: '100%',
      objectFit: 'fill'
    },
  },
}));

export default useStyles;
