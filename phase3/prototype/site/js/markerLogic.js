function createSmartMarker(latlng, map, markerArray, id) {
    new CustomMarker(
        latlng,
        map,
        markerArray,
        id
    );

    // overlay.draw();
}

function changeFill(div, val) {
    div.children[0].style.top = val + "%";
}

function markerClicked(id) {
    console.log("The marker of venue ID " + id + " was just clicked");
}