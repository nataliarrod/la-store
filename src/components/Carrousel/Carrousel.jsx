import React from "react";
import Carousel from "react-material-ui-carousel";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Paper } from "@material-ui/core";
import URL_IMAGES  from "../../utils/constants";
import useStyles from "./styles";

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.imagesCarrouselContainer}>
      <img src={props.item.url} alt="imagenes de carrousel"/>
    </Paper>
  );
}

function Carrousel() {
  const classes = useStyles();
  return (
    <div className={classes.mainCarrouselContainer}>
      <Carousel
        className={classes.carrrouselComponent}
        NextIcon={<PlayArrowIcon aria-label="siguiente imagen"/>}
        PrevIcon={<PlayArrowIcon aria-label="imagen anterior" style={{transform: "rotate(-180deg)"}}/>}
        navButtonsProps={{
          style: {
              backgroundColor: 'rgba(203,169,205,0.3)',
              borderRadius: 30,
              width: 30,
              height: 30,
          }
        }} 
        autoPlay="true"
        interval="5000"
        animation="slide"
        indicators={false}
        swipe="true"
        navButtonsAlwaysVisible="true"
        cycleNavigation="true"
      >
        {URL_IMAGES.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

export default Carrousel;