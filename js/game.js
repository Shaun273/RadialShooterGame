var firing = false;
var centerX= 500;
var centerY= 500;
var youRadius;
var projectileType = 1;
var hit = false;
var pause = false;
var lost = false;
var numEnemies = 20;
var pageX;
var pageY;
var score=0;
var increment = 1;
var colisionTestInterval = 1;
var newLevel = true;
var endless = true;
var $a;
$('.line').css('width', lineLength + 'px');


$(document).ready(function(){
  rules.style.display = "block";
  pause = true;






  $a = $('.a');
  youRadius = $a.width() / 2;




 //  centerX = parseInt($('.a').offset().left) - parseInt($('.a').width());
 //  centerY = parseInt($('.a').offset().top) - parseInt($('.a').height());
 // console.log(centerX);
 // console.log(centerY);



  game()
  console.log("end of game function");

});

function game() {

  // console.log("iterated");
  if (pause==true) {

    setTimeout(function(){game()},50)
  } else {
    // create enemies
    createEnemies()
    $a = $('.a');
    centerX = $a.offset().left + $a.width() / 2;
    centerY = $a.offset().top + $a.height() / 2;
    // console.log(centerX);
    // console.log(centerY);

    // get mouse Position

    // create line

    // handlePointer()


    // animate line?
    firing = !firing;
    animateLine() //

    // test collision
    if (firing == true) {
      hit = false;
      var line = $('.line');
      $('.dot').each(function(){
        // console.log($('.dot'));
        if (hit == false && projectileType == 1){
          if (hittest(line,$(this))) {
            // console.log("hit");

            score++;
            // $(this).css("background-color", "yellow");
            resolveHit(this);

          } else {
            // console.log("not hit");
          }
        }
      });
    }

    // Move enemies
    moveEnemies();

    // test lose
    loseTest();
    if (lost == true){
      console.log("Lose");
      $("#score").html("You lose, your score was: "+score) // display score
      loseScreen.style.display = "block";
    } else {
      $('#scoreButton').html("Score: "+score); // display score
      setTimeout(function(){game()},50)
    }



    // reset?

  }
}
