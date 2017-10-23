function CustomMarker(latlng, map, venueObject) {

	this.latlng = latlng;
	this.setMap(map);

	this.id = venueObject.id;

	this.venue = venueObject;
}

function googleReady() {
	CustomMarker.prototype = new google.maps.OverlayView();

	CustomMarker.prototype.draw = function () {

		var self = this;

		var div = this.div;

		if (!div) {

			div = this.div = document.createElement('div');

			div.venueID = this.id;

			div.style.position = 'absolute';
			div.style.cursor = 'pointer';
			div.style.width = '4vh';
			div.style.height = '4vh';
			div.style.background = 'white';
			div.style.borderRadius = "50%";
			div.style.border = "solid 2px #EA6045";
			div.style.overflow = "hidden";

			fillMeter = document.createElement('div');

			fillMeter.style.position = 'absolute';
			fillMeter.style.cursor = 'pointer';
			fillMeter.style.width = '4vh';
			fillMeter.style.height = '4vh';
			fillMeter.style.background = '#EA6045';
			fillMeter.style.top = "0%";

			div.appendChild(fillMeter);

			this.venue.marker = div;

			google.maps.event.addDomListener(div, "click", function (event) {
				console.log('You clicked on a custom marker!');
				markerClicked(div.venueID);
				google.maps.event.trigger(self, "click");
			});

			var panes = this.getPanes();
			panes.overlayImage.appendChild(div);
		}

		var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

		if (point) {
			div.style.left = (point.x - 10) + 'px';
			div.style.top = (point.y - 20) + 'px';
		}
	};

	CustomMarker.prototype.remove = function () {
		if (this.div) {
			this.div.parentNode.removeChild(this.div);
			this.div = null;
		}
	};

	CustomMarker.prototype.getPosition = function () {
		return this.latlng;
	};

	// CustomMarker.prototype.changeFill = function (value) {
	// 	this.meter.style.top = value + "%";
	// }
}