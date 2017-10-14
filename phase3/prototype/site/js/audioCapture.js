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

  // document.getElementById("allowSound").addEventListener("click", function() {
  //   navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
  //   // soundMeter.context.resume();
  // });
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

    // console.log("before");
    // console.log(soundMeter);
    // soundMeter.context.resume();
    // console.log("after");
    // console.log(soundMeter);

    setInterval(function() {
      // document.getElementById("volume").innerText = (soundMeter.slow);
      audioLevel = soundMeter.slow.toFixed(5);
      // console.log(soundMeter);
    }, 25);
  });
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}
