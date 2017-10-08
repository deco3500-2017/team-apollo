if (window.DeviceMotionEvent) {
  console.log("Motion supported");
  window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
  console.log("Motion NOT supported");
};

var moveVal = 0;

function deviceMotionHandler(eventData) {
  var info, xyz = "[X, Y, Z]";

  // Grab the acceleration from the results
  var acceleration = eventData.acceleration;
  info = xyz.replace("X", acceleration.x);
  info = info.replace("Y", acceleration.y);
  info = info.replace("Z", acceleration.z);

  var magnitude = Math.sqrt(Math.pow(acceleration.x, 2) + Math.pow(acceleration.y, 2) + Math.pow(acceleration.y, 2));

  moveVal = 0.998 * moveVal + 0.002 * magnitude;

  // console.log(moveVal);
}
