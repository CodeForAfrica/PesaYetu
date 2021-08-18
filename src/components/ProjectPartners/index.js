import { LogoButton } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    padding: `${typography.pxToRem(56.69)} 0`,
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
    "&:hover": {
      boxShadow: "0px 3px 6px #00000029",
    },
    "& img": {
      filter: "grayscale(1)",
      "&:hover": {
        filter: "unset",
      },
    },
  },
  logo: {
    margin: "0 auto ",
  },
}));

function ProjectPartners({ title, partners, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        {partners?.map(({ link, logo, name }) => (
          <Grid key={link} item xs={12} md={6}>
            <LogoButton
              component={Link}
              href={link}
              className={classes.partner}
            >
              <Image
                objectFit="contain"
                width={310}
                height={224}
                src={logo.url}
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
      name: PropTypes.string,
    })
  ),
};

ProjectPartners.defaultProps = {
  title: undefined,
  partners: undefined,
};
export default ProjectPartners;
