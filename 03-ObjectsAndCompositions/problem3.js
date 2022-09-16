function solve(car) {
  let carriage = {};

  carriage["type"] = car["carriage"];

  carriage["color"] = car["color"];

  car["carriage"] = carriage;

  let power = car["power"];
  
  let volume;

  if (power <= 90) {
    volume = 1800;
    power = 90;
  } else if (power <= 120) {
    volume = 2400;
    power = 120;
  } else if (power <= 200) {
    volume = 3500;
    power = 200;
  }

  let engine = {};

  engine["power"] = power;

  engine["volume"] = volume;

  car["engine"] = engine;

  let wheelS = car["wheelsize"];

  if (wheelS % 2 == 0) wheelS--;

  car["wheels"] = [wheelS, wheelS, wheelS, wheelS];

  delete car["color"];
  delete car["power"];
  delete car["wheelsize"];

  console.log(car);

  return car;
}

solve({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
