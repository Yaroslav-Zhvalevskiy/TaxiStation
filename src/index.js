const prompt = require('prompt-promise');
let Car = require('./vehicles/passengerCar');
let Truck = require('./vehicles/truck');
let TaxiStation = require('./taxiStation/taxiStation');

let taxiStation = new TaxiStation(true);
let cars = [
    new Car('VW', 30000, 6),
    new Car('Audi', 12000, 3),
    new Car('Renault', 30000, 4),
    new Car('BMW', 30000, 4),
    new Car('Opel', 30000, 4),
];

let trucks = [
    new Truck('Man', 50000, 17),
    new Truck('Renault', 40000, 15),
    new Truck('Daf', 90000, 14),
    new Truck('Scania', 70000, 18),
    new Truck('Mercedes Benz', 100000, 22),
];

taxiStation.addCarsPool(cars);
taxiStation.addTrucksPool(trucks);

(async () => {
    const passengers = parseInt(await prompt('Enter number of passengers: '));
    const trip = parseInt(await prompt('Enter distance of your trip: '));
    const car = taxiStation.passengersFilter(passengers);
    car.addTrip(trip);
    console.log(car.toString());
    prompt.finish();
})();