import { RichTypography } from "@commons-ui/core";
import { IconButton, Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import DataVisualCard from "@/pesayetu/components/DataVisualCard";
import Section from "@/pesayetu/components/Section";

function Metrics({ items, title, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));
  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <RichTypography variant="h2" className={classes.sectionTitle}>
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
            <Grid container item xs={12} md={5} lg={3}>
              <Grid container item direction="row" alignItems="center">
                <IconButton
                  disableRipple
                  disableFocusRipple
                  color="primary"
                  size="small"
                  className={classes.button}
                >
                  <Image src={item.icon} width={44} height={44} />
                </IconButton>
                <RichTypography variant="h4" className={classes.title}>
                  {item.title}
                </RichTypography>
              </Grid>
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
              justifyContent={
                isTablet && index === 0 ? "flex-end" : "flex-start"
              }
              alignItems="center"
            >
              <DataVisualCard
                {...item.dataVisualProps}
                classes={{
                  root: classes.dataVisualCard,
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
