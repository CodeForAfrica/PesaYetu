import createTheme from '@codeforafrica/hurumap-ui/core/styles/createTheme';

const FONT_FAMILY_HEADING = '"Lora", "serif"';
const FONT_FAMILY_TEXT = '"Montserrat", "sans-serif"';

const COLOR_SCALE = ['#2078ac', '#559cc1', '#3286b4', '#9ac2dd'];
/**
 * http://colorbrewer2.org/#type=sequential&scheme=Blues&n=8
 */
// const COLOR_SCALE = [
//   '#084594',
//   '#2171b5',
//   '#4292c6',
//   '#6baed6',
//   '#9ecae1',
//   '#c6dbef',
//   '#deebf7',
//   '#f7fbff'
// ];

const theme = createTheme({
  chart: {
    area: {
      colorScale: COLOR_SCALE
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
    },
    bar: {
      barWidth: 30,
      domainPadding: { x: [25, 25] },
      height: 300,
      width: 400,
      padding: { left: 0, right: 0 },
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
    colorScale: COLOR_SCALE,
    group: {
      colorScale: COLOR_SCALE
    },
    pie: {
      colorScale: COLOR_SCALE,
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
    }
  },
  palette: {
    background: { default: '#ffff' },
    primary: { main: '#3385B5' },
    secondary: { main: '#353745' }
  },
  typography: {
    fontFamily: FONT_FAMILY_TEXT,
    fontHeading: FONT_FAMILY_HEADING
  },
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

export default theme;
