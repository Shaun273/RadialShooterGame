var enRadius = 40 / 2;
var hit = false;

// Collisions
function hittest(line,enemy){
  // console.log("hittest ran");
  // console.log(line.offset());
  // console.log(angle);

  if (angle >= 0) {
    if (Math.abs(angle) <= 90) {
      var lineY1 = parseInt(line.offset().top);
      var lineY2 = lineY1 + lineLength * Math.sin((angle)*Math.PI/180);

      var lineX1 = parseInt(line.offset().left);
      var lineX2 = lineX1 + lineLength * Math.cos((angle)*Math.PI/180);
      // console.log(lineY2);

    } else {
      var lineY1 = parseInt(line.offset().top);
      var lineY2 = lineY1 + lineLength * Math.sin((180-angle)*Math.PI/180);

      var lineX2 = parseInt(line.offset().left);
      var lineX1 = lineX2 + lineLength * Math.cos((180-angle)*Math.PI/180);
      // console.log(lineY2);
    }

  } else if (angle < 0) {
    if (Math.abs(angle) <= 90) {
      var lineY2 = parseInt(line.offset().top);
      var lineY1 = lineY2 + lineLength * Math.sin((-angle)*Math.PI/180);

      var lineX1 = parseInt(line.offset().left);
      var lineX2 = lineX1 + lineLength * Math.cos((-angle)*Math.PI/180);
      // console.log(lineY1);

    } else {
      var lineY2 = parseInt(line.offset().top);
      var lineY1 = lineY2 + lineLength * Math.sin((180 + angle) * Math.PI/180);

      var lineX2 = parseInt(line.offset().left);
      var lineX1 = lineX2 + lineLength * Math.cos((180 + angle) * Math.PI/180);
      // console.log(lineY1);
    }
  }

  // console.log(lineY2);
  // console.log(lineX2);
  var enX1 = enemy.offset().left;
  var enY1 = enemy.offset().top;

  // var c1 = lineX1;
  // var c2 = lineY1;
  return line_circle_collision(lineX1,lineY1,lineX2,lineY2,centerX,centerY,enX1,enY1,enRadius);

}

function line_circle_collision(x1,y1,x2,y2,c1,c2,cirX,cirY,radius) {
  var dydx = (y2-y1)/(x2-x1);
 // console.log("circle dectect");
  // console.log(centerX);
  // console.log(centerY);
  if (x2>x1) {

    for (var x = x1; x < x2+1 ; x+=colisionTestInterval) {
      var y =dydx*(x-c1)+c2;
      // createMarker(x,y);
      if (y > cirY && y < cirY+ 2 * radius && x > cirX && x < cirX + 2 * radius){
        hit = true;
        return true
        break;
      }
    }
  } else {
    for (var x = x1; x > x2+1 ; x-=colisionTestInterval) {

      var y =dydx*(x-c1)+c2;
      // createMarker(x,y);
      if (y > cirY && y < cirY+ 2 * radius && x > cirX && x < cirX + 2 * radius){
        hit = true;
        return true
        break;
      }
    }
  }
}

// collision resolving
function resolveHit(object) {

  if (endless == true){
    createSplat(object.style.left,object.style.top);
    if (Math.random()<0.5) {
      object.style.left = Math.round(Math.random())*1000 + "px";
      object.style.top = Math.round(Math.random()*700) + "px";
    } else {
      object.style.left = Math.round(Math.random()*1000) + "px";
      object.style.top = Math.round(Math.random())*700 + "px";
    }
  } else {
    var splat = document.createElement('div');
    splat.className = "dead";
    splat.style.left = object.style.left;
    splat.style.top = object.style.top;
    document.body.appendChild(splat);
    object.remove();
  }
}

function createSplat(left,top){
  splat = document.createElement('div');
  splat.className = "dead";
  splat.style.left = left;
  splat.style.top = top;
  document.body.appendChild(splat);
}

// Create test marker
function createMarker(x,y) {
  dot = document.createElement('div');
  dot.className = "marker";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  document.body.appendChild(dot);
}

