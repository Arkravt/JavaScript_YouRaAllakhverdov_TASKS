'use strict'

const Car = function (name, speed) {
    this.name = name;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 5;
    console.log(`${this.name}: ${this.speed}`);
};

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.name}: ${this.speed}`);
};


const toyota = new Car('Toyota', 150);
const bmw = new Car('bmw', 200);

toyota.accelerate();
toyota.break();
toyota.break();
bmw.accelerate();
bmw.break();
bmw.break();
console.log(bmw);