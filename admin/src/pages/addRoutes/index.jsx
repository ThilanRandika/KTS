import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map";

function AddRoute() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  return (
    <div>
      <h1>this a route add page</h1>
      {isLoaded ? <Map /> : <h1>not loaded</h1>}
    </div>
  );
}

export default AddRoute;
