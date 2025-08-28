const ship = require('../ship');

const shipOne = ship(3);

test('Check number of hits the ship has and marks it as sunk if it === the length', () => {
	expect(shipOne.isSunk()).toBeTruthy();
});
