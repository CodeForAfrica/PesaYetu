import { createTheme } from '@codeforafrica/hurumap-ui';

const FONT_FAMILY_TEXT = '"Montserrat", "sans-serif"';

/**
 * http://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=11
 */

const Theme = createTheme({
  chart: {
    pie: {
      height: 250,
      legendWidth: 150,
      origin: { x: 150, y: 125 },
      padding: 0,
      style: {
        data: {
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10
        },
        labels: {
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 16,
          fill: 'rgb(0,0,0)'
        }
      },
      width: 450
    },
    bar: {
      barWidth: 25,
      domainPadding: { x: [25, 25] },
      height: 300,
      offset: 50,
      style: {
        data: {
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10
        },
        labels: {
          fill: 'rgb(0,0,0)',
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10
        }
      }
    },
    axis: {
      style: {
        tickLabels: {
          fill: 'rgb(0,0,0)',
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10
        },
        axisLabels: {
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10,
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
