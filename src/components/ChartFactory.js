import React from 'react';

import { useTheme } from '@material-ui/core';
import shortid from 'shortid';

import {
  BarChart,
  PieChart,
  NestedProportionalAreaChart,
  NumberVisuals
} from '@codeforafrica/hurumap-ui';
import aggregateData from '../utils/aggregateData';

export default class ChartFactory {
  static build(
    {
      queryAlias,
      type: visualType,
      label,
      reference: { label: referenceLabel } = {},
      aggregate,
      width,
      labelWidth,
      height,
      horizontal: setHorizontal,
      offset,
      unit = '',
      subtitle,
      description
    },
    datas,
    comparisonDatas,
    /*
     * Profiles are needed in the chart builder
     * since we have no relationships in the database
     * so we have to query profiles seperately and this is
     * a work around solution to have those profile data available to us
     * when we want to use the labels for the parent or profile.
     * This can further be used to refrence squareKms of a profile
     * but population is not available in the profile.
     */
    profiles
  ) {
    const theme = useTheme();
    const key = shortid.generate();
    const isComparison = datas && comparisonDatas;
    const comparisonData = comparisonDatas && comparisonDatas[queryAlias].nodes;
    const data = datas[queryAlias].nodes;
    const refrenceData = datas[`${queryAlias}Reference`]
      ? datas[`${queryAlias}Reference`].nodes
      : [];

    const primaryData = (() => {
      const numberFormatter = new Intl.NumberFormat('en-GB');
      if (visualType === 'column') {
        return aggregate ? aggregateData(aggregate, data) : data;
      }

      if (visualType === 'pie') {
        return (!aggregate ? data : aggregateData(aggregate, data)).map(d => ({
          ...d,
          name: d.x,
          label: `${d.x} ${numberFormatter.format(d.y)}`
        }));
      }

      if (visualType === 'grouped_column') {
        let groupedData = [...new Set(data.map(d => d.groupBy))].map(group =>
          !aggregate
            ? data.filter(d => d.groupBy === group)
            : aggregateData(
                aggregate,
                data.filter(d => d.groupBy === group)
              ).map(d => ({ ...d, x: group }))
        );
        console.log(groupedData);
        groupedData = groupedData[0].map((_c, i) =>
          groupedData.map(r => (r[i] ? r[i] : null))
        );
        console.log(groupedData);
        return groupedData;
      }
      return [];
    })();

    const primaryCompareData =
      isComparison &&
      (() => {
        const numberFormatter = new Intl.NumberFormat('en-GB');
        if (visualType === 'column') {
          return aggregate ? aggregateData(aggregate, comparisonData) : data;
        }

        if (visualType === 'pie') {
          return (!aggregate
            ? comparisonData
            : aggregateData(aggregate, comparisonData)
          ).map(d => ({
            ...d,
            name: d.x,
            label: `${d.x} ${numberFormatter.format(d.y)}`
          }));
        }

        if (visualType === 'grouped_column') {
          let groupedData = [
            ...new Set(comparisonData.map(d => d.groupBy))
          ].map(group =>
            !aggregate
              ? comparisonData.filter(d => d.groupBy === group)
              : aggregateData(
                  aggregate,
                  comparisonData.filter(d => d.groupBy === group)
                ).map(d => ({ ...d, x: group }))
          );
          groupedData = groupedData[0].map((_c, i) =>
            groupedData.map(r => (r[i] ? r[i] : null))
          );
          return groupedData;
        }
        return [];
      })();

    if (!datas) {
      return null;
    }

    const numberFormatter = new Intl.NumberFormat('en-GB');
    let horizontal = true;

    const formatLabelValue = value => {
      if (aggregate) {
        const [, format] = aggregate.split(':');
        return (
          numberFormatter.format(value) + (format === 'percent' ? '%' : unit)
        );
      }
      return numberFormatter.format(value) + unit;
    };

    switch (visualType) {
      case 'square_nested_proportional_area':
      case 'circle_nested_proportional_area': {
        const dataLabel = data[0].label || profiles.profile[label];
        const summedData = data.reduce((a, b) => a + b.y, 0);
        let summedReferenceData = refrenceData.reduce((a, b) => a + b.y, 0);
        const refrenceLabel =
          (refrenceData.length && summedReferenceData
            ? refrenceData[0].label
            : dataLabel) ||
          // Default refrence label is the chart label
          profiles.parentProfile[referenceLabel || label] ||
          referenceLabel ||
          label;
        summedReferenceData =
          refrenceData.length && summedReferenceData
            ? summedReferenceData
            : summedData;
        return (
          <div key={key} style={{ width: !isComparison ? 200 : 650 }}>
            <NestedProportionalAreaChart
              key={key}
              formatNumberForLabel={x => numberFormatter.format(x)}
              square={visualType === 'square_nested_proportional_area'}
              height={isComparison && 500}
              width={!isComparison ? 200 : 650}
              groupSpacing={isComparison && 8}
              data={
                !isComparison
                  ? [
                      {
                        x: summedData,
                        label: dataLabel
                      }
                    ]
                  : [
                      {
                        x: summedData,
                        label: dataLabel
                      },
                      {
                        x: comparisonData.reduce((a, b) => a + b.y, 0),
                        label:
                          comparisonData[0].label ||
                          profiles.comparisonProfile[label] ||
                          label
                      }
                    ]
              }
              reference={[
                {
                  x: summedReferenceData,
                  label: refrenceLabel
                }
              ]}
            />
          </div>
        );
      }
      case 'pie': {
        return (
          <div key={key}>
            <PieChart
              key={key}
              data={primaryData}
              height={height || theme.chart.pie.height}
              donut
              donutLabelKey={{ dataIndex: 0, sortKey: '' }}
              style={{
                labels: {
                  fontFamily: theme.typography.fontFamily,
                  fill: 'black'
                }
              }}
              theme={theme.chart}
            />
          </div>
        );
      }
      case 'number': {
        const dataStat = data[0].y;
        return (
          <div key={key}>
            <NumberVisuals
              key={key}
              subtitle={subtitle}
              statistic={dataStat}
              description={description}
              comparisonData={[]} // TODO: pending NumberVisuals components (HURUmap-UI) fix on this proptypes
              classes={{}} // TODO: pending NumberVisuals style configurations - update root margin
            />
          </div>
        );
      }
      case 'grouped_column': {
        if (primaryData.length * primaryData[0].length < 7) {
          horizontal = false || setHorizontal;
        }
        const barCount = primaryData[0].length;
        const { domainPadding } = theme.chart.bar;
        const computedSize =
          primaryData.length * barCount * (offset || theme.chart.bar.offset) +
          domainPadding.x[0] +
          domainPadding.x[1];

        const computedWidth = horizontal
          ? height || theme.chart.bar.height
          : computedSize;
        const computedHeight = horizontal
          ? computedSize
          : height || theme.chart.bar.height;

        let processedPrimaryData = primaryData;
        if (isComparison) {
          processedPrimaryData = primaryData.concat(primaryCompareData);
        }

        return (
          <div
            key={key}
            style={{ width: computedWidth, height: computedHeight }}
          >
            <BarChart
              data={processedPrimaryData}
              domainPadding={domainPadding}
              key={key}
              height={computedHeight}
              horizontal={horizontal}
              labelWidth={
                labelWidth || (horizontal ? 300 : theme.chart.labelWidth)
              }
              labels={datum => numberFormatter.format(datum.y)}
              barWidth={isComparison ? 15 : theme.chart.barWidth}
              offset={30}
              parts={{
                axis: {
                  independent: {
                    style: {
                      axis: {
                        display: 'block'
                      },
                      tickLabels: {
                        display: 'block'
                      }
                    }
                  },
                  dependent: {
                    style: {
                      grid: {
                        display: 'block'
                      }
                    }
                  }
                }
              }}
              theme={theme.chart}
              width={computedWidth}
            />
          </div>
        );
      }
      case 'column': {
        const barCount = isComparison ? 2 : 1;
        const { domainPadding } = theme.chart.bar;

        let computedSize =
          primaryData.length * barCount * (offset || theme.chart.bar.offset) +
          domainPadding.x[0] +
          domainPadding.x[1];

        if (primaryData.length < 7) {
          // for small charts relevant computed size is small, leaving bar graphs with no space
          horizontal = false;
          computedSize =
            primaryData.length *
              barCount *
              (offset || theme.chart.bar.offset) *
              2 +
            domainPadding.x[0] +
            domainPadding.x[1];
        }

        const computedWidth = horizontal
          ? width || theme.chart.width
          : computedSize;
        const computedHeight = horizontal
          ? computedSize
          : height || theme.chart.height;
        if (isComparison) {
          const processedComparisonData = aggregate
            ? aggregateData(aggregate, comparisonData)
            : comparisonData;

          return (
            <div style={{ width: computedWidth, height: computedHeight }}>
              <BarChart
                data={[primaryData, processedComparisonData]}
                domainPadding={domainPadding}
                key={key}
                height={computedHeight}
                horizontal={horizontal || setHorizontal}
                labelWidth={
                  labelWidth ||
                  (horizontal || setHorizontal ? 300 : theme.chart.legendWidth)
                }
                labels={datum => formatLabelValue(datum.y)}
                parts={{
                  axis: {
                    independent: {
                      style: {
                        axis: {
                          display: 'block'
                        },
                        tickLabels: {
                          display: 'block'
                        }
                      }
                    },
                    dependent: {
                      style: {
                        grid: {
                          display: 'block'
                        }
                      }
                    }
                  }
                }}
                theme={theme.chart}
                width={computedWidth}
              />
            </div>
          );
        }

        return (
          <div style={{ width: computedWidth, height: computedHeight }}>
            <BarChart
              data={primaryData}
              domainPadding={domainPadding}
              key={key}
              height={computedHeight}
              horizontal={horizontal || setHorizontal}
              labelWidth={
                labelWidth ||
                (horizontal || setHorizontal ? 300 : theme.chart.legendWidth)
              }
              offset={60}
              barWidth={30}
              labels={datum => formatLabelValue(datum.y)}
              parts={{
                axis: {
                  independent: {
                    style: {
                      axis: {
                        display: 'block'
                      },
                      tickLabels: {
                        display: 'block'
                      }
                    }
                  },
                  dependent: {
                    style: {
                      grid: {
                        display: 'block'
                      }
                    }
                  }
                }
              }}
              theme={theme.chart}
              width={computedWidth}
            />
          </div>
        );
      }
      default:
        return null;
    }
  }
}
