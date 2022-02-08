import { LogoButton } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles/colorManipulator";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(
  ({ breakpoints, palette, transitions, typography }) => ({
    root: {
      padding: `${typography.pxToRem(56.69)} 0`,
    },
    content: {
      justifyContent: "center",
      [breakpoints.up("md")]: {
        justifyContent: "flex-start",
      },
    },
    title: {
      textAlign: "center",
      marginBottom: typography.pxToRem(49.38),
      [breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
    partner: {
      justifyContent: "center",
      transition: transitions.create("box-shadow", {
        easing: transitions.easing.easeOut,
      }),
      "&:hover": {
        boxShadow: `0px 3px 6px ${alpha(palette.common.black, 0.16)}`, // #00000029
        filter: "unset",
      },
      filter: "grayscale(1)",
      "& img": {
        transition: transitions.create("filter", {
          easing: transitions.easing.easeOut,
        }),
      },
    },
    logo: {
      margin: "0 auto ",
    },
  })
);

function ProjectPartners({ title, partners, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Grid container className={classes.content} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        {partners?.map(({ link, logo, logoProps, name }) => (
          <Grid key={link} item md={6}>
            <LogoButton
              component={Link}
              href={link}
              className={classes.partner}
            >
              <Image
                objectFit="contain"
                src={logo.url}
                {...logoProps}
                alt={name}
                className={classes.logo}
              />
            </LogoButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ProjectPartners.propTypes = {
  title: PropTypes.string,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      logo: PropTypes.shape({
        url: PropTypes.string,
      }),
      logoProps: PropTypes.shape({}),
      name: PropTypes.string,
    })
  ),
};

ProjectPartners.defaultProps = {
  title: undefined,
  partners: undefined,
};
export default ProjectPartners;
