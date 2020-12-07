import React, { useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';

function CountryFigure({ data }) {
  const map = useMap();
  const geoJson = useRef(null);
  useEffect(() => {
    const bounds = geoJson.current.getBounds();
    map.fitBounds(bounds);
  }, [map]);

  return <GeoJSON ref={geoJson} data={data} />;
}

function CountryMap({
  center = [],
  markerCenter = [],
  popupInfo = null,
  geoData = null,
  area = 0,
}) {
  const zoom = useMemo(() => {
    if (area > 10000000) return 2;
    if (area > 1000000) return 3;
    if (area > 100000) return 4;
    if (area > 50000) return 5;
    if (area > 5000) return 6;
    if (area > 500) return 7;
    if (area > 50) return 8;
    return 9;
  }, [area]);

  return (
    <MapContainer
      center={center}
      zoom={geoData ? 0 : zoom}
      style={{ height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData && <CountryFigure data={geoData} />}
      <Marker position={markerCenter.length > 0 ? markerCenter : center}>
        {popupInfo && <Popup>{popupInfo}</Popup>}
      </Marker>
    </MapContainer>
  );
}

CountryMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  markerCenter: PropTypes.arrayOf(PropTypes.number),
};

export default CountryMap;
