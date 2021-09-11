"use strict";

function mphToKmph(mph) {

    console.log("MPH value entered: ", mph);
    return 1.61 * mph;

}

let speedLimit = mphToKmph(65);
console.log("Speed limit in KM/h: ", speedLimit); 
    
    let mphToKmphArrow = mph => {

        console.log("MPH value entered: ", mph);
    return 1.61 * mph;
}
speedLimit = mphToKmphArrow(65);
console.log("Speed limit in Km/h (arrow): ", speedLimit);

let mphToKmphImplicit = mph => 1.61 * mph;

speedLimit = mphToKmphImplicit(65);
console.log("Speed limit in Km/h (implicit return): ", speedLimit);

let triangleArea = (base, height) => 0.5 * base * height;
console.log("Area of a triangle with base of 5 and height of 4: ",triangleArea(5,4));


let functionCopy = triangleArea;
console.log("Area of a triangle with base of 8 and height of 14: ", functionCopy(8, 14));