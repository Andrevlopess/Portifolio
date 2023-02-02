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
    background: '#0B0B0B',
    bgDistinct: '#131313',
    distactBg: '#f1f1f1',
    txtDistact: '#872dcb',
    highBlue: '#1C60C7',
    
    violet100: '#9240d0',
    violet200: '#7b18c6',
    violet300: '#5e03a2',
    violet400: '#3d0666',
    violet500: '#1b0929',
  },
});
