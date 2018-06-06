var firing = true;
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
var increment = 3;
var newLevel = true;
var $a;
$('.line').css('width', lineLength + 'px');
enRadius = 30 / 2;

$(document).ready(function(){
  rules.style.display = "block";
  pause = true;
  firing != firing;





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
    if (newLevel == true) {

      for (var i = 0; i < numEnemies-1; i++) {

        dot = document.createElement('div');
        dot.className = "dot";
        dot.style.left = Math.round(Math.random())*1000 + "px";
        dot.style.top = Math.round(Math.random()*700) + "px";
        document.body.children[0].appendChild(dot);
        // console.log("Created dot");
      }
      newLevel = false;
    }
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
    animateLine()

    // test collision
    if (firing == true) {
      hit = false;
      var line = $('.line');
      $('.dot').each(function(){
        // console.log($('.dot'));
        if (hit == false && projectileType == 1){
          if (hittest(line,$(this))) {
            console.log("collided");

            score++;
            // $(this).css("background-color", "yellow");
            if (Math.random()<0.5) {
              this.style.left = Math.round(Math.random())*1000 + "px";
              this.style.top = Math.round(Math.random()*700) + "px";
            } else {
              this.style.left = Math.round(Math.random()*1000) + "px";
              this.style.top = Math.round(Math.random())*700 + "px";
            }
          } else {
            // console.log("not collided");
          }
        }
      })
    };

    // Move enemies
    moveEnemies()

    // test lose
    loseTest()
    if (lost == true){
      console.log("Lose");
      $("#score").html("You lose, your score was: "+score)
      loseScreen.style.display = "block";
    } else {
      $('#score').html("Score: "+score);
      setTimeout(function(){game()},50)
    }

    // display score

    // reset?

  }
}
