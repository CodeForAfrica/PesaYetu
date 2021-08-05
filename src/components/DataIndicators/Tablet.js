import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

const TabletScreen = ({ items, title, ...props }) => {
  const [currentTitle, setCurrentTitle] = useState("Overview");
  const [currentDescription, setCurrentDescription] = useState(
    "This includes general county data. Topics include administrative and political units, population size and composition, land use, tourism and wildlife, industry and trade, finance, and education."
  );
  const classes = useStyles(props);

  const handleChange = ({ description, title: itemTitle }) => {
    setCurrentTitle(itemTitle);
    setCurrentDescription(description);
  };

  return (
    <Grid container className={classes.mdContainer}>
      <Grid item md={7}>
        <Typography className={classes.sectionTitle}>{title}</Typography>
        <Grid>
          {items?.map((item) => (
            <Grid container>
              <div
                className={`${classes.imageContainer} ${classes.mdImageContainer}`}
              >
                <Image
                  className={classes.image}
                  src={item.image}
                  layout="fill"
                  onClick={() => handleChange(item)}
                />
              </div>
              <Typography className={`${classes.text} ${classes.mdText}`}>
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={5} className={classes.mdDescription}>
        <Typography className={classes.title}>{currentTitle}</Typography>
        <Typography className={classes.description}>
          {currentDescription}
        </Typography>
      </Grid>
    </Grid>
  );
};

TabletScreen.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

TabletScreen.defaultProps = {
  title: undefined,
  items: undefined,
};

export default TabletScreen;
