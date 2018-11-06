function Fight(pl1, pl2) {
    this._player1 = pl1;
    this._player2 = pl2;

}

Fight.prototype.start = function () {
    while (this._player1.isAlive() && this._player2.isAlive()) {
        this._player1.attack(this._player2);
        if (this._player2.isAlive()) {
            this._player2.attack(this._player1);
        }
    }
}
