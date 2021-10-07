import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import Print from "@/pesayetu/assets/icons/print.svg";
import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
});
const useStyles = makeStyles(({ typography, breakpoints, zIndex }) => ({
  profile: {
    marginLeft: typography.pxToRem(20),
    marginRight: typography.pxToRem(20),
    marginTop: typography.pxToRem(80),
    [breakpoints.up("md")]: {
      paddingLeft: typography.pxToRem(80),
      marginRight: typography.pxToRem(80),
    },
    [breakpoints.up("lg")]: {
      marginLeft: `max(calc((100vw - 1160px)/2 + 79px), 300px)`,
      marginTop: typography.pxToRem(0),
      marginRight: 0,
      width: typography.pxToRem(800),
      minHeight: "100%",
      paddingTop: typography.pxToRem(67.7),
      paddingLeft: typography.pxToRem(17),
      paddingRight: typography.pxToRem(17),
      zIndex: zIndex.drawer,
    },
  },
}));

function Profile({ categories, geography, comparedProfile, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.profile}>
      <LocationHeader icon={Print} title={geography.name} {...geography} />
      {categories.map((category, categoryIndex) => (
        <Fragment key={category.tite}>
          <CategoryHeader
            icon={category.icon}
            title={category.title}
            description={category?.description}
          />
          {category.children.map((child, subcategoryIndex) => (
            <SubcategoryHeader
              key={child.title}
              title={child.title}
              description={child?.description}
            >
              {child.children.map((indicator, indicatorIndex) => (
                <Grid container>
                  <Grid item>
                    <Chart {...indicator} geoCode={geography.code} />
                  </Grid>
                  {comparedProfile && (
                    <Grid item>
                      <Chart
                        {...comparedProfile[categoryIndex].children[
                          subcategoryIndex
                        ].children[indicatorIndex]}
                        geoCode={geography.code}
                      />
                    </Grid>
                  )}
                </Grid>
              ))}
            </SubcategoryHeader>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

Profile.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.shape({})),
      description: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  comparedProfile: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(
        PropTypes.shape({
          children: PropTypes.arrayOf(PropTypes.shape({})),
        })
      ),
    })
  ),
  geography: PropTypes.shape({
    name: PropTypes.string,
    code: PropTypes.string,
  }),
};
Profile.defaultProps = {
  categories: undefined,
  comparedProfile: undefined,
  geography: undefined,
};

export default Profile;
