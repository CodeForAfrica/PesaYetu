import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { forwardRef, useState } from "react";

import MemoizedProfileItems from "./MemoizedProfileItems";

import Print from "@/pesayetu/assets/icons/print.svg";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import PinAndCompare from "@/pesayetu/components/HURUmap/PinAndCompare";
import { hurumapArgs } from "@/pesayetu/config";

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
  progress: {
    display: "block",
    margin: "0 auto",
  },
}));

function computeOptions(primaryProfile, locationCodes) {
  const { geography, geometries } = primaryProfile;
  // siblings will be on the last element of the parents array.
  const siblings = geometries?.parents?.slice(-1)?.[0];
  const availableOptions =
    siblings?.features
      ?.filter(
        ({ properties: { code } }) =>
          code !== geography.code && locationCodes.includes(code)
      )
      ?.map(({ properties: { name: label, code: value } }) => ({
        label,
        value,
      })) || [];
  return availableOptions;
}

const Profile = forwardRef(function Profile(
  {
    categories,
    dataNotAvailable,
    locationCodes,
    isLoading,
    onClickPin,
    onClickUnpin,
    onSelectLocation,
    primaryProfile,
    secondaryProfile,
    ...props
  },
  ref
) {
  const classes = useStyles(props);
  const { pinAndCompare } = hurumapArgs;
  const [options] = useState(computeOptions(primaryProfile, locationCodes));

  const handleClickPin = (e) => {
    if (onClickPin) {
      onClickPin(e);
    }
  };

  const handleClose = (e) => {
    // TODO(kilemensi): For some reason, e.target.value doesn't seem to work.
    const code = e.nativeEvent?.target?.dataset?.value;
    if (code) {
      if (onSelectLocation) {
        onSelectLocation({ code });
      }
    } else if (onClickUnpin) {
      onClickUnpin(code);
    }
  };

  const handleClick = (profile) => {
    if (primaryProfile && secondaryProfile) {
      return () => {
        if (onClickUnpin) {
          onClickUnpin(profile?.geography?.code);
        }
      };
    }
    return undefined;
  };

  const getSecondaryIndicator = (
    categoryIndex,
    subcategoryIndex,
    indicatorId
  ) => {
    const category = secondaryProfile?.items?.[categoryIndex];
    const subCategory = category?.children?.[subcategoryIndex];
    const indicator = subCategory?.children?.find(
      ({ indicator: { id } }) => indicatorId === id
    );
    return indicator;
  };

  const getSecondaryMetric = (categoryIndex, subcategoryIndex, metricIndex) => {
    const category = secondaryProfile?.items?.[categoryIndex];
    const subCategory = category?.children?.[subcategoryIndex];
    const metric = subCategory?.metrics?.[metricIndex];
    return metric;
  };

  let geoCode = primaryProfile?.geography?.code;
  if (secondaryProfile) {
    geoCode = `${geoCode}-vs-${secondaryProfile?.geography?.code}`;
  }

  return (
    <div className={classes.profile} ref={ref}>
      {isLoading && <CircularProgress classes={{ root: classes.progress }} />}
      <LocationHeader
        variant="primary"
        icon={Print}
        title={primaryProfile.geography.name}
        onClick={handleClick(primaryProfile)}
        {...primaryProfile.geography}
      />
      {secondaryProfile ? (
        <LocationHeader
          variant="secondary"
          onClick={handleClick(secondaryProfile)}
          title={secondaryProfile.geography?.name}
          {...secondaryProfile.geography}
        />
      ) : (
        <PinAndCompare
          {...props}
          {...pinAndCompare}
          onClose={handleClose}
          onClickPin={handleClickPin}
          options={options}
        />
      )}
      <MemoizedProfileItems
        categories={categories}
        dataNotAvailable={dataNotAvailable}
        getSecondaryIndicator={getSecondaryIndicator}
        getSecondaryMetric={getSecondaryMetric}
        primaryProfile={primaryProfile}
        secondaryProfile={secondaryProfile}
        geoCode={geoCode}
      />
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
  dataNotAvailable: PropTypes.string,
  locationCodes: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  onClickPin: PropTypes.func,
  onClickUnpin: PropTypes.func,
  onSelectLocation: PropTypes.func,
  primaryProfile: PropTypes.shape({
    geography: PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
    }),
    geometries: PropTypes.shape({
      parents: PropTypes.arrayOf(PropTypes.shape({})),
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
  dataNotAvailable: undefined,
  locationCodes: undefined,
  isLoading: undefined,
  onClickPin: undefined,
  onClickUnpin: undefined,
  onSelectLocation: undefined,
  primaryProfile: undefined,
  secondaryProfile: undefined,
};

export default Profile;
