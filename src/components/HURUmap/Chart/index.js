import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactDOMServer from "react-dom/server";
import embed from "vega-embed";

import configureScope from "./configureScope";
import Filters from "./Filters";
import { calculateTooltipPosition } from "./utils";

import ChartTooltip from "@/pesayetu/components/HURUmap/ChartTooltip";
import IndicatorTitle from "@/pesayetu/components/HURUmap/IndicatorTitle";
import Link from "@/pesayetu/components/Link";
import theme from "@/pesayetu/theme";
import slugify from "@/pesayetu/utils/slugify";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    position: "relative",
    width: "100%",
  },
  chart: {
    width: "100%",
  },
  source: {
    margin: `${typography.pxToRem(20)} 0`,
  },
  sourceTitle: {
    fontSize: typography.pxToRem(13),
    lineHeight: 20 / 13,
    color: "#666666",
    display: "inline-flex",
  },
  sourceLink: {
    color: palette.text.primary,
    fontSize: typography.pxToRem(13),
    lineHeight: 20 / 13,
    fontFamily: typography.body1.fontFamily,
  },
}));

function Chart({
  indicator,
  secondaryIndicator: { indicator: secondaryIndicator },
  title,
  geoCode,
  profileNames,
  isCompare,
  ...props
}) {
  const classes = useStyles(props);
  const chartRef = useRef();
  const [view, setView] = useState(null);
  const [cSpec, setCSpec] = useState(null);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    id,
    description,
    metadata: { source, url, groups, primary_group: primaryGroup },
  } = indicator;

  const {
    disableToggle,
    defaultType,
    filter,
    stacked_field: stackedField,
  } = indicator?.chart_configuration || {};

  const [chartValue, setChartValue] = useState(defaultType || "Value");

  const handleChartValueChange = (value) => {
    setChartValue(value);
    view.signal("Units", value.toLowerCase()).run();
  };

  const handler = useCallback(
    (_, event, item, value) => {
      const className = `charttooltip-${id}-${geoCode}`;
      let el = document.getElementsByClassName(className)[0];
      if (!el) {
        el = document.createElement("div");
        el.classList.add(className);
        document.body.appendChild(el);
      }

      const tooltipContainer = document.fullscreenElement || document.body;
      tooltipContainer.appendChild(el);
      // hide tooltip for null objects, undefined
      if (!value) {
        el.remove();
        return;
      }
      el.innerHTML = ReactDOMServer.renderToString(
        <ThemeProvider theme={theme}>
          <ChartTooltip
            title={value.group}
            value={value.count}
            formattedValue={
              defaultType?.toLowerCase() === "percentage" || !disableToggle
                ? value.percentage
                : undefined
            }
            item={value?.category}
            itemColor={item?.fill}
          />
        </ThemeProvider>
      );

      el.classList.add("visible");
      const { x, y } = calculateTooltipPosition(
        event,
        el.getBoundingClientRect(),
        0,
        10
      );
      el.setAttribute(
        "style",
        `top: ${y}px; left: ${x}px; z-index: 1230; position: absolute`
      );
    },
    [defaultType, disableToggle, geoCode, id]
  );

  useEffect(() => {
    async function renderChart() {
      const spec = configureScope(
        indicator,
        secondaryIndicator,
        profileNames,
        isCompare,
        isMobile
      );
      setCSpec(spec);
      if (chartRef?.current) {
        const newView = await embed(chartRef.current, spec, {
          renderer: "canvas",
          actions: false,
          tooltip: handler,
        });

        setView(newView.view);
      }
    }
    renderChart();
  }, [
    indicator,
    isMobile,
    isCompare,
    profileNames,
    secondaryIndicator,
    handler,
  ]);

  // apply default filter if defined
  const defaultFilters =
    filter?.defaults?.map(({ name, value }) => {
      const filterName = slugify(name);
      view?.signal(`${filterName}Filter`, true);
      view?.signal(`${filterName}FilterValue`, value);
      view?.run();
      return {
        name,
        value,
        subindicators: groups?.find(({ name: gName }) => name === gName)
          ?.subindicators,
      };
    }) ?? undefined;

  const defaultFiltersNames = defaultFilters?.map(({ name }) => name);

  if (!indicator?.data) {
    return null;
  }
  return (
    <div className={classes.root} id={`chart-${id}-${geoCode}`}>
      <IndicatorTitle
        title={title}
        description={description}
        view={view}
        geoCode={geoCode}
        indicatorId={id}
        disableToggle={disableToggle}
        chartValue={chartValue}
        handleChartValueChange={handleChartValueChange}
        spec={cSpec}
        height={view?.height()}
        source={source}
        isCompare={isCompare}
      />
      {!isMobile && (
        <Filters
          // remove primary group, remove stacked field & defined defaults filters
          filterGroups={groups
            ?.filter(({ name }) => name !== primaryGroup)
            ?.filter(({ name }) => name !== (stackedField || ""))
            ?.filter(({ name }) => !defaultFiltersNames?.includes(name))
            ?.map((g) => {
              return { ...g, slug: slugify(g?.name) };
            })}
          defaultFilters={defaultFilters ?? undefined}
          view={view}
        />
      )}
      <div ref={chartRef} className={classes.chart} />

      {url && source && (
        <div className={classes.source}>
          <Typography className={classes.sourceTitle}>Source:&nbsp;</Typography>
          <Link underline="always" href={url} className={classes.sourceLink}>
            {source}
          </Link>
        </div>
      )}
    </div>
  );
}

Chart.propTypes = {
  indicator: PropTypes.shape({
    id: PropTypes.number,
    chart_configuration: PropTypes.shape({
      disableToggle: PropTypes.bool,
      defaultType: PropTypes.string,
      filter: PropTypes.PropTypes.shape({
        defaults: PropTypes.arrayOf(PropTypes.shape({})),
      }),
      stacked_field: PropTypes.string,
    }),
    description: PropTypes.string,
    metadata: PropTypes.shape({
      source: PropTypes.string,
      url: PropTypes.string,
      groups: PropTypes.arrayOf(PropTypes.shape({})),
      primary_group: PropTypes.string,
    }),
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  secondaryIndicator: PropTypes.shape({
    indicator: PropTypes.shape({
      id: PropTypes.number,
      chart_configuration: PropTypes.shape({
        disableToggle: PropTypes.bool,
        defaultType: PropTypes.string,
        filter: PropTypes.PropTypes.shape({
          defaults: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        stacked_field: PropTypes.string,
      }),
      description: PropTypes.string,
      metadata: PropTypes.shape({
        source: PropTypes.string,
        url: PropTypes.string,
        groups: PropTypes.arrayOf(PropTypes.shape({})),
        primary_group: PropTypes.string,
      }),
      data: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
  title: PropTypes.string,
  geoCode: PropTypes.string,
  profileNames: PropTypes.shape({}),
  isCompare: PropTypes.bool,
};

Chart.defaultProps = {
  indicator: undefined,
  secondaryIndicator: {},
  title: undefined,
  geoCode: undefined,
  profileNames: undefined,
  isCompare: false,
};

export default Chart;
