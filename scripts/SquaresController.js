/**
 * Control the Squares.
 *
 * @constructor
 */
function SquaresController() {
  var vm = this;

  var squareCount = 49;
  var squares = [];
  var palettes = [
    [
      '#f3f3f3',
      '#4d5e78',
      '#7fb9df',
      '#c85a80'
    ],
    [
      '#f3f3f3',
      '#2e3949',
      '#5f7387',
      '#5c9a98'
    ],
    [
      '#f3f3f3',
      '#90acc4',
      '#647084',
      '#2f3442'
    ],
    [
      '#f3f3f3',
      '#9dac4c',
      '#37485d',
      '#9b4667'
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

  /**
   * Update view-model with random squares.
   */
  var setSquares = function(squares) {
    vm.squares = getSquares();
  };

  /*
   * Add objects to view-model.
   */
  vm.squares = squares;

  /*
   * Constructor.
   */
  (function () {
    setSquares(getSquares());
  })();
}

tessellateApp
    .controller('SquaresController', SquaresController);
