function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchtext = document.getElementById("searchField").value;
    
    let rows = document
      .getElementsByClassName("container")[0]
      .getElementsByTagName("tbody")[0].children;

    for (let i = 0; i < rows.length; i++) {
      let iscontained = false;

      let arguments = Array.from(rows[i].getElementsByTagName("td")).map(
        (x) => x.innerHTML
      );

      for (let j = 0; j < arguments.length; j++) {
        if (arguments[j].includes(searchtext)) {
          iscontained = true;
          break;
        }
      }

      if (iscontained) {
        rows[i].classList.add("select");
      } else {
        rows[i].classList.remove("select");
      }
    }
  }
}
