import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { forwardRef, Fragment } from "react";

import Print from "@/pesayetu/assets/icons/print.svg";
import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";
import slugify from "@/pesayetu/utils/slugify";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
});

const useStyles = makeStyles(({ typography, breakpoints, zIndex }) => ({
  profile: {
    marginLeft: typography.pxToRem(20),
    marginRight: typography.pxToRem(20),
    marginTop: typography.pxToRem(21),
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

const Profile = forwardRef(function Profile(
  { categories, primaryProfile, secondaryProfile, ...props },
  ref
) {
  const classes = useStyles(props);
  return (
    <div className={classes.profile} ref={ref}>
      <LocationHeader
        variant="primary"
        icon={Print}
        title={primaryProfile.geography.name}
        {...primaryProfile.geography}
      />
      <Hidden smDown implementation="css">
        <LocationHeader
          variant="secondary"
          icon={Print}
          title={secondaryProfile?.geography?.name}
          {...secondaryProfile?.geography}
        />
      </Hidden>{" "}
      {categories.map((category, categoryIndex) => (
        <Fragment key={category.tite}>
          <CategoryHeader
            description={category?.description}
            icon={category.icon}
            id={slugify(category.title)}
            title={category.title}
          />
          {category.children.map((child, subcategoryIndex) => (
            <Fragment key={child.title}>
              <SubcategoryHeader
                description={child?.description}
                id={slugify(child.title)}
                title={child.title}
              />
              {child.children.map(({ index, ...indicator }, indicatorIndex) => (
                <Chart
                  key={index}
                  variant="primary"
                  {...indicator}
                  secondaryIndicator={
                    secondaryProfile.items[categoryIndex].children[
                      subcategoryIndex
                    ].children[indicatorIndex]
                  }
                  geoCode={secondaryProfile.geography.code}
                  extra={{
                    primary: primaryProfile.geography.name,
                    secondary: secondaryProfile?.geography?.name,
                  }}
                />
              ))}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  );
});

Profile.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.shape({})),
      description: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  primaryProfile: PropTypes.shape({
    geography: PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        children: PropTypes.arrayOf(
          PropTypes.shape({
            children: PropTypes.arrayOf(PropTypes.shape({})),
          })
        ),
      })
    ),
  }),
  secondaryProfile: PropTypes.shape({
    geography: PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        children: PropTypes.arrayOf(
          PropTypes.shape({
            children: PropTypes.arrayOf(PropTypes.shape({})),
          })
        ),
      })
    ),
  }),
};
Profile.defaultProps = {
  categories: undefined,
  primaryProfile: undefined,
  secondaryProfile: undefined,
};

export default Profile;
