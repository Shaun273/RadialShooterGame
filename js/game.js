var firing = true;
var centerX= 500;
var centerY= 500;
var youRadius;
$(document).ready(function(){


  $('.line').css('width', 1000 + 'px');
  var pause = false;
  var numEnemies = 20;
  enRadius = $('.dot').width / 2;
  youRadius = $('.a').width / 2;
  var newLevel = true;
  var pageX;
  var pageY;
  var score=0;
  var increment = 2;

 //  centerX = parseInt($('.a').offset().left) - parseInt($('.a').width());
 //  centerY = parseInt($('.a').offset().top) - parseInt($('.a').height());
 // console.log(centerX);
 // console.log(centerY);








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

      // get mouse Position

      // create line

      // handlePointer()


      // animate line?
      firing = !firing;
      $(".line").animate({
        width: 'toggle'
      },0.1);

      // test collision
      if (firing == true) {
        var line = $('.line');
        $('.dot').each(function(){
          // console.log($('.dot'));

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
        })
      };
      // Move enemies
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
      // test lose
      if (loseTest()!=false){
        setTimeout(function(){game()},50)
      } else {
        alert("You lose, your score was: "+toString(score))
      }

      // display score

      // reset?

    }
  }
  game()

  function loseTest() {
    $('.dot').each(function() {
      var leftEnX = this.style.left;
      var rightEnX = leftEnX + enRadius*2;
      var topEnY = this.style.top;
      var bottomEnY = topEnY +enRadius*2;
      var leftYouX = centerX;
      var rightYouX = leftYouX + youRadius*2;
      var topYouY = centerY;
      var bottomYouY = topYouY + youRadius*2;
      if (leftEnX < rightYouX &&
        rightEnX > leftYouX &&
        topEnY < bottomYouY &&
        bottomEnY > topYouY){
          return true;
      }
    })
  }
});
