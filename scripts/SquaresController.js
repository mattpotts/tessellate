/**
 * Control the Squares.
 *
 * @constructor
 */
function SquaresController() {
  var vm = this;

  var squareCount = 49;

  vm.squares = [];

  var colors = [
    '#f3f3f3',
    '#4d5e78',
    '#7fb9df',
    '#c85a80'
  ];

  /**
   * Add a square of random colors to the squares array.
   */
  var addSquare = function() {
    vm.squares.push([
        randomColor(),
        randomColor(),
        randomColor(),
        randomColor()
    ]);
  };

  /**
   * Pick a random color from the colors array.
   * @returns {string}
   */
  var randomColor = function () {
    var max = colors.length;
    var index = Math.floor(Math.random() * max);
    return colors[index];
  };

  /*
   * Constructor
   */
  (function() {
    for(var i=0; i<squareCount; i++) {
      addSquare();
    }
  })();
}

bonnieApp
    .controller('SquaresController', SquaresController);
