import {
  Grid,
  Slide,
  Dialog,
  DialogActions,
  IconButton,
  DialogContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import MenuCloseIcon from "@/pesayetu/assets/menu_close.svg";
import MenuOpenIcon from "@/pesayetu/assets/menu_open.svg";
import DropdownSearch from "@/pesayetu/components/DropdownSearch";
import Logo from "@/pesayetu/components/Logo";
import Menu from "@/pesayetu/components/Menu";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    paddingRight: typography.pxToRem(20),
    paddingLeft: typography.pxToRem(17),
    [breakpoints.up("md")]: {
      width: "100%",
    },
    [breakpoints.up("lg")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  dialog: {
    padding: 0,
  },
  firstTitle: {
    color: palette.background.default,
    fontWeight: "normal",
    [breakpoints.up("lg")]: {
      fontWeight: "bold",
    },
  },
  secondTitle: {
    color: palette.background.default,
  },
  subtitle: {
    color: palette.background.default,
  },
  logoSection: {
    borderBottom: `2px solid ${palette.background.default}`,
  },
  backdrop: {
    maxHeight: typography.pxToRem(844),
    backgroundColor: "transparent",
  },
  dialogActions: {
    transform: "matrix(-1, 0, 0, -1, 0, 0, )",
    background: palette.primary.main,
    padding: `${typography.pxToRem(16)} ${typography.pxToRem(24.5)}`,
  },
  dialogContent: {
    background: palette.primary.main,
    overflow: "hidden",
    padding: `${typography.pxToRem(24.5)}`,
  },
  dialogMenu: {
    padding: `${typography.pxToRem(10.35)} 0`,
  },
  dialogPaper: {
    maxHeight: typography.pxToRem(844),
    position: "absolute",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  menuButton: {
    color: palette.grey.dark,
    background: "#F0F0F0",
    width: 48,
    borderRadius: typography.pxToRem(50),
    margin: typography.pxToRem(8),
    "&:hover": {
      background: "#F0F0F0",
      borderRadius: typography.pxToRem(50),
      margin: typography.pxToRem(8),
    },
  },
  closeButton: {
    color: palette.background.main,
    width: 48,
    paddingLeft: typography.pxToRem(12),
    "&:hover": {
      background: "none",
    },
  },
  menuItems: {
    padding: `${typography.pxToRem(20)} 0 ${typography.pxToRem(71)}`,
  },
  button: {
    color: palette.background.dark,
    padding: typography.pxToRem(16),
  },
  open: {
    fontSize: typography.pxToRem(32),
  },
  close: {
    fontSize: typography.pxToRem(32),
    color: palette.background.default,
  },
  label: {
    [breakpoints.up("lg")]: {
      fontWeight: 600,
      letterSpacing: "1.6px",
      fontSize: typography.pxToRem(20),
    },
  },
  buttonMenu: {
    margin: 0,
  },
  menuLinks: {
    color: palette.text.secondary,
    margin: `${typography.pxToRem(10)} ${typography.pxToRem(-8)}`,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: palette.text.secondary,
    },
  },
  mainMenu: {
    [breakpoints.up("lg")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
      "& > div:nth-of-type(2)": {
        order: 4,
      },
      "& > div:nth-of-type(3)": {
        order: 5,
      },
      "& > div:nth-of-type(4)": {
        order: 3,
      },
      "& > div:nth-of-type(5)": {
        order: 2,
      },
      "& > div:nth-of-type(6)": {
        order: 5,
      },
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" timeout={1000} ref={ref} {...props} />;
});

function MobileNavigation({
  logoProps,
  menuProps,
  selectProps,
  socialLinks,
  ...props
}) {
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
        <Grid item xs={10} md={11}>
          <Logo {...logoProps} />
        </Grid>
        <Grid item xs={2} md={1}>
          <IconButton
            aria-label="Open drawer"
            edge="start"
            size="medium"
            onClick={handleClickOpen}
            className={classes.menuButton}
          >
            <Image
              src={MenuOpenIcon}
              width={48}
              height={48}
              className={classes.open}
            />
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
              direction="row"
              ustifyContent="space-between"
              className={classes.logoSection}
            >
              <Grid item xs={11}>
                <Logo
                  {...logoProps}
                  classes={{
                    firstTitle: classes.firstTitle,
                    secondTitle: classes.secondTitle,
                    subtitle: classes.subtitle,
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="Close drawer"
                  edge="end"
                  size="medium"
                  onClick={handleClose}
                  className={classes.closeButton}
                >
                  <Image
                    src={MenuCloseIcon}
                    width={48}
                    height={48}
                    className={classes.close}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </DialogActions>
          <DialogContent className={classes.dialogContent}>
            <Menu
              links={menuProps}
              socialLinks={socialLinks}
              classes={{
                root: classes.mainMenu,
                menuLinks: classes.menuLinks,
                label: classes.label,
                menu: classes.buttonMenu,
              }}
            >
              <DropdownSearch {...selectProps} />
            </Menu>
          </DialogContent>
        </Dialog>
      </div>
    </Section>
  );
}

MobileNavigation.propTypes = {
  logoProps: PropTypes.shape({}),
  menuProps: PropTypes.arrayOf(PropTypes.shape({})),
  socialLinks: PropTypes.arrayOf(PropTypes.shape({})),
  selectProps: PropTypes.shape({}),
};

MobileNavigation.defaultProps = {
  logoProps: undefined,
  menuProps: undefined,
  socialLinks: undefined,
  selectProps: undefined,
};
export default MobileNavigation;
