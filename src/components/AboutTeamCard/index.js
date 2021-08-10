import { RichTypography } from "@commons-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const AboutTeamCard = ({ image, description, ...props }) => {
  const classes = useStyles(props);
  return (
    <Card
      classes={{ root: classes.root, cardMedia: classes.cardMedia }}
      image={image}
    >
      <RichTypography
        className={classes.content}
        variant="subtitle2"
        display="inline"
      >
        {description}
      </RichTypography>
    </Card>
  );
};

AboutTeamCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
};

AboutTeamCard.defaultProps = {
  image: undefined,
  description: undefined,
};

export default AboutTeamCard;
