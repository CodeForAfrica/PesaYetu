import { A } from "@commons-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    paddingTop: typography.pxToRem(44.41),
    minHeight: typography.pxToRem(300),
    [breakpoints.up("md")]: {
      minHeight: typography.pxToRem(290),
    },
    [breakpoints.up("lg")]: {
      paddingTop: typography.pxToRem(46.07),
      paddingLeft: typography.pxToRem(119),
    },
  },
  link: {
    display: "block",
  },
  description: {
    marginTop: typography.pxToRem(40.01),
  },
}));

function MainPartner({ link, logo, name, description, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <A className={classes.link} href={link}>
        <Image width={212.92} height={123.37} src={logo.url} alt={name} />
      </A>
      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>
    </div>
  );
}

MainPartner.propTypes = {
  link: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.shape({
    url: PropTypes.string,
  }),
  name: PropTypes.string,
};

MainPartner.defaultProps = {
  link: undefined,
  logo: undefined,
  name: undefined,
  description: undefined,
};
export default MainPartner;
