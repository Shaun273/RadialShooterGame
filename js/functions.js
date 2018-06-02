
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

function hittest(line, enemy){
  var a = $(line).offset()
  console.log(a);
	var aX1 = parseInt(a.style.left);
	var aY1 = parseInt(a.style.top);
	var aX2 = aX1 + parseInt(a.style.width)-1;
	var aY2 = aY1;
	var aX3 = aX1;
	var aY3 = aY1 + parseInt(a.style.height)-1;
	var aX4 = aX2;
	var aY4 = aY3;


	var bX1 = parseInt(b.style.left);
	var bY1 = parseInt(b.style.top);
	var bX2 = bX1 + parseInt(b.style.width)-1;
	var bY2 = bY1;
	var bX3 = bX1;
	var bY3 = bY1 + parseInt(b.style.height)-1;
	var bX4 = bX2;
	var bY4 = bY3;

	var hOverlap = true;
	if(aX1<bX1 && aX2<bX1) hOverlap = false;
	if(aX1>bX2 && aX2>bX2) hOverlap = false;

	var vOverlap = true;
	if(aY1<bY1 && aY3<bY1) vOverlap = false;
	if(aY1>bY3 && aY3>bY3) vOverlap = false;

	if(hOverlap && vOverlap) return true;
	else return false;
}


// MouseTracker
  (function() {

   document.onmousemove = handleMouseMove;
   function handleMouseMove(event) {
     var dot, eventDoc, doc, body, pageX, pageY;

     event = event || window.event; // IE-ism

     // If pageX/Y aren't available and clientX/Y
     // are, calculate pageX/Y - logic taken from jQuery
     // Calculate pageX/Y if missing and clientX/Y available
     if (event.pageX == null && event.clientX != null) {
       eventDoc = (event.target && event.target.ownerDocument) || document;
       doc = eventDoc.documentElement;
       body = eventDoc.body;

       event.pageX = event.clientX +
         (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
         (doc && doc.clientLeft || body && body.clientLeft || 0);
       event.pageY = event.clientY +
         (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
         (doc && doc.clientTop  || body && body.clientTop  || 0 );
     }

     // Add a dot to follow the cursor
     // dot = document.createElement('div');
     // dot.className = "dot";
     // dot.style.left = event.pageX + "px";
     // dot.style.top = event.pageY + "px";
     // document.body.appendChild(dot);
     // console.log(event.pageX);
     // createLine(500, 500, event.pageX , event.pageY )

     // setInterval(function() {
    drawLine('.a', event.pageX,event.pageY, '.line');
     // });
     // $('.b').each(function(){
     //   if (hittest('.line','.b')){
     //     console.log("collided");
     //   }
     // })

   }
})();
