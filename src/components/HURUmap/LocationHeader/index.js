import {
  Button,
  Grid,
  IconButton,
  SvgIcon as MuiSvgIcon,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as CloseIcon } from "@/pesayetu/assets/icons/Component 108-1.svg";
import Image from "@/pesayetu/components/Image";
import slugify from "@/pesayetu/utils/slugify";

function SvgIcon(props) {
  return <MuiSvgIcon {...props} />;
}

const LocationHeader = ({ icon, level, onClick, parent, title, ...props }) => {
  const classes = useStyles(props);

  if (!title) {
    return null;
  }
  return (
    <div id={slugify(title)} className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container alignItems="flex-start">
            <Grid item>
              <Typography variant="h3" className={classes.title}>
                {title}
              </Typography>
            </Grid>
            {onClick ? (
              <Grid item>
                <IconButton onClick={onClick} className={classes.closeButton}>
                  <SvgIcon
                    component={CloseIcon}
                    style={{ fontSize: 44 }}
                    viewBox="0 0 44 44"
                    className={classes.closeButtonIcon}
                  />
                </IconButton>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
        {icon ? (
          <Grid item>
            <Button variant="contained" className={classes.button}>
              <div className={classes.icon}>
                <Image src={icon} layout="fill" />
              </div>
            </Button>
          </Grid>
        ) : null}
      </Grid>
      {parent && (
        <Typography variant="subtitle2" className={classes.description}>
          {`A ${level} in ${parent}`}
        </Typography>
      )}
    </div>
  );
};

LocationHeader.propTypes = {
  icon: PropTypes.string,
  level: PropTypes.string,
  onClick: PropTypes.func,
  parent: PropTypes.string,
  title: PropTypes.string,
};

LocationHeader.defaultProps = {
  icon: undefined,
  level: undefined,
  onClick: undefined,
  parent: undefined,
  title: undefined,
};

export default LocationHeader;
