function Knight(health, attack) {
    BattleUnit.call(this, health, attack);

    let parentAttack = this.attack;
    this.attack = function (enemy) {
        parentAttack.call(this, enemy);
        addhHealth();
    };

    let self = this;
    function addhHealth() {
        if (self.isAlive()) {
            self.setHealth(self.getHealth() + 5);
        }
    }
}