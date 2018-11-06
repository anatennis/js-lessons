class Game {
    constructor(maze, player) {
        this._maze = maze;
        this._player = player;

        this._canvasController = new CanvasController();
    }

    initStartPos(elemId){
        console.log(this.maze)
        this.canvasController.createCanvas(elemId);
        this.canvasController.generateImage(this.maze);
        this.canvasController.generateImage(this.player);
        /*this.generatePrize();*/
    }

    start() {
        document.body.addEventListener('keypress', this._initGameProc.bind(this));
    }

    _initGameProc(evt) {
        let keyCod = evt.keyCode;
        let stop, up, left, down, right;
        if (keyCod == 119) { //w
            console.log("up");
            stop = this.canvasController.getCollision(this.player);
            up = stop[0];
            if (up === 255) {
            this.canvasController.clearImage(this.player);
            this.player.coord[1] -=3;
            this.canvasController.generateImage(this.player);}
        } else if (keyCod == 100) { //a
            console.log("left");
            this.canvasController.clearImage(this.player);
            this.player.coord[0] +=3;
            this.canvasController.generateImage(this.player);
        } else if (keyCod == 97) { //d
            console.log("right");
            this.canvasController.clearImage(this.player);
            this.player.coord[0] -=3;
            this.canvasController.generateImage(this.player);
        } else if (keyCod == 115) { //s
            console.log("down");
            this.canvasController.clearImage(this.player);
            this.player.coord[1] +=3;
            this.canvasController.generateImage(this.player);
        }
    }


    generatePrize() {
        for (let i = 0; i<10; i++) {
            console.log("1111111111111111111111");
        let prize = new MazeImage();
        prize.path = 'img/smile.jpg';
        prize.coord = [Math.floor(Math.random() * (966 - 1)) + 1, Math.floor(Math.random() * (966 - 1)) + 1];
        }
    }

    get maze() {
        return this._maze;
    }

    set maze(value) {
        this._maze = value;
    }

    get player() {
        return this._player;
    }

    set player(value) {
        this._player = value;
    }

    get canvasController() {
        return this._canvasController;
    }

    set canvasController(value) {
        this._canvasController = value;
    }
}