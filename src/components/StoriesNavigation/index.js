import { Hidden, Divider, List, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    margin: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(60),
    },
  },
  section: {},
  divider: {
    display: "flex",
    marginTop: typography.pxToRem(-3.5),
    height: typography.pxToRem(2),
  },
  list: {
    listStyle: "none",
    display: "flex",
    padding: 0,
  },
  listItemLink: {
    float: "left",
    color: "#666666",
    fontFamily: typography.h1.fontFamily,
    fontSize: typography.pxToRem(16),
    fontWeight: 600,
    textTransform: "uppercase",
    margin: `0 ${typography.pxToRem(40)} 0 0`,
  },
  activeLink: {
    color: palette.primary.main,
    borderBottom: "2px solid",
  },
  listItemText: {
    paddingBottom: typography.pxToRem(6),
  },
}));

function ListItemLink(props) {
  const classes = useStyles();
  return (
    <Link {...props} variant="subtitle2" className={classes.listItemLink} />
  );
}

function StoriesNavigation({ categories, activeCategory, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <List classes={{ root: classes.list }}>
          {categories?.map(({ slug, name }) => (
            <ListItemLink underline="none" href={`/stories/${slug}`} key={slug}>
              <ListItemText
                disableTypography
                className={clsx(classes.listItemText, {
                  [classes.activeLink]: slug === activeCategory,
                })}
              >
                {name}
              </ListItemText>
            </ListItemLink>
          ))}
        </List>
        <Hidden smDown implementation="css">
          <Divider className={classes.divider} />
        </Hidden>
      </Section>
    </div>
  );
}

StoriesNavigation.propTypes = {
  activeCategory: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

StoriesNavigation.defaultProps = {
  activeCategory: undefined,
  categories: undefined,
};

export default StoriesNavigation;
