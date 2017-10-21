var map;
var service;
var infowindow;

var currentPosition;

var polygonHolder = new Array();

//hardcoded login information which should be set to whatever the user logs in with.
var username = "luke"
var userID = 2;

//variables to store which permissions we've currently got.
var motionAllowed, audioAllowed, geoAllowed = false;

//This function gets called once the page loads
//Currently it starts the audio listener straight away (NEEDS FIXING LATER BECAUSE THIS ISN'T RIGHT) and attaches a listener to the button on the bottom which starts the mainloop when pressed.
$(document).ready(function() {

  navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

  //Note for HUSHENG : WHICHEVER BUTTON THE USER USES TO LOG IN / APPROVE ACCESS TO MICROPHONE & AUDIO SHOULD BE ATTACHED TO THE EVENT LISTENER BELOW INSTEAD OF THE "allowSound" ELEMENT. THE BELOW EVENT IS WHAT BEGINS THE MAINLOOP. ONCE YOU'VE GOT THE LOGIN FUNCTION WORKING WE ONLY WANT MAINLOOP TO BEGIN ONCE WE HAVE GOTTEN THE USERNAME AND USER ID AND SET THE VARIABLES ABOVE (userID and username).
  document.getElementById("allowSound").addEventListener("click", function() {

    soundMeter.context.resume();

    if (window.DeviceMotionEvent) {
      console.log("Motion supported");
      motionAllowed = true;
      window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
      console.log("Motion NOT supported");
    };

    if (navigator.geolocation) {
      geoAllowed = true;
    } else {

      console.log("Geolocation is not supported by this browser");
    }
    // mainloop();
  });
});

/* This is the function which gets called once the google maps component is loaded.
 */
function initMap() {
  var brisbane = new google.maps.LatLng(-27.496404, 153.013416);

  map = new google.maps.Map(document.getElementById('map'), {
    center: brisbane,
    zoom: 15
  });

  // venueArray.forEach(function(e) {
  //   polygonHolder.push({
  //     polygon: new google.maps.Polygon({
  //       paths: e.coords
  //     }),
  //     id: e.id
  //   });
  // });

  // polygonHolder.forEach(function(e) {
  //   e.polygon.setMap(map);
  // });

  //Grab list of venues from db and add them to local venue storage. Venues are stores as Venue objects (defined in venueManager.js) in an array named venues which is globally accessible.
  // getVenues();
}


function mainloop() {
  if (geoAllowed) {
    navigator.geolocation.getCurrentPosition(mainloop2);
  } else {
    alert("geoLocation not allowed on this browser");
  }

  //runs the mainloop every 10 second
  setTimeout(mainloop, 10000);

  // console.log(soundMeter);
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
