var map;
var service;
var infowindow;

var currentPosition;

var polygonHolder = new Array();

var username = "luke"
var userID = 2;

/* initializes the map, focused on brisbane. Pins tracked venues on the map and gets the location of the current device.
 */
function initMap() {
  var brisbane = new google.maps.LatLng(-27.496404, 153.013416);

  map = new google.maps.Map(document.getElementById('map'), {
    center: brisbane,
    zoom: 15
  });

  venueArray.forEach(function(e) {
    polygonHolder.push({
      polygon: new google.maps.Polygon({
        paths: e.coords
      }),
      id: e.id
    });
  });

  polygonHolder.forEach(function(e) {
    e.polygon.setMap(map);
  });

  //Grab list of venues from db and add them to local venue storage. Venues are stores as Venue objects (defined in venueManager.js) in an array named venues which is globally accessible.
  getVenues();

  if (navigator.geolocation) {
    mainloop();
  } else {
    console.log("Geolocation is not supported by this browser");
  }
}

function mainloop() {
  navigator.geolocation.getCurrentPosition(mainloop2);
  setTimeout(mainloop, 15000);
}

/* The function where most of the application's logic will happen. This function repeats every 15 seconds so it should update all venues and send this device's data every time it is called */
function mainloop2(currentLocation) {
  // console.log("mainloop2");
  // console.log("Latitude: " + currentLocation.coords.latitude + " \nLongitude: " + currentLocation.coords.longitude);

  var currentLatLngObject = getLatLng(currentLocation);
  var currentLatLngGoogle = new google.maps.LatLng(currentLatLngObject.lat, currentLatLngObject.lng);

  markCurrentLocation(currentLatLngObject);
  var venue = checkIfInVenue(currentLatLngGoogle);

  if (venue != null) {
    //We're in a venue, time to read our sensors and send them to the database

    //Read Audio Level
    console.log("audio level = " +
      audioLevel);

    //Read Accelerometer Level
    console.log("accelerometer level = " + moveVal);

    //Push to the server
    sendBuzz(userID, username, venue.id, audioLevel, moveVal);
  } else {
    console.log("Not in a venue");
  }

  //Get data from database and link to our venues.
  pullBuzz();
}

function markCurrentLocation(currentLocation) {
  var marker = new google.maps.Marker({
    position: currentLocation,
    map: map,
    title: "My Location"
  });
}

function checkIfInVenue(currentLocation) {
  returnVal = null;
  polygonHolder.forEach(function(e) {
    if (google.maps.geometry.poly.containsLocation(currentLocation, e.polygon)) {
      console.log("In Venue with ID : " + e.id);
      returnVal = e;
    }
  });
  return returnVal;
}



//Create a marker on the map from a marker object
function addMarker(markerObject) {
  var marker = new google.maps.Marker({
    position: markerObject.latLng,
    map: map,
    title: markerObject.title
  })
}


/////
//
// console.log("Geolocation.js can see " + SECoords);

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("Geolocation is not supported by this browser");
//   }
// }


// function showPosition(position) {
//   console.log("Latitude: " + position.coords.latitude + " \nLongitude: " + position.coords.longitude);
// }
//
// var markerObject = {
//   lat: position.coords.latitude,
//   lng: position.coords.longitude,
//   title: "Current Location",
//   label: "A",
// };
//
// addMarker(markerObject);
//
// polygonHolder.forEach(function(e) {
//   google.maps.geometry.poly.containsLocation(position.latLng, e) ?
//     console.log("In a venue") :
//     console.log("NOT in a venue");
// });
