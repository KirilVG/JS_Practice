function solve(arr) {
  let res = [];

  for (let i = 1; i < arr.length; i++) {
    let tokens = arr[i]
      .split(" | ")
      .join(",")
      .split("| ")
      .join(",")
      .split(" |")
      .join(",")
      .split(",");

    let item = {
      Town: tokens[1],
      Latitude: Number(Number(tokens[2]).toFixed(2)),
      Longitude: Number(Number(tokens[3]).toFixed(2)),
    };
    
    res.push(item);
  }

  console.log(JSON.stringify(res));
}

solve([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
