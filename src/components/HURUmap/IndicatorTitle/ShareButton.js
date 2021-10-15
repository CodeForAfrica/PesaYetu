import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  EmailShareButton,
} from "react-share";

import useStyles from "./useStyles";

import { ReactComponent as TwitterIcon } from "@/pesayetu/assets/icons/Group 3047.svg";
import { ReactComponent as FacebookIcon } from "@/pesayetu/assets/icons/Group 3048.svg";
import { ReactComponent as LinkedInIcon } from "@/pesayetu/assets/icons/Group 3184.svg";
import { ReactComponent as EmailIcon } from "@/pesayetu/assets/icons/Group 4106.svg";

const componentMap = {
  Facebook: { icon: FacebookIcon, button: FacebookShareButton },
  Twitter: { icon: TwitterIcon, button: TwitterShareButton },
  LinkedIn: { icon: LinkedInIcon, button: LinkedinShareButton },
  Email: { icon: EmailIcon, button: EmailShareButton },
};

const ShareButton = ({ name, title, url, ...props }) => {
  const classes = useStyles(props);
  const SocialButtonComponent = componentMap[name].button;
  const SocialIcon = componentMap[name].icon;

  return (
    <Grid item xs={4}>
      <SocialButtonComponent
        title={title}
        url={url}
        {...props}
        className={classes.shareButton}
      >
        <SocialIcon className={classes.icon} />
      </SocialButtonComponent>
    </Grid>
  );
};

ShareButton.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

ShareButton.defaultProps = {
  name: undefined,
  title: undefined,
  url: undefined,
};

export default ShareButton;
