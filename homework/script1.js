const cars = [
  { model: "Toyota", speed: 100 },
  { model: "BMW", speed: 150 },
  { model: "Lada", speed: 80 },
  { model: "Audi", speed: 130 },
  { model: "Mercedes-Benz", speed: 260 },
];

const safeCars = [];
const speedingCars = [];

for (const car of cars) {
  if (car.speed > 120) {
    speedingCars.push(car);
  } else {
    safeCars.push(car);
  }
}
