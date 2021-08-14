import React from "react";
import Typewriter from "typewriter-effect";



const Type = () => {
  return (
    <p>
      lololo<Typewriter
        options={{
        strings: ['Hellooooooo','Worldddddd'],
        autoStart: true,
        loop: true,
       }}
       /> 
    </p>
  )
};

export default Type;