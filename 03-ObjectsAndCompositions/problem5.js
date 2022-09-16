function solve(array) {
  let res = [];

  function elementIsListed(arr, name) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]["name"] == name) return i;
    }

    return -1;
  }

  array.forEach((element) => {
    let [town, product, price] = element.split(" | ");

    price = Number(price);

    let ind = elementIsListed(res, product);

    if (ind == -1) {
      let newel = {};

      newel["name"] = product;

      newel["town"] = town;

      newel["price"] = price;

      res.push(newel);
    } else if (price < res[ind]["price"]) {
      res[ind]["town"] = town;

      res[ind]["price"] = price;
    }
  });

  res.forEach((element) => {
    console.log(
      `${element["name"]} -> ${element["price"]} (${element["town"]})`
    );
  });
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
