
// Get the modal
var menu = document.getElementById('menu');

// Get the button that opens the modal
var menuBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
menuBtn.onclick = function() {
    menu.style.display = "block";
    pause =true;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    menu.style.display = "none";
    loseScreen.style.display = "none";
    rules.style.display = "none";
    pause =false;
    firing != firing;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        menu.style.display = "none";
        rules.style.display = "none";
        pause = false;
        firing != firing;
    }
}
// Lose screen modal
var loseScreen = document.getElementById("loseScreen");
var tryAgainBtn = document.getElementById("again")

tryAgainBtn.onclick = function(){
  firing = false;
  numEnemies = 20;
  newLevel = true;
  score=0;
  increment = 3;
  hit = false;
  pause = false;
  lost = false;
  projectileType = 1;
  loseScreen.style.display = "none";
  game()

}

loseScreen.onclick = function() {

}

window.onclick = function(event) {
    if (event.target == loseScreen) {
        // loseScreen.style.display = "none";

    }
}

// Rules Modal
var rulesBtn = document.getElementById("rulesBtn");

var rulesModal = document.getElementById("rules");
