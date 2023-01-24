import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/plus-jakarta-sans"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const colors = {
  colors:{
    uaifi: '#111'
  },
  fonts:{
    body: "`Plus jakarta sans`, sans serif"
  }
  
};

export const theme = extendTheme({ colors, config });
