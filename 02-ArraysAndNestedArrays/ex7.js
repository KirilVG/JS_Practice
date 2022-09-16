function Solve(arr) {
  let ascarr = arr.sort((a, b) => a - b).map((x) => x);
  let desarr = arr.sort((a, b) => b - a).map((x) => x);

  let res = [];
  let takefromFirstArr = true;

  for (let i = 0; i < arr.length; i++) {
    if (takefromFirstArr) {
      res.push(ascarr[Math.floor(i / 2)]);
      takefromFirstArr = false;
    } else {
      res.push(desarr[Math.floor(i / 2)]);
      takefromFirstArr = true;
    }
  }

  return res;
}

Solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
