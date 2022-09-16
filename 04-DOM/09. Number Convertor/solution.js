function solve() {
  let selection = document.getElementById("selectMenuTo");

  let buttonEl = document.getElementsByTagName("button")[0];

  let inputEl = document.getElementById("input");

  let outputEl = document.getElementById("result");

  let hexadecimaloption = document.createElement("option");

  hexadecimaloption.value = "hexadecimal";

  hexadecimaloption.innerHTML = "Hexadecimal";

  let binaryoption = document.createElement("option");

  binaryoption.value = "binary";

  binaryoption.innerHTML = "Binary";

  selection.appendChild(hexadecimaloption);

  selection.appendChild(binaryoption);

  buttonEl.addEventListener("click", Convert);

  function Convert() {
    let inputnum = Number(inputEl.value);

    outputEl.value = inputnum;

    if (selection.value == "hexadecimal") {
      let res = fromDecimalToHexadecimal(inputnum);

      outputEl.value = res;
    } else if (selection.value == "binary") {
      let res = fromDecimalToBinary(inputnum);

      outputEl.value = res;
    }
  }

  function fromDecimalToBinary(num) {
    let output = "";

    if (num == 0) output = "0";
    else {
      while (num != 0) {
        output += num % 2;

        num = Math.floor(num / 2);
      }
    }

    return reverseString(output);
  }

  function fromDecimalToHexadecimal(num) {
    let output = "";

    if (num == 0) output = "0";
    else {
      while (num != 0) {
        let token = num % 16;

        if (token < 10) {
          output += token;
        } else {
          let letter = "A".charCodeAt(0);
          
          output += String.fromCharCode(letter + token - 10);
        }

        num = Math.floor(num / 16);
      }
    }

    return reverseString(output);
  }

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
}
