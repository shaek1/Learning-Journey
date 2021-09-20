const PI = 3

function Circle(r) {
    this.radius =r;
}

let getAreaFirst = function(circle) {
    console.log("Inside getAreaFirst");
    console.log("Area of circle: ",PI * circle.radius * circle.radius);
}

let firstCircle = new Circle(10);

function innerFunction() {
    const PI = 3.1;

    let getAreaSecond = function(circle){
        console.log("Inside getAreaSecond");
        console.log("Area of circle: ", PI * circle.radius * circle.radius);
    }

    let getAreaThird = function(circle) {
        const PI = 3.14;
        console.log("Inside getAreaThird");
        console.log("Area of circle: ", PI * circle.radius * circle.radius);
    }

    getCircumreference = function(circle) {
        console.log("Inside getCircumreference");
        console.log("Circumreference of circle: ", 2 * PI * circle.radius);
    }

    let secondCircle = new Circle(20);
    console.log("innerFunction: Calling the functions with firstCircle: ");
    getAreaFirst(firstCircle);
    getAreaSecond(firstCircle);
    getCircumreference(firstCircle);
    getAreaThird(firstCircle);

    console.log("innerFuction: Calling the functions with secondCircle: ");
    getAreaFirst(secondCircle);
    getAreaSecond(firstCircle);
    getCircumreference(firstCircle);
    getAreaThird(firstCircle);
}

innerFunction();