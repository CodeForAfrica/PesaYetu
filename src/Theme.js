import { createTheme } from '@codeforafrica/hurumap-ui';

const FONT_FAMILY_TEXT = '"Montserrat", "sans-serif"';

/**
 * http://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=11
 */
// const KHAKI_GREEN = '#7f9442';
// const DULL_ORANGE = '#de9f3a';
const COLOR_BREWER_DIVERGING = [
  '#a50026',
  '#d73027',
  '#f46d43',
  '#fdae61',
  '#fee08b',
  '#ffffbf',
  '#d9ef8b',
  '#a6d96a',
  '#66bd63',
  '#1a9850',
  '#006837'
].reverse();

const Theme = createTheme({
  chart: {
    pie: {
      legendWidth: 50,
      colorScale: COLOR_BREWER_DIVERGING
    },
    area: {
      colorScale: COLOR_BREWER_DIVERGING
    },
    group: {
      colorScale: COLOR_BREWER_DIVERGING
    },
    bar: {
      style: {
        data: {
          fill: COLOR_BREWER_DIVERGING[0]
        },
        labels: {
          fontFamily: FONT_FAMILY_TEXT,
          fill: 'rgb(0,0,0)'
        }
      }
    },
    axis: {
      labelWidth: 50,
      style: {
        tickLabels: {
          fontFamily: FONT_FAMILY_TEXT,
          fill: 'rgb(0,0,0)'
        },
        axisLabels: {
          fontFamily: FONT_FAMILY_TEXT,
          fill: 'rgb(0,0,0)'
        }
      }
    }
  },
  palette: {},
  typography: {},
  overrides: {
    MuiButton: {
      root: {
        border: '0.125rem solid #ffff',
        borderRadius: 0
      }
    },
    MuiCard: {
      root: {
        borderRadius: 0,
        boxShadow: 'none'
      }
    }
  }
});

export default Theme;
