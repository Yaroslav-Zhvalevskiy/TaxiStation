const Vehicle = require('./vehicle');

class PassengerCar extends Vehicle {
    constructor(carBrand, mileage, passengers) {
        super(carBrand, mileage);
        this.passengers = passengers;
    }

    getPassengers() {
        return this.passengers;
    }
}

module.exports = PassengerCar;