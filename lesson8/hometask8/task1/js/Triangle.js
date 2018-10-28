/*Задание 1
Создать фигуры: Circle, Rectangle, Triangle, у которых будут координаты.
    Все фигуры должны иметь методы, которые возвращают площадь и периметр (для окружности - длина окружности). */
class Triangle extends Circle {
    constructor(a, b, c) {
        super(a, b);
        this._x3 = c[0];
        this._y3 = c[1];
        this._s2 = Math.sqrt((this._x3-this._x1)*(this._x3-this._x1) + (this._y3-this._y1)*(this._y3-this._y1));
        this._s3 = Math.sqrt((this._x3-this._x2)*(this._x3-this._x2) + (this._y3-this._y2)*(this._y3-this._y2));
    }


    getSquare() {
        let p = this.getPerim()/2;
        return Math.sqrt(p*(p-this._s1)*(p-this._s2)*(p-this._s3));
    }

    getPerim() {
        return (this._s1+this._s2+this._s3);
    }

}
