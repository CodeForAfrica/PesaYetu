import { muiTheme } from "storybook-addon-material-ui";
import * as nextImage from "next/image";

import theme from "../src/theme";
import "./styles.css";

export const decorators = [muiTheme([theme])];

// 2rem padding (top/right 1rem & bottom/left 1rem) from using layout: "padded"
const size = (px) =>
  `${Number.parseFloat(theme.typography.pxToRem(px)) + 2}rem`;

const VIEWPORTS = {
  mobile: {
    name: "Mobile",
    styles: {
      height: size(760),
      width: size(360),
    },
    type: "mobile",
  },
  tablet: {
    name: "Tablet",
    styles: {
      height: size(900),
      width: size(768),
    },
    type: "tablet",
  },
  desktop: {
    name: "Desktop",
    styles: {
      height: size(900),
      width: size(1440),
    },
    type: "desktop",
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "padded",
  viewport: {
    viewports: VIEWPORTS,
    defaultViewport: "desktop",
  },
};

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});
