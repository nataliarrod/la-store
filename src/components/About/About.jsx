import React from "react";
import useStyles from "./styles";
import { Parallax, Background } from "react-parallax";
import aboutImage from "../../assets/img/aboutImage.png";

const About = () => {
  const classes = useStyles();

  return (
    <Parallax
      className={classes.root}
      strength={900}
      blur={{ min: -150, max: 150 }}
    >
      <Background>
        <div className={classes.backgroundImage} />
      </Background>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutImage}>
          <img src={aboutImage} alt="aboutimage" height="400px" width="630px" />
        </div>
        <div className={classes.textAboutContainer} >
          <h2>sobre mí</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
