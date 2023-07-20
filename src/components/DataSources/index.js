import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Header from "@/pesayetu/components/Header";
import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";

function DataSources({ items, title, subtitle, image, ...props }) {
  const classes = useStyles(props);

  if (!items || !items.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} lg={4}>
            <Header subtitle={subtitle} className={classes.title} variant="h2">
              {title}
            </Header>
            {items.map(({ title: dataSourceTitle, href }) => (
              <Typography variant="body2" className={classes.linkWrapper}>
                <Link underline="always" href={href}>
                  {dataSourceTitle}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Image height={572} width={572} src={image} alt={title} />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

DataSources.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  subtitle: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};

DataSources.defaultProps = {
  items: undefined,
  subtitle: undefined,
  title: undefined,
  image: undefined,
};

export default DataSources;
