function gameboard() {
	let ships = [];
	let hitSquares = [];
	let missedSquares = [];

	function placeShip(startPos, direction, ship) {
		let positions = [];
		if (direction === 'horizontal') {
			// increment col
			for (let i = 0; i < ship.length; i++) {
				positions.push([startPos[0], startPos[1] + i]);
			}
			// increment row
		} else if (direction === 'vertical') {
			for (let i = 0; i < ship.length; i++) {
				positions.push([startPos[0] + i, startPos[1]]);
			}
		}

		// push ship with occupied tiles
		ships.push({ ship, positions });
	}

	return { placeShip, ships };
}

module.exports = gameboard;
