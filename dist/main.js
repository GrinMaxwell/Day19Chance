var card = function (suit, value) {
  this.suit = suit;
  this.value = value;
};

var die = function (currentValue) {
  this.currentValue = currentValue;
  this.roll = function () {
    this.currentValue = Math.ceil(Math.random()*6);
  };
};

var die1 = new die(5);
var die2 = new die();

var getProbabilities = function () {
  var shows = [0,0,0,0,0,0,0,0,0,0,0];
  for (var i = 0; i < 1000; i++) {
    die1.roll();
    die2.roll();
    var sum = die1.currentValue + die2.currentValue;
    shows[(sum-2)]++;
  }
  return shows;
};

getProbabilities();
