//business logic
var playerOne, playerTwo;

function Player() {
  this.turnScore = 0;
  this.overallScore = 0;
  this.roll = 0;
}

// function to generate a random number when the dice is rolled
var rolled = function() {
  return Math.floor(Math.random() * 6) + 1;
}
Player.prototype.rollDice = function() {

  if (this.roll === 1) {
    this.turnScore = 0;
    alert("you loose!!");
  } else {
    this.turnScore += this.roll;
  }
}
Player.prototype.hold = function() {
  this.overallScore += this.turnScore;
  alert("next player!!");
}
Player.prototype.winner = function() {
  if (overallScore >= 100);
  alert("WIN!!!");
}
//user interface

$(document).ready(function() {
  playerOne = new Player(true)
  playerTwo = new Player(true)
  //player one
  $("#rollOne").click(function() {
    playerOne.roll = rolled();
    $("#turnScore").val(playerOne.roll);
    playerOne.rollDice();
    $("#holdOne").click(function() {
      $("#overallScore").val(playerOne.turnScore)
      playerOne.hold();

    });
    //for player two
    $("#rollTwo").click(function() {
      playerTwo.roll = rolled();
      $("#turnScore2").val(playerTwo.roll);
      playerTwo.rollDice();
      $("#holdTwo").click(function() {
        $("#overallScore2").val(playerTwo.turnScore)
        playerTwo.hold();
      });
    });
  });
});
