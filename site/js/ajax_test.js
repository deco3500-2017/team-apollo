function getVenues() {
  $.post("../server/ajax_test.php", {
      venues: "locations",
    },
    function(data, status) {
      // console.log(data);
      var venues = JSON.parse(data);
      // console.log(JSON.parse(data));
      console.log(venues[0]);
      console.log(JSON.parse(venues[0]).venueLat);
      console.log(latLng(JSON.parse(venues[0])));
    }
  );
}

$(document).ready(function() {
  console.log("ajax_test is ready");

  // getVenues();
});
