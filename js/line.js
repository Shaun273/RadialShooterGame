var lineLength = 1000;

function lineDistance(x, y, x0, y0){
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
};

// function drawLine(a, pointerX, pointerY, line) {
//   // console.log(b);
//   var pointA = $(a).offset();
//   // var pointB = $(b).offset();
//   console.log(pointA);
//   var pointAcenterX = $(a).width() / 2;
//   var pointAcenterY = $(a).height() / 2;
//   console.log(pointAcenterY);
//   var pointBcenterX = pointerX+"px";
//   var pointBcenterY = pointerY+"px";
//   // console.log(pointB.left);
//   var angle = Math.atan2(pointerY - pointA.top, pointerX - pointA.left) * 180 / Math.PI;
//   var distance = lineDistance(pointA.left, pointA.top, pointerX, pointerY);
//
//   // INFO
//   $('.info .point-a').text('Point-A: Left: ' + pointA.left + ' Top: ' + pointA.top);
//   $('.info .point-b').text('Point-B: Left: ' + pointerX + ' Top: ' + pointerY);
//   $('.info .angle').text('Angle: ' + angle);
//   $('.info .distance').text('Distance: ' + distance);
//
//   // Set Angle
//   $(line).css('transform', 'rotate(' + angle + 'deg)');
//
//   // Set Width
//   $(line).css('width', distance + 'px');
//
//   // Set Position
//   $(line).css('position', 'absolute');
//   if (pointerX < pointA.left) {
//     $(line).offset({ left: pointerX + pointAcenterX});
//     //  top: pointA.top + pointAcenterY,
//   } else {
//     $(line).offset({ left: pointA.left + pointAcenterX});
//     // top: pointA.top + pointAcenterY
//   }
//   if (pointerY < pointA.top) {
//     $(line).offset({top: pointerY +pointAcenterY});
//   } else {
//     $(line).offset({top: pointA.top + pointAcenterY});
//   }
//
//
//
// }
var angle;
function drawLongLine(a, pointerX, pointerY, line) {
  var pointA = $(a).offset();
  var pointAcenterX = $(a).width() / 2;
  var pointAcenterY = $(a).height() / 2;
  var pointBcenterX = pointerX+"px";
  var pointBcenterY = pointerY+"px";
  angle = Math.atan2(pointerY - pointA.top, pointerX - pointA.left) * 180 / Math.PI;


  // INFO
  $('.info .point-a').text('Point-A: Left: ' + pointA.left + ' Top: ' + pointA.top);
  $('.info .point-b').text('Point-B: Left: ' + pointerX + ' Top: ' + pointerY);
  $('.info .angle').text('Angle: ' + angle);

  // Set Angle
  $(line).css('transform', 'rotate(' + angle + 'deg)');

  // Set Position
  $(line).css('position', 'absolute');
  if (pointerX < pointA.left) {
    $(line).offset({ left: pointA.left + pointAcenterX - lineLength*Math.cos((angle+180)*Math.PI/180)});
    //  top: pointA.top + pointAcenterY,
  } else {
    $(line).offset({ left: pointA.left + pointAcenterX});
    // top: pointA.top + pointAcenterY
  }
  if (pointerY < pointA.top) {

    $(line).offset({top: pointA.top + pointAcenterY - lineLength*Math.sin((-angle)*Math.PI/180)});
  } else {
    $(line).offset({top: pointA.top + pointAcenterY});
  }
  // setInterval($(line).css('width', distance + 'px');)
  // function lineFire() {
  //
  // }

}
