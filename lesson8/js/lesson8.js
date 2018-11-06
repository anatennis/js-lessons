let player1Unit = new BattleUnit(100, 20);
let player2Unit = new BattleUnit(70, 30);

let fight = new Fight(player1Unit, player2Unit);
//fight.start();

console.log(player1Unit.getHealth());
console.log(player2Unit.getHealth());

/*
player1Unit.attack(player2Unit);
player2Unit.attack(player1Unit);

console.log(player1Unit.getHealth());
console.log(player2Unit.getHealth());
console.log(player1Unit.isAlive());
console.log(player2Unit.isAlive());
*/

let knight = new Knight(100, 20);
let sp = new Spearman(40, 70);

let fight = new Fight(knight, sp);
//fight.start();

console.log(knight.getHealth());
console.log(sp.getHealth());
