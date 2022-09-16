function Solve(matrix) {
  let arr = [];
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    let numbers = matrix[i].split(" ");

    sum1 += Number(numbers[i]);

    if (!arr.includes(Number(numbers[i]))) arr.push(Number(numbers[i]));

    sum2 += Number(numbers[matrix.length - 1 - i]);

    if (!arr.includes(Number(numbers[matrix.length - 1 - i])))
      arr.push(Number(numbers[matrix.length - 1 - i]));
  }

  if (sum1 == sum2) {
    for (let i = 0; i < matrix.length; i++) {
      let numbers = matrix[i].split(" ");

      for (let j = 0; j < matrix.length; j++) {
        if (i != j && j != matrix.length - 1 - i) numbers[j] = sum1;
      }
      
      matrix[i] = numbers.join(" ");
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
}

Solve(["1 1 1", "1 1 1", "1 1 0"]);
