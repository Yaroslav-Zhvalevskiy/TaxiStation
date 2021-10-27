class TaxiStation {
    constructor() {
        this.passengerCarsPool = [];
        this.trucksPool = [];
     }

    passengersFilter(passengers) {
        return this.passengerCarsPool.find((car) => car.getPassengers() >= passengers);
    }
}

module.exports = TaxiStation;