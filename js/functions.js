
// create a line at angle
// function createLineElement(x, y, length, angle) {
//     var line = document.createElement("div");
//     var styles = 'border: 1px solid black; '
//                + 'width: ' + length + 'px; '
//                + 'height: 0px; '
//                + '-moz-transform: rotate(' + angle + 'rad); '
//                + '-webkit-transform: rotate(' + angle + 'rad); '
//                + '-o-transform: rotate(' + angle + 'rad); '
//                + '-ms-transform: rotate(' + angle + 'rad); '
//                + 'position: absolute; '
//                + 'top: ' + y + 'px; '
//                + 'left: ' + x + 'px; ';
//     line.setAttribute('style', styles);
//     return line;
// }
//
// function createLine(x1, y1, x2, y2) {
//     var a = x1 - x2,
//         b = y1 - y2,
//         c = Math.sqrt(a * a + b * b);
//
//     var sx = (x1 + x2) / 2,
//         sy = (y1 + y2) / 2;
//
//     var x = sx - c / 2,
//         y = sy;
//
//     var alpha = Math.PI - Math.atan2(-b, a);
//
//     return createLineElement(x, y, c, alpha);
// }
var enRadius = 30 / 2;
var hit = false;
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
        return true
        hit = true;
        break;
      }
    }
  }
}

// MouseTracker
(function handlePointer() {

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
