const Vehicle = require('./vehicle');

class Truck extends Vehicle {
    constructor(carBrand, mileage, capacity) {
        super(carBrand, mileage);
        this.capacity = capacity;
    }

    getCapacity() {
        return this.capacity;
    }
}

module.exports = Truck;