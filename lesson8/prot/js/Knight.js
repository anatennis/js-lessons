function Knight(health, attackScore) {
    BattleUnit.apply(this, arguments);   //наследование
}

//наследование
Knight.prototype = Object.create(BattleUnit.prototype);
Knight.prototype._addHealth = function () {
    if (this.isAlive()) {
        this.setHealth(this.getHealth() +5);
    }
};

Knight.prototype.attack = function () {
    BattleUnit.prototype.attack.call(this. enemy);
    this._addHealth();
}