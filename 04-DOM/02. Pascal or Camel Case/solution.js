function solve() {
  let text = document.getElementById("text").value;

  let convention = document.getElementById("naming-convention").value;

  let res;

  let arr = text.split(" ");

  arr = arr.map((x) => x.toLowerCase());

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  switch (convention) {
    case "Camel Case":
      arr[0] = arr[0].toLowerCase();
      res = arr.join("");
      break;
    case "Pascal Case":
      res = arr.join("");
      break;
    default:
      res = "Error!";
  }
  
  document.getElementById("result").textContent = res;
}
