import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Link, MenuList, MenuItem, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/images/logos/pesayetu.png';
import Dropdown from './PortalDropdown';

import Search from '../Search';
import PortalChooser from '../Modal/PortalChooser';
import ContactUs from '../Modal/ContactUs';

import Modal from '../Modal';
import useToggleModal from '../../useToggleModal';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  wrapper: {
    padding: '1.875rem',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '1.875rem 0',
      maxWidth: '81.3571429rem',
      margin: '0 auto'
    }
  },
  topMenuNav: {
    flexWrap: 'nowrap',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      position: 'absolute',
      top: '6.25rem',
      left: 0,
      display: 'none'
    }
  },
  topMenuIcon: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block'
    }
  },
  topMenuIconImg: {
    marginRight: '-0.625rem'
  },
  menuList: {
    width: '100%',
    display: 'flex',
    letterSpacing: '0.175rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingTop: '0.625rem'
    }
  },
  menuListItem: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  img: {
    height: '2.572rem',
    marginTop: '0.3rem',
    maxWidth: 'unset'
  },
  logoLink: {
    position: 'relative',
    marginRight: '5.6rem'
  },
  link: {}
});

function Navigation({ classes, width }) {
  const { open: openPortal, toggleModal: togglePortal } = useToggleModal(
    'portal'
  );
  const { open: openSearch, toggleModal: toggleSearch } = useToggleModal(
    'search'
  );
  const { open: openMenu, toggleModal: toggleMenu } = useToggleModal('menu');
  const { open: openContact, toggleModal: toggleContact } = useToggleModal(
    'contact'
  );

  const renderMenuList = () => (
    <MenuList className={classes.menuList}>
      {[
        { title: 'About', link: '#' },
        { title: 'Showcase', link: `#` },
        { title: 'Resources', link: '#' },
        { title: 'Contact', onClick: toggleContact }
      ].map(menu => (
        <MenuItem key={menu.title} className={classes.menuListItem}>
          <Link
            variant="body1"
            className={classes.link}
            href={menu.link}
            onClick={menu.onClick}
          >
            {menu.title}
          </Link>
        </MenuItem>
      ))}
    </MenuList>
  );

  const renderBrand = () => (
    <Link
      component="a"
      href="/"
      style={{ position: 'relative', marginRight: '50px' }}
    >
      <img alt="Pesa Yetu" src={logo} className={classes.img} />
    </Link>
  );

  const renderMobileMenu = () => {
    const Topbar = () => (
      <Grid
        container
        direction="row"
        wrap="nowrap"
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        {renderBrand()}
        <IconButton
          disableRipple
          aria-label="Menu"
          onClick={openContact ? toggleContact : toggleMenu}
        >
          {openMenu || openContact ? <ArrowBackIcon /> : <MenuIcon />}
        </IconButton>
      </Grid>
    );

    return (
      <>
        <Topbar />

        <Modal isOpen={openMenu} onEscapeKeyDown={toggleMenu}>
          <Grid container className={classes.wrapper}>
            <Topbar />
            <Search placeholder="Search">
              <Dropdown />
              {renderMenuList()}
            </Search>
          </Grid>
        </Modal>
      </>
    );
  };

  const renderDesktopMenu = () => (
    <Grid
      container
      direction="row"
      wrap="nowrap"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      {renderBrand()}
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        wrap="nowrap"
        alignItems="center"
        className={classes.topMenuNav}
      >
        <IconButton
          disableRipple
          aria-label="Search"
          onClick={toggleSearch}
          style={{
            marginLeft: 60
          }}
        >
          <SearchIcon />
        </IconButton>
        {renderMenuList()}
      </Grid>
    </Grid>
  );

  const nav = isWidthDown('sm', width)
    ? renderMobileMenu()
    : renderDesktopMenu();

  return (
    <>
      <Grid container className={classes.wrapper}>
        {nav}
      </Grid>
      <Modal isOpen={openSearch} onEscapeKeyDown={toggleSearch}>
        <Grid container className={classes.wrapper}>
          {nav}
          <Search handleIconClick={toggleSearch} />
        </Grid>
      </Modal>
      <Modal isOpen={openPortal} onEscapeKeyDown={togglePortal}>
        <Grid container className={classes.wrapper}>
          {nav}
          <PortalChooser handleClose={togglePortal} />
        </Grid>
      </Modal>
      <Modal isOpen={openContact} onEscapeKeyDown={toggleContact}>
        <Grid container className={classes.wrapper}>
          {nav}
          <ContactUs handleClose={toggleContact} />
        </Grid>
      </Modal>
    </>
  );
}

Navigation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(Navigation));
