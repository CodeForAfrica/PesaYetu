import PropTypes from 'prop-types';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function HeroMap({ center, tileLayer, zoom }) {
  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer {...tileLayer} />
    </MapContainer>
  );
}

HeroMap.propTypes = {
  center: (props, propName, componentName) => {
    if (
      !Array.isArray(props[propName]) ||
      props[propName].length !== 2 ||
      props[propName].some(Number.isNaN)
    ) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
          ` \`${componentName}\`. Validation failed.`
      );
    }
    return true;
  },
  tileLayer: PropTypes.shape({}),
  zoom: PropTypes.number,
};

HeroMap.defaultProps = {
  center: undefined,
  tileLayer: undefined,
  zoom: undefined,
};

export default HeroMap;
