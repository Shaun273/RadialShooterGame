
// Get the modal
var menu = document.getElementById('menu');

// Get the button that opens the modal
var menuBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spanMenu = document.getElementsByClassName("close")[1];
var spanLose = document.getElementsByClassName("close")[2];
var spanRules = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
menuBtn.onclick = function() {
    menu.style.display = "block";
    pause =true;
}

// When the user clicks on <span> (x), close the modal
spanMenu.onclick = function() {
    menu.style.display = "none";
    // loseScreen.style.display = "none";
    rules.style.display = "none";
    pause =false;
}
spanLose.onclick = function() {
    menu.style.display = "none";
    // loseScreen.style.display = "none";
    rules.style.display = "none";
    pause =false;
}
spanRules.onclick = function() {

    rules.style.display = "none";
    pause =false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == menu) {
        menu.style.display = "none";
        rules.style.display = "none";
        pause = false;
    }
}
// Lose screen modal
var loseScreen = document.getElementById("loseScreen");
var tryAgainBtn = document.getElementById("again")

tryAgainBtn.onclick = function(){
  if (!firing){
    animateLine();
  }
  firing = true;

  numEnemies = 20;
  newLevel = true;
  score=0;
  increment = 3;
  hit = false;
  pause = false;
  lost = false;
  projectileType = 1;
  loseScreen.style.display = "none";
  $('.dot').each(function(){
    this.remove()
  })

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

var playBtn = document.getElementById("play")

playBtn.onclick = function(){
  rules.style.display = "none";
  pause = false;
  firing = true;
  playBtn.style.display = "none";
  game()
}
