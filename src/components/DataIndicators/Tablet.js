import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Icon from "./Icon";
import useStyles from "./useStyles";

const TabletScreen = ({ items, title, ...props }) => {
  const [currentTitle, setCurrentTitle] = useState(items[0].title);
  const [currentDescription, setCurrentDescription] = useState(
    items[0].description
  );
  const [currentSelect, setCurrentSelect] = useState("");

  const classes = useStyles(props);

  const handleChange = ({ description, title: itemTitle }) => {
    if (description) {
      setCurrentTitle(itemTitle);
      setCurrentDescription(description);
    } else {
      setCurrentSelect("");
    }
  };

  return (
    <Grid container className={classes.mdContainer}>
      <Grid item md={7}>
        <Typography className={classes.sectionTitle}>{title}</Typography>
        <Grid>
          {items?.map((item) => (
            <Icon
              item={item}
              handleChange={handleChange}
              currentSelect={currentSelect}
              setCurrentSelect={setCurrentSelect}
              screen="tablet"
            />
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
