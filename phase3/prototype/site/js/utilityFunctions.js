function getLatLng(location) {
  var latLng = {
    lat: location.coords.latitude,
    lng: location.coords.longitude
  };
  return latLng;
}

function makeMarkers(markers) {
  markers.forEach(function(current) {
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
  $.post("../server/ajax_test.php", {
      venues: "locations",
    },
    function(data, status) {
      console.log("got venues");
      var returnVenues = JSON.parse(data);

      returnVenues.forEach(function(e) {
        var newVenue = new Venue(e);
        venues.push(e);
      });
    }
  );
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
    function(data, status) {
      var response = JSON.parse(data);
      // console.log("SendBuzz results ; " + response.reply + " , " + status);
      // console.log(response.reply);
      // console.log(status);
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
    function(data, status) {
      var response = JSON.parse(data);
      // console.log(response);

      var buzzArray = new Array(14);

      for (i = 0; i < 14; i++) {
        buzzArray[i] = new emptyBuzz(i + 1);
      }

      response.forEach(function(e) {
        var rating = JSON.parse(e);
        var buzzRating = buzzArray[parseInt(rating.venueID) - 1];

        buzzRating.popularity++;
        var newAudio = 0.0;
        newAudio = (parseFloat(rating.microphoneReading) + (buzzRating.audio * (buzzRating.popularity - 1))) / buzzRating.popularity;

        var newAccelerometer = 0.0;
        newAccelerometer = (parseFloat(rating.accelerometer) + (buzzRating.accelerometer * (buzzRating.popularity - 1))) / buzzRating.popularity;

        buzzRating.audio = newAudio;
        buzzRating.accelerometer = newAccelerometer;
      });

      buzzHolder = buzzArray;

      calculateBuzz();

      console.log("Buzz Ratings below: ");
      console.log(buzzHolder);
    });
}

function calculateBuzz() {
  buzzHolder.forEach(function(e) {

    var audioBuzz = Math.min((e.audio / 0.03), 1);
    var accelerometerBuzz = Math.min((e.accelerometer / 15.0), 1);
    var popBuzz = Math.min((e.popularity / 100.0), 1);

    e.buzz = ((audioBuzz + accelerometerBuzz + popBuzz) / 3) * 100;
  });
}
