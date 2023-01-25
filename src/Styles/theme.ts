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
    // Light mode
    background: '#FFFFFF',
    txtdistact: '#C85022',
    
    // Dark mode
    
    dbackground: '#0A0A0A',
    dtxtdistact: '#d62828',
  },
});
