function Solve(arr) {
  let res = [];

  res.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i] < res[res.length - 1])) {
      res.push(arr[i]);
    }
  }
  
  return res;
}

Solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
