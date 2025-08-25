const createShip = require('./ship');

const ship = createShip(3);

test(`Checks player's ship locations against chosen square to determine if ship was hit`, () =>{
   expect(ship.hit([[2,2],[2,3],[2,4]], [2,2])).toBeTruthy();})