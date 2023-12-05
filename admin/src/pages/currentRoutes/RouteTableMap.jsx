import { useCallback, useMemo, useRef } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

function RouteTableMap({ googleRoutes, stations, startLocation }) {
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

  console.log("ass", googleRoutes);
  return (
    <div className="w-full h-full">
      {isLoaded ? (
        <GoogleMap
          zoom={12}
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
                  strokeColor: "blue",
                  strokeWeight: 3,
                  strokeOpacity: 0.9,
                },
              }}
            />
          )}
          {center && (
            <Marker
              position={center}
              icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            ></Marker>
          )}
          {startLocation && (
            <Marker
              position={startLocation.latlng}
              icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            ></Marker>
          )}
          {stations &&
            stations.map((station) => (
              <Marker
                key={`${station.id} ${station.lat} ${station.lng}`}
                position={{ lat: station.lat, lng: station.lng }}
                icon={{
                  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsb083sMbuVEGx5GoQ_Du6AHOqMquWYNM3zw&usqp=CAU",
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                label={{
                  text: `${station.id}- ${station.price}`,
                  color: "white",
                  className: "font-roboto px-1 py-[2px] rounded-lg bg-red-600",
                  fontSize: "8px",
                  fontWeight: "500",
                }}
              ></Marker>
            ))}
        </GoogleMap>
      ) : (
        <h1>not loaded</h1>
      )}
    </div>
  );
}

export default RouteTableMap;
