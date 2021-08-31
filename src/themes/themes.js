import { createTheme } from "@material-ui/core/styles";

export const LineaAncestralTheme = createTheme({
  palette: {
    main: {
      blue: "#f6f9fc",
      white: "#FFF",
      purple: "#9c80a6",
      gray: "gray",
      pink: "#d91c84",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontFamilySecondary: "Dancing Script",
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontSize: 16,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 35,
    },
    h3: {
      fontSize: 30,
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
    },
    link: {
      fontSize: 12,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 10,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
