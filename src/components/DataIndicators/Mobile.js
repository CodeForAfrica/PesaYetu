import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const MobileScreen = ({ title, items, ...props }) => {
  const classes = useStyles(props);

  return (
    <Grid className={classes.smContainer}>
      <RichTypography className={clsx(classes.sectionTitle, classes.smTitle)}>
        {title}
      </RichTypography>
      <Grid container>
        {items?.map((item) => (
          <Grid item key={item.title} className={classes.smItem}>
            <div
              className={clsx(classes.imageContainer, classes.mdImageContainer)}
            >
              <Image className={classes.image} src={item.image} layout="fill" />
            </div>
            <Typography className={clsx(classes.text, classes.mdText)}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

MobileScreen.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

MobileScreen.defaultProps = {
  title: undefined,
  items: undefined,
};

export default MobileScreen;
