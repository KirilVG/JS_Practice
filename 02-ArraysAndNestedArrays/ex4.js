function Solve(arr, rotationsCount) {
  for (let i = 0; i < rotationsCount; i++) {
    arr.splice(0, 0, arr.pop());
  }

  let res = "";
  res += arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    res += " ";
    res += arr[i];
  }
  console.log(res);
}

Solve(["Banana", "Orange", "Coconut", "Apple"], 15);
