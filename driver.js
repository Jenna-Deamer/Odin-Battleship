const gameboard = require('./gameboard');
const player = require('./player');
const ship = require('./ship');


function playGame() {
const humanPlayer = player();
const computerPlayer = player();

	// human player ships
  const destroyer1 = ship(2);
  const submarine1 = ship(3);
  const battleship1 = ship(4);

  humanPlayer.board.placeShip([0, 0], 'horizontal', destroyer1); 
  humanPlayer.board.placeShip([2, 5], 'vertical', submarine1);   
  humanPlayer.board.placeShip([6, 2], 'horizontal', battleship1);

   // computer player ships
  const destroyer2 = ship(2);
  const submarine2 = ship(3);
  const battleship2 = ship(4);

  computerPlayer.board.placeShip([5, 1], 'horizontal', destroyer2); 
  computerPlayer.board.placeShip([6, 0], 'vertical', submarine2);   
  computerPlayer.board.placeShip([3, 6], 'vertical', battleship2); 


}

