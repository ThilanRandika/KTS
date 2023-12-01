import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
// ... (existing imports)

function Map() {
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
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const [directions, setDirections] = useState(null);
  const service = new google.maps.DirectionsService();

  const routes = [
    { id: 1, start: { lat: 7.3640502175157145, lng: 80.03527431697398 } },
    // Add more routes as needed
  ];

  useEffect(() => {
    service.route(
      {
        origin: { lat: 7.3640502175157145, lng: 80.03527431697398 },
        destination: center,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      },
      (result, status) => {
        if (status === "OK" && result) {
          console.log(result);
          setDirections(result);
        }
      }
    );
  }, []);

  return (
    <div className="w-[700px] h-[700px]">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}
      >
        {/* show all routes */}
        <MarkerClusterer>
          {(clusterer) =>
            routes.map((route) => (
              <Marker
                key={route.id}
                position={route.start}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>

        {/* show the route */}
        {directions && <DirectionsRenderer directions={directions} />}

        {/* show the circle */}
        <Circle center={center} radius={5000} />

        {/* show the marker */}
        <Marker position={center} />

        {/* show the marker */}
        <Marker position={center} />

        {/* show the marker */}
      </GoogleMap>
    </div>
  );
}

export default Map;
