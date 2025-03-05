class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayCarInfo() {
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed}, isTrunkOpen: ${this.isTrunkOpen}`
    );
  }

  go() {
    this.speed += 5;
  }

  brake() {
    this.speed -= 5;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

const car1 = new Car({ brand: "Toyota", model: "Corolla" });
const car2 = new Car({ brand: "Tesla", model: "Model 3" });

car1.openTrunk();
if (car1.isTrunkOpen) {
  car1.displayCarInfo();
} else if (!car1.isTrunkOpen) {
  car1.go();
  car1.displayCarInfo();
}

car2.go();
car2.go();
car2.brake();
car2.displayCarInfo();

class RaceCar extends Car {
  acceleration = 300;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  /*
  displayCarInfo() {
    console.log(
      `${this.brand} ${this.model}, speed: ${this.speed}, isTrunkOpen: ${this.isTrunkOpen}`
    );
  }
  */

  go() {
    this.speed += 5;
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log("Race cars do not have a trunk");
  }

  closeTrunk() {
    console.log("Race cars do not have a trunk");
  }
}
const raceCar1 = new RaceCar({
  brand: "Ferrari",
  model: "F1",
  acceleration: 300,
});

raceCar1.go();
raceCar1.displayCarInfo();
raceCar1.openTrunk();

const raceCar2 = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

raceCar2.go();
raceCar2.displayCarInfo();
raceCar2.closeTrunk()
