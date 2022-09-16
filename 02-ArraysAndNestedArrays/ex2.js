function Solve(arr, step) {
  let res = [];

  for (let i = 0; i < arr.length; i += step) {
    res.push(arr[i]);
  }
  
  return res;
}

Solve(["One", "Two", "Three", "Four", "Five"], 2);
