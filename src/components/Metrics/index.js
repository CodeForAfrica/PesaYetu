import { RichTypography } from "@commons-ui/core";
import { IconButton, Grid, Box } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import DataVisualCard from "@/pesayetu/components/DataVisualCard";
import Section from "@/pesayetu/components/Section";

function Metrics({ items, title, ...props }) {
  const classes = useStyles(props);
  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <RichTypography variant="h2" className={classes.title}>
          {title}
        </RichTypography>
        {items?.map((item, index) => (
          <Grid
            key={item.title}
            container
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            justifyContent="space-between"
            alignItems="flex-start"
            className={classes.metrics}
          >
            <Grid item xs={12} md={5} lg={3}>
              <Box container display="flex" alignItems="center">
                <IconButton color="primary" size="small">
                  <Image src={item.icon} width={44} height={44} />
                </IconButton>
                <RichTypography variant="h4" className={classes.title}>
                  {item.title}
                </RichTypography>
              </Box>
              <RichTypography variant="body2" className={classes.description}>
                {item.description}
              </RichTypography>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              lg={8}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <DataVisualCard
                {...item.dataVisualProps}
                classes={{
                  root: classes.card,
                  cardMedia: classes.cardMedia,
                  content: classes.content,
                  image: classes.image,
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Section>
    </div>
  );
}

Metrics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      dataVisualProps: PropTypes.shape({}),
    })
  ),
};

Metrics.defaultProps = {
  title: undefined,
  items: undefined,
};

export default Metrics;