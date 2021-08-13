import { shopRoute, landingRoute } from "../../utils/constants";

const labelsNavBar = [
  {
    name: "inicio",
    url: landingRoute,
  },
  {
    name: "tienda virtual",
    url: shopRoute,
  },
  {
    name: "sobre mí",
    url: `${landingRoute}#about`,
  },
  {
    name: "contacto",
    url: `${landingRoute}#contacto`,
  },
];

export default labelsNavBar;