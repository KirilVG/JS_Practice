window.addEventListener("load", solve);

function solve() {
  let totalprofit = 0;

  let profitElement = document.getElementById("profit");

  let makeImput = document.getElementById("make");

  let modelInput = document.getElementById("model");

  let yearInput = document.getElementById("year");

  let fuelselect = document.getElementById("fuel");

  let original_cost = document.getElementById("original-cost");

  let seling_price = document.getElementById("selling-price");

  let entriesTable = document.getElementById("table-body");

  let soldCarsList = document.getElementById("cars-list");

  let submiBtn = document.getElementById("publish");

  submiBtn.type = "button";

  submiBtn.addEventListener("click", Publish);

  function Publish() {
    let makeVal = makeImput.value;

    makeImput.value = "";

    let modelVal = modelInput.value;

    modelInput.value = "";

    let yearVal = yearInput.value;

    yearInput.value = "";

    let fuelVal = fuelselect.value;

    fuelselect.value = "petrol";

    let orgCostVal = original_cost.value;

    original_cost.value = "";

    let selCostVal = seling_price.value;

    seling_price.value = "";

    let entry = document.createElement("tr");

    entry.className = "row";

    if (
      makeVal &&
      modelVal &&
      yearVal &&
      fuelVal &&
      orgCostVal &&
      selCostVal &&
      Number(orgCostVal) <= Number(selCostVal)
    ) {
      let entry = document.createElement("tr");

      entry.className = "row";

      let makeRecord = document.createElement("td");

      makeRecord.textContent = makeVal;

      entry.appendChild(makeRecord);

      let modelRecord = document.createElement("td");

      modelRecord.textContent = modelVal;

      entry.appendChild(modelRecord);

      let yearRecord = document.createElement("td");

      yearRecord.textContent = yearVal;

      entry.appendChild(yearRecord);

      let fuelRecord = document.createElement("td");

      fuelRecord.textContent = fuelVal;

      entry.appendChild(fuelRecord);

      let orgPrRecord = document.createElement("td");

      orgPrRecord.textContent = orgCostVal;

      entry.appendChild(orgPrRecord);

      let selPrRecord = document.createElement("td");

      selPrRecord.textContent = selCostVal;

      entry.appendChild(selPrRecord);

      let buttonBox = document.createElement("td");

      let editBtn = document.createElement("button");

      editBtn.className = "action-btn edit";

      editBtn.textContent = "Edit";

      editBtn.addEventListener("click", EditEvent);

      buttonBox.appendChild(editBtn);

      let sellBtn = document.createElement("button");

      sellBtn.className = "action-btn sell";

      sellBtn.textContent = "Sell";

      sellBtn.addEventListener("click", SellEvent);

      buttonBox.appendChild(sellBtn);

      entry.appendChild(buttonBox);

      entriesTable.appendChild(entry);
    }
  }

  function EditEvent(e) {
    let entry = e.target.parentNode.parentNode;

    let entryRecords = entry.children;

    makeImput.value = entryRecords[0].textContent;
    modelInput.value = entryRecords[1].textContent;
    yearInput.value = entryRecords[2].textContent;
    fuelselect.value = entryRecords[3].textContent;
    original_cost.value = entryRecords[4].textContent;
    seling_price.value = entryRecords[5].textContent;

    entry.remove();
  }

  function SellEvent(e) {
    let entry = e.target.parentNode.parentNode;

    let entryRecords = entry.children;

    let item1 = `${entryRecords[0].textContent} ${entryRecords[1].textContent}`;

    let item2 = entryRecords[2].textContent;

    let item3 =
      Number(entryRecords[5].textContent) - Number(entryRecords[4].textContent);

    totalprofit += item3;

    let newListEntry = makeLiRecord(item1, item2, item3);

    soldCarsList.appendChild(newListEntry);

    profitElement.textContent = totalprofit.toFixed(2);

    entry.remove();
  }

  function makeLiRecord(...args) {
    let newListEl = document.createElement("li");

    newListEl.className = "each-list";

    for (let i = 0; i < args.length; i++) {
      let spanEl = document.createElement("span");

      spanEl.textContent = args[i];

      newListEl.appendChild(spanEl);
    }

    return newListEl;
  }
}
