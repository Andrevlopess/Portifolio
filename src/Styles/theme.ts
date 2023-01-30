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
    distactBg: '#f1f1f1',
    txtDistact: '#872dcb',
  },
});
