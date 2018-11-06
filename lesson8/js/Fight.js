function Fight(player1, player2) {
    let unit1 = player1;
    let unit2 = player2;

    this.start = function () {
        while (unit1.isAlive() && unit2.isAlive()) {
            unit1.attack(unit2);
            console.log('unit1 at unit2');
            if (unit2.isAlive()) {
                unit2.attack(unit1);
                console.log('unit2 at unit1');
            }
        }
    }
}

