import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import SearchIcon from "@/pesayetu/assets/icons/search-explore.svg";
import DropdownSearch from "@/pesayetu/components/DropdownSearch";
import Logo from "@/pesayetu/components/Logo";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {},
  section: {},
  help: {
    color: "#666666",
    textAlign: "center",
    backgroundColor: "#EBEBEB",
    borderRadius: typography.pxToRem(60),
    marginLeft: typography.pxToRem(20),
    width: typography.pxToRem(48),
    height: typography.pxToRem(48),
  },
  searchLabel: {
    display: "none",
  },
  searchInput: {
    borderRadius: 0,
    padding: `0 ${typography.pxToRem(10)}`,
    color: "#959696",
    textTransform: "initial",
    "&::placeholder": {
      opacity: 1,
    },
  },
  searchInputRoot: {
    borderRadius: 0,
    backgroundColor: palette.background.paper,
    borderColor: palette.background.default,
  },
  selectMenu: {
    borderRadius: 0,
    border: 0,
    background: palette.background.paper,
    marginTop: typography.pxToRem(2),
  },
  searchMenuItem: {
    "&:hover": {
      color: palette.text.secondary,
      background: palette.primary.main,
    },
  },
}));

function ExploreNavigation({ logoProps, ...props }) {
  const classes = useStyles(props);
  const openTooltip = () => {
    // tooltip
  };
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Logo {...logoProps} />
          </Grid>
          <Grid
            item
            xs={9}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <DropdownSearch
              {...props}
              icon={SearchIcon}
              placeholder="Search for a Location" // TODO: Read from cms
              classes={{
                inputRoot: classes.searchInputRoot,
                input: classes.searchInput,
                label: classes.searchLabel,
                selectMenu: classes.selectMenu,
                menuItem: classes.searchMenuItem,
              }}
            />
            <Typography
              component="div"
              onClick={openTooltip}
              variant="h3"
              className={classes.help}
            >
              ?
            </Typography>
          </Grid>
          <Grid />
        </Grid>
      </Section>
    </div>
  );
}

ExploreNavigation.propTypes = {
  logoProps: PropTypes.shape({}),
};

ExploreNavigation.defaultProps = {
  logoProps: undefined,
};

export default ExploreNavigation;
