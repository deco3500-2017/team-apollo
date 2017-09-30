function latLng(venue) {
  var latLng = {
    lat: venue["venueLat"],
    lng: venue["venueLong"]
  };
  return latLng;
}
