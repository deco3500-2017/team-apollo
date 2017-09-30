var map;
var service;
var infowindow;

/* initializes the map, focused on brisbane. Pins tracked venues on the map and gets the location of the current device.
 */
function initMap() {
  var brisbane = new google.maps.LatLng(-27.496404, 153.013416);

  map = new google.maps.Map(document.getElementById('map'), {
    center: brisbane,
    zoom: 15
  });

  getVenues();
  getLocation();
}

//Create a marker on the map from a marker object
function addMarker(markerObject) {
  var marker = new google.maps.Marker({
    position: markerObject.latLng,
    map: map,
    title: markerObject.title
  })
}
