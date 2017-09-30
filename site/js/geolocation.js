function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser");
  }
}


function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + " \nLongitude: " + position.coords.longitude);

  var markerObject = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    title: "Current Location",
    label: "A",
  };

  addMarker(markerObject);
}
