class Rectangle extends Triangle {
    constructor(a, b, c, d) {
        super(a, b, c);
        this._x4 = d[0];
        this._y4 = d[1];
        this._s3 = this._s1;
        this._s4 = this._s2;

    }

    _getSquare() {
        let p = this.getPerim();
        return (this._s1*this._s3);
    }

    getPerim() {
        return (super.getPerim()+this._s4);
    }

}