/**
 * Control the Squares.
 *
 * @constructor
 */
function SquaresController($scope) {
  var vm = this;

  var squareCount = 49;

  vm.squares = [];

  var addSquare = function() {
    vm.squares.push([
        '#f3f3f3',
        '#4d5e78',
        '#7fb9df',
        '#c85a80'
    ]);
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
