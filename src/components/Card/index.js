import { RichTypography } from "@commons-ui/core";
import {
  CardActionArea,
  CardContent,
  Card as MuiCard,
} from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

const Card = ({ href, children, image, chart, variant, ...props }) => {
  const classes = useStyles(props);
  const visual = variant === "news" ? image : chart;
  return (
    <MuiCard classes={{ root: classes.root }}>
      {href ? (
        <CardActionArea
          component={href ? Link : undefined}
          href={href}
          underline="none"
          classes={{
            root: classes.cardActionRoot,
            focusHighlight: classes.focusHighlight,
            focusVisible: classes.focusVisible,
          }}
        >
          <CardContent classes={{ root: classes.content }}>
            {visual && variant === "news" ? (
              <div className={classes.cardMedia}>
                <Image
                  src={visual}
                  layout="fill"
                  className={classes.image}
                  objectFit="cover"
                />
              </div>
            ) : (
              <RichTypography
                className={clsx(classes.cardMedia, classes.insightViz)}
                component="div"
              >
                {visual}
              </RichTypography>
            )}
            {children}
          </CardContent>
        </CardActionArea>
      ) : (
        <CardContent classes={{ root: classes.content }}>
          {visual && variant === "news" ? (
            <div className={classes.cardMedia}>
              <Image
                src={visual}
                layout="fill"
                className={classes.image}
                objectFit="cover"
              />
            </div>
          ) : (
            <RichTypography
              className={clsx(classes.cardMedia, classes.insightViz)}
              component="div"
            >
              {visual}
            </RichTypography>
          )}
          {children}
        </CardContent>
      )}
    </MuiCard>
  );
};

Card.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  chart: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["insights", "news"]),
};

Card.defaultProps = {
  href: undefined,
  image: undefined,
  chart: undefined,
  variant: "news",
};

export default Card;
