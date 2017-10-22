var runAudio = false;
var runLocation = false;
var runAccelerometer = false;
var isLocal = true;

var map;
var service;
var infowindow;

var currentPosition;

var polygonHolder = new Array();

var markerArray = new Array();

//hardcoded login information which should be set to whatever the user logs in with.
var username = "luke"
var userID = 2;

//variables to store which permissions we've currently got.
var motionAllowed, audioAllowed, geoAllowed = false;

//This function gets called once the page loads
$(document).ready(function () {

  //THIS EVENT LISTENER IS ATTACHED TO WHICHEVER BUTTON THE USER PRESSES TO LET US BEGIN RECORDING USING THEIR SENSORS. IT STARTS THE SENSORS AND THE MAIN LOOP.
  document.getElementById("allowSound").addEventListener("click", startSensorsAndMainLoop);
});

//This function lets the accelerometer / microphone / geolocation service start running. Then calls the main loop.
function startSensorsAndMainLoop() {
  if (runAudio) {
    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
  }

  soundMeter.context.resume();

  //attach accelerometer event listener
  if (runAccelerometer) {
    if (window.DeviceMotionEvent) {
      console.log("Motion supported");
      motionAllowed = true;
      window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
      console.log("Motion NOT supported");
    };
  }

  //attach geolocation stuff
  if (runLocation) {
    if (navigator.geolocation) {
      geoAllowed = true;
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }

  //call the main loop
  if (!isLocal) {
    mainloop();
  }
};

/* This is the function which gets called once the google maps component is loaded. it initialises the map variable to store a reference to the javascript map.
*/
function initMap() {
  var brisbane = new google.maps.LatLng(-27.496404, 153.013416);

  map = new google.maps.Map(document.getElementById('map'), {
    center: brisbane,
    zoom: 15
  });

  //an event which is necessary in another function to let it instantiate some stuff which uses Google.
  googleReady();

  //This function creates all of the markers and geofences on the map.
  prepareMarkersAndFences();

  //Grab list of venues from db and add them to local global venue storage. This array can be found in the venueManager.js file.
  if (!isLocal) {
    getVenues();
  }
}

function mainloop() {
  if (geoAllowed) {
    navigator.geolocation.getCurrentPosition(mainloop2);
  } else {
    alert("geoLocation not allowed on this browser");
  }

  //runs the mainloop every 10 seconds
  setTimeout(mainloop, 10000);
}

/* The function where most of the application's logic will happen. This function repeats every 15 seconds so it should update all venues and send this device's data every time it is called */
function mainloop2(currentLocation) {

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

//Creates a marker on the map at the browser's current location
function markCurrentLocation(currentLocation) {
  var marker = new google.maps.Marker({
    position: currentLocation,
    map: map,
    title: "My Location"
  });
}

//Returns null if not in a venue, otherwise returns the venue that we're in.
function checkIfInVenue(currentLocation) {
  returnVal = null;
  polygonHolder.forEach(function (e) {
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

function prepareMarkersAndFences() {
  venues.forEach(function (e) {
    polygonHolder.push({
      polygon: new google.maps.Polygon({
        paths: e.coords
      }),
      id: e.id
    });

    var markerLatLng = new google.maps.LatLng(e.point.lat, e.point.lng);
    createSmartMarker(markerLatLng, map, e);
  });

  // console.log(markerArray);

  polygonHolder.forEach(function (e) {
    e.polygon.setMap(map);
  });
}
