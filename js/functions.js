var enRadius = 30 / 2;
var hit = false;

// Collisions

function hittest(line,enemy){
  // console.log("hittest ran");
  // console.log(line.offset());
  // console.log(angle);
  if (hit == false) {
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
}

function line_circle_collision(x1,y1,x2,y2,c1,c2,cirX,cirY,radius) {
  var dydx = (y2-y1)/(x2-x1);
 // console.log("circle dectect");
  // console.log(centerX);
  // console.log(centerY);
  if (x2>x1) {

    for (var x = x1; x < x2+1 ; x+=5) {
      var y =dydx*(x-c1)+c2;
      // dot = document.createElement('div');
      // dot.className = "marker";
      // dot.style.left = x + "px";
      // dot.style.top = y + "px";
      // document.body.appendChild(dot);
      if (y > cirY && y < cirY+ 2 * radius && x > cirX && x < cirX + 2 * radius){
        hit = true;
        return true
        break;
      }
    }
  } else {
    for (var x = x2; x < x1+1 ; x+=5) {

      var y =dydx*(x-c1)+c2;
      // dot = document.createElement('div');
      // dot.className = "marker";
      // dot.style.left = x + "px";
      // dot.style.top = y + "px";
      // document.body.appendChild(dot);
      if (y > cirY && y < cirY+ 2 * radius && x > cirX && x < cirX + 2 * radius){
        hit = true;
        return true
        break;
      }
    }
  }
}

// Lose test

function loseTest() {
  var leftYouX = centerX;
  var rightYouX = leftYouX + youRadius*2;
  var topYouY = centerY;
  var bottomYouY = topYouY + youRadius*2;
  $('.dot').each(function() {
    var leftEnX = parseInt(this.style.left);
    var rightEnX = leftEnX + enRadius*2;
    var topEnY = parseInt(this.style.top);
    var bottomEnY = topEnY +enRadius*2;
    // console.log("left"+leftEnX);
    // console.log("left"+rightEnX);
    // console.log("top"+topEnY);
    // console.log("Bottom"+bottomEnY);
    console.log(leftEnX <= rightYouX && rightEnX >= leftYouX && topEnY <= bottomYouY &&  bottomEnY >= topYouY);
    if (leftEnX <= rightYouX && rightEnX >= leftYouX &&  topEnY <= bottomYouY &&  bottomEnY >= topYouY){
      lost = true;
      return true;
    }
  })
}

// Move enemies functions

function moveEnemies(){

  $('.dot').each(function(){
    if (parseInt(this.style.left)<centerX) {
      this.style.left = parseInt(this.style.left)+increment+"px";
    } else {
      this.style.left = parseInt(this.style.left)-increment+"px";
    }
    if (parseInt(this.style.top)<centerY) {
      this.style.top = parseInt(this.style.top)+increment+"px";
    } else {
      this.style.top = parseInt(this.style.top)-increment+"px";
    }

  });
}

// Animate line function
function animateLine(){

  $line = $(".line");

  $line.animate({
    width: 'toggle'
  },0.1);
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
