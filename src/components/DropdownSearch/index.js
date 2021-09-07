import {
  IconButton,
  InputBase,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import SearchIcon from "@/pesayetu/assets/icons/search.svg";
import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {},
  inputRoot: {
    borderRadius: typography.pxToRem(10),
    color: palette.primary.main,
    border: `2px solid ${palette.text.hint}`,
    width: typography.pxToRem(278),
  },
  focused: {
    border: `2px solid ${palette.primary.main}`,
  },
  label: {
    color: palette.text.secondary,
    marginBottom: typography.pxToRem(10),
  },
  button: {
    padding: 0,
    marginLeft: typography.pxToRem(15),
  },
  input: {
    backgroundColor: "inherit",
    height: typography.pxToRem(48),
    borderRadius: typography.pxToRem(10),
    padding: `0 ${typography.pxToRem(20)}`,
    textTransform: "capitalize",
  },
  suggestions: {
    position: "relative",
  },
  selectMenu: {
    width: typography.pxToRem(278),
    position: "absolute",
    marginTop: typography.pxToRem(5),
    zIndex: 1,
    background: palette.background.default,
    border: `2px solid ${palette.grey.main}`,
    borderRadius: typography.pxToRem(10),
    padding: 0,
    textTransform: "capitalize",
  },
  menuList: {},
  menuItem: {
    paddingLeft: typography.pxToRem(20),
    color: palette.text.hint,
  },
}));

function DropdownSearch({
  href: hrefProp,
  label,
  counties,
  onClick: onClickProp,
  icon: iconProp,
  variant,
  ...props
}) {
  const classes = useStyles(props);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [countyCode, setCountyCode] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setCountyCode(null);
  };

  const handleSelect = (code, name) => {
    setQuery(name.toLowerCase());
    setCountyCode(code);
  };

  useEffect(() => {
    if (query?.length > 2 && !countyCode) {
      const matchedGeo = counties?.filter(({ name }) =>
        name.match(new RegExp(query, "i"))
      );
      setSuggestions(matchedGeo);
    } else {
      setSuggestions([]);
    }
  }, [counties, countyCode, query]);

  const handleSearchClick = () => {
    if (onClickProp) {
      onClickProp(countyCode);
    } else if (hrefProp?.length && countyCode) {
      const href = `${hrefProp}/${countyCode}`;
      router.push(href);
    }
  };

  const icon =
    !suggestions?.length || variant === "explore" ? iconProp : SearchIcon;
  const searchIconButton = (
    <IconButton
      color="primary"
      onClick={handleSearchClick}
      size="small"
      className={classes.button}
    >
      <Image src={icon} width={48} height={48} alt="search" />
    </IconButton>
  );

  console.log(variant);

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.label}>
        {label}
      </Typography>
      <InputBase
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        placeholder={variant === "explore" ? label : ""}
        value={query}
        {...props}
        classes={{
          root: classes.inputRoot,
          input: classes.input,
          focused: classes.focused,
        }}
        endAdornment={variant === "explore" ? searchIconButton : null}
      />
      {variant !== "explore" && searchIconButton}

      <div className={classes.suggestions}>
        {suggestions?.length > 0 && (
          <List classes={{ root: classes.selectMenu }}>
            {suggestions.map(({ name, code }) => (
              <ListItem
                component={Link}
                variant="subtitle1"
                underline="none"
                onClick={() => handleSelect(code, name)}
                classes={{ root: classes.menuItem }}
              >
                {name.toLowerCase()}
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
}

DropdownSearch.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  counties: PropTypes.arrayOf(PropTypes.shape({})),
  variant: PropTypes.string,
};

DropdownSearch.defaultProps = {
  label: "Search for a location",
  href: "/explore",
  onClick: undefined,
  icon: SearchIcon,
  counties: undefined,
  variant: undefined,
};

export default DropdownSearch;
