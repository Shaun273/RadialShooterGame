var lineLength = 1000;

function lineDistance(x, y, x0, y0){
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
};

var angle;
var pointA = $('.a').offset();
centerX = pointA.left + $('.a').width() / 2;
centerY = pointA.top + $('.a').height() / 2;

function drawLongLine(a, pointerX, pointerY, line) {
  if (firing == true){
  var pointA = $('.a').offset();

  var pointBcenterX = pointerX+"px";
  var pointBcenterY = pointerY+"px";
  angle = Math.atan2(pointerY - pointA.top, pointerX - pointA.left) * 180 / Math.PI;


  // INFO
  // $('.info .point-a').text('Point-A: Left: ' + pointA.left + ' Top: ' + pointA.top);
  // $('.info .point-b').text('Point-B: Left: ' + pointerX + ' Top: ' + pointerY);
  $('.info .angle').text('Angle: ' + angle);

  // Set Angle
  $(line).css('transform', 'rotate(' + angle + 'deg)');
  $(a).css('transform', 'rotate(' + angle + 'deg)');

  // Set Position
  $(line).css('position', 'absolute');
  if (pointerX < pointA.left) {
    $(line).offset({ left: centerX - lineLength*Math.cos((angle+180)*Math.PI/180)});
    //  top: pointA.top + pointAcenterY,
  } else {
    $(line).offset({ left: centerX});
    // top: pointA.top + pointAcenterY
  }
  if (pointerY < pointA.top) {

    $(line).offset({top: centerY - lineLength*Math.sin((-angle)*Math.PI/180)});
  } else {
    $(line).offset({top: centerY});
  }
  // setInterval($(line).css('width', distance + 'px');)
  // function lineFire() {
  //
  // }
}
}
