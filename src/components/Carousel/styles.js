import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainCarouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgrounColor: '#f6f9fc',
  },
  carouselComponent: {
    width: '1500px',
  },
  imagesCarouselContainer: {
    height: '450px',
    '& > img': {
      width: '100%',
      objectFit: 'fill'
    },
  },
}));

export default useStyles;
