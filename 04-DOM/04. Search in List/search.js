function search() {
  let searchtext = document.getElementById("searchText").value;

  let items = document.getElementById("towns").children;

  let numberofmatches = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.includes(searchtext)) {
      items[i].style.fontWeight = "bold";

      numberofmatches++;
    } else {
      items[i].style.fontWeight = "normal";
    }
  }

  document.getElementById(
    "result"
  ).textContent = `${numberofmatches} matches found`;
}
