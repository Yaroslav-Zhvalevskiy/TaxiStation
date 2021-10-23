class TaxiStation {
    constructor(needTrucks = false) {
        this.passengerCarsPool = [];
        if (needTrucks) {
            this.trucksPool = [];
        }
    }

    addCarsPool(cars) {
        this.passengerCarsPool = [...this.passengerCarsPool, ...cars];
    }

    addTrucksPool(trucks) {
        if (this.trucksPool) {
            this.trucksPool = [...this.trucksPool, ...trucks];
        } else {
            console.log('No trucks needed');
        }
    }

    passengersFilter(passengers) {
        return this.passengerCarsPool.find((car) => car.getPassengers() >= passengers);
    }
}

module.exports = TaxiStation;