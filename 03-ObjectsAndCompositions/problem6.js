function solve(arr) {
  let res = [];

  arr.forEach((element) => {
    let [name, price] = element.split(" : ");

    price = Number(price);

    let item = { name: name, price: price };

    res.push(item);
  });

  res.sort((a, b) => (a["name"] > b["name"] ? 1 : -1));

  for (let i = 0; i < res.length; i++) {
    if (i == 0 || res[i]["name"][0] != res[i - 1]["name"][0]) {
      console.log(res[i]["name"][0]);
    }
    
    console.log(`${res[i]["name"]}: ${res[i]["price"]}`);
  }
}

solve([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);