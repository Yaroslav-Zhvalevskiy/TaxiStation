const TaxiStation = require('./taxiStation');

class TaxiStationBuilder {
    constructor() {
        this.taxiStation = new TaxiStation();
    }

    addPassangerCar(car) {
        this.taxiStation.passengerCarsPool.push(car);
        return this;
    }

    addTruck(truck) {
        this.taxiStation.trucksPool.push(truck);
        return this;
    }

    addCarsPool(cars) {
        this.taxiStation.passengerCarsPool = [...this.passengerCarsPool, ...cars];
        return this;
    }

    addTrucksPool(trucks) {
        this.taxiStation.trucksPool = [...this.trucksPool, ...trucks];
        return this;
    }

    build() {
        return this.taxiStation;
    }
}

module.exports = TaxiStationBuilder;