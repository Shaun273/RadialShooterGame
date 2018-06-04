$(document).ready(function(){


  $('.line').css('width', 1000 + 'px');
  var pause = false;
  var numEnemies = 2;
  var newLevel = true;
  var pageX;
  var pageY;



  function game() {
    // console.log("iterated");
    if (pause==true) {

    } else {
      // create enemies
      if (newLevel == true) {

        for (var i = 0; i < numEnemies; i++) {

          dot = document.createElement('div');
          dot.className = "dot";
          dot.style.left = Math.round(Math.random()*100) + "vw";
          dot.style.top = Math.round(Math.random()*100) + "vh";
          document.body.appendChild(dot);
          console.log("Created dot");
        }
        newLevel = false;
      }

      // get mouse Position


      // create line

      // handlePointer()

      $(".line").animate({

        width: 'toggle'
      },0.1);

      // animate line?

      // test collision
      var line = $('.line');
      $('.dot').each(function(){
        // console.log($('.dot'));
        if (hittest(line,$(this))) {
          console.log("collided");

          this.style.left = Math.round(Math.random()*100) + "vw";
          this.style.top = Math.round(Math.random()*100) + "vh";
          
        } else {
          console.log("not collided");
        }
      })

      // display score

      // reset?
      setTimeout(function(){game()},100)
    }
  }
  game()
  // $(document).mousemove(function( event ) {
  //   pageX = event.pageX;
  //   pageY = event.pageY;
  //   console.log(pageX+" "+pageY);
  //   drawLongLine('.a', pageX, pageY, '.line');
  //
  //
  // });
});
