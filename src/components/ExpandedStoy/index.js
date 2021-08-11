import RichTypography from "@commons-ui/core/RichTypography";
import { Typography, Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";
import ShareBar from "@/pesayetu/components/ShareBar";

const dateOptions = {
  year: "numeric",
  month: "long",
};

function ExpandedStory({
  title,
  author,
  date,
  content,
  children,
  featuredImage,
  socialLinks,
  categories,
  ...props
}) {
  const classes = useStyles(props);

  let authorName = `${author?.node?.firstName ?? ""} ${
    author?.node?.lastName ?? ""
  }`;
  if (authorName?.length < 2) {
    authorName = author?.node?.nickname ?? author?.node?.slug;
  }
  const image = featuredImage?.node?.sourceUrl;

  const category = categories.edges[0]?.node?.name;
  return (
    <>
      <div className={classes.headerRoot}>
        <Section classes={{ root: classes.section }}>
          <Grid container className={classes.root}>
            <Grid item lg={1} />
            <Grid item xs={12} lg={10}>
              {category && (
                <Typography variant="overline">{category}</Typography>
              )}
              {title && (
                <Typography variant="h1" className={classes.title}>
                  {title}
                </Typography>
              )}
              {date && (
                <Typography className={classes.displayFlex} variant="overline">
                  {new Date(date).toLocaleString("en-GB", dateOptions)}
                </Typography>
              )}
              {authorName && (
                <Typography className={classes.displayFlex} variant="overline">
                  {authorName}
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
  featuredImage: PropTypes.shape({
    node: PropTypes.shape({
      sourceUrl: PropTypes.string,
    }),
  }),
  categories: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          name: PropTypes.string,
        }),
      })
    ),
  }),
  author: PropTypes.shape({
    node: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      nickname: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
};

ExpandedStory.defaultProps = {
  title: undefined,
  date: undefined,
  content: undefined,
  children: undefined,
  socialLinks: undefined,
  featuredImage: undefined,
  categories: undefined,
  author: undefined,
};

export default ExpandedStory;
