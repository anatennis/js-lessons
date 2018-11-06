(function () {
    'use strict';

    let canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = canvas.parentElement.offsetWidth - 4;
    canvas.height = canvas.parentElement.offsetHeight
        - canvas.previousElementSibling.clientHeight - 4;

    let handlers = {};
    handlers.startDraw = function () {
        console.log("Start drawing");
        this.isDrawing = true;
    };

    handlers.drawing = function () {
        console.log("Drawing");
        if (!this.isDrawing) return false;

        let color = document.getElementById('paint_brush_color').value;
        let brushSize = document.getElementById('paint_brush_size').value;

        let context = canvas.getContext('2d');
        context.beginPath();

        //context.strokeStyle = brushSize;
        context.fillStyle = color;

        context.arc(
            event.offsetX,
            event.offsetY,
            brushSize,
            0, Math.PI*2, false
        );

        context.fill();

    };

    handlers.endDraw = function () {
        console.log("End drawing");
        this.isDrawing = false;
    };

    canvas.addEventListener('mousedown', handlers.startDraw);
    canvas.addEventListener('mousemove', handlers.drawing);
    canvas.addEventListener('mouseup', handlers.endDraw);
    canvas.addEventListener('mouseout', handlers.endDraw);

}());