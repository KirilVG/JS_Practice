function Solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "add":
        res.push(i + 1);
        break;
      case "remove":
        res.pop();
        break;
    }
  }
  
  if (res.length == 0) {
    console.log("Empty");
  } else {
    let resstr = res.join(" ");
    console.log(resstr);
  }
}

Solve(["remove", "remove", "remove"]);
