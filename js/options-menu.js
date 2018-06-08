var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  numEnemies = this.value;
}

var $endless = $('#endless');
var $waves = $('#waves');

$endless.click(function(){
  if (!endless) {
    $waves.removeClass("active");
    $endless.addClass('active');
    $("#waveScore").hide();
    endless = true;
  }
});
$waves.click(function(){
  if (endless) {
    $endless.removeClass("active");
    $waves.addClass('active');
    $("#waveScore").show();
    endless = false;
  }
});
var $beam = $('#beam');
var $single = $('#singleTarget');

$beam.click(function(){
  if (projectileType == 1) {
    $single.removeClass("active");
    $beam.addClass('active');
    projectileType = 2;
  }
});
$single.click(function(){
  if (projectileType == 2) {
    $beam.removeClass("active");
    $single.addClass('active');
    projectileType = 1;
  }
});


// Themes
var $theme1 = $('#theme1');
var $theme2 = $('#theme2');

$theme1.click(function() {
  $('.theme').remove();
  $('head').append('<link class="theme" rel="stylesheet" href="css/zombie-theme.css">');
  theme = "survivor";
  stopAudio();
  backgroundAudio();

});
$theme2.click(function() {
  $('.theme').remove();
  $('head').append('<link class="theme" rel="stylesheet" href="css/penguin-theme.css">');
  theme = "penguin";
  stopAudio();
  backgroundAudio();
});


// Music

var myBackground = $("#backgroundMusic");



// Repeats background music
