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

      var venues = JSON.parse(data);

      makeMarkers(venues);
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
      console.log(response.reply);
      console.log(status);
    });
}
