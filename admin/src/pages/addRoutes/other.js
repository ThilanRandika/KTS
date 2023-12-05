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
      waypoints: [
        {
          location: new google.maps.LatLng(
            7.073274471877078,
            80.01605122520961
          ),
        },
        {
          location: new google.maps.LatLng(
            7.085911607875086,
            80.03327518000306
          ),
        },
      ],
    },
    (result, status) => {
      if (status === "OK" && result) {
        console.log(result);
        setDirections(result);
      }
    }
  );
}, []);

{
  /* show the route[1]*/
}
{
  directions && (
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
  );
}
{
  /* show the route[2]*/
}
{
  directions && (
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
  );
}
{
  /* show the route[3]*/
}
{
  directions && (
    <DirectionsRenderer
      options={{
        directions,
        routeIndex: 3,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: "yellow",
          strokeWeight: 6,
          strokeOpacity: 0.5,
        },
      }}
    />
  );
}
{
  /* show the route[4]*/
}
{
  directions && (
    <DirectionsRenderer
      options={{
        directions,
        routeIndex: 4,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: "orange",
          strokeWeight: 10,
          strokeOpacity: 0.5,
        },
      }}
    />
  );
}
{
  /* show the route[5]*/
}
{
  directions && (
    <DirectionsRenderer
      options={{
        directions,
        routeIndex: 5,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: "purple",
          strokeWeight: 10,
          strokeOpacity: 0.5,
        },
      }}
    />
  );
}
{
  /* show the route[6]*/
}
{
  directions && (
    <DirectionsRenderer
      options={{
        directions,
        routeIndex: 6,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: "pink",
          strokeWeight: 10,
          strokeOpacity: 0.5,
        },
      }}
    />
  );
}
{
  /* show the route[7]*/
}
{
  directions && (
    <DirectionsRenderer
      options={{
        directions,
        routeIndex: 7,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: "gray",
          strokeWeight: 10,
          strokeOpacity: 0.5,
        },
      }}
    />
  );
}
{
  /* show the route[8]*/
}
{
  directions && <DirectionsRenderer directions={directions} />;
}
