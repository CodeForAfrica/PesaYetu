import RichTypography from "@commons-ui/core/RichTypography";
import { Typography, Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Header from "@/pesayetu/components/Header";
import Section from "@/pesayetu/components/Section";
import ShareBar from "@/pesayetu/components/ShareBar";

function ExpandedStory({
  title,
  author,
  date,
  content,
  children,
  image,
  socialLinks,
  category,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <>
      <div className={classes.headerRoot}>
        <Section classes={{ root: classes.section }}>
          <Grid container className={classes.root}>
            <Grid item lg={1} />
            <Grid item xs={12} lg={10}>
              <Header
                overline={category}
                classes={{
                  overline: classes.overline,
                  title: classes.title,
                }}
              >
                {title}
              </Header>
              {date && (
                <Typography className={classes.displayFlex} variant="overline">
                  {date}
                </Typography>
              )}
              {author && (
                <Typography className={classes.displayFlex} variant="overline">
                  {author}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Section>
      </div>
      <div className={classes.contentRoot}>
        <Section>
          <Grid container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={7}>
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
      </div>
    </>
  );
}

ExpandedStory.propTypes = {
  title: PropTypes.string,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({})),
  date: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
};

ExpandedStory.defaultProps = {
  title: undefined,
  date: undefined,
  content: undefined,
  children: undefined,
  socialLinks: undefined,
  image: undefined,
  category: undefined,
  author: undefined,
};

export default ExpandedStory;
