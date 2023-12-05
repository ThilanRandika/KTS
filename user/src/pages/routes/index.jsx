import { useRoadRouteContext } from "../../hooks/useRoadRouteContext";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map";

function RoadRoutes() {
  const { roadRoutes } = useRoadRouteContext();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  return (
    <div>
      <h1>map</h1>
      {isLoaded ? <Map routes={roadRoutes} /> : <h1>not loaded</h1>}
    </div>
  );
}

export default RoadRoutes;
