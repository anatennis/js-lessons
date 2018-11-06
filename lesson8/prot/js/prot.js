let player1Unit = new BattleUnit(100, 20);
let player2Unit = new BattleUnit(70, 30);

let fight = new Fight(player1Unit, player2Unit);
fight.start();

console.log(player1Unit.getHealth());
console.log(player2Unit.getHealth());