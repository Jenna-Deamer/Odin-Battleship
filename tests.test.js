const createShip = require('./ship');

const ship = createShip(3);

test(`Checks ship locations against chosen square to determine if ship was hit`, () => {
	expect(
		ship.hit(
			[
				[2, 2],
				[2, 3],
				[2, 4],
			],
			[2, 2]
		)
	).toBeTruthy();
});

test('Check number of hits the ship has and marks it as sunk if it === the length', () => {
	expect(ship.isSunk()).toBeTruthy();
});
