import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AnyReactComponent = () => (
  <div>
    <LocationOnIcon className="map-icon" />
  </div>
);
const defaultProps = {
  center: {
    lat: 40.17,
    lng: 44.5,
  },
  zoom: 11,
};
const SimpleMap = () => {
  return (
    <div style={{ height: "20vh", width: "30vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDzbSOU1MLCwJMnIvn74LMViyX224zdLNI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={40.1772} lng={44.50349} />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
