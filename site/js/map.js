var map;
var service;
var infowindow;

function initMap() {
  var brisbane = new google.maps.LatLng(-27.496404, 153.013416);

  map = new google.maps.Map(document.getElementById('map'), {
    center: brisbane,
    zoom: 15
  });

  var request = {
    location: brisbane,
    radius: '1000',
    // type: ['bar']
    query: 'norman hotel'
  };

  // service = new google.maps.places.PlacesService(map);
  // service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];

      console.log(place);
      createMarker(place);

      // console.log(place.name);
      // console.log(place.geometry.location.lat().toFixed(6) + "," + place.geometry.location.lng().toFixed(6));
      // console.log(place.opening_hours);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}
