var venuesByDistance = [];

$(document).ready(function () {
    $("#listButton").bind("click", showList);

    $("#listButton").bind("click", { val: 1 }, changeActive);
    $("#mapButton").bind("click", { val: 2 }, changeActive);
    $("#profileButton").bind("click", { val: 3 }, changeActive);
})

function showList() {
    console.log("should be showing list");
    clearList();
    populateList();

    $("#listview").toggleClass("hidden");
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
        $("#listViewList").append(addVenueHTML(venue.id, venue.name, venue.distance));
    })
}

function addVenueHTML(id, title, distance) {
    var imgSrc; //Need to create a way to get image source from ID;

    var listHTML =
        "<li class='item'> \
    <div class='item-img'> \
    <img src='./img/" + id + ".jpg' class='venu-icon' /> \
    </div> \
    <div class='item-content'> \
    <p class='item-title'>" + title + " </p> \
    <p class='item-detail'> Less than " + ((distance / 1000) + 1).toFixed(1) + "km Away </p> \
    </div> \
    <div class='item-rating'> \
    <i class='fa fa-thermometer-0 rating'></i> \
    </div> \
    </li>";

    return listHTML;
}

function changeActive(iconNum) {
    switch (iconNum.data.val) {
        case 1:
            $("#listIcon").addClass("active");
            $("#mapIcon").removeClass("active");
            $("#profileIcon").removeClass("active");
            break;

        case 2:
            $("#listIcon").removeClass("active");
            $("#mapIcon").addClass("active");
            $("#profileIcon").removeClass("active");

            $("#listview").addClass("hidden");
            break;

        case 3:
            $("#listIcon").removeClass("active");
            $("#mapIcon").removeClass("active");
            $("#profileIcon").addClass("active");
            break;
    }
}