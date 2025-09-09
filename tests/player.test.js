const player = require('../player');

test('Create a human player with a gameboard', () => {
	const p = player('human');
	expect(p.board).toBeDefined();
});
