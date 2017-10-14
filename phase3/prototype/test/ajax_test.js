// function getVenues() {
  // $.post("../server/ajax_test.php", {
      // venues: "locations",
    // },
    // function(data, status) {
      // console.log(data);
      // var venues = JSON.parse(data);
      // console.log(JSON.parse(data));
      // console.log(venues[0]);
      // console.log(JSON.parse(venues[0]).venueLat);
      // console.log(latLng(JSON.parse(venues[0])));

      // makeMarkers(venues);
    // }
  // );
// }

$(document).ready(function() {
  console.log("ajax_test is ready");

  var venueNam;
  var venueDesc;
  var venueSite;
  
  var venueData;
  
  $.get("ajax_test.php",function(data){
	  console.log("ajax_test is ready2");
	    //console.log("data",data);
		venueData = JSON.parse(data,",");
		//console.log("1111",venueData);
		//console.log("22222",venueData[0][0]);
		

		 // console.log(venueNam);
		   document.getElementById("1").innerHTML = venueData[1][1];
	  
	      
	
	 
		 
		 // console.log(venueNam);
		   document.getElementById("2").innerHTML = venueData[1][4];
		   document.getElementById("3").href= venueData[1][5];
		   document.getElementById("4").href = venueData[1][6];
		   
	
		
		
   });

  
  // getVenues();
});
