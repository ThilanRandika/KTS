import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
} from "@react-google-maps/api";

import PlacesAutocomplete from "./MapSearch";
import adminAxios from "../../baseURL";
import StationsOutput from "./StationsOutput";
import StationsInput from "./StationsInput";
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
      //disableDefaultUI: true,
      //clickableIcons: false,
      fullscreenControl: false,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  //start location
  const [startLocation, setStartLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const [directions, setDirections] = useState(null);

  const [stations, setStations] = useState([]);

  const [currentMarker, setCurrentMarker] = useState(null);

  const service = new google.maps.DirectionsService();

  const createRoadRoute = async () => {
    try {
      const res = await adminAxios.post("api/roadRoutes/", {
        googleRoute: {
          directions: directions,
        },
        startLocation: {
          lat: directions.request.origin.location.lat(),
          lng: directions.request.origin.location.lng(),
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (startLocation.lat && startLocation.lng) {
      service.route(
        {
          origin: startLocation,
          destination: center,
          travelMode: google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: true,
          waypoints: [
            // {
            //   location: new google.maps.LatLng(
            //     7.066256254932193,
            //     80.01205094665697
            //   ),
            //   stopover: true,
            // },
            // {
            //   location: new google.maps.LatLng(
            //     6.984911366726646,
            //     79.96610582931704
            //   ),
            //   stopover: true,
            // },
            // {
            //   location: new google.maps.LatLng(
            //     6.844217298430227,
            //     79.97949870794335
            //   ),
            //   stopover: true,
            // },
          ],
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirectionsWithWayPoints(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );

      service.route(
        {
          origin: startLocation,
          destination: center,
          travelMode: google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: true,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [startLocation]);

  const handleRightClick = (e) => {
    console.log(e);
    const latLng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results[0]) {
        const placeName = results[0].formatted_address;
        console.log("Right-clicked location:", latLng);
        console.log("Place Name:", placeName);

        // Do something with the right-clicked location and place name, if needed
      } else {
        console.error("Geocoder failed due to:", status);
      }
    });
  };

  const [route0, setRoute0] = useState(true);
  const [route1, setRoute1] = useState(true);
  const [route2, setRoute2] = useState(true);

  console.log(startLocation);
  console.log(directions);
  if (directions) {
    // console.log(directions.routes[0].legs[0]);
  }

  const holts = [
    {
      id: 1,
      name: "Gamapha",
      lat: 6.833813409471106,
      lng: 79.88634319394335,
      price: 100,
      distance: 1000,
    },
    {
      id: 2,
      name: "Kadawatha",
      lat: 6.833813409471106,
      lng: 79.88634319394335,
      price: 100,
      distance: 1000,
    },
  ];
  return (
    <div className="flex justify-between ">
      <div className="w-[5ddd00px]">
        <div className="flex place-self-start  items-center gap-[5px]">
          <div className="flex gap-[10px] ">
            <div className="">
              <PlacesAutocomplete setLocation={setStartLocation} />
            </div>
            <input
              type="number"
              placeholder="Latitude"
              className="py-3 pl-3 border rounded-lg font-roboto focus:outline-none w-[150px] "
              onChange={(e) => {
                setStartLocation({
                  ...startLocation,
                  lat: parseFloat(e.target.value),
                });
              }}
            />
            <input
              type="number"
              placeholder="Langitude"
              className="py-3 pl-3 border rounded-lg font-roboto focus:outline-none w-[150px]"
              onChange={(e) => {
                setStartLocation({
                  ...startLocation,
                  lng: parseFloat(e.target.value),
                });
              }}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={createRoadRoute}
              className={`text-[20px] ${
                startLocation.lat && startLocation.lng
                  ? "hidden"
                  : "text-[20px]"
              }`}
            >
              <IoAddCircle />
            </button>
            <div
              className={`text-[20px] ${
                startLocation.lat && startLocation.lng
                  ? "text-[20px]"
                  : "hidden"
              }`}
            >
              <button className="" onClick={createRoadRoute}>
                <MdEdit className="text-[20px]" />
              </button>
              <button className="" onClick={createRoadRoute}>
                <MdDeleteOutline className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>
        {directions && <div>{directions.routes[0].legs[0].distance.text}</div>}
        {directions && <div>{directions.routes[0].legs[0].duration.text}</div>}
        {directions && <div>{directions.routes[1].legs[0].distance.text}</div>}
        {directions && <div>{directions.routes[1].legs[0].duration.text}</div>}
        {directions && <div>{directions.routes[2].legs[0].distance.text}</div>}
        {directions && <div>{directions.routes[2].legs[0].duration.text}</div>}
        <div>
          <div>
            <input
              checked={route0}
              type="checkbox"
              onChange={(e) => {
                console.log(e.target.checked);
                setRoute0(e.target.checked);
              }}
            />
            <input
              checked={route1}
              type="checkbox"
              onChange={(e) => {
                console.log(e.target.checked);
                setRoute1(e.target.checked);
              }}
            />
            <input
              checked={route2}
              value={route2}
              type="checkbox"
              onChange={(e) => {
                console.log(e.target.checked);
                setRoute2(e.target.checked);
              }}
            />
          </div>
        </div>
        <div className="stations">
          <div>
            <StationsOutput stations={stations} />
          </div>
          <StationsInput setStations={setStations} />
        </div>
      </div>

      <div className="min-w-[650px] h-[600px]">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
          onRightClick={handleRightClick}
        >
          {/* {directions && <DirectionsRenderer directions={directions} />} */}
          {/* show the route[0]*/}
          {directions && route0 && (
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
          {directions && route1 && (
            <DirectionsRenderer
              options={{
                directions,
                routeIndex: 1,
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: "blue",
                  strokeWeight: 6,
                  strokeOpacity: 0.5,
                },
              }}
            />
          )}
          {directions && route2 && (
            <DirectionsRenderer
              options={{
                directions,
                routeIndex: 2,
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: "green",
                  strokeWeight: 6,
                  strokeOpacity: 0.5,
                },
              }}
            />
          )}

          {center && (
            <>
              <Marker
                title="sadsadddd"
                position={center}
                label={{ text: `assadas sadsadasdasd`, color: "#fff" }}
              />
              <Circle center={center} radius={10000} options={closeOptions} />
              <Circle center={center} radius={20000} options={middleOptions} />
              <Circle center={center} radius={30000} options={farOptions} />
            </>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Map;
const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
