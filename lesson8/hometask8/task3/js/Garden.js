/*Сад имеет метод:
    просчитать 1 сутки (т.е. метод, который фиксирует прохождение суток)
*/

class Garden {
    constructor() {
        this._trees = [];
        this._count = Math.floor(Math.random() * (2 - 1)) + 1;
        for (let i=0; i<this._count; i++) {
            this._trees[i] = new Tree();
        }
    }

    passDay() {
        for (let i=0; i<this._trees.length; i++) {
            this._trees[i].passDayTree();
        }
    }

    getCounApples() {
        let sum =0;
        for (let i=0; i<this._trees.length; i++) {
            sum += this._trees[i].getApples();
        }
        return sum;
    }

    getCountTrees() {
        return this._trees.length;
    }
}