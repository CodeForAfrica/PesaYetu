import { A } from "@commons-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {
    paddingTop: typography.pxToRem(56.69),
    paddingBottom: typography.pxToRem(80),
    background: palette.grey.light,
  },
  section: {},
  title: {
    fontWeight: 900,
    color: palette.grey.dark,
    marginBottom: typography.pxToRem(49.38),
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  link: {
    display: "inline-block",
    marginLeft: typography.pxToRem(16),
    marginRight: typography.pxToRem(16),

    [breakpoints.between("xs", "sm")]: {
      "&:nth-of-type(3n)": {
        marginRight: typography.pxToRem(0),
      },
      "&:first-of-type, &:nth-of-type(4n)": {
        marginLeft: typography.pxToRem(0),
      },
    },
    [breakpoints.only("md")]: {
      "&:nth-of-type(3n)": {
        marginRight: typography.pxToRem(0),
      },
      "&:first-of-type, &:nth-of-type(4n)": {
        marginLeft: typography.pxToRem(0),
      },
    },
    [breakpoints.up("lg")]: {
      "&:last-of-type, &:nth-of-type(7n)": {
        marginRight: typography.pxToRem(0),
      },
      "&:first-of-type, &:nth-of-type(8n)": {
        marginLeft: typography.pxToRem(0),
      },
    },
    flexShrink: 0,
  },

  logo: {
    margin: "0",
  },
}));
function Index({ title, items, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.logoContainer}>
          {items?.map(({ link, logo, name }) => (
            <A key={link} className={classes.link} href={link}>
              <Image
                className={classes.logo}
                objectFit="contain"
                width={138}
                height={64}
                src={logo}
                alt={name}
              />
            </A>
          ))}
        </div>
      </Section>
    </div>
  );
}

Index.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      logo: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

Index.defaultProps = {
  title: undefined,
  items: undefined,
};
export default Index;
