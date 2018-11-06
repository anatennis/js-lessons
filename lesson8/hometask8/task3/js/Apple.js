/*Яблоки должны иметь определяться:
    -возрастом
    -цветом
    -размером
    -флаг испорченности (0 - свежее, 1 - испорченное)
-флаг упавшего с дерева (0 - на дереве, 1 - упало)

Яблоки имею методы:
    -упасть с дерева
-испортиться*/
class Apple {
    constructor() {
        this._age = Math.floor(Math.random() * (30 - 1)) + 1;
        /*console.log(this._age);*/
        this._color = "red";
        this._size = 3;
        this._bad = 0;
        this._fall = 0;
    }

    fallFromTree() {
        this._fall = 1;
        this._age+=1;
    }

    spoil() {
        this._bad = 1;
    }

    get getAge() {
        return this._age;
    }

    setAge() {
        this._age =0;
    }

    apGettingOld() {
        this._age+=1;
    }

}