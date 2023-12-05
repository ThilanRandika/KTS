import { useCallback, useMemo, useRef } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

function RouteTableMap({ googleRoutes, stations }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  const mapRef = useRef();

  const center = useMemo(
    () => ({ lat: 6.833813409471106, lng: 79.88634319394335 }),
    []
  );

  const options = useMemo(
    () => ({
      mapId: "958725da470cbe5e",
      disableDefaultUI: true,
      clickableIcons: false,
      fullscreenControl: false,
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <div className="w-full h-full">
      {isLoaded ? (
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {googleRoutes && (
            <DirectionsRenderer
              options={{
                directions: googleRoutes.directions,
                routeIndex: googleRoutes.routeId,
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: "red",
                  strokeWeight: 3,
                  strokeOpacity: 0.5,
                },
              }}
            />
          )}
        </GoogleMap>
      ) : (
        <h1>not loaded</h1>
      )}
    </div>
  );
}

export default RouteTableMap;
