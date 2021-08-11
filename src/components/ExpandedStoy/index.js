import RichTypography from "@commons-ui/core/RichTypography";
import { Typography, Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";
import ShareBar from "@/pesayetu/components/ShareBar";

function ExpandedStory({
  title,
  date,
  content,
  children,
  image,
  socialLinks,
  category,
  ...props
}) {
  const classes = useStyles(props);

  if (!content?.length && !image) {
    return null;
  }
  return (
    <>
      <div className={classes.headerRoot}>
        <Section classes={{ root: classes.section }}>
          {category && (
            <Typography
              color="primary"
              variant="h1"
              className={classes.overline}
            >
              {category}
            </Typography>
          )}
          {title && (
            <Typography color="primary" variant="h1" className={classes.title}>
              {title}
            </Typography>
          )}
        </Section>
      </div>
      <div className={classes.sectionRoot} />
      <Section>
        <Grid container direction="column" className={classes.root}>
          {date && (
            <Typography className={classes.date} variant="h4">
              {date}
            </Typography>
          )}
          <Grid item md={8}>
            {image && (
              <div className={classes.image}>
                <Image
                  alt="article"
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <ShareBar title={title} socialLinks={socialLinks}>
              Share
            </ShareBar>
            {content && (
              <RichTypography className={classes.content} variant="body1">
                {content}
              </RichTypography>
            )}
          </Grid>
        </Grid>
      </Section>
    </>
  );
}

ExpandedStory.propTypes = {
  title: PropTypes.string,
  socialLinks: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
};

ExpandedStory.defaultProps = {
  title: undefined,
  date: undefined,
  content: undefined,
  children: undefined,
  socialLinks: undefined,
  image: undefined,
  category: undefined,
};

export default ExpandedStory;
