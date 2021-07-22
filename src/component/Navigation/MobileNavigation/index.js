import { Section } from '@commons-ui/core';
import {
  Grid,
  Slide,
  Dialog,
  DialogActions,
  IconButton,
  SvgIcon,
  Typography,
  useMediaQuery,
  DialogContent,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { ReactComponent as MenuCloseIcon } from '@/pesayetu/assets/menu_close.svg';
import { ReactComponent as MenuOpenIcon } from '@/pesayetu/assets/menu_open.svg';
import LogoNavigation from '@/pesayetu/component/LogoNavigation';

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    padding: `${typography.pxToRem(10.35)} 0`,
  },
  section: {},
  dialog: {
    padding: 0,
  },
  backdrop: {
    maxHeight: typography.pxToRem(608),
    backgroundColor: 'transparent',
  },
  dialogActions: {
    padding: `0 ${typography.pxToRem(21)} 0 ${typography.pxToRem(17)}`,
    transform: 'matrix(-1, 0, 0, -1, 0, 0, )',
    background: palette.background.default,
  },
  dialogContent: {
    padding: `${typography.pxToRem(36)} ${typography.pxToRem(
      21
    )} 0 ${typography.pxToRem(27)}`,
    backgroundColor: '#10241F',
    color: palette.background.default,
  },
  dialogMenu: {
    padding: `${typography.pxToRem(10.35)} 0`,
  },
  menuButton: {
    color: palette.background.dark,
    padding: 0,
    paddingLeft: typography.pxToRem(12),
    '&:hover': {
      background: 'none',
    },
  },
  menuItems: {
    padding: `${typography.pxToRem(20)} 0 ${typography.pxToRem(71)}`,
  },
  LogoButton: {
    color: palette.primary.main,
  },
  search: {
    // tablet overide
    [breakpoints.up('md')]: {
      maxWidth: typography.pxToRem(400),
    },
  },
  searchInput: {
    // tablet overide
    [breakpoints.up('md')]: {
      width: typography.pxToRem(360),
    },
  },
  searchButton: {
    paddingBottom: 0,
    paddingTop: 0,
    '&:hover': {
      background: 'inherit',
    },
  },
  button: {
    color: palette.background.dark,
    padding: typography.pxToRem(16),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" timeout={1000} ref={ref} {...props} />;
});

function MobileNavigation({ logoProps, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    e?.preventDefault();
    setOpen(true);
  };
  const handleClose = (e) => {
    e?.preventDefault();
    setOpen(false);
  };
  return (
    <Section classes={{ root: classes.section }}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <LogoNavigation {...logoProps} />
        </Grid>
        <Grid item>
          <IconButton
            aria-label="Open drawer"
            edge="start"
            onClick={handleClickOpen}
            className={classes.menuButton}
          >
            <SvgIcon component={MenuOpenIcon} />
          </IconButton>
        </Grid>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          BackdropProps={{
            classes: {
              root: classes.backdrop,
            },
          }}
          TransitionComponent={Transition}
          classes={{ root: classes.dialog, paper: classes.dialogPaper }}
        >
          <DialogActions className={classes.dialogActions}>
            <Grid container justify="space-between">
              <Grid
                item
                xs={10}
                container
                justify="flex-start"
                alignItems="center"
                className={classes.dialogMenu}
              >
                <LogoNavigation {...logoProps} />
              </Grid>

              <Grid item xs={2} container justify="flex-end">
                <IconButton
                  aria-label="Close drawer"
                  edge="start"
                  onClick={handleClose}
                  className={classes.menuButton}
                >
                  <SvgIcon component={MenuCloseIcon} viewBox="0 0 26 26" />
                </IconButton>
              </Grid>
            </Grid>
          </DialogActions>
          <DialogContent className={classes.dialogContent}>
            <Grid container direction="column">
              <Grid item>
                <Typography color="primary">search is here</Typography>
              </Grid>
              <Grid
                item
                container
                className={classes.menuItems}
                direction={isUpMd ? 'row' : 'column'}
                justify="space-between"
              >
                <Typography color="primary">menu is here</Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </Section>
  );
}

MobileNavigation.propTypes = {
  logoProps: PropTypes.shape({}),
};

MobileNavigation.defaultProps = {
  logoProps: undefined,
};
export default MobileNavigation;
