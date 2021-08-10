import { A } from "@commons-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    paddingTop: typography.pxToRem(56.69),
    paddingBottom: typography.pxToRem(80),
    background: palette.grey.light,
  },
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
    marginLeft: typography.pxToRem(12),
    marginRight: typography.pxToRem(12),
    flexShrink: 0,
  },
  logo: {
    margin: "0",
  },
}));
function Index({ title, partners, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section>
        <div>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        </div>
        <div className={classes.logoContainer}>
          {partners?.map(({ link, logo, name }) => (
            <A key={link} className={classes.link} href={link}>
              <Image
                className={classes.logo}
                objectFit="contain"
                width={138}
                height={64}
                src={logo.url}
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
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      logo: PropTypes.shape({
        url: PropTypes.string,
      }),
      name: PropTypes.string,
    })
  ),
};

Index.defaultProps = {
  title: undefined,
  partners: undefined,
};
export default Index;
