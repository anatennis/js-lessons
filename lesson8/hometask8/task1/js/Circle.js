class Circle {
    constructor (a, b) { //задаются координаты центра и любой точки на окружности
        this._x1 = a[0];
        this._y1 = a[1];
        this._x2 = b[0];
        this._y2 = b[1];
        this._s1 = Math.sqrt((this._x2-this._x1)*(this._x2-this._x1) + (this._y2-this._y1)*(this._y2-this._y1));
    }


    getPerim () {
        return this._s1*Math.PI*2;
    }

    getSquare () {
        return this._s1*this._s1*Math.PI;
    }

}