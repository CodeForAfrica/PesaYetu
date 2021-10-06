import { Grid, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  EmailShareButton,
} from "react-share";

import useStyles from "./useStyles";

import { ReactComponent as FacebookIcon } from "@/pesayetu/assets/footer-social-fb.svg";
import { ReactComponent as InstagramIcon } from "@/pesayetu/assets/footer-social-ig.svg";
import { ReactComponent as LinkedInIcon } from "@/pesayetu/assets/footer-social-in.svg";
import { ReactComponent as TwitterIcon } from "@/pesayetu/assets/footer-social-tw.svg";

const shareData = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Twitter", icon: TwitterIcon },
  { name: "Instagram", icon: InstagramIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
];

function Share({ title, geoCode, indicatorId, ...props }) {
  const classes = useStyles(props);

  const code = `<iframe style="height:100%; width: 100%"
  src="${
    process.env.NEXT_PUBLIC_APP_URL
  }/embed/${geoCode.toLowerCase()}/${indicatorId}"></iframe>
  `;

  return (
    <Grid container className={classes.root}>
      {shareData.map((social) => {
        switch (social.name) {
          case "Facebook":
            return (
              <FacebookShareButton title="" url="">
                <FacebookIcon />
              </FacebookShareButton>
              // <Grid item>
              //   <Typography className={classes.text}>{social.name}</Typography>
              // </Grid>
            );
          case "Twitter":
            return (
              <TwitterShareButton title="" url="">
                <TwitterIcon />
              </TwitterShareButton>
            );
          case "Instagram":
            return (
              <FacebookShareButton>
                <InstagramIcon />
              </FacebookShareButton>
            );
          case "LinkedIn":
            return (
              <LinkedinShareButton>
                <LinkedInIcon />
              </LinkedinShareButton>
            );
          case "Email":
            return (
              <EmailShareButton>
                <TwitterIcon />
              </EmailShareButton>
            );
          default:
            return null;
        }
      })}
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <Typography className={classes.text}>Embed on your website:</Typography>
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <TextField
          value={code}
          InputProps={{ classes: { input: clsx(classes.code, classes.text) } }}
        />
      </Grid>
    </Grid>
  );
}

Share.propTypes = {
  title: PropTypes.string,
  geoCode: PropTypes.string,
  indicatorId: PropTypes.number,
};

Share.defaultProps = {
  title: undefined,
  geoCode: undefined,
  indicatorId: undefined,
};

export default Share;
