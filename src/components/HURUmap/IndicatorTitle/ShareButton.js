import PropTypes from "prop-types";
import React from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";

import useStyles from "./useStyles";

import { ReactComponent as EmailIcon } from "@/pesayetu/assets/icons/Email.svg";
import { ReactComponent as FacebookIcon } from "@/pesayetu/assets/icons/Facebook.svg";
import { ReactComponent as LinkedInIcon } from "@/pesayetu/assets/icons/LinkedIn.svg";
import { ReactComponent as TwitterIcon } from "@/pesayetu/assets/icons/Twitter.svg";
import { ReactComponent as WhatsAppIcon } from "@/pesayetu/assets/icons/WhatsApp.svg";

const componentMap = {
  Facebook: { icon: FacebookIcon, button: FacebookShareButton },
  Twitter: { icon: TwitterIcon, button: TwitterShareButton },
  LinkedIn: { icon: LinkedInIcon, button: LinkedinShareButton },
  WhatsApp: { icon: WhatsAppIcon, button: WhatsappShareButton },
  Email: { icon: EmailIcon, button: EmailShareButton },
};

const ShareButton = ({ name, url, ...props }) => {
  const classes = useStyles(props);
  const SocialButtonComponent = componentMap[name].button;
  const SocialIcon = componentMap[name].icon;

  return (
    <SocialButtonComponent url={url} {...props} className={classes.shareButton}>
      <SocialIcon className={classes.icon} />
    </SocialButtonComponent>
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
