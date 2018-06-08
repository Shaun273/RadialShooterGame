

$("#pause").click(function() {
  console.log(pause);
  pause=!pause;
  console.log(pause);
});

$("#mute").click(function() {
  // stopAudio()
  $(this).toggleClass("unmuted");
  $(this).toggleClass("muted")
  if (mute) {
    stopAudio();
    mute = !mute
  }
});
