import { Grid, Typography, Grow, Hidden } from "@material-ui/core";
// import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Icon from "./Icon";
import Mobile from "./Mobile";
import Tablet from "./Tablet";
import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";

const DataIndicators = ({ title, items, ...props }) => {
  const [checked, setChecked] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const classes = useStyles({ checked, ...props });

  const handleChange = ({ description, title: itemTitle }) => {
    setCurrentTitle(itemTitle);
    setCurrentDescription(description);
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <Section>
        <Hidden mdDown>
          <Grid container className={classes.container}>
            <Grid container className={classes.indicatorsContainer}>
              <Typography className={classes.sectionTitle}>{title}</Typography>
              <div className={classes.iconContainer}>
                {items?.map((item) => (
                  <Icon handleChange={handleChange} item={item} />
                  // <Grid key={item.title} item className={classes.item}>
                  //   <div className={classes.imageContainer}>
                  //     <Image
                  //       className={classes.image}
                  //       src={item.image}
                  //       layout="fill"
                  //       onClick={() => handleChange(item)}
                  //     />
                  //   </div>
                  //   <Typography className={classes.text}>
                  //     {item.title}
                  //   </Typography>
                  // </Grid>
                ))}
              </div>
            </Grid>
            <Grow
              in={checked}
              onClick={handleChange}
              className={classes.transition}
            >
              <div className={classes.descriptionSection}>
                <Typography className={classes.title}>
                  {currentTitle}
                </Typography>
                <Typography className={classes.description}>
                  {currentDescription}
                </Typography>
              </div>
            </Grow>
          </Grid>
        </Hidden>

        <Hidden smUp>
          <Mobile items={items} title={title} />
        </Hidden>
      </Section>
      <Hidden lgUp smDown>
        <Tablet items={items} title={title} />
      </Hidden>
    </div>
  );
};

DataIndicators.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

DataIndicators.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataIndicators;
