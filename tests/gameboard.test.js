const gameboard = require('../gameboard');
const ship = require('../ship');


test('Places a ship at provided location if it is in bounds', () => {
	const shipOne = ship(3);
	const board = gameboard();
	board.placeShip([0,0], 'horizontal', shipOne);

	expect(board.ships[0].positions).toEqual([[0,0], [0,1], [0,2]]);
});
