import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const AboutTeamCard = ({ image, description, title, ...props }) => {
  const classes = useStyles(props);
  return (
    <Card
      classes={{
        root: classes.root,
        cardMedia: classes.cardMedia,
        image: classes.image,
      }}
      image={image}
    >
      {title && (
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography className={classes.content}>{description}</Typography>
      )}
    </Card>
  );
};

AboutTeamCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

AboutTeamCard.defaultProps = {
  image: undefined,
  description: undefined,
  title: undefined,
};

export default AboutTeamCard;
