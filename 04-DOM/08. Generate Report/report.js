function generateReport() {
  let imputList = document.querySelectorAll("input[type=checkbox]");

  let records = document.getElementsByTagName("tbody")[0].children;

  let outputel = document.getElementById("output");

  let res = [];

  for (let i = 0; i < records.length; i++) {
    let person = {};

    res.push(person);
  }

  for (let i = 0; i < imputList.length; i++) {
    if (imputList[i].checked == true) {
      for (let j = 0; j < records.length; j++) {
        res[j][imputList[i]["name"]] = records[j].children[i].innerHTML;
      }
    }
  }

  let output = JSON.stringify(res);

  outputel.textContent = output;
}
