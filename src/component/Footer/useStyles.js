import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ breakpoints, widths, palette, typography }) => ({
    root: {
      background: palette.background.dark,
      height: 'auto',
      padding: `${typography.pxToRem(80)} 0`,
      [breakpoints.up('md')]: {
        padding: `${typography.pxToRem(79.81)} ${typography.pxToRem(139)}`,
      },
    },
    section: {
      padding: 0,
      minWidth: 0,
      boxSizing: 'border-box',
      justifyContent: 'center',
      width: 'fit-content',
      [breakpoints.up('lg')]: {
        padding: 0,
        margin: '0 auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: typography.pxToRem(widths.values.lg),
      },
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      textAlign: 'center',
      [breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
    allLinks: {
      margin: '0 auto',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: typography.pxToRem(44.19),
      [breakpoints.up('md')]: {
        marginTop: typography.pxToRem(88.39),
      },
      [breakpoints.up('lg')]: {
        marginTop: typography.pxToRem(176),
      },
    },
    stayInTouch: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // letterspacing: typography.pxToRem(0.7),
      [breakpoints.up('lg')]: {
        alignItems: 'flex-start',
      },
    },
    stayInTouchText: {
      color: palette.background.main,
      fontSize: typography.subtitle2.fontSize,
      fontWeight: 'bold',
      padding: `${typography.pxToRem(10)} ${typography.pxToRem(8)}`,
      [breakpoints.up('lg')]: {
        padding: 0,
      },
    },
    stayInTouchLink: {
      padding: `0 ${typography.pxToRem(12)}`,
    },
    stayInTouchLinks: {
      marginTop: `${typography.pxToRem(24)}`,
      justifyContent: 'center',
      '& > a': {
        borderRight: 'none',
      },
    },
    quickLinkRoot: {
      textAlign: 'center',
      padding: `${typography.pxToRem(32)} 0 `,
      [breakpoints.up('lg')]: {
        textAlign: 'inherit',
        padding: `${typography.pxToRem(4)} 0 `,
      },
    },
    quickList: {
      listStyle: 'none',
      color: palette.background.main,
      padding: 0,
      letterspacing: typography.pxToRem(0.7),
      '& > li': {
        marginTop: typography.pxToRem(16),
      },
    },
    quickLink: {
      fontSize: typography.subtitle1.fontSize,
      color: palette.background.main,
      fontWeight: 'normal',
      '&:hover': {
        color: palette.primary.light,
      },
    },
    quickLinksTitle: {
      color: palette.background.main,
      fontSize: typography.subtitle2.fontSize,
      fontWeight: 'bold',
    },
    description: {
      color: palette.background.main,
      padding: `${typography.pxToRem(32)} 0 `,
      fontSize: typography.subtitle1.fontSize,
      textAlign: 'center',
      [breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
    copyright: {
      margin: 0,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      [breakpoints.up('lg')]: {
        justifyContent: 'flex-start',
      },
      '& > a': {
        marginTop: typography.pxToRem(3),
      },
    },
    copyrightText: {
      color: palette.background.main,
      order: 5,
      padding: `0 ${typography.pxToRem(5)}`,
      [breakpoints.up('lg')]: {
        padding: `0 ${typography.pxToRem(10)}`,
      },
    },
  })
);

export default useStyles;
