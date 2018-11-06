//1th variant
(function (globalVar) {
    'use strict'

    function innerFunc() {
        console.log("innerFunc")
    }

    innerFunc();

    console.log(window);

    qlobalVar.outerHFunc  =function (a, b) {
       // console.log("outerFunc");
        return a+b;
    }

    console.log(window);
}(window))


//2nd variant
var moduleName = (function (globalVar) {
    'use strict'

   let innerFunc = function () {
        console.log("innerFunc")
    }

    innerFunc();

    let innerFunc2 = function () {
        console.log("innerFunc2")
    }

    return {
        outerHFunc2: outerFunc2
    }
}())

//3d variant

export {outerFunc3, a};

let a = "Smth";
function outerFunc3() {
    console.log("outerFunc2")
}
