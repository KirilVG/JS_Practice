function solve() {
  let output = document.getElementById("output");

  let text = document.getElementById("input").value;

  let sentences = text
    .split(".")
    .filter((x) => /[a-zA-Z]/.test(x))
    .map((x) => x + ".");

  let paragraphs = [];

  for (let i = 0; i < sentences.length; i += 3) {
    let amount = Math.min(3, sentences.length - i);

    let res = sentences.slice(i, i + amount);

    paragraphs.push(res);
  }

  let outputText = "";

  for (let i = 0; i < paragraphs.length; i++) {
    let ptext = paragraphs[i].join("");

    let pel = `<p>${ptext}</p>`;

    outputText += pel;
  }

  output.innerHTML = outputText;
}
