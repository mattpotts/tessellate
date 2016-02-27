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
    vm.squares.push({});
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
