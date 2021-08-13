import React from "react";
import { Parallax } from "react-parallax";
import aboutImage from "../../assets/img/aboutImage.png";
import backgroundAbout from "../../assets/img/backgroundAbout.png";
import useStyles from "./styles";
import aboutConstants from "./constants"

const About = () => {
  const classes = useStyles();

  return (
    <Parallax bgImage={backgroundAbout} strength={500}>
      <div id="about" className={classes.root} style={{ height: 450 }}>
        <div className={classes.aboutImage}>
          <img
            src={aboutImage}
            alt="imagen diana rodriguez"
            height="470px"
            width="530px"
          />
        </div>
        <div className={classes.textAboutContainer}>
          <h2>{aboutConstants.title}</h2>
          <p data-testid="about-text"> {aboutConstants.content} </p>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
