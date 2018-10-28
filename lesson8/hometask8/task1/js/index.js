let s1 = [0, 0];
let s2 = [7, 0];
let s3 = [5, 4];

console.log("Круг");
let circle = new Circle(s1, s2);
console.log("Периметр", circle.getPerim());
console.log("Площадь", circle.getSquare());

console.log("Треугольник");
let triangle = new Triangle(s1, s2, s3);
console.log("Периметр", triangle.getPerim());
console.log("Площадь", triangle.getSquare());

s3 = [0, 5];
let s4 = [7, 5];

console.log("Прямоугольник");
let rect = new Rectangle(s1, s2, s3, s4);
console.log("Периметр", rect.getPerim());
console.log("Площадь", rect._getSquare());

