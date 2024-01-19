'use strict'

class Car {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 5;
        console.log(`${this.name}: ${this.speed}`);
    };

    break() {
        this.speed -= 5;
        console.log(`${this.name}: ${this.speed}`);
    };

    get speedMph() {
        return this.speed / 1.6;
    }

    set speedMph(speed) {
        this.speed = speed * 1.6;
    }
}

const toyota = new Car('Toyota', 150);
const bmw = new Car('bmw', 200);


toyota.accelerate();
toyota.accelerate();
toyota.break();
console.log(toyota.speedMph);
toyota.speedMph = 30;
console.log(toyota.speed);
