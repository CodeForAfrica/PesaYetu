import { RichTypography } from '@commons-ui/core';
import {
  Select,
  Typography,
  InputBase,
  FormControl,
  IconButton,
  SvgIcon,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { ReactComponent as SearchClose } from '@/pesayetu/assets/search-close.svg';
import { ReactComponent as SearchOpen } from '@/pesayetu/assets/search-open.svg';

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem 0rem',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  form: {
    paddingTop: typography.pxToRem(40),
    paddingBottom: typography.pxToRem(16),
    [breakpoints.up('md')]: {
      padding: `${typography.pxToRem(40)} 0`,
    },
  },
  title: {
    color: 'white',
    padding: '1rem 0rem',
  },
  label: {
    color: 'white',
    textAlign: 'left',
    fontSize: typography.pxToRem(18),
    position: 'relative',
    marginBottom: typography.pxToRem(20),
    fontFamily: typography.fontFamily,
    fontWeight: 'bold',
    transform: `translate(0, ${typography.pxToRem(0)}) scale(1)`,
    '&$focused': {
      color: 'white',
    },
  },
  country: {
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'normal',
  },
  list: {
    fontWeight: 'normal',
    listStyleType: 'none',
  },
  ul: {
    padding: 0,
  },
  // TODO nyokabi Reference => https://github.com/mui-org/material-ui/issues/11244
  focused: {
    color: 'white',
  },
  svgIcon: {
    fontSize: '3rem',
    color: 'white',
  },
  button: {
    height: typography.pxToRem(48),
    width: typography.pxToRem(48),
    marginLeft: '1rem',
    '&:hover, &:focus, &:focus-within': {
      backgroundColor: 'transparent',
    },
  },
  select: {
    paddingTop: 0,
    paddingBottom: 0,
    '&:hover, &:focus, &:focus-within': {
      backgroundColor: 'white',
    },
  },
  noLabel: {
    marginTop: 3,
  },
  inputBase: {
    padding: typography.pxToRem(2),
    color: palette.primary.main,
    backgroundColor: 'white',
    height: typography.pxToRem(48),
    width: typography.pxToRem(278),
    border: '2px solid #00000000',
    borderRadius: '10px',
  },
  inputBaseInput: {
    textAlign: 'left',
    paddingLeft: typography.pxToRem(16),
    fontSize: typography.pxToRem(16),
    'label[data-shrink=false] + .MuiInputBase-formControl &::placeholder': {
      opacity: '0.5!important',
    },
  },
  menuPaper: {
    marginTop: '1.5rem',
  },
  menuMenuList: {
    paddingTop: 0,
  },
  icon: {
    color: 'red',
    padding: '2rem',
  },
}));

/* const items = [
  'country 1',
  'country 2',
  'country 3',
  'country 4',
  'country 5',
  'country 6',
  'country 7',
  'country 8',
  'country 9',
  'country 10',
];
 */
const menuItems = [
  {
    country: 'country 1',
    items: [
      {
        name: 'subcounty-1',
        href: '/',
      },
      {
        name: 'subcounty-2',
        href: '/',
      },
      {
        name: 'subcounty-3',
        href: '/',
      },
    ],
  },
  {
    country: 'country 2',
    items: [
      {
        name: 'subcounty-4',
        href: '/',
      },
      {
        name: 'subcounty-5',
        href: '/',
      },
    ],
  },
  {
    country: 'country 3',
    items: [
      {
        name: 'subcounty-6',
        href: '/',
      },
      {
        name: 'subcounty-7',
        href: '/',
      },
    ],
  },
];

export default function SelectSearch() {
  const classes = useStyles();
  const [value, setValue] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const viewBoxValue = '0 0 48 48';

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const MenuProps = {
    MenuListProps: {
      className: classes.menuMenuList,
    },
    PaperProps: {
      style: {
        width: 287,
        height: 175,
        paddingLeft: 16,
        border: '2px solid #00000000',
        borderRadius: '10px',
      },
      className: classes.menuPaper,
    },
    // TODO Nyokabi => Prevents menu from  attempting to vertically align/or move to currently selected menu item in the select input box
    variant: 'menu',
    getContentAnchorEl: null,

    // Popover props
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
  };

  return (
    <Grid container direction="row" className={classes.root}>
      <RichTypography variant="body2" className={classes.title}>
        Search for location
      </RichTypography>
      <FormControl className={classes.formControl}>
        <Select
          labelId="grouped-data-label"
          id="grouped-data"
          defaultValue=""
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          value={value}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <Typography variant="caption" className={classes.placeholder}>
                  {}
                </Typography>
              );
            }
            return selected;
          }}
          input={
            <InputBase
              id="inputPlace"
              inputProps={{ 'aria-label': 'inputPlace' }}
              placeholder="Search...."
              classes={{
                root: classes.inputBase,
                input: classes.inputBaseInput,
              }}
            />
          }
          MenuProps={MenuProps}
          classes={{
            root: classes.select,
            icon: classes.icon,
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item.country}
              value={item.country}
              className={classes.menu}
            >
              <Typography variant="body2" className={classes.country}>
                {item.country}
              </Typography>
              <ul className={classes.ul}>
                {item.items.map((menu) => (
                  <li className={classes.list}>
                    <Typography variant="body2" className={classes.name}>
                      {menu.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Select>
        {open ? (
          <IconButton
            size="large"
            onClick={handleOpen}
            aria-label="open"
            disableRipple
            disableFocusRipple
            className={classes.button}
          >
            <SvgIcon
              component={SearchClose}
              viewBox={viewBoxValue}
              classes={{
                root: classes.svgIcon,
              }}
            />
          </IconButton>
        ) : (
          <IconButton
            size="large"
            onClick={handleOpen}
            aria-label="open"
            disableRipple
            disableFocusRipple
            className={classes.button}
          >
            <SvgIcon
              component={SearchOpen}
              viewBox={viewBoxValue}
              classes={{
                root: classes.svgIcon,
              }}
            />
          </IconButton>
        )}
      </FormControl>
    </Grid>
  );
}
