//ооп в функциональном стиле
function BattleUnit(health, attack) {  //функция-конструктор
    //this.health = health;
    //this.attackScore = attack;

    let unitHealth = health;
    let unitAttackScore = attack;


    //setters
    this.setHealth = function (health) {
        unitHealth = health;
    }

    this.setAttackScore = function (attack) {
        unitAttackScore = attack;
    }

    //getters
    this.getHealth = function () {
        return unitHealth;
    }

    this.getAttackScore = function () {
        return unitAttackScore;
    }

    this.isAlive = function () {
        return unitHealth>0;
    }

    this.attack = function (enemy) {
        enemy.setHealth(enemy.getHealth() - unitAttackScore);
    }
}