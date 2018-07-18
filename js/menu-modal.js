
// Get the modal
var menu = document.getElementById('menu');
// var rules = document.getElementById('rules');
var highScores = document.getElementById('highScores')

// Get the button that opens the modal
var menuBtn = document.getElementById("myBtn");
// var rulesBtn = document.getElementById("rulesBtn");
var highScoreBtn = document.getElementById("highScoresBtn");

// Get the <span> element that closes the modal
var spanMenu = document.getElementsByClassName("close")[1];
var spanLose = document.getElementsByClassName("close")[2];
var spanRules = document.getElementsByClassName("close")[0];
var spanScores = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal
menuBtn.onclick = function() {
    menu.style.display = "block";
    pause =true;
}
// rulesBtn.onclick = function() {
//     rules.style.display = "block";
//     pause =true;
// }
highScoreBtn.onclick = function() {
    highScores.style.display = "block";
    pause =true;
    for (var i = 0; i < highscores.length; i++) {
      $(".scores").html(highscores[i]);
      // $("#waveScore").html("Wave: "+wave)
    }
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

    // rules.style.display = "none";
    // pause =false;
}
spanScores.onclick = function() {

    highScores.style.display = "none";
    pause =false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == menu) {
        menu.style.display = "none";

        pause = false;
    }
}


window.onclick = function(event) {
    if (event.target == highScores) {
        highScores.style.display = "none";

        pause = false;
    }
}
// Lose screen modal
var loseScreen = document.getElementById("loseScreen");
var tryAgainBtn = document.getElementById("again")

tryAgainBtn.onclick = function(){

  tryAgain()

}

function tryAgain() {
  highscore()
  if (!firing){
    animateLine();
  }
  firing = false;
  newLevel = true;
  score=0;
  prevScore =0;
  increment = 2;
  hit = false;
  pause = false;
  lost = false;
  loseScreen.style.display = "none";
  removeDots()
  if (!gameRunning) {
    game()
  }
}

function removeDots() {
  $('.dot').each(function(){
    this.remove()
  })
}

function highscore() {
  for (var i = 0; i < highscores.length; i++) {
    if (score>highscores[i]) {
      highscores[i] = score;

    }
  }
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

var optionBtn = document.getElementById("play")

optionBtn.onclick = function(){
  rulesModal.style.display = "none";
  menu.style.display = "block";
  pause =true;
  myBackground[0].play();
  // optionBtn.style.display = "none";
}

// menu/options modal
var playBtn = document.getElementById("confirm")

playBtn.onclick = function(){
  menu.style.display = "none";

  // playBtn.style.display = "none";
  tryAgain()
}
