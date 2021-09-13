"use strict";

class Vehicle{
    constructor(make, model, price){
        this.make = make;
        this.model = model;
        this.price = price;
    }
}
let myCar = new Vehicle("Volkswagen", "GTI", 29000);

let yourCar = JSON.parse(JSON.stringify(myCar));
let herCar = {...myCar};
let hisCar = Object.create(myCar);

console.log("Is myCar a Vehicle? ",myCar instanceof Vehicle);