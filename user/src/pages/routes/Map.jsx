import React from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
  Autocomplete,
} from "@react-google-maps/api";
import { useCallback } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function Map({ routes }) {
  const mapRef = useRef();

  const center = useMemo(
    () => ({ lat: 6.833813409471106, lng: 79.88634319394335 }),
    []
  );
  const options = useMemo(
    () => ({
      mapId: "958725da470cbe5e",
      //disableDefaultUI: true,
      //clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const [startLocation, setStartLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  //console.log("from map", routes[0].startLocation);
  useEffect(() => {
    if (routes && routes.length > 0 && routes[0].googleRoute) {
      setDirections(routes[0].googleRoute.directions);
    }
  }, [routes]);

  // console.log("from map", startLocation);
  // console.log("from map", directions);

  if (routes) {
    // console.log(routes[0].googleRoute.directions);
  }
  return (
    <div>
      <div>ass</div>
      <div className="w-[400px] h-[400px]">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {directions && (
            <DirectionsRenderer
              options={{
                directions: directions,
                routeIndex: 0,
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: "red",
                  strokeWeight: 6,
                  strokeOpacity: 0.5,
                },
              }}
            />
          )}

          <Marker
            position={center}
            title="aaaaaaa sd"
            label={{ text: `dfdsfd`, color: "#fff" }}
          >
            <div className="">aaaaaa</div>
          </Marker>
        </GoogleMap>
      </div>
    </div>
  );
}

export default Map;
