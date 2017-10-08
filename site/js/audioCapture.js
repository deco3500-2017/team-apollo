/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* global AudioContext, SoundMeter */

'use strict';

var audio;
var soundMeter;
var constraints;

var audioLevel;

$(document).ready(function() {
  audio = document.querySelector('audio');

  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    window.audioContext = new AudioContext();
  } catch (e) {
    alert('Web Audio API not supported.');
  }

  // Put variables in global scope to make them available to the browser console.
  constraints = window.constraints = {
    audio: true,
    video: false
  };

  navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

  document.getElementById("allowSound").addEventListener("click", function() {
    console.log("after the click");
    console.log(soundMeter);
    soundMeter.context.resume();
    console.log(soundMeter);
  });
});

function handleSuccess(stream) {

  audio.srcObject = stream;

  // Put variables in global scope to make them available to the
  // browser console.
  window.stream = stream;

  var audioTracks = stream.getAudioTracks();
  console.log('Using audio device: ' + audioTracks[0].label);
  stream.oninactive = function() {
    console.log('Stream ended');
  };
  window.stream = stream; // make variable available to browser console
  audio.srcObject = stream;

  var soundMeter = window.soundMeter = new SoundMeter(window.audioContext);

  soundMeter.connectToSource(stream, function(e) {
    if (e) {
      alert(e);
      return;
    }

    soundMeter.context.resume()

    setInterval(function() {
      // instantMeter.value = instantValueDisplay.innerText =
      //     soundMeter.instant.toFixed(2);
      // slowMeter.value = slowValueDisplay.innerText =
      //     soundMeter.slow.toFixed(2);
      // clipMeter.value = clipValueDisplay.innerText =
      //     soundMeter.clip;

      // console.log(soundMeter.slow);
      // soundMeter.context.resume();
      // console.log(soundMeter.context);
      // console.log("setInterval happening & resuming context of this shit");
      // console.log(soundMeter);
      document.getElementById("volume").innerText = (soundMeter.slow);
      audioLevel = soundMeter.slow;
    }, 1000);
  });
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// /*
//  *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
//  *
//  *  Use of this source code is governed by a BSD-style license
//  *  that can be found in the LICENSE file in the root of the source
//  *  tree.
//  */
//
// 'use strict';
//
// // Put variables in global scope to make them available to the browser console.
// var audio = document.querySelector('audio');
//
// var constraints = window.constraints = {
//   audio: true,
//   video: false
// };
//
// function handleSuccess(stream) {
//   var audioTracks = stream.getAudioTracks();
//   console.log('Got stream with constraints:', constraints);
//   console.log('Using audio device: ' + audioTracks[0].label);
//   stream.oninactive = function() {
//     console.log('Stream ended');
//   };
//   window.stream = stream; // make variable available to browser console
//   audio.srcObject = stream;
//   // console.log(audio);
// }
//
// function handleError(error) {
//   console.log('navigator.getUserMedia error: ', error);
// }
//
// navigator.mediaDevices.getUserMedia(constraints).
// then(handleSuccess).catch(handleError);
