import {
  Select,
  Typography,
  InputBase,
  FormControl,
  InputLabel,
  IconButton,
  SvgIcon,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { ReactComponent as SearchClose } from '@/pesayetu/assets/search-close.svg';
import { ReactComponent as SearchOpen } from '@/pesayetu/assets/search-open.svg';

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 0,
    backgroundColor: palette.primary.main,
    padding: '2rem',
  },
  formControl: {
    paddingTop: typography.pxToRem(40),
    paddingBottom: typography.pxToRem(16),
    [breakpoints.up('md')]: {
      padding: `${typography.pxToRem(40)} 0`,
    },
  },
  form: {
    paddingTop: typography.pxToRem(40),
    paddingBottom: typography.pxToRem(16),
    [breakpoints.up('md')]: {
      padding: `${typography.pxToRem(40)} 0`,
    },
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
  // TODO nyokabi Reference => https://github.com/mui-org/material-ui/issues/11244
  focused: {
    color: 'white',
  },
  searchClose: {
    color: 'white',
  },
  buttonRoot: {},
  button: {
    marginTop: '2rem',
  },
  title: {
    color: 'white',
    padding: '2rem',
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
  menu: {
    padding: '0.5rem 0rem',
  },
  inputBase: {
    padding: typography.pxToRem(2),
    borderRadius: typography.pxToRem(4),
    color: 'black',
    backgroundColor: 'white',
    boxShadow: '0px 1px 4px #15223214',
    height: typography.pxToRem(42),
    width: typography.pxToRem(243),
    [breakpoints.up('md')]: {
      width: typography.pxToRem(186),
    },
  },
  inputBaseInput: {
    textAlign: 'left',
    paddingLeft: typography.pxToRem(16),
    fontSize: typography.pxToRem(12),
    width: '100%',
    'label[data-shrink=false] + .MuiInputBase-formControl &::placeholder': {
      opacity: '0.5!important',
    },
  },
}));

const items = [
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
/* 
const item = [
  {
    country: 'country 1',
    items: [
      {
        name: 'subcounty-1',
        href: 'olivia',
      },
    ],
  },
  {
    country: 'country 2',
    items: [
      {
        name: 'subcounty-2',
        href: '/',
      },
    ],
  },
]; */

export default function SelectSearch() {
  const classes = useStyles();
  const [value, setValue] = React.useState([]);
  const [open, setOpen] = React.useState(false);

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
        padding: '0 7.5px',
        boxShadow: '0px 1px 4px #15223214',
        border: '1px solid #00000000',
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
      <FormControl className={classes.formControl}>
        <InputLabel
          shrink={false}
          htmlFor="label"
          classes={{
            root: classes.label,
            focused: classes.focused,
          }}
        >
          Search for the location
        </InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
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
                  Abc....
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
          }}
        >
          {items.map((item) => (
            <div key={item} value={item} className={classes.menu}>
              <Typography variant="body2">{item}</Typography>
            </div>
          ))}
        </Select>
      </FormControl>
      <div className={classes.buttonRoot}>
        {open ? (
          <IconButton
            size="large"
            onClick={handleOpen}
            aria-label="open"
            className={classes.button}
          >
            <SvgIcon component={SearchClose} className={classes.searchClose} />
          </IconButton>
        ) : (
          <IconButton
            size="large"
            onClick={handleOpen}
            aria-label="open"
            className={classes.button}
          >
            <SvgIcon component={SearchOpen} />
          </IconButton>
        )}
      </div>
    </Grid>
  );
}
