class Car {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
}

class Kuaiche extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 1;
  }
}

class Zhuanche extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 2;
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }

  start() {
    console.log(`行程开始，车辆类型: ${this.car.name}，车牌号: ${this.car.number}`);
  }

  end() {
    console.log(`行程结束，价格: ${this.car.price * 5}元`);
  }
}

let carType = new Kuaiche('100', '红旗');
let trip = new Trip(carType);
trip.start();
trip.end();
