import {
  CardActionArea,
  CardContent,
  Card as MuiCard,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

const Card = ({ href, content, ...props }) => {
  const classes = useStyles(props);

  return (
    <MuiCard className={classes.root}>
      <CardActionArea
        component={href ? Link : undefined}
        href={href}
        underline="none"
        {...props}
      >
        <CardContent className={classes.content}>{content}</CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

Card.propTypes = {
  href: PropTypes.string,
  content: PropTypes.node.isRequired,
};

Card.defaultProps = {
  href: undefined,
};

export default Card;
