import React from "react";
import useStyles from "./styles";
import { Parallax } from "react-parallax";
import aboutImage from "../../assets/img/aboutImage.png";
import backgroundAbout from "../../assets/img/backgroundAbout.png";

const About = () => {
  const classes = useStyles();

  return (
    <Parallax bgImage={backgroundAbout} strength={500}>
      <div className={classes.root} style={{ height: 600 }}>
        <div className={classes.aboutImage}>
          <img
            src={aboutImage}
            alt="imagen-diana-rodriguez"
            height="600px"
            width="700px"
          />
        </div>
        <div className={classes.textAboutContainer}>
          <h2>sobre mí</h2>
          <p>
            Soy Diana Marcela Rodríguez Cardozo, crecí en una maravillosa
            familia, donde las bases siempre fueron los valores y principios y
            nunca faltó el amor a la familia. Nací con una visión y misión de
            vida clara, con la convicción de traer magia a nuestras raíces y de
            un despertar a la intuición. Desde mis cuatro años descubrí un don
            especial que traía conmigo y empecé a experimentar fenómenos únicos
            en mi vida. Puedo ver, sentir, percibir y escuchar seres de luz,
            solo hasta mis doce años entendí todos estos fenómenos. Inicie con
            un proceso de incertidumbres y crisis sociales, pero partir de mi
            adultez he estudiado metodologías que me permiten desarrollar y
            afinar mis dones para poder compartirlos de la manera más idónea,
            Hoy mirando hacia atrás entiendo que los ángeles siempre estuvieron
            a mi lado guiándome. Quiero compartirte herramientas para que
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
