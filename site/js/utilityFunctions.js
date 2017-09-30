function getLatLng(venue) {
  var latLng = {
    lat: parseFloat(venue["venueLat"]),
    lng: parseFloat(venue["venueLong"])
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
