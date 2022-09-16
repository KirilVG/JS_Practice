function solve(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);

    if (Number.isInteger(num)) {
      res.push(num);
    } else {
      if (res.length < 2) {
        console.log("Error: not enough operands!");
        
        return;
      }

      let secondop = res.pop();
      let firstop = res.pop();

      let newop;

      switch (arr[i]) {
        case "+":
          newop = firstop + secondop;
          break;

        case "-":
          newop = firstop - secondop;
          break;

        case "*":
          newop = firstop * secondop;
          break;

        case "/":
          newop = firstop / secondop;
          break;
      }

      res.push(newop);
    }
  }

  if (res.length > 1) {
    console.log("Error: too many operands!");
  } else {
    console.log(res[0]);
  }
}

solve([15, "/"]);
