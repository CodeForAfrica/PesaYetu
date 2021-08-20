import { RichTypography } from "@commons-ui/core";
import {
  Select,
  Typography,
  InputBase,
  FormControl,
  IconButton,
  SvgIcon,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: typography.pxToRem(56),
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  form: {
    paddingTop: typography.pxToRem(40),
    paddingBottom: typography.pxToRem(16),
  },
  title: {
    color: "white",
    padding: `${typography.pxToRem(16)} 0 `,
  },
  select: {
    paddingTop: 0,
    paddingBottom: 0,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: palette.background.default,
    },
  },
  icon: {
    padding: typography.pxToRem(32),
  },
  menuPaper: {
    marginTop: typography.pxToRem(24),
  },
  menuMenuList: {
    paddingTop: 0,
  },
  svgIcon: {
    fontSize: typography.pxToRem(48),
    color: palette.background.default,
  },
  button: {
    height: typography.pxToRem(48),
    width: typography.pxToRem(48),
    marginLeft: "1rem",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
    },
  },
  inputBase: {
    padding: typography.pxToRem(2),
    color: palette.primary.main,
    backgroundColor: palette.background.default,
    height: typography.pxToRem(48),
    width: typography.pxToRem(278),
    border: "2px solid #00000000",
    borderRadius: typography.pxToRem(10),
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "white",
    },
  },
  // TODO nyokabi Reference => https://github.com/mui-org/material-ui/issues/11244
  focused: {
    color: palette.background.default,
  },
  inputBaseInput: {
    textAlign: "left",
    paddingLeft: typography.pxToRem(16),
    fontSize: typography.pxToRem(16),
    width: "100%",
    "label[data-shrink=false] + .MuiInputBase-formControl &::placeholder": {
      opacity: "0.5!important",
    },
  },
  label: {
    color: palette.background.default,
    textAlign: "left",
    fontSize: typography.pxToRem(18),
    position: "relative",
    marginBottom: typography.pxToRem(20),
    fontFamily: typography.fontFamily,
    fontWeight: "bold",
    transform: `translate(0, ${typography.pxToRem(0)}) scale(1)`,
    "&$focused": {
      color: palette.background.default,
    },
  },
  country: {
    fontWeight: "bold",
  },
  name: {
    fontWeight: "normal",
  },
  list: {
    fontWeight: "normal",
    listStyleType: "none",
  },
  ul: {
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#1C2030",
    "&:hover, &:focus, &:focus-within": {
      textDecoration: "none",
    },
  },
}));

function DropdownSearch({
  title,
  href: hrefProp,
  onClick: onClickProp,
  placeholder,
  selectId,
  inputBaseId,
  selectLabel,
  openIcon,
  closeIcon,
  menuItems,
  inputBaseLabel,
  ...props
}) {
  const classes = useStyles(props);
  const router = useRouter();
  const [value, setValue] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const viewBoxValue = "0 0 48 48";

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    if (onClickProp) {
      onClickProp(value);
    } else if (hrefProp?.length) {
      const href = `${hrefProp}/${value}`;
      router.push(href);
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
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
        border: "2px solid #00000000",
        borderRadius: "10px",
      },
      className: classes.menuPaper,
    },
    // TODO Nyokabi => Prevents menu from  attempting to vertically align/or move to currently selected menu item in the select input box
    variant: "menu",
    getContentAnchorEl: null,

    // Popover props
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center",
    },
  };

  return (
    <div className={classes.root}>
      <RichTypography variant="body1" className={classes.title}>
        {title}
      </RichTypography>
      <FormControl className={classes.formControl}>
        <Select
          labelId={selectLabel}
          id={selectId}
          displayEmpty
          defaultValue=""
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          onClick={handleClick}
          value={value}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0 && open) {
              return <Typography variant="body2">{placeholder}</Typography>;
            }
            return selected;
          }}
          input={
            <InputBase
              id={inputBaseId}
              onKeyDown={handleKeyDown}
              inputProps={{ "aria-label": inputBaseLabel }}
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
          {menuItems?.map(({ countryName, countryUrl, items }) => (
            <div key={countryName} value={countryName} className={classes.menu}>
              <Link
                href={countryUrl}
                key={countryName}
                className={classes.link}
              >
                <Typography variant="body2" className={classes.country}>
                  {countryName}
                </Typography>
              </Link>
              <ul className={classes.ul}>
                {items?.map(({ name, url }) => (
                  <a href={url} key={name} className={classes.link}>
                    <li className={classes.list}>
                      <Typography variant="body2" className={classes.name}>
                        {name}
                      </Typography>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </Select>
        {open ? (
          <IconButton
            size="medium"
            onClick={handleOpen}
            aria-label="open"
            className={classes.button}
          >
            <SvgIcon
              component={closeIcon}
              viewBox={viewBoxValue}
              classes={{
                root: classes.svgIcon,
              }}
            />
          </IconButton>
        ) : (
          <IconButton
            size="medium"
            onClick={handleOpen}
            aria-label="open"
            className={classes.button}
          >
            <SvgIcon
              component={openIcon}
              viewBox={viewBoxValue}
              classes={{
                root: classes.svgIcon,
              }}
            />
          </IconButton>
        )}
      </FormControl>
    </div>
  );
}

DropdownSearch.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  selectId: PropTypes.string,
  inputBaseId: PropTypes.string,
  selectLabel: PropTypes.string,
  inputBaseLabel: PropTypes.string,
  openIcon: PropTypes.func,
  closeIcon: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      countryName: PropTypes.string,
      countryUrl: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    })
  ),
};

DropdownSearch.defaultProps = {
  title: undefined,
  placeholder: undefined,
  href: undefined,
  onClick: undefined,
  openIcon: undefined,
  closeIcon: undefined,
  selectId: undefined,
  inputBaseId: undefined,
  selectLabel: undefined,
  inputBaseLabel: undefined,
  menuItems: undefined,
};

export default DropdownSearch;
