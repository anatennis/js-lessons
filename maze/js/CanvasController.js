class CanvasController {
    createCanvas(elemId){
        let field = document.getElementById(elemId);
        this.canvas = document.createElement('canvas');
        this.canvas.height = 966; //TODO размеры нужно высчитывать исходя из размера лабиринта
        this.canvas.width = 966;
        this.canvas_context = this.canvas.getContext('2d');
        field.appendChild(this.canvas);
    }


    generateImage(image){
        let img = document.createElement('img');
        img.setAttribute('src', image.path);
        this.canvas_context.drawImage(
            img,
            image.coord[0], image.coord[1]
        )
    }

    clearImage(image) {
        this.canvas_context.fillStyle = '#fff';
        this.canvas_context.fillRect (
            image.coord[0],
            image.coord[1],
            21, 21
            );
    }

    getCollision(image) {
        let up = this.canvas_context.getImageData().data(
            image.coord[0], image.coord[1]-3, 21, 3
        ).data;
        let right = this.canvas_context.getImageData().data(
            image.coord[0]+21, image.coord[1], 3, 21
        ).data;
        let left = this.canvas_context.getImageData().data(
            image.coord[0]-3, image.coord[1], 3, 21
        ).data;
        let down = this.canvas_context.getImageData().data(
            image.coord[0], image.coord[1]+21, 21, 3
        ).data;
        /*console.log(up);*/
        return[
            this.checkCoord(up),
            this.checkCoord(right),
            this.checkCoord(left),
            this.checkCoord(down),
        ];
    }

    checkCoord(arr) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i] !== 255) {
                return arr[i];
            }
        }
        return 255;
    }

}