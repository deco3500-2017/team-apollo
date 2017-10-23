function createSmartMarker(latlng, map, venueObject) {
    new CustomMarker(
        latlng,
        map,
        venueObject
    );
}

function changeFill(div, val) {
    div.children[0].style.top = (100 - val) + "%";
}

function markerClicked(id) {
    console.log("The marker of venue ID " + id + " was just clicked");
    changeFill(getVenueByID(id).marker, 100);
}