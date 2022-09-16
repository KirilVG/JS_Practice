function Solve(matrix) {
  let sum = matrix[0].reduce((a, b) => {
    return a + b;
  });

  for (let i = 1; i < matrix.length; i++) {
    if (
      matrix[i].reduce((a, b) => {
        return a + b;
      }) != sum
    ) {
      return false;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let colsum = 0;
    for (let j = 0; j < matrix.length; j++) {
      colsum += matrix[j][i];
    }
    if (sum != colsum) {
      return false;
    }
  }
  return true;
}
console.log(
  Solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);