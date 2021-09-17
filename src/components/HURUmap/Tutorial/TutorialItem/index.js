import RichTypography from "@commons-ui/core/RichTypography";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { useTour } from "@reactour/tour";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import TutorialIcon from "./TutorialIcon";
import useStyles from "./useStyles";

import { ReactComponent as CloseIcon } from "@/pesayetu/assets/icons/Component 108 – 5.svg";

function TutorialItem({
  activeStep,
  description,
  title,
  image,
  selector,
  ...props
}) {
  const classes = useStyles(props);
  const { setIsOpen } = useTour();
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid
          className={classes.header}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography
              id={`tutorial-title-${activeStep - 1}`}
              className={classes.title}
              variant="h4"
            >
              {title}
            </Typography>
          </Grid>
          <Grid item>
            {handleClose && (
              <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={5} container wrap="nowrap">
            <Grid item>
              <TutorialIcon number={activeStep} />
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
    </>
  );
}

TutorialItem.propTypes = {
  activeStep: PropTypes.string,
  description: PropTypes.func,
  image: PropTypes.number,
  onClose: PropTypes.func,
  title: PropTypes.string,
  selector: PropTypes.string,
};

TutorialItem.defaultProps = {
  activeStep: PropTypes.string,
  description: undefined,
  image: undefined,
  onClose: undefined,
  title: undefined,
  selector: undefined,
};

export default TutorialItem;
