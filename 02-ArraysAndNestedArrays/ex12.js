function Solve(arr) {
  let Width = arr[0];
  let Heigth = arr[1];
  let x = arr[2];
  let y = arr[3];
  let matrix = [];

  for (let i = 0; i < Heigth; i++) {
    let line = [];
    for (let j = 0; j < Width; j++) {
      line.push(0);
    }
    matrix.push(line);
  }

  function MatrixIsFilled(Width, Heigth, matrix) {
    for (let i = 0; i < Heigth; i++) {
      for (let j = 0; j < Width; j++) {
        if (matrix[i][j] == 0) {
          return false;
        }
      }
    }
    return true;
  }

  function printFunction(Width, Heigth, matrix) {
    for (let i = 0; i < Heigth; i++) {
      console.log(matrix[i].join(" "));
    }
  }

  let orbitoffset = 0;

  while (!MatrixIsFilled(Width, Heigth, matrix)) {
    for (
      let i = Math.max(0, x - orbitoffset);
      i <= Math.min(Heigth - 1, x + orbitoffset);
      i++
    ) {
      for (
        let j = Math.max(0, y - orbitoffset);
        j <= Math.min(Width - 1, y + orbitoffset);
        j++
      ) {
        if (matrix[i][j] == 0) matrix[i][j] = orbitoffset + 1;
      }
    }
    
    orbitoffset++;
  }

  printFunction(Width, Heigth, matrix);
}

Solve([4, 4, 0, 0]);
