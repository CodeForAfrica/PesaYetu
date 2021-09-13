import RichTypography from "@commons-ui/core/RichTypography";
import { Grid, Typography, IconButton } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as CloseIcon } from "@/pesayetu/assets/icons/Component 108 – 5.svg";
import Tooltipicon from "@/pesayetu/assets/icons/ToolTipIcon";

function CarouselItem({
  activeStep,
  description,
  title,
  image,
  onClose,
  selector,
  onSelectedChange,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Grid
        className={classes.header}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          id={`carousel-title-${activeStep - 1}`}
          className={classes.title}
          variant="h4"
        >
          {title}
        </Typography>
        {onClose && (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={5} container wrap="nowrap">
          <Grid item>
            <Tooltipicon number={activeStep} />
          </Grid>
          <Grid item xs={8}>
            <RichTypography className={classes.description}>
              {description}
            </RichTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image width={376} height={325} src={image} />
        </Grid>
      </Grid>
    </div>
  );
}

CarouselItem.propTypes = {
  activeStep: PropTypes.string,
  description: PropTypes.func,
  image: PropTypes.number,
  onClose: PropTypes.func,
  title: PropTypes.string,
  selector: PropTypes.string,
  onSelectedChange: PropTypes.func,
};

CarouselItem.defaultProps = {
  activeStep: PropTypes.string,
  description: undefined,
  image: undefined,
  onClose: undefined,
  title: undefined,
  selector: undefined,
  onSelectedChange: undefined,
};

export default CarouselItem;
