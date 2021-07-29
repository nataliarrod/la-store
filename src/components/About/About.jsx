import React from "react";
import { Parallax } from "react-parallax";
import aboutImage from "../../assets/img/aboutImage.png";
import backgroundAbout from "../../assets/img/backgroundAbout.png";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();

  return (
    <Parallax bgImage={backgroundAbout} strength={500}>
      <div className={classes.root} style={{ height: 400 }}>
        <div className={classes.aboutImage}>
          <img
            src={aboutImage}
            alt="imagen diana rodriguez"
            height="400px"
            width="500px"
          />
        </div>
        <div className={classes.textAboutContainer}>
          <h2>sobre mí</h2>
          <p>
            Soy Diana Marcela Rodríguez Cardozo. Nací con una visión y misión de
            vida clara, con la convicción de traer magia a nuestras raíces y de
            un despertar a la intuición. Quiero compartirte herramientas para que
            aprendas a auto sanarte, a crear tu propia realidad y a escribir tu
            propia historia desde la plenitud y el poder de conocer tu ser
            interior.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
