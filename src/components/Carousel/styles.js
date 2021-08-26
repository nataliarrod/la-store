import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainCarouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgrounColor: '#f6f9fc',
    marginTop: "60px",
  },
  carouselComponent: {
    width: '100%',
  },
  imagesCarouselContainer: {
    height: '100%',
    '& > img': {
      width: '100%',
      objectFit: 'fill'
    },
  },
}));

export default useStyles;
