
// create a line at angle
function createLineElement(x, y, length, angle) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid black; '
               + 'width: ' + length + 'px; '
               + 'height: 0px; '
               + '-moz-transform: rotate(' + angle + 'rad); '
               + '-webkit-transform: rotate(' + angle + 'rad); '
               + '-o-transform: rotate(' + angle + 'rad); '
               + '-ms-transform: rotate(' + angle + 'rad); '
               + 'position: absolute; '
               + 'top: ' + y + 'px; '
               + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);
    return line;
}

function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha);
}

// document.body.appendChild(createLine(100, 100, 200, 200));

// hit test function

// function hittest(line, enemy){
//
//   // console.log(a); // rectangular overlap detection.
// 	var aX1 = parseInt(line.offset().left);
// 	var aY1 = parseInt(line.offset().top);
// 	var aX2 = aX1 + parseInt(line.width());
// 	var aY2 = aY1;
// 	var aX3 = aX1;
// 	var aY3 = aY1 + parseInt(line.height());
// 	var aX4 = aX2;
// 	var aY4 = aY3;
//
//
// 	var bX1 = parseInt(enemy.offset().left);
// 	var bY1 = parseInt(enemy.offset().top);
// 	var bX2 = bX1 + parseInt(enemy.width())-1;
// 	var bY2 = bY1;
// 	var bX3 = bX1;
// 	var bY3 = bY1 + parseInt(enemy.height())-1;
// 	var bX4 = bX2;
// 	var bY4 = bY3;
//
// 	var hOverlap = true;
// 	if(aX1<bX1 && aX2<bX1) hOverlap = false;
// 	if(aX1>bX2 && aX2>bX2) hOverlap = false;
//
// 	var vOverlap = true;
// 	if(aY1<bY1 && aY3<bY1) vOverlap = false;
// 	if(aY1>bY3 && aY3>bY3) vOverlap = false;
//
// 	if(hOverlap && vOverlap) return true;
// 	else return false;
//
//
// }


function hittest(line,enemy){
  if (angle >0) {
    var lineY1 = parseInt(line.offset().top);

    var lineY2 = lineY1 + lineLength * Math.sin((angle)*Math.PI/180);
  } else {
    var lineY1 = parseInt(line.offset().top);

    var lineY2 = lineY1 - lineLength * Math.sin((-angle)*Math.PI/180);
  }
  if (Math.abs(angle) < 90) {

    var lineX1 = parseInt(line.offset().left);
    var lineX2 = lineX1 + lineLength*Math.sin((-angle)*Math.PI/180)

  } else {
    var lineX1 = parseInt(line.offset().left);
    var lineX2 = lineX1 - lineLength*Math.sin((-angle)*Math.PI/180)
  }
   enX1 = enemy.offset().left;
   enY1 = enemy.offset().top;
   enRadius = 50;
   var c = 505;
   return line_circle_collision(lineX1,lineY1,lineX2,lineY2,c,enX1,enY1,enRadius)
}

function line_circle_collision(x1,y1,x2,y2,c,cirX,cirY,radius) {
  var dydx = -y2/x2 -c/x2;
  for (var x = x1; x < x2 ; x++) {
    var y =dydx*x +c;
    if (y > cirY-enRadius && y < cirY+enRadius & x > cirX - enRadius && x < cirX + enRadius){
    return true;
    }
  }
}

function scr_line_collision(x1,y1,x2,y2,x3,y3,x4,y4) {

  var denominator= ((x2 - x1) * (y4 - y3)) - ((y2 - y1) * (x4 - x3));
  var numerator1 = ((y1 - y3) * (x4 - x3)) - ((x1 - x3) * (y4 - y3));
  var numerator2 = ((y1 - y3) * (x2 - x1)) - ((x1 - x3) * (y2 - y1));

  // Detect coincident lines
  if (denominator == 0) {return (numerator1 == 0 && numerator2 == 0)}

  var r = numerator1 / denominator;
  var s = numerator2 / denominator;

  return ((r >= 0 && r <= 1) && (s >= 0 && s <= 1));
}
// var pageX;
// var pageY;

// MouseTracker
(function handlePointer() {

  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var dot, eventDoc, doc, body;
    event = event || window.event; // IE-ism
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

    // Add a dot to follow the cursor
    // dot = document.createElement('div');
    // dot.className = "dot";
    // dot.style.left = event.pageX + "px";
    // dot.style.top = event.pageY + "px";
    // document.body.appendChild(dot);
    // console.log(event.pageX);

    // setInterval(function() {
    // var line = $('.line');
    drawLongLine('.a', event.pageX,event.pageY, '.line');
    // $('.dot').each(function(){
    //   // console.log($('.dot'));
    //   if (hittest(line,$(this))) {
    //     console.log("collided");
    //   } else {
    //     console.log("not collided");
    //   }
    // })
    // });
    //

  }
})();
