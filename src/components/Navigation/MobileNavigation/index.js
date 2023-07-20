import LogoButton from "@commons-ui/core/LogoButton";
import {
  Grid,
  Slide,
  Dialog,
  DialogActions,
  IconButton,
  DialogContent,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";

import SearchIcon from "@/pesayetu/assets/icons/search-open.svg";
import MenuCloseIcon from "@/pesayetu/assets/menu_close.svg";
import MenuOpenIcon from "@/pesayetu/assets/menu_open.svg";
import DropdownSearch from "@/pesayetu/components/DropdownSearch";
import Link from "@/pesayetu/components/Link";
import Menu from "@/pesayetu/components/Menu";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {},
  logoButton: {
    padding: 0,
    width: typography.pxToRem(254),
  },
  section: {},
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
    padding: `${typography.pxToRem(10)} 0`,
  },
  backdrop: {
    backgroundColor: "transparent",
    maxHeight: typography.pxToRem(844),
  },
  dialogActions: {
    padding: 0,
  },
  dialogContent: {
    overflow: "hidden",
    padding: `${typography.pxToRem(40)} 0`,
  },
  dialogMenu: {
    padding: `${typography.pxToRem(10.35)} 0`,
  },
  dialogPaper: {
    background: palette.primary.main,
    maxHeight: typography.pxToRem(844),
    position: "absolute",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  menuButton: {
    color: palette.grey.dark,
    background: "#F0F0F0",
    borderRadius: typography.pxToRem(50),
    height: typography.pxToRem(34),
    padding: 0,
    width: typography.pxToRem(34),
    "&:hover": {
      background: "#F0F0F0",
      borderRadius: typography.pxToRem(50),
    },
  },
  closeButton: {
    color: palette.background.main,
    height: typography.pxToRem(34),
    padding: 0,
    width: typography.pxToRem(34),
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
    color: palette.background.default,
    fontSize: typography.pxToRem(32),
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
  search: {
    margin: `${typography.pxToRem(20)} 0 ${typography.pxToRem(60)}`,
  },
  searchInput: {
    border: `2px solid ${palette.background.default}`,
    backgroundColor: palette.background.default,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" timeout={1000} ref={ref} {...props} />;
});

function MobileNavigation({
  logoProps,
  menuProps,
  mobileLogoProps,
  drawerLogoProps,
  socialLinks,
  href,
  ...props
}) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClickOpen = (e) => {
    e?.preventDefault();
    setOpen(true);
  };
  const handleClose = (e) => {
    e?.preventDefault();
    setOpen(false);
  };

  const handleClickSearch = (code) => {
    setOpen(false);
    router.push(`${href}/${code}`);
  };

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={10}>
            <LogoButton
              href="/"
              component={Link}
              className={classes.logoButton}
            >
              <Image {...mobileLogoProps} />
            </LogoButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="Open drawer"
              edge="start"
              size="medium"
              onClick={handleClickOpen}
              className={classes.menuButton}
            >
              <Image
                src={MenuOpenIcon}
                width={24}
                height={24}
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
              <Section className={classes.section}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  className={classes.logoSection}
                >
                  <Grid item xs={10}>
                    <LogoButton
                      href="/"
                      component={Link}
                      className={classes.logoButton}
                    >
                      <Image {...drawerLogoProps} />
                    </LogoButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      aria-label="Close drawer"
                      edge="end"
                      size="medium"
                      onClick={handleClose}
                      className={classes.closeButton}
                    >
                      <Image src={MenuCloseIcon} width={24} height={24} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Section>
            </DialogActions>
            <DialogContent className={classes.dialogContent}>
              <Section className={classes.section}>
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
                  <DropdownSearch
                    classes={{
                      root: classes.search,
                      inputRoot: classes.searchInput,
                    }}
                    icon={SearchIcon}
                    onClick={handleClickSearch}
                    {...props}
                  />
                </Menu>
              </Section>
            </DialogContent>
          </Dialog>
        </Grid>
      </Section>
    </div>
  );
}

MobileNavigation.propTypes = {
  drawerLogoProps: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  href: PropTypes.string,
  logoProps: PropTypes.shape({}),
  menuProps: PropTypes.arrayOf(PropTypes.shape({})),
  mobileLogoProps: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  socialLinks: PropTypes.arrayOf(PropTypes.shape({})),
};

MobileNavigation.defaultProps = {
  drawerLogoProps: undefined,
  href: "/explore",
  logoProps: undefined,
  menuProps: undefined,
  mobileLogoProps: undefined,
  socialLinks: undefined,
};

export default MobileNavigation;
