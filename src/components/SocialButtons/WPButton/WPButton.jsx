import React from "react";
import { IconButton } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";
import { URL_SOCIAL } from "../../../utils/constants";

const { whatsapp } = URL_SOCIAL;

const WPButton = () => {
  return (
    <IconButton
      aria-label="boton whatsapp"
      onClick={() => window.open(whatsapp, "_blank")}
    >
      <WhatsApp fontSize="large" />
    </IconButton>
  )
};

export default WPButton;

