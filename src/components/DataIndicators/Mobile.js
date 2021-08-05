import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const MobileScreen = ({ title, items, ...props }) => {
  const classes = useStyles(props);

  return (
    <Grid>
      <Typography className={`${classes.sectionTitle} ${classes.smTitle}`}>
        {title}
      </Typography>
      <div>
        {items?.map((item) => (
          <Grid container>
            <div
              className={`${classes.imageContainer} ${classes.mdImageContainer}`}
            >
              <Image className={classes.image} src={item.image} layout="fill" />
            </div>
            <Typography className={`${classes.text} ${classes.mdText}`}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </div>
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
