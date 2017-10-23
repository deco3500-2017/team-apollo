var venuesByDistance = [];

$(document).ready(function () {
    $("#listButton").bind("click", { val: 1 }, changeActive);
    $("#mapButton").bind("click", { val: 2 }, changeActive);
    $("#profileButton").bind("click", { val: 3 }, changeActive);
})

function showList() {
    console.log("should be showing list");
    clearList();
    populateList();

    $("#listview").removeClass("hidden");
}

function clearList() {
    $("#listViewList").empty();
}

function populateList() {
    sortByDistance();
    addVenuesToList();
}

function sortByDistance() {
    venuesByDistance.length = 0;

    var tuples = [];

    venues.forEach(function (e) {
        tuples.push([e.id, e.distance]);
    })

    tuples.sort(function (a, b) {
        a = a[1];
        b = b[1];

        return a < b ? -1 : (a > b ? 1 : 0);
    });

    for (var i = 0; i < tuples.length; i++) {
        var key = tuples[i][0];
        var value = tuples[i][1];

        venuesByDistance.push([key, value]);
    }
}

function addVenuesToList() {
    venuesByDistance.forEach(function (e) {
        var venue = getVenueByID(e[0]);

        console.log("should be appending something to the listview");
        $("#listViewList").append(addVenueListHTML(venue.id, venue.name, venue.distance));
        $("#list" + venue.id).css("height", Math.min(venue.buzz + 25, 98) + "%");
    })
}

function addVenueListHTML(id, title, distance) {
    var listHTML =
        "<li class='item'> \
    <div class='item-img'> \
        <img src='./img/" + id + ".jpg' class='venu-icon' /> \
    </div> \
    <div class='item-content'> \
        <p class='item-title'>" + title + " </p> \
        <p class='item-detail'> Less than " + ((distance / 1000) + 1).toFixed(1) + "km Away </p> \
    </div> \
    <div class='thermometer-holder'> \
        <div class='bottom-circle'></div> \
        <div class='mercury' id='list" + id + "'></div> \
    </div> \
    </li>";

    return listHTML;
}

function changeActive(iconNum) {
    switch (iconNum.data.val) {
        case 1:
            // $("#venueProfile").addClass("hidden");

            showList();
            $("#listIcon").addClass("active");
            $("#mapIcon").removeClass("active");
            $("#profileIcon").removeClass("active");
            break;

        case 2:
            $("#listIcon").removeClass("active");
            $("#mapIcon").addClass("active");
            $("#profileIcon").removeClass("active");
            break;

        case 3:
            // $("#listview").addClass("hidden");

            // showVenueProfile();
            $("#listIcon").removeClass("active");
            $("#mapIcon").removeClass("active");
            $("#profileIcon").addClass("active");
            break;
    }
}

function showVenueProfile(id) {
    clearVenueProfile();
    populateVenueProfile(id);

    console.log("Should be showing venue profile");
    $("#venueProfile").removeClass("hidden");
}

function clearVenueProfile() {
    $("#venueProfile").empty();
}

function populateVenueProfile(id) {
    var venue = getVenueByID(id);

    var venueProfileHTML = "<div id='venueProfileBack' class='back-btn'> \
      <i class='fa fa-angle-left'> \</i> \
  </div> \
  \
  <div id='slides'> \
    <div class='slide'> \
    </div> \
  </div> \
  \
  <div class='venu-label'> \
  \
    <p class='venu-name'> \ " + venue.name + "</p> \
    <p class='venu-type'> \ Cocktail Bar </p> \
    \
  </div> \
  \
  <div class='venu-rating'> \
    <i class='fa fa-thermometer-3 rating'> \</i> \
  </div> \
  \
  <div class='profile-btns'> \
    <div class='fav-btn'> \
      <i class='fa fa-heart active2'> \
        <p class='label-btn'> \ FAVOURITE </p> \
      </i> \
    </div> \
    <div class='web-btn'> \
      <i class='fa fa-link'> \
        <p class='label-btn'> \ WEBSITE </p> \
      </i> \
    </div> \
    <div class='call-btn'> \
      <i class='fa fa-phone'> \
        <p class='label-btn'> \ CALL </p> \
      </i> \
    </div> \
  </div> \
  \
  <div class='rating-graph'> \
  </div> \
  \
  <div class='rating-point'> \
    <div class='capacity'> \
      <p class='label-point'> \ CAPACITY </p> \
      <p class='point'> \ 50% </p> \
    </div> \
    <div class='volume'> \
      <p class='label-point'> \ VOLUME </p> \
      <p class='point'> \ 20% </p> \
    </div> \
    <div class='movement'> \
      <p class='label-point'> \ MOVEMENT </p> \
      <p class='point'> \ 80% </p> \
    </div> \
  </div> \
  \
  <div class='venu-map'> \
  </div> \
  \
  <div class='detail-venu'> \
    <div class='detail'> \
      <div class='ic'> \
        <i class='fa fa-map-marker'> \</i> \
      </div> \
      <div class='des'> \
        <p class='detail-des'> \ 757 Anne St, Fortitude Valley \
          <br/> Queensland 4006 </p> \
      </div> \
    </div> \
    <div class='detail'> \
      <div class='ic'> \
        <i class='fa fa-clock-o'></i> \
      </div> \
      <div class='des'> \
        <p class='detail-des'> \
          <strong> Open now </strong> - Closes 3 am </p> \
      </div> \
    </div> \
  </div>"

    $("#venueProfile").append(venueProfileHTML);

    $("#venueProfileBack").bind("click", hideVenueProfile);
}

function hideVenueProfile() {
    $("#venueProfile").addClass("hidden");
}