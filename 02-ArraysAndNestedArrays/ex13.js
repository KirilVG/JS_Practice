function Solve(x, y) {
  let matr = [];

  for (let i = 0; i < x; i++) {
    let line = [];

    for (let j = 0; j < y; j++) {
      line.push(0);
    }

    matr.push(line);
  }

  function printFunction(Heigth, matrix) {
    for (let i = 0; i < Heigth; i++) {
      console.log(matrix[i].join(" "));
    }
  }

  let steps = Math.round(Math.min(x, y));

  let currentNum = 1;

  for (let i = 0; i < steps; i++) {
    for (let j = 0 + i; j < y - i; j++) {
      if (matr[i][j] == 0) {
        matr[i][j] = currentNum;
        currentNum++;
      }
    }
    for (let j = 0 + 1 + i; j < x - i; j++) {
      if (matr[j][x - 1 - i] == 0) {
        matr[j][x - 1 - i] = currentNum;
        currentNum++;
      }
    }
    for (let j = y - 1 - i; j >= 0 + i; j--) {
      if (matr[x - 1 - i][j] == 0) {
        matr[x - 1 - i][j] = currentNum;
        currentNum++;
      }
    }
    for (let j = x - 1 - i; j > 0 + i; j--) {
      if (matr[j][i] == 0) {
        matr[j][i] = currentNum;
        currentNum++;
      }
    }
  }

  printFunction(x, matr);
}

Solve(3, 3);
