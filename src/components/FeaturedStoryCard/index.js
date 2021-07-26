import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

function FeaturedStoryCard({
  ctaText,
  description,
  href,
  image,
  title,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={7}>
        <div className={classes.media}>
          <Image src={image} alt={title} layout="fill" />
        </div>
      </Grid>
      <Grid item xs={12} md={5} className={classes.content}>
        {title && (
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        )}
        {description && (
          <RichTypography variant="body2" className={classes.description}>
            {description}
          </RichTypography>
        )}
        {href && (
          <Link href={href} underline="always" variant="subtitle2">
            {ctaText}
          </Link>
        )}
      </Grid>
    </Grid>
  );
}

FeaturedStoryCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  ctaText: PropTypes.string,
};
FeaturedStoryCard.defaultProps = {
  description: undefined,
  title: undefined,
  image: undefined,
  href: undefined,
  ctaText: undefined,
};
export default FeaturedStoryCard;