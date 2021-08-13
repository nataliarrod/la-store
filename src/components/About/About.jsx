import React from "react";
import { Parallax } from "react-parallax";
import aboutImage from "../../assets/img/aboutImage.png";
import backgroundAbout from "../../assets/img/backgroundAbout.png";
import useStyles from "./styles";
import aboutConstants from "./constants"
import { Grid } from "@material-ui/core";

const About = () => {
  const classes = useStyles();

  return (
    <Parallax bgImage={backgroundAbout} strength={500}>
      <Grid id="about" className={classes.root} item xs={12}>
        <Grid className={classes.titleAboutContainer} item xs={12}>
          <h2>{aboutConstants.title}</h2>
        </Grid>
        <Grid className={classes.textAboutContainer}>
          <p data-testid="about-text"> {aboutConstants.content} </p>
        </Grid>
        <Grid className={classes.aboutImage} alignContent="flexEnd">
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
