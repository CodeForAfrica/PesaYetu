import { A } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

function Enablingpartners({ partners }) {
  return (
    <Grid container xs={12}>
      <Grid xs={12} />
      {partners?.map(({ link, logo, name }) => (
        <Grid item xs={12} md={6}>
          <A href={link}>
            <Image src={logo} alt={name} />
          </A>
        </Grid>
      ))}
    </Grid>
  );
}

Enablingpartners.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      logo: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

Enablingpartners.defaultProps = {
  partners: undefined,
};
export default Enablingpartners;
