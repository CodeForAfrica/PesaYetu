import { muiTheme } from "storybook-addon-material-ui";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import * as NextImage from "next/image";

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
      width: size(390),
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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: VIEWPORTS,
    defaultViewport: "desktop",
  },
};

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
