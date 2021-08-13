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
          {/* <h2>sobre mí</h2> */}
          <h2>{aboutConstants.title}</h2>
          {/* <p data-testid="about-text">
            Soy Diana Marcela Rodríguez Cardozo. Nací con una visión y misión de
            vida clara, con la convicción de traer magia a nuestras raíces y de
            un despertar a la intuición. Quiero compartirte herramientas para que
            aprendas a auto sanarte, a crear tu propia realidad y a escribir tu
            propia historia desde la plenitud y el poder de conocer tu ser
            interior.
          </p> */}
            <p data-testid="about-text"> {aboutConstants.content} </p>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
