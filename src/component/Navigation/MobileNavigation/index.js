import { Section } from '@commons-ui/core';
import {
  Grid,
  Slide,
  Dialog,
  DialogActions,
  IconButton,
  SvgIcon,
  DialogContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { ReactComponent as MenuCloseIcon } from '@/pesayetu/assets/menu_close.svg';
import { ReactComponent as MenuOpenIcon } from '@/pesayetu/assets/menu_open.svg';
import LogoNavigation from '@/pesayetu/component/LogoNavigation';
import MenuNavigation from '@/pesayetu/component/MenuNavigation';

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    padding: `${typography.pxToRem(30.35)}`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {},
  dialog: {
    padding: 0,
  },
  firstTitle: {
    color: 'white',
  },
  secondTitle: {
    color: 'white',
  },
  subtitle: {
    color: 'white',
  },
  logoSection: {
    borderBottom: '2px solid white',
  },
  backdrop: {
    maxHeight: typography.pxToRem(608),
    backgroundColor: 'transparent',
  },
  dialogActions: {
    transform: 'matrix(-1, 0, 0, -1, 0, 0, )',
    background: palette.primary.main,
  },
  dialogContent: {
    background: palette.primary.main,
  },
  dialogMenu: {
    padding: `${typography.pxToRem(10.35)} 0`,
  },
  menuButton: {
    color: palette.background.dark,
    background: '#F0F0F0',
    borderRadius: '50px',
    margin: '0.5rem',
    '&:hover': {
      background: '#F0F0F0 ',
      borderRadius: '50px',
      margin: '0.5rem',
    },
  },
  closeButton: {
    color: 'white',
    padding: '0rem 3rem',
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
  return <Slide direction="left" timeout={1000} ref={ref} {...props} />;
});

function MobileNavigation({ logoProps, menuProps, ...props }) {
  const classes = useStyles(props);
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
      <div className={classes.root}>
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
            <Grid
              container
              justifyContent="space-between"
              className={classes.logoSection}
            >
              <Grid
                item
                xs={10}
                container
                justifyContent="flex-start"
                alignItems="center"
                className={classes.dialogMenu}
              >
                <LogoNavigation
                  {...logoProps}
                  classes={{
                    firstTitle: classes.firstTitle,
                    secondTitle: classes.secondTitle,
                    subtitle: classes.subtitle,
                  }}
                />
              </Grid>

              <Grid
                item
                xs={2}
                container
                justifyContent="flex-end"
                alignItems="center"
              >
                <IconButton
                  aria-label="Close drawer"
                  edge="end"
                  onClick={handleClose}
                  className={classes.closeButton}
                >
                  <SvgIcon component={MenuCloseIcon} viewBox="0 0 26 26" />
                </IconButton>
              </Grid>
            </Grid>
          </DialogActions>
          <DialogContent className={classes.dialogContent}>
            <MenuNavigation links={menuProps}>example is here</MenuNavigation>
          </DialogContent>
        </Dialog>
      </div>
    </Section>
  );
}

MobileNavigation.propTypes = {
  logoProps: PropTypes.shape({}),
  menuProps: PropTypes.arrayOf(PropTypes.shape({})),
};

MobileNavigation.defaultProps = {
  logoProps: undefined,
  menuProps: undefined,
};
export default MobileNavigation;
