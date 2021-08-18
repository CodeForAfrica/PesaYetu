import { LogoButton, RichTypography } from "@commons-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    flexGrow: 1,
    padding: `${typography.pxToRem(46)} 0 ${typography.pxToRem(70)}`,
    [breakpoints.only("md")]: {
      padding: `${typography.pxToRem(44)} 0 ${typography.pxToRem(42)}`,
    },
  },
  content: {
    width: typography.pxToRem(278),
    [breakpoints.up("md")]: {
      width: typography.pxToRem(268),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(278),
    },
  },
  logo: {
    display: "block",
    height: typography.pxToRem(123.37),
    width: typography.pxToRem(212.92),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(118.94),
      width: typography.pxToRem(205.28),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(123.37),
      width: typography.pxToRem(212.92),
    },
  },
  description: {
    marginTop: typography.pxToRem(40.01),
  },
}));

function MainPartner({ className, description, link, logo, name, ...props }) {
  const classes = useStyles(props);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
        <LogoButton component={Link} href={link} className={classes.logo}>
          <Image layout="fill" src={logo.url} alt={name} />
        </LogoButton>
        <RichTypography variant="body2" className={classes.description}>
          {description}
        </RichTypography>
      </div>
    </Box>
  );
}

MainPartner.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.shape({
    url: PropTypes.string,
  }),
  name: PropTypes.string,
};

MainPartner.defaultProps = {
  className: undefined,
  description: undefined,
  link: undefined,
  logo: undefined,
  name: undefined,
};
export default MainPartner;
