const gameboard = require('../gameboard');
const ship = require('../ship');

test('Places a ship at provided location if it is in bounds', () => {
    const shipOne = ship(3);
	const board = gameboard();
	board.placeShip([0, 0], 'horizontal', shipOne);
	
	expect(board.ships[0].positions).toEqual([
		[0, 0],
		[0, 1],
		[0, 2],
	]);
});

test('Ensure placement of ship is within gameboard bounds', () => {
	const board = gameboard();
	const shipOne = ship(3);

	expect(board.placeShip([0, 8], 'horizontal', shipOne)).toBe('Out of bounds');
	expect(board.placeShip([8, 0], 'vertical', shipOne)).toBe('Out of bounds');
});

test('Checks if attacked tile contains a ship marking it as a hit. If empty mark as a miss.', () => {});
