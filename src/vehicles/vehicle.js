class Vehicle {
    constructor(carBrand, mileage) {
        this.carBrand = carBrand;
        this.mileage = mileage;
    }

    addTrip(mileage) {
        this.mileage = this.mileage + mileage;
    }

    toString() {
        return `The car '${this.carBrand}' has mileage '${this.mileage}`;
    }
}

module.exports = Vehicle;