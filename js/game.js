var firing = false;
var quit = false;
var mute = false;
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
var prevScore =0;
var increment = 2;
var colisionTestInterval = 1;
var newLevel = true;
var endless = true;
var wave = 1;
var gameRunning = false;
var $a;
var theme = "survivor";
var highscores = [0,0,0,0,0,0,0,0,0,0];
$('.line').css('width', lineLength + 'px');


$(document).ready(function(){
  rules.style.display = "block";
  pause = true;






  // $('.a').each(function(){
  //
  //   this.style.left = parseInt(this.style.left)-100+"px";
  //   this.style.top = parseInt(this.style.top)-100+"px";
  // })

  $a = $('.a');
  youRadius = $a.width() / 2;

  //
  // game()
  console.log("end of game function");

});

function game() {
  gameRunning = true;
  // console.log("iterated");
  if (pause) {

    setTimeout(function(){game()},50)
  } else if (quit){quit = false} else {
    // create enemies
    createEnemies()
    $a = $('.a');

    centerX = $a.offset().left + $a.width()/1.5;
    centerY = $a.offset().top + $a.height()/1.5;

    // animate line?
    firing = !firing;
    animateLine() //

    // test collision
    if (firing == true) {
      gunAudio()
      hit = false;
      var line = $('.line');
      $('.dot').each(function(){
        // console.log($('.dot'));
        if (hit == false && projectileType == 1){
          if (hittest(line,$(this))) {
            // console.log("hit");
            enemyHitAudio();
            score++;
            resolveHit(this);

          } else {
            // console.log("not hit");
          }
        } else if (projectileType == 2){
          if (hittest(line,$(this))) {
            // console.log("hit");
            enemyHitAudio();
            score++;

            resolveHit(this);
            if (score == prevScore + numEnemies-1){
              numEnemies += 5;
              newLevel = true;
              createEnemies();
              prevScore = score;
              wave++;
              $("#waveScore").html("Wave: "+wave)
            }
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
  gameRunning = false;
}
