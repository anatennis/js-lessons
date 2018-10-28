/*У всего сада есть возраст (например количество суток).
Каждые 30 суток на каждом дереве рождается новое яблок.
    Все яблоки каждые сутки стареют на 1 день. +
    Яблоки падают с дерева при возрасте 30 дней. +
    Можно усложнить - 50% яблок могут упасть через 28 или через 32 дня по случайному выбору.
    Яблоки портятся, после падения через сутки  ----*/
class Tree {
    constructor() {
        this._apples = [];
        this._count = Math.floor(Math.random() * (10 - 1)) + 1;
        for (let i=0; i<this._count; i++) {
            this._apples[i] = new Apple();
        }
        this._tage = Math.floor(Math.random() * (30 - 1)) + 1;
    }


    newApple() {
        let newa = new Apple();
        newa.setAge();
        this._apples.push(newa);
    }

    gettingOld() {
        for (let i=0; i<this._count; i++) {
            console.log(this._apples[i]);
            if (this._apples[i].getAge === 30) {
                this._apples[i].fallFromTree();
            }
            else if(this._apples[i].getAge === 31) {
                this._apples[i].spoil();
                this._count-=1;
                delete this._apples[i];
                i++;
            }
            else {
                console.log("старый возраст", this._apples[i].getAge);
                this._apples[i].apGettingOld();
                console.log("постарело яблоко, новый возраст", this._apples[i].getAge);
            }
        }
    }

    passDayTree() {
        if (this._tage === 30) {
            this._tage =0;
            this.newApple();
        }
        else {this._tage+=1;}
        this.gettingOld();
        console.log('прошел день дерева');
    }

    getApples() {
       return this._apples.length;
    }
}