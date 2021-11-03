import React from "react";
import { IconButton } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";
import { URL_SOCIAL } from "../../../utils/constants";
import useStyles from "./styles";

const { whatsapp } = URL_SOCIAL;

const WhatsappButton = ({color, size}) => {
  const classes = useStyles();

  return (
      <IconButton
        aria-label="boton whatsapp"
        onClick={() => window.open(whatsapp, "_blank")}
      >
        <WhatsApp fontSize={size} className={classes[color]} />
      </IconButton>
  )
};

export default WhatsappButton;