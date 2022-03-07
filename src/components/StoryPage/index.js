import RichTypography from "@commons-ui/core/RichTypography";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import StoryHeader from "./StoryHeader";
import useStyles from "./useStyles";

import RelatedStories from "@/pesayetu/components/InsightsData";
import Section from "@/pesayetu/components/Section";
import ShareBar from "@/pesayetu/components/ShareBar";

function StoryPage({
  content,
  children,
  image,
  chart,
  socialLinks,
  relatedPosts,
  postImagePlaceholder,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <StoryHeader {...props} />
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={undefined} lg={1} />
          <Grid item xs={12} lg={7}>
            {!chart && image && (
              <figure className={classes.image}>
                <Image
                  {...postImagePlaceholder}
                  alt="article"
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
            )}
            {chart && (
              <RichTypography className={classes.image}>{chart}</RichTypography>
            )}
            <ShareBar title={props?.title} socialLinks={socialLinks}>
              {children}
            </ShareBar>
            <RichTypography className={classes.content} variant="body1">
              {content}
            </RichTypography>
          </Grid>
        </Grid>
      </Section>
      <RelatedStories
        {...relatedPosts}
        classes={{ title: classes.relatedTitle }}
      />
    </div>
  );
}

StoryPage.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({})),
  relatedPosts: PropTypes.shape({}),
  content: PropTypes.string,
  children: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  chart: PropTypes.string,
  postImagePlaceholder: PropTypes.shape({}),
};

StoryPage.defaultProps = {
  content: undefined,
  children: undefined,
  socialLinks: undefined,
  relatedPosts: undefined,
  image: undefined,
  title: undefined,
  chart: undefined,
  postImagePlaceholder: undefined,
};

export default StoryPage;
