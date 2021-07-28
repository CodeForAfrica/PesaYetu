import { A } from "@commons-ui/core";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

function MainPartner({ link, logo, name, description }) {
  return (
    <div item xs={12} md={6}>
      <A href={link}>
        <Image src={logo} alt={name} />
      </A>
      <Typography>{description}</Typography>
    </div>
  );
}

MainPartner.propTypes = {
  link: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
};

MainPartner.defaultProps = {
  link: undefined,
  logo: undefined,
  name: undefined,
  description: undefined,
};
export default MainPartner;
