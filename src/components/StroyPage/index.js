import RichTypography from "@commons-ui/core/RichTypography";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import StoryHeader from "./StoryHeader";
import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";
import ShareBar from "@/pesayetu/components/ShareBar";

function StoryPage({ content, children, image, socialLinks, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <StoryHeader {...props} />
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={false} lg={1} />
          <Grid item xs={12} lg={7}>
            {image && (
              <figure className={classes.image}>
                <Image
                  alt="article"
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
            )}
            <ShareBar title={props?.title} socialLinks={socialLinks}>
              Share
            </ShareBar>
            <RichTypography className={classes.content} variant="body1">
              {content}
            </RichTypography>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

StoryPage.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({})),
  content: PropTypes.string,
  children: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

StoryPage.defaultProps = {
  content: undefined,
  children: undefined,
  socialLinks: undefined,
  image: undefined,
  title: undefined,
};

export default StoryPage;
