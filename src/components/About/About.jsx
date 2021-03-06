import React from "react";
import { Parallax } from "react-parallax";
import aboutImage from "../../assets/img/aboutImage.png";
import backgroundAbout from "../../assets/img/backgroundAbout.png";
import useStyles from "./styles";
import aboutConstants, { typeWriterConstants } from "./constants";
import { Grid } from "@material-ui/core";
import AutoType from "../AutoType/AutoType";

const About = () => {
  const classes = useStyles();

  return (
    <Parallax bgImage={backgroundAbout} strength={500}>
      <Grid id="about" className={classes.root} container>
        <Grid className={classes.textAboutContainer} item xs={12} sm={6}>
          <h3>{aboutConstants.title}</h3>
          <span className={classes.autoType}><AutoType words={typeWriterConstants.professions} /></span>
          <p data-testid="about-text"> {aboutConstants.content} </p>
        </Grid>
        <Grid className={classes.aboutImage} item xs={12} sm={6}>
          <img
            src={aboutImage}
            alt="imagen diana rodriguez"
          />
        </Grid>
      </Grid>
    </Parallax>
  );
};

export default About;
