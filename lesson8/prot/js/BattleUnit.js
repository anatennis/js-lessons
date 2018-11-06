function BattleUnit(health, attackScore) {

    this._health = health;           //условно приватные
    this._attackScore = attackScore; //условно приватные
}

//методы в prototype

BattleUnit.prototype.setHealth = function (health) {
    this._health = health;
}

BattleUnit.prototype.setAttackScore = function (attack) {
    this._attackScore = attack;
}

//getters
BattleUnit.prototype.getHealth = function () {
    return this._health;
}

BattleUnit.prototype.getAttackScore = function () {
    return this._attackScore;
}

BattleUnit.prototype.isAlive = function () {
    return this._health>0;
}

BattleUnit.prototype.attack = function (enemy) {
    enemy.setHealth(enemy.getHealth() - this._attackScore);
}