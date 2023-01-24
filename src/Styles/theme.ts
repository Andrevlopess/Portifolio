import {
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/aldrich";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,

  colors: {
    verdinLight: "#BFDB38",
    verdinDark: "#00425A",
  },
});
