import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  EmailShareButton,
} from "react-share";

import ShareButton from "./ShareButton";
import useStyles from "./useStyles";

import { ReactComponent as TwitterIcon } from "@/pesayetu/assets/icons/Group 3047.svg";
import { ReactComponent as FacebookIcon } from "@/pesayetu/assets/icons/Group 3048.svg";
import { ReactComponent as LinkedInIcon } from "@/pesayetu/assets/icons/Group 3184.svg";
import { ReactComponent as EmailIcon } from "@/pesayetu/assets/icons/Group 4106.svg";

const ShareBar = ({ socialLinks, title, children, ...props }) => {
  const classes = useStyles(props);
  if (!socialLinks?.length) {
    return null;
  }
  const url = typeof window !== "undefined" ? window.location : null;
  return (
    <div className={classes.root}>
      {children && (
        <Typography variant="body2" className={classes.children}>
          {children}
        </Typography>
      )}
      {socialLinks.map((social) => {
        switch (social.name) {
          case "facebook":
            return (
              <ShareButton
                component={FacebookShareButton}
                title={title}
                url={url}
                alt={social.alt}
              >
                <FacebookIcon classes={classes.icon} />
              </ShareButton>
            );
          case "twitter":
            return (
              <ShareButton
                component={TwitterShareButton}
                title={title}
                url={url}
                alt={social.alt}
              >
                <TwitterIcon classes={classes.icon} />
              </ShareButton>
            );
          case "linkedin":
            return (
              <ShareButton
                component={LinkedinShareButton}
                title={title}
                url={url}
              >
                <LinkedInIcon classes={classes.icon} />
              </ShareButton>
            );
          case "email":
            return (
              <ShareButton
                component={EmailShareButton}
                title={title}
                url={url}
                alt={social.alt}
              >
                <EmailIcon classes={classes.icon} />
              </ShareButton>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

ShareBar.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      alt: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  title: PropTypes.string,
  children: PropTypes.string,
};

ShareBar.defaultProps = {
  socialLinks: undefined,
  children: undefined,
  title: undefined,
};

export default ShareBar;
