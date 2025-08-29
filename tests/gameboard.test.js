const gameboard = require('../gameboard');
const ship = require('../ship');

const shipOne = ship(3);
const board = gameboard();
const direction = 'horizontal';

test('Places a ship at provided location if it is in bounds', () => {
	expect(board.placeShip([0, 0], [0, 3], direction, shipOne)).toBeTruthy();
});
