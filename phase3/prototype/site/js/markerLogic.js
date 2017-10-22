function createSmartMarker(latlng, map) {
    overlay = new CustomMarker(
        latlng,
        map,
        {
            marker_id: '123'
        }
    );
}