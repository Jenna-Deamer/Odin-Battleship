function createShip(length) {
	if (length <= 0) {
		console.warn('Error - ship length must be positive');
	}

	let hits = 0;

	function hit(shipLocations, attackLocation) {
		for (let i = 0; i < shipLocations.length; i++) {
			if (shipLocations[i][0] === attackLocation[0] && shipLocations[i][1] === attackLocation[1]) {
				hit++;
				return true;
			}
		}
		return false;
	}

	function isSunk() {}

	return { length, isSunk, hit };
}

module.exports = createShip;

