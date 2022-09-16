function solve(arr) {
  let heroArray = [];

  arr.forEach((element) => {
    tokens = element.split(" / ");

    let hero = {};

    hero["name"] = tokens[0];

    hero["level"] = Number(tokens[1]);

    hero["items"] = tokens[2] ? tokens[2].split(", ") : [];

    heroArray.push(hero);
  });

  console.log(JSON.stringify(heroArray));
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
