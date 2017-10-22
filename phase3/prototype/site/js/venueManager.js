//This array will store all venues and their assosciated information.
var venues = [];

function Venue(id) {
  this.id = id;
  name = null;
  description = null;
  fb = null;
  site = null;
  reviews = new Array();
  audio = null;
  accelerometer = null;
  popularity = null;
  buzz = null;
  marker = null;
  coords = null;
  point = null;
}

Venue.prototype.addVenueInfo = function (venueObject) {
  this.name = venueObject.venueName;
  this.description = venueObject.description;
  this.fb = venueObject.venueFB;
  this.site = venueObject.venueSite;
}

Venue.prototype.updatebuzz = function (audio, accelerometer, popularity, buzz) {
  this.audio = audio;
  this.accelerometer = accelerometer;
  this.popularity = popularity;
  this.buzz = buzz;
}

Venue.prototype.addMarker = function (markerObject) {
  this.marker = markerObject;
}

function getLatLng(location) {
  var latLng = {
    lat: location.coords.latitude,
    lng: location.coords.longitude
  };
  return latLng;
}

function makeMarkers(markers) {
  markers.forEach(function (current) {
    currentVenue = JSON.parse(current);
    var latLng = getLatLng(currentVenue);
    addMarker(makeMarker(latLng, currentVenue.title));
  });
}

function makeMarker(latLng, title) {
  var marker = {
    latLng: latLng,
    title: title
  }

  return marker;
}

function getVenues() {
  $.post("https://deco3500-venu.uqcloud.net/luke/server/ajax_test.php", {
    venues: "locations",
  }).done(function (data, status) {
    var returnVenues = JSON.parse(data);

    returnVenues.forEach(function (e) {
      var venueInfo = JSON.parse(e);
      getVenueByID(venueInfo.venueID).addVenueInfo(venueInfo);
    });
  }, "json");
}

function sendBuzz(id, username, venue, audio, accelerometer) {
  var buzzData = {
    id: id,
    username: username,
    venue: venue,
    audio: audio,
    accelerometer: accelerometer
  };

  $.post("../server/buzzUpload.php", {
    buzz: buzzData
  },
    function (data, status) {
      var response = JSON.parse(data);
    });
}

function emptyBuzz(i) {
  this.id = i;
  this.audio = 0.0;
  this.accelerometer = 0.0;
  this.popularity = 0;
  this.buzz = 0.0
}

buzzHolder = new Array();

//This function will pull all of the ratings from the database then calculate & store the popularity, avg(audio), avg(accelerometer) in the buzzHolder above. Each venue's data will be stored in the index-1 of it's ID. E.g. Venue with id = 1 will be stored in buzzHolder[0]
function pullBuzz() {
  $.post("../server/buzzDownload.php", {
    buzz: "yes"
  },
    function (data, status) {
      var response = JSON.parse(data);
      // console.log(response);

      //temporary place to store all of the buzz values
      var buzzArray = new Array(14);

      for (i = 0; i < venues.length; i++) {
        buzzArray[i] = new emptyBuzz(i + 1);
      }

      //For every user's buzz data in the database: 
      response.forEach(function (e) {
        //the user's rating
        var rating = JSON.parse(e);

        //the buzz object for this venue in the buzzArray 
        var buzzRating = buzzArray[parseInt(rating.venueID) - 1];

        //Increase its popularity by 1 for each user at the venue
        buzzRating.popularity++;

        //calculate audio rating
        var newAudio = 0.0;
        newAudio = (parseFloat(rating.microphoneReading) + (buzzRating.audio * (buzzRating.popularity - 1))) / buzzRating.popularity;

        //calculate accelerometer rating
        var newAccelerometer = 0.0;
        newAccelerometer = (parseFloat(rating.accelerometer) + (buzzRating.accelerometer * (buzzRating.popularity - 1))) / buzzRating.popularity;

        //Set the buzzrating variables to the calculated values
        buzzRating.audio = newAudio;
        buzzRating.accelerometer = newAccelerometer;
      });

      //move the values to the permanent buzz holder
      buzzHolder = buzzArray;

      //calculate the overall buzz value for each of the venues
      calculateBuzz();

      //Put the buzz values in to the main venue array.
      saveBuzzIntoVenue();

      console.log("Buzz Ratings below: ");
      console.log(buzzHolder);
    });
}

//This function loops through all of the venues, and calculates and stores its overall buzz rating.
function calculateBuzz() {
  buzzHolder.forEach(function (e) {

    var audioBuzz = Math.min((e.audio / 0.03), 1);
    var accelerometerBuzz = Math.min((e.accelerometer / 15.0), 1);
    var popBuzz = Math.min((e.popularity / 100.0), 1);

    e.buzz = ((audioBuzz + accelerometerBuzz + popBuzz) / 3) * 100;
  });
}

function saveBuzzIntoVenue() {
  buzzHolder.forEach(function (e) {
    venues[e.id].audio = e.audio;
    venues[e.id].accelerometer = e.accelerometer;
    venues[e.id].popularity = e.popularity;
    venues[e.id].buzz = e.buzz;
  })
}

function getVenueByID(id) {
  return venues[id - 1];
}
