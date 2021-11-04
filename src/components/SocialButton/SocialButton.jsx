import React from "react";
import { IconButton } from "@material-ui/core";
import { WhatsApp, Instagram, Facebook, YouTube } from "@material-ui/icons";
import { URL_SOCIAL } from "../../utils/constants";
import useStyles from "./styles";

const { instagram, facebook, youtube, whatsapp } = URL_SOCIAL;

const SocialButton = ({color, size, type}) => {
  const classes = useStyles();

  if (type === "whatsapp") {
    return (
      <IconButton
        aria-label="boton whatsapp"
        onClick={() => window.open(whatsapp, "_blank")}
      >
        <WhatsApp fontSize={size} className={classes[color]} />
      </IconButton>
    );
  };

  if (type === "facebook") {
    return (
      <IconButton
        aria-label="boton facebook"
        onClick={() => window.open(facebook, "_blank")}
      >
        <Facebook fontSize={size} className={classes[color]} />
      </IconButton>
    );
  };

  if (type === "instagram") {
    return (
      <IconButton
        aria-label="boton whatsapp"
        onClick={() => window.open(instagram, "_blank")}
      >
        <Instagram fontSize={size} className={classes[color]} />
      </IconButton>
    );
  };

  if (type === "whatsapp") {
    return (
      <IconButton
        aria-label="boton whatsapp"
        onClick={() => window.open(youtube, "_blank")}
      >
        <YouTube fontSize={size} className={classes[color]} />
      </IconButton>
    );
  };

};

export default SocialButton;