// Lose test function
function loseTest() {
  var leftYouX = centerX-youRadius;
  var rightYouX = leftYouX + youRadius*2;
  var topYouY = centerY-youRadius;
  var bottomYouY = topYouY + youRadius*2;
  $('.dot').each(function() {
    var leftEnX = parseInt(this.style.left);
    var rightEnX = leftEnX + enRadius*2;
    var topEnY = parseInt(this.style.top);
    var bottomEnY = topEnY +enRadius*2;
    if (leftEnX <= rightYouX && rightEnX >= leftYouX &&  topEnY <= bottomYouY &&  bottomEnY >= topYouY){
      lost = true;
      return true;
    }
  })
}

//  Creat enemies function()
function createEnemies(){

  if (newLevel == true) {

    for (var i = 0; i < numEnemies; i++) {

      dot = document.createElement('div');
      dot.className = "dot";
      dot.style.left = Math.round(Math.random())*1000 + "px";
      dot.style.top = Math.round(Math.random()*700) + "px";
      document.body.appendChild(dot);
      // console.log("Created dot");
    }
    newLevel = false;
  }
}

// Move enemies functions
function moveEnemies(){

  $('.dot').each(function(){
    if (parseInt(this.style.left)<centerX- enRadius -youRadius) {
      this.style.left = parseInt(this.style.left)+increment+"px";
    } else {
      this.style.left = parseInt(this.style.left)-increment+"px";
    }
    if (parseInt(this.style.top)<centerY-enRadius - youRadius) {
      this.style.top = parseInt(this.style.top)+increment+"px";
    } else {
      this.style.top = parseInt(this.style.top)-increment+"px";
    }
    var enAngle = Math.atan2(parseInt(this.style.top) - centerY, parseInt(this.style.left) - centerX) * 180 / Math.PI - 180;
    $(this).css('transform', 'rotate(' + enAngle + 'deg)');
  });
}

// Animate line function
function animateLine(){

  $line = $(".line");

  $line.animate({
    width: 'toggle'
  },0.0);
}

// Audio
var gun = $("#gun");
var death = $("#death");
var beamShot = $("#beamShot");
var penguinBye = $("#penguinBye");
var noot = $("#noot");

function enemyHitAudio() {

  if (theme == "survivor" && !mute) {
    death[0].play() //death hit audio

  } else if (theme == "penguin" && !mute) {
    //death hit audio
    penguinBye[0].play();
  }
}

function gunAudio() {

  if (theme == "survivor" && !mute) {
    //death hit audio
    gun[0].play();
  } else if (theme == "penguin" && !mute) {
    //death hit audio
    noot[0].play();
  }
}

function laserAudio() {

  if (theme == "survivor" && !mute) {
    //death hit audio
    beamShot[0].play();
  } else if (theme == "penguin" && !mute) {
    var audioLaser = new Audio('../audio/Noot\ Noot.mp3'); //death hit audio
    beamShotw[0].play();
  }
}

function backgroundAudio() {

  if (theme == "survivor") {
    myBackground.attr('src', "audio/Contamination.mp3") //death hit audio
    myBackground.play();
  } else if (theme == "penguin") {
    myBackground.attr('src', "audio/Blessed.mp3");
    // hit audio
    myBackground.play();
  }
}
document.getElementById('backgroundMusic').addEventListener('ended', function(){
    // this.currentTime = 0;
    this.play();
}, false);

function stopAudio() {
  $('audio').each(function () {

    if (mute) {
      // var bool = $("#player").prop("muted");
      // $("#player").prop("muted",!bool);
      this[0].pause();
      // this.sound.currentTime = 0;
    } else {
      this[0].play()
    }

});
}

// MouseTracker
(function() {

  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {

    pageX = event.pageX;
    pageY = event.pageY;

    // If pageX/Y aren't available and clientX/Y
    // are, calculate pageX/Y
    // Calculate pageX/Y if missing and clientX/Y available
    // if (event.pageX == null && event.clientX != null) {
    //   eventDoc = (event.target && event.target.ownerDocument) || document;
    //   doc = eventDoc.documentElement;
    //   body = eventDoc.body;
    //
    //   event.pageX = event.clientX +
    //     (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
    //     (doc && doc.clientLeft || body && body.clientLeft || 0);
    //   event.pageY = event.clientY +
    //     (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
    //     (doc && doc.clientTop  || body && body.clientTop  || 0 );
    // }
    drawLongLine('.a', pageX,pageY, '.line');

  }
})();
