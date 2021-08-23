import { Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import useStyles from "./useStyles";

import Header from "@/pesayetu/components/Header";
import Section from "@/pesayetu/components/Section";

const DataSource = ({ items, title, subtitle, ...props }) => {
  const classes = useStyles(props);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((selectedIndex + 1) % items?.length);
    }, 1000);
    return () => clearInterval(interval);
  });

  if (!items || !items.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid justifyContent="space-between" container>
          <Grid item xs={12} lg={4}>
            <Header subtitle={subtitle} className={classes.title} variant="h2">
              {title}
            </Header>
            {}
          </Grid>
          <Grid item xs={12} lg={6} justifyContent="center" alignItems="center">
            <Image
              src={items[selectedIndex].img}
              alt={items[selectedIndex].title}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

DataSource.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

DataSource.defaultProps = {
  items: undefined,
  subtitle: undefined,
  title: undefined,
};

export default DataSource;
