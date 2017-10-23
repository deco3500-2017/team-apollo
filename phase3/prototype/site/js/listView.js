var venuesByDistance = [];

// $(document).ready(function () {
//     $("#listButton").bind("click", showList);
// })

function showList() {
    populateList();

    // $("#listView").show();
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
        //insert html object into list object
    })
}