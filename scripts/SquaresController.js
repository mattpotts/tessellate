/**
 * Control the Squares.
 *
 * @constructor
 */
function SquaresController() {
  var vm = this;

  var squareCount = 49;

  vm.squares = [];

  var palettes = [
    [
      '#f3f3f3',
      '#4d5e78',
      '#7fb9df',
      '#c85a80'
    ],
    [
      '#f3f3f3',
      '#784d5e',
      '#b97fdf',
      '#5ac880'
    ]
  ];

  /**
   * Get a square of colors randomly selected from the palette.
   *
   * @param palette
   * @returns {*[]}
   */
  var getSquare = function (palette) {
    return [
      getRandomColor(palette),
      getRandomColor(palette),
      getRandomColor(palette),
      getRandomColor(palette)
    ];
  };

  /**
   * Get list of squares.
   *
   * @returns {Array}
   */
  var getSquares = function () {
    var palette = getRandomPalette();
    var squares = [];
    for (var i = 0; i < squareCount; i++) {
      var square = getSquare(palette);
      squares.push(square);
    }
    return squares;
  };

  /**
   * Pick a random color from the palette.
   *
   * @returns {string}
   */
  var getRandomColor = function (palette) {
    var max = palette.length;
    var index = Math.floor(Math.random() * max);
    return palette[index];
  };

  /**
   * Pick a random palette from the palettes array.
   *
   * @returns {integer}
   */
  var getRandomPalette = function () {
    var max = palettes.length;
    var index = Math.floor(Math.random() * max);
    return palettes[index];
  };

  /*
   * Constructor
   */
  (function () {
    vm.squares = getSquares();
  })();
}

bonnieApp
    .controller('SquaresController', SquaresController);
