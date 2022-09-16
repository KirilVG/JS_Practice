function Solve(arr) {
  let matr = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let playerXturn = true;

  for (let i = 0; i < arr.length; i++) {

    let pos = arr[i].split(" ");
    let x = Number(pos[0]);
    let y = Number(pos[1]);

    if (matr[x][y] == false) {
      if (playerXturn) {
        matr[x][y] = "X";
        playerXturn = false;
      } else {
        matr[x][y] = "O";
        playerXturn = true;
      }
    } else {
      console.log("This place is already taken. Please choose another!");
    }

    function printFunction(matrix) {
      for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
      }
    }

    for (let i = 0; i < matr.length; i++) {
      let sign = matr[i][0];
      let samesign = true;
      for (let j = 0; j < matr.length; j++) {
        if (matr[i][j] != sign) samesign = false;
      }
      if (samesign && sign != false) {
        console.log(`Player ${sign} wins!`);
        printFunction(matr);
        return;
      }
    }

    for (let i = 0; i < matr.length; i++) {
      let sign = matr[i][0];
      let samesign = true;
      for (let j = 0; j < matr.length; j++) {
        if (matr[j][i] != sign) samesign = false;
      }
      if (samesign && sign != false) {
        console.log(`Player ${sign} wins!`);
        printFunction(matr);
        return;
      }
    }

    let sign = matr[0][0];

    let samesign = true;
    
    for (let i = 0; i < matr.length; i++) {
      if (matr[i][i] != sign) samesign = false;
    }
    if (samesign && sign != false) {
      console.log(`Player ${sign} wins!`);
      printFunction(matr);
      return;
    }

    sign = matr[matr.length - 1][0];

    samesign = true;

    for (let i = 0; i < matr.length; i++) {
      if (matr[matr.length - 1 - i][i] != sign) samesign = false;
    }
    if (samesign && sign != false) {
      console.log(`Player ${sign} wins!`);
      printFunction(matr);
      return;
    }

    let containsemptyspace = false;

    for (let i = 0; i < matr.length; i++) {
      for (let j = 0; j < matr.length; j++) {
        if (matr[i][j] == false) containsemptyspace = true;
      }
    }

    if (!containsemptyspace) {
      console.log("The game ended! Nobody wins :(");
      printFunction(matr);
      return;
    }
  }
}

Solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
