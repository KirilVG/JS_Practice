function toggle() {
  let button = document.getElementsByClassName("button")[0];
  
  let hidencontent = document.getElementById("extra");

  if (button.textContent == "More") {
    button.textContent = "Less";

    hidencontent.style.display = "block";
  } else {
    button.textContent = "More";

    hidencontent.style.display = "none";
  }
}
