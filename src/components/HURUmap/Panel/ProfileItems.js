import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { memo, Fragment } from "react";

import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import KeyMetric from "@/pesayetu/components/HURUmap/KeyMetric";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";
import Loading from "@/pesayetu/components/Loading";
import formatNumericalValue from "@/pesayetu/utils/formatNumericalValue";
import slugify from "@/pesayetu/utils/slugify";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
  loading: () => <Loading />,
});

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  metrics: {
    marginTop: typography.pxToRem(24),
  },
  metricRow: {
    [breakpoints.up("lg")]: {
      marginBottom: typography.pxToRem(14),
      marginLeft: typography.pxToRem(18),
      maxWidth: typography.pxToRem(224),
      "&:first-of-type": {
        marginLeft: 0,
      },
    },
  },
  secondaryMetricRow: {
    [breakpoints.up("lg")]: {
      maxWidth: "100%",
      marginLeft: 0,
    },
  },
  secondaryMetric: {
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem(350),
    },
  },
}));

const ProfileItems = memo(
  function ProfileItems({
    categories,
    dataNotAvailable,
    getSecondaryIndicator,
    getSecondaryMetric,
    primaryProfile,
    secondaryProfile,
    geoCode,
  }) {
    const classes = useStyles();
    return (
      <>
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
                  id={slugify(`${category.title}-${child.title}`)}
                  title={child.title}
                />
                <Grid container className={classes.metrics}>
                  {child?.metrics?.map(
                    ({ label, parentMetric, ...other }, metricIndex) => {
                      const secondaryMetric = getSecondaryMetric(
                        categoryIndex,
                        subcategoryIndex,
                        metricIndex
                      );
                      return (
                        <Grid
                          item
                          container
                          lg={secondaryProfile ? 12 : 4}
                          key={label}
                          className={clsx(classes.metricRow, {
                            [classes.secondaryMetricRow]: secondaryProfile,
                          })}
                        >
                          <Grid item xs={12} lg={secondaryProfile ? 6 : 12}>
                            <KeyMetric
                              title={label}
                              formattedValue={formatNumericalValue(other)}
                              parentFormattedValue={
                                parentMetric
                                  ? formatNumericalValue(parentMetric)
                                  : undefined
                              }
                              {...other}
                              color="primary"
                              classes={{
                                root: clsx({
                                  [classes.secondaryMetric]: secondaryProfile,
                                }),
                              }}
                            />
                          </Grid>
                          {secondaryMetric && (
                            <Grid item xs={12} lg={6}>
                              <KeyMetric
                                title={secondaryMetric?.label ?? undefined}
                                formattedValue={formatNumericalValue({
                                  value: secondaryMetric?.value,

                                  method: secondaryMetric?.method,
                                })}
                                parentFormattedValue={
                                  parentMetric
                                    ? formatNumericalValue(parentMetric)
                                    : undefined
                                }
                                color="secondary"
                                {...secondaryMetric}
                                className={classes.secondaryMetric}
                              />
                            </Grid>
                          )}
                        </Grid>
                      );
                    }
                  )}
                </Grid>
                {child.children.map(({ index, ...indicator }) => (
                  <Chart
                    key={index}
                    variant="primary"
                    {...indicator}
                    geoCode={geoCode}
                    secondaryIndicator={getSecondaryIndicator(
                      categoryIndex,
                      subcategoryIndex,
                      indicator.indicator.id
                    )}
                    isCompare={!!secondaryProfile}
                    profileNames={{
                      primary:
                        indicator.indicator?.data?.length > 0
                          ? primaryProfile.geography.name
                          : `${primaryProfile.geography.name} ${dataNotAvailable}`,
                      secondary:
                        getSecondaryIndicator(
                          categoryIndex,
                          subcategoryIndex,
                          indicator.indicator.id
                        )?.indicator?.data?.length > 0
                          ? secondaryProfile?.geography?.name
                          : `${secondaryProfile?.geography?.name} ${dataNotAvailable}`,
                    }}
                  />
                ))}
              </Fragment>
            ))}
          </Fragment>
        ))}
      </>
    );
  },

  (prevProps, nextProps) => {
    if (prevProps.geoCode === nextProps.geoCode) {
      return true;
    }
    return false; // props are not equal -> update the component
  }
);

ProfileItems.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.shape({})),
      description: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
    })
  ),

  dataNotAvailable: PropTypes.string,
  getSecondaryIndicator: PropTypes.func,
  getSecondaryMetric: PropTypes.func,
  geoCode: PropTypes.string,
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

ProfileItems.defaultProps = {
  categories: undefined,
  dataNotAvailable: undefined,
  getSecondaryIndicator: undefined,
  getSecondaryMetric: undefined,
  geoCode: undefined,
  primaryProfile: undefined,
  secondaryProfile: undefined,
};

export default ProfileItems;
