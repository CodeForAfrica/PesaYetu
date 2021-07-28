import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Enablingpartners from "./EnablingPartners";
import MainPartner from "./MainPartner";

import Newsletter from "@/pesayetu/components/Newsletter";

function Index({ enablingPartners, mainPartner, newsletter }) {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} md={7}>
        <Enablingpartners {...enablingPartners} />
      </Grid>
      <Grid xs={12} md={1} />
      <Grid item container xs={12} md={4}>
        <Grid>
          <MainPartner {...mainPartner} />
        </Grid>
        <Grid>
          <Newsletter {...newsletter} />
        </Grid>
      </Grid>
    </Grid>
  );
}

Index.propTypes = {
  enablingPartners: PropTypes.shape({}),
  mainPartner: PropTypes.shape({}),
  newsletter: PropTypes.shape({}),
};

Index.defaultProps = {
  enablingPartners: undefined,
  mainPartner: undefined,
  newsletter: undefined,
};
export default Index;
