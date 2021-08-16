import React from "react";
import Typewriter from "typewriter-effect";
import useStyles from "./styles";



function AutoType({words, complement}) {
  const classes = useStyles();

  return (
      <span className={classes.autoTypeInline}>
        {complement}
        <Typewriter
          style={{display: "inline"}}
          options={{
          strings: words,
          autoStart: true,
          loop: true,
          onCreateTextNode: null,
          wrapperClassName: classes.wrapper,
        }}
        />
      </span>
  )
};

export default AutoType;