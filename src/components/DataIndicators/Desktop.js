import { RichTypography } from "@commons-ui/core";
import { Grid, Typography, Grow } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Icon from "./Icon";
import useStyles from "./useStyles";

const Desktop = ({ items, title, ...props }) => {
  const [checked, setChecked] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentSelect, setCurrentSelect] = useState("");

  const classes = useStyles({ checked, ...props });

  const handleChange = ({ description, title: itemTitle }) => {
    if (description) {
      setCurrentTitle(itemTitle);
      setCurrentDescription(description);
    } else {
      setCurrentSelect("");
    }
    setChecked((prev) => !prev);
  };

  return (
    <Grid container className={classes.container}>
      <Grid container className={classes.indicatorsContainer}>
        <RichTypography className={classes.sectionTitle}>
          {title}
        </RichTypography>
        <div className={classes.iconContainer}>
          {items?.map((item) => (
            <Icon
              handleChange={handleChange}
              item={item}
              currentSelect={currentSelect}
              setCurrentSelect={setCurrentSelect}
            />
          ))}
        </div>
      </Grid>
      <Grow in={checked} onClick={handleChange} className={classes.transition}>
        <div className={classes.descriptionSection}>
          <Typography className={classes.desktopTitle}>
            {currentTitle}
          </Typography>
          <RichTypography className={classes.description}>
            {currentDescription}
          </RichTypography>
        </div>
      </Grow>
    </Grid>
  );
};

Desktop.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

Desktop.defaultProps = {
  title: undefined,
  items: undefined,
};

export default Desktop;
