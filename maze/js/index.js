let maze = new MazeImage();
maze.path = 'img/maze.jpg';
maze.coord = [0, 0];

let player = new MazeImage();
player.path = 'img/smile.jpg';
player.coord = [450, 10];

let game =  new Game(maze, player);
game.initStartPos('maze');
window.onload = game.initStartPos.bind(game, 'maze');
game.start();