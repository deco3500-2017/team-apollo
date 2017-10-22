function CustomMarker(latlng, map, args) {
	console.log("creating a CustomMarker");

	this.latlng = latlng;
	this.args = args;
	this.setMap(map);

	this.meter;
}

function googleReady() {
	CustomMarker.prototype = new google.maps.OverlayView();

	CustomMarker.prototype.draw = function () {

		var self = this;

		var div = this.div;

		if (!div) {

			div = this.div = document.createElement('div');

			div.id = "div1";

			div.style.position = 'absolute';
			div.style.cursor = 'pointer';
			div.style.width = '4vh';
			div.style.height = '4vh';
			div.style.background = 'transparent';
			div.style.borderRadius = "50%";
			div.style.border = "solid 2px red";
			div.style.overflow = "hidden";

			fillMeter = document.createElement('div');

			fillMeter.id = "div2";

			fillMeter.style.position = 'absolute';
			fillMeter.style.cursor = 'pointer';
			fillMeter.style.width = '4vh';
			fillMeter.style.height = '4vh';
			fillMeter.style.background = 'blue';
			fillMeter.style.top = "50%";

			this.meter = fillMeter;

			div.appendChild(fillMeter);

			if (typeof (self.args.marker_id) !== 'undefined') {
				div.dataset.marker_id = self.args.marker_id;
			}

			google.maps.event.addDomListener(div, "click", function (event) {
				console.log('You clicked on a custom marker!');
				changeFill(div, 80);
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

function changeFill(div, val) {
	div.children[0].style.top = val + "%";
}