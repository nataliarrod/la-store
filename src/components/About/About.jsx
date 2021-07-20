import React from "react";
import useStyles from './styles';

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>About</h3>
    </div>
  );
}

export default About;