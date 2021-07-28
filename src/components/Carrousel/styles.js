import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainCarrouselContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  carrrouselComponent: {
    width: '1440px',
  },
  imagesCarrouselContainer: {
    height: '369px',
    '& > img': {
      width: '100%',
      objectFit: 'fill',
    },
  },
}));

export default useStyles;